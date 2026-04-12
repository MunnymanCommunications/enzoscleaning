import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Eye, Package, Activity, Clock, ArrowLeft, RefreshCw } from "lucide-react";

const ADMIN_PASSWORD = "ENZOSADMIN2025";

interface Visitor {
  id: string;
  name: string;
  company_name: string;
  email: string;
  phone: string;
  ip_address: string | null;
  created_at: string;
  last_visit_at: string;
}

interface PageView {
  id: string;
  visitor_id: string;
  page_path: string;
  section_viewed: string | null;
  entered_at: string;
  duration_seconds: number | null;
}

interface ProductView {
  id: string;
  visitor_id: string;
  product_name: string;
  product_sku: string | null;
  category: string | null;
  viewed_at: string;
}

interface TridentEvent {
  id: string;
  visitor_id: string;
  event_type: string;
  event_data: Record<string, unknown> | null;
  created_at: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleString();
}

function formatDuration(seconds: number | null) {
  if (!seconds) return "—";
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
}

export default function TridentAdmin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [productViews, setProductViews] = useState<ProductView[]>([]);
  const [events, setEvents] = useState<TridentEvent[]>([]);
  const [selectedVisitor, setSelectedVisitor] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect admin password");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const [vRes, pvRes, prodRes, evRes] = await Promise.all([
      supabase.from("trident_visitors").select("*").order("last_visit_at", { ascending: false }),
      supabase.from("trident_page_views").select("*").order("entered_at", { ascending: false }).limit(500),
      supabase.from("trident_product_views").select("*").order("viewed_at", { ascending: false }).limit(500),
      supabase.from("trident_events").select("*").order("created_at", { ascending: false }).limit(500),
    ]);

    if (vRes.data) setVisitors(vRes.data);
    if (pvRes.data) setPageViews(pvRes.data);
    if (prodRes.data) setProductViews(prodRes.data);
    if (evRes.data) setEvents(evRes.data as TridentEvent[]);
    setLoading(false);
  };

  useEffect(() => {
    if (authenticated) fetchData();
  }, [authenticated]);

  const filteredPageViews = selectedVisitor
    ? pageViews.filter((pv) => pv.visitor_id === selectedVisitor)
    : pageViews;

  const filteredProductViews = selectedVisitor
    ? productViews.filter((pv) => pv.visitor_id === selectedVisitor)
    : productViews;

  const filteredEvents = selectedVisitor
    ? events.filter((e) => e.visitor_id === selectedVisitor)
    : events;

  const selectedVisitorName = selectedVisitor
    ? visitors.find((v) => v.id === selectedVisitor)?.name || "Unknown"
    : null;

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center mb-6">Trident Admin Portal</h1>
          <form onSubmit={handleLogin} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
            <div className="space-y-2">
              <Label htmlFor="admin-pass">Admin Password</Label>
              <Input
                id="admin-pass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Trident Analytics</h1>
            <p className="text-muted-foreground">
              {selectedVisitorName ? (
                <span className="flex items-center gap-2">
                  <button onClick={() => setSelectedVisitor(null)} className="text-primary hover:underline flex items-center gap-1">
                    <ArrowLeft className="h-4 w-4" /> All Visitors
                  </button>
                  <span>/ {selectedVisitorName}</span>
                </span>
              ) : (
                `${visitors.length} total visitors`
              )}
            </p>
          </div>
          <Button variant="outline" onClick={fetchData} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{visitors.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{filteredPageViews.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Product Views</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{filteredProductViews.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Events</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{filteredEvents.length}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="visitors">
          <TabsList className="mb-4">
            <TabsTrigger value="visitors">Visitors</TabsTrigger>
            <TabsTrigger value="pageviews">Page Views</TabsTrigger>
            <TabsTrigger value="products">Product Views</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="visitors">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>IP Address</TableHead>
                        <TableHead>First Visit</TableHead>
                        <TableHead>Last Visit</TableHead>
                        <TableHead>Page Views</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {visitors.map((v) => {
                        const vPageViews = pageViews.filter((pv) => pv.visitor_id === v.id);
                        const totalTime = vPageViews.reduce((acc, pv) => acc + (pv.duration_seconds || 0), 0);
                        return (
                          <TableRow key={v.id} className="cursor-pointer hover:bg-muted/50" onClick={() => setSelectedVisitor(v.id)}>
                            <TableCell className="font-medium">{v.name}</TableCell>
                            <TableCell>{v.company_name}</TableCell>
                            <TableCell>{v.email}</TableCell>
                            <TableCell>{v.phone}</TableCell>
                            <TableCell className="font-mono text-xs">{v.ip_address || "—"}</TableCell>
                            <TableCell className="text-xs">{formatDate(v.created_at)}</TableCell>
                            <TableCell className="text-xs">{formatDate(v.last_visit_at)}</TableCell>
                            <TableCell>
                              <span className="flex items-center gap-1">
                                {vPageViews.length}
                                <Clock className="h-3 w-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{formatDuration(totalTime)}</span>
                              </span>
                            </TableCell>
                            <TableCell>
                              <Button size="sm" variant="ghost" onClick={() => setSelectedVisitor(v.id)}>
                                View →
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                      {visitors.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                            No visitors yet
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pageviews">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Visitor</TableHead>
                        <TableHead>Page</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Duration</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPageViews.map((pv) => {
                        const visitor = visitors.find((v) => v.id === pv.visitor_id);
                        return (
                          <TableRow key={pv.id}>
                            <TableCell className="font-medium">{visitor?.name || "Unknown"}</TableCell>
                            <TableCell className="font-mono text-xs">{pv.page_path}</TableCell>
                            <TableCell className="text-xs">{formatDate(pv.entered_at)}</TableCell>
                            <TableCell>{formatDuration(pv.duration_seconds)}</TableCell>
                          </TableRow>
                        );
                      })}
                      {filteredPageViews.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                            No page views yet
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Visitor</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead>SKU</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Viewed At</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredProductViews.map((pv) => {
                        const visitor = visitors.find((v) => v.id === pv.visitor_id);
                        return (
                          <TableRow key={pv.id}>
                            <TableCell className="font-medium">{visitor?.name || "Unknown"}</TableCell>
                            <TableCell>{pv.product_name}</TableCell>
                            <TableCell className="font-mono text-xs">{pv.product_sku || "—"}</TableCell>
                            <TableCell>{pv.category || "—"}</TableCell>
                            <TableCell className="text-xs">{formatDate(pv.viewed_at)}</TableCell>
                          </TableRow>
                        );
                      })}
                      {filteredProductViews.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                            No product views yet
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Visitor</TableHead>
                        <TableHead>Event</TableHead>
                        <TableHead>Details</TableHead>
                        <TableHead>Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredEvents.map((ev) => {
                        const visitor = visitors.find((v) => v.id === ev.visitor_id);
                        return (
                          <TableRow key={ev.id}>
                            <TableCell className="font-medium">{visitor?.name || "Unknown"}</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                                {ev.event_type}
                              </span>
                            </TableCell>
                            <TableCell className="text-xs max-w-xs truncate">
                              {ev.event_data ? JSON.stringify(ev.event_data) : "—"}
                            </TableCell>
                            <TableCell className="text-xs">{formatDate(ev.created_at)}</TableCell>
                          </TableRow>
                        );
                      })}
                      {filteredEvents.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                            No events yet
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
