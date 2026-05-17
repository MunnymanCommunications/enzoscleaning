import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useTridentAuth } from "./TridentAuthContext";

export interface OrderItem {
  product_name: string;
  product_sku?: string;
  category?: string;
  quantity: number;
}

interface CartContextValue {
  items: OrderItem[];
  totalQty: number;
  add: (item: Omit<OrderItem, "quantity">, qty?: number) => void;
  setQty: (sku: string | undefined, name: string, qty: number) => void;
  remove: (sku: string | undefined, name: string) => void;
  clear: () => void;
  getQty: (sku: string | undefined, name: string) => number;
  submit: (notes: string) => Promise<{ ok: boolean; error?: string; order_id?: string }>;
}

const Ctx = createContext<CartContextValue | undefined>(undefined);

function keyOf(sku: string | undefined, name: string) {
  return `${sku || ""}::${name}`;
}

export function TridentCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<OrderItem[]>([]);
  const { session, trackEvent } = useTridentAuth();

  const add: CartContextValue["add"] = useCallback((item, qty = 1) => {
    setItems((prev) => {
      const k = keyOf(item.product_sku, item.product_name);
      const idx = prev.findIndex((p) => keyOf(p.product_sku, p.product_name) === k);
      if (idx === -1) return [...prev, { ...item, quantity: Math.max(1, qty) }];
      const copy = [...prev];
      copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + qty };
      return copy;
    });
    trackEvent("order_item_added", { product_name: item.product_name, product_sku: item.product_sku, category: item.category, qty });
  }, [trackEvent]);

  const setQty: CartContextValue["setQty"] = useCallback((sku, name, qty) => {
    setItems((prev) => {
      const k = keyOf(sku, name);
      if (qty <= 0) return prev.filter((p) => keyOf(p.product_sku, p.product_name) !== k);
      return prev.map((p) => (keyOf(p.product_sku, p.product_name) === k ? { ...p, quantity: qty } : p));
    });
  }, []);

  const remove: CartContextValue["remove"] = useCallback((sku, name) => {
    setItems((prev) => prev.filter((p) => keyOf(p.product_sku, p.product_name) !== keyOf(sku, name)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const getQty = useCallback((sku: string | undefined, name: string) => {
    const found = items.find((p) => keyOf(p.product_sku, p.product_name) === keyOf(sku, name));
    return found?.quantity || 0;
  }, [items]);

  const submit = useCallback(async (notes: string) => {
    if (!session) return { ok: false, error: "Not signed in" };
    if (items.length === 0) return { ok: false, error: "Cart is empty" };

    trackEvent("order_submit_attempt", { item_count: items.length, total_qty: items.reduce((s, i) => s + i.quantity, 0) });

    const { data, error } = await supabase.functions.invoke("submit-trident-order", {
      body: {
        items,
        notes,
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
        page_url: typeof window !== "undefined" ? window.location.href : "",
      },
    });

    if (error || !data?.ok) {
      trackEvent("order_submit_error", { error: error?.message || data?.error });
      return { ok: false, error: error?.message || data?.error || "Submission failed" };
    }
    trackEvent("order_submit_success", { order_id: data.order_id, total_qty: items.reduce((s, i) => s + i.quantity, 0) });
    setItems([]);
    return { ok: true, order_id: data.order_id };
  }, [items, session, trackEvent]);

  const totalQty = useMemo(() => items.reduce((s, i) => s + i.quantity, 0), [items]);

  return (
    <Ctx.Provider value={{ items, totalQty, add, setQty, remove, clear, getQty, submit }}>
      {children}
    </Ctx.Provider>
  );
}

export function useTridentCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useTridentCart must be used within TridentCartProvider");
  return v;
}
