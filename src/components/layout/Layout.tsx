import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useSiteTracking } from "@/hooks/useSiteTracking";

export default function Layout() {
  useSiteTracking();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
