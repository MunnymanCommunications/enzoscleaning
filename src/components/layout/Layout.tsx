import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PartnersMarquee from "@/components/shared/PartnersMarquee";
import CouponPopup from "@/components/shared/CouponPopup";
import { useSiteTracking } from "@/hooks/useSiteTracking";

export default function Layout() {
  useSiteTracking();
  const { pathname } = useLocation();
  const hidePartners = pathname.startsWith("/shop");
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {!hidePartners && <PartnersMarquee />}
      <Footer />
      <CouponPopup />
    </div>
  );
}
