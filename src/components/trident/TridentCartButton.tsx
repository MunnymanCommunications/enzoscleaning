import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { ShoppingCart, Trash2, Plus, Minus, LogOut, CheckCircle2 } from "lucide-react";
import { useTridentCart } from "@/contexts/TridentCartContext";
import { useTridentAuth } from "@/contexts/TridentAuthContext";
import { toast } from "@/hooks/use-toast";

export default function TridentCartButton() {
  const { items, totalQty, setQty, remove, submit, clear } = useTridentCart();
  const { member, signOut } = useTridentAuth();
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async () => {
    setSubmitting(true);
    const res = await submit(notes);
    setSubmitting(false);
    if (!res.ok) {
      toast({ title: "Could not submit request", description: res.error, variant: "destructive" });
      return;
    }
    setSuccess(res.order_id || "submitted");
    setNotes("");
    toast({ title: "Request submitted", description: "Your Trident order request was sent to your Enzo's rep." });
  };

  return (
    <>
      {/* Member chip — top right */}
      <div className="fixed top-20 right-4 z-40 flex items-center gap-2">
        {member && (
          <div className="hidden sm:flex items-center gap-2 bg-card/95 backdrop-blur border border-border rounded-full px-3 py-1.5 shadow text-xs">
            <span className="font-semibold">{member.name}</span>
            <span className="text-muted-foreground">· {member.company_name}</span>
            <button onClick={signOut} className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
              <LogOut className="h-3 w-3" /> Sign out
            </button>
          </div>
        )}
      </div>

      <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setSuccess(null); }}>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 z-40 h-14 rounded-full shadow-lg pl-5 pr-6"
            size="lg"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Review request
            {totalQty > 0 && (
              <span className="ml-2 inline-flex items-center justify-center min-w-[1.5rem] h-6 rounded-full bg-primary-foreground text-primary text-xs font-bold px-1.5">
                {totalQty}
              </span>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Your Trident Order/Estimate Request</DialogTitle>
            <DialogDescription>
              Review the items, set quantities, then approve to send the request to your Enzo's rep.
            </DialogDescription>
          </DialogHeader>

          {success ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto" />
              <h3 className="text-lg font-semibold">Request submitted</h3>
              <p className="text-sm text-muted-foreground">Reference ID: <span className="font-mono">{success}</span></p>
              <p className="text-sm text-muted-foreground">An Enzo's representative will be in touch shortly.</p>
              <Button onClick={() => { setSuccess(null); setOpen(false); }}>Close</Button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">
              Your request is empty. Browse the catalog and use <strong>Add to request</strong> on any product.
            </div>
          ) : (
            <>
              <div className="space-y-2">
                {items.map((item) => {
                  const k = `${item.product_sku || ""}::${item.product_name}`;
                  return (
                    <div key={k} className="flex items-center gap-3 border border-border rounded-lg p-3">
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold truncate">{item.product_name}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.product_sku ? <span className="font-mono">{item.product_sku}</span> : null}
                          {item.category ? <span> · {item.category}</span> : null}
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1 rounded-lg border border-border px-1">
                        <button type="button" onClick={() => setQty(item.product_sku, item.product_name, item.quantity - 1)} className="p-1.5 hover:bg-muted rounded">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-[2ch] text-center text-sm font-semibold tabular-nums">{item.quantity}</span>
                        <button type="button" onClick={() => setQty(item.product_sku, item.product_name, item.quantity + 1)} className="p-1.5 hover:bg-muted rounded">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button type="button" onClick={() => remove(item.product_sku, item.product_name)} className="p-2 text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium">Additional notes (optional)</label>
                <Textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Project details, color preferences, delivery timing, etc."
                />
              </div>

              <DialogFooter className="gap-2 sm:gap-2">
                <Button variant="ghost" onClick={clear}>Clear all</Button>
                <Button onClick={handleSubmit} disabled={submitting}>
                  {submitting ? "Submitting..." : `Approve & submit (${totalQty} items)`}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
