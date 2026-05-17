import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, ShoppingCart, Check } from "lucide-react";
import { useTridentCart } from "@/contexts/TridentCartContext";

interface Props {
  productName: string;
  productSku?: string;
  category?: string;
}

export default function AddToRequestButton({ productName, productSku, category }: Props) {
  const { add, getQty, setQty } = useTridentCart();
  const current = getQty(productSku, productName);
  const [localQty, setLocalQty] = useState(1);

  if (current > 0) {
    return (
      <div className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/5 px-2 py-1">
        <button
          type="button"
          onClick={() => setQty(productSku, productName, current - 1)}
          aria-label="Decrease quantity"
          className="rounded-md p-1 hover:bg-primary/10 text-primary"
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="min-w-[2ch] text-center text-sm font-semibold text-primary tabular-nums">{current}</span>
        <button
          type="button"
          onClick={() => setQty(productSku, productName, current + 1)}
          aria-label="Increase quantity"
          className="rounded-md p-1 hover:bg-primary/10 text-primary"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
        <span className="ml-1 inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
          <Check className="h-3 w-3" /> In request
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2">
      <Input
        type="number" min={1} max={999}
        value={localQty}
        onChange={(e) => setLocalQty(Math.max(1, parseInt(e.target.value) || 1))}
        className="h-8 w-16 text-sm"
        aria-label="Quantity"
      />
      <Button
        type="button" size="sm" variant="default"
        onClick={() => add({ product_name: productName, product_sku: productSku, category }, localQty)}
        className="h-8"
      >
        <ShoppingCart className="h-3.5 w-3.5 mr-1.5" /> Add to request
      </Button>
    </div>
  );
}
