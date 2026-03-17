import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import CleaningEquipment from "./pages/CleaningEquipment";
import Detergents from "./pages/Detergents";
import Disinfecting from "./pages/Disinfecting";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import HotsyPressureWashers from "./pages/HotsyPressureWashers";
import PlaceholderPage from "@/components/shared/PlaceholderPage";
import ReferralLanding from "./pages/ReferralLanding";
import ReferralForm from "./pages/ReferralForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />

            {/* Services */}
            <Route path="/services/" element={<Services />} />
            <Route path="/services/free-consultations/" element={<PlaceholderPage title="Free Consultations" subtitle="Let us visit your operation and provide insights and solutions to make your work easier." />} />
            <Route path="/services/pressure-washer-service-repair/" element={<PlaceholderPage title="Service & Repair" subtitle="Get your equipment back working correctly with our trained service and repair technicians." />} />
            <Route path="/services/scheduled-maintenance/" element={<PlaceholderPage title="Scheduled Maintenance" subtitle="Downtime is preventable with proper upkeep and maintenance." />} />

            {/* Cleaning Equipment */}
            <Route path="/cleaning-equipment/" element={<CleaningEquipment />} />
            <Route path="/cleaning-equipment/pressure-washers/" element={<PlaceholderPage title="Pressure Washers" />} />

            {/* Hotsy Pressure Washers */}
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/" element={<HotsyPressureWashers />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-electric-pump-fuel-oil-heat/" element={<PlaceholderPage title="Hotsy Electric Pump, Fuel Oil Heat" />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-gasoline-pump-fuel-oil-heat/" element={<PlaceholderPage title="Hotsy Gasoline Pump, Fuel Oil Heat" />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/natural-gas-hot-water/" element={<PlaceholderPage title="Hotsy Natural Gas Hot Water" />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/electric-cold-water/" element={<PlaceholderPage title="Hotsy Electric Cold Water" />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/gasoline-cold-water/" element={<PlaceholderPage title="Hotsy Gasoline Cold Water" />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/diesel-cold-water/" element={<PlaceholderPage title="Hotsy Diesel Cold Water" />} />

            {/* Mi-T-M */}
            <Route path="/cleaning-equipment/mi-t-m/" element={<PlaceholderPage title="Mi-T-M Pressure Washers" />} />
            <Route path="/cleaning-equipment/mi-t-m/electric-hot-water/" element={<PlaceholderPage title="Mi-T-M Electric Hot Water" />} />
            <Route path="/cleaning-equipment/mi-t-m/natural-gas-hot-water/" element={<PlaceholderPage title="Mi-T-M Natural Gas Hot Water" />} />
            <Route path="/cleaning-equipment/mi-t-m/gasoline-hot-water-portable/" element={<PlaceholderPage title="Mi-T-M Gasoline Hot Water Portable" />} />
            <Route path="/cleaning-equipment/mi-t-m/gasoline-hot-water-skid/" element={<PlaceholderPage title="Mi-T-M Gasoline Hot Water Skid" />} />
            <Route path="/cleaning-equipment/mi-t-m/electric-cold-water/" element={<PlaceholderPage title="Mi-T-M Electric Cold Water" />} />
            <Route path="/cleaning-equipment/mi-t-m/air-compressor-gas/" element={<PlaceholderPage title="Mi-T-M Gas Air Compressors" />} />
            <Route path="/cleaning-equipment/mi-t-m/air-compressor-electric/" element={<PlaceholderPage title="Mi-T-M Electric Air Compressors" />} />

            {/* Under Carriage */}
            <Route path="/cleaning-equipment/under-carriage-sprayers/" element={<PlaceholderPage title="Under Carriage Sprayers" />} />
            <Route path="/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" element={<PlaceholderPage title="The Neutralizer" subtitle="Fleet Preservation Undercarriage Wash System" />} />

            {/* Wash Bay */}
            <Route path="/cleaning-equipment/wash-bay-design/" element={<PlaceholderPage title="Wash Bay Design" />} />
            <Route path="/cleaning-equipment/wash-bay-design/tower-brushes/" element={<PlaceholderPage title="Tower Brushes" />} />

            {/* Accessories */}
            <Route path="/cleaning-equipment/pressure-washers-accessories/" element={<PlaceholderPage title="Pressure Washer Accessories" />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/surface-cleaners/" element={<PlaceholderPage title="Surface Cleaners" />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/trigger-guns-spray-guns/" element={<PlaceholderPage title="Trigger Guns & Spray Guns" />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/nozzles/" element={<PlaceholderPage title="Nozzles" />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/wands-lances/" element={<PlaceholderPage title="Wands & Lances" />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/wet-sand-blasting-kit/" element={<PlaceholderPage title="Wet Sand Blasting Kit" />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/scaltrol/" element={<PlaceholderPage title="Scaltrol" />} />

            {/* Floor Cleaning */}
            <Route path="/cleaning-equipment/floor-cleaning/" element={<PlaceholderPage title="Floor Cleaning" />} />
            <Route path="/cleaning-equipment/floor-cleaning/floor-sweepers/" element={<PlaceholderPage title="Floor Sweepers" />} />
            <Route path="/cleaning-equipment/floor-cleaning/floor-scrubbers/" element={<PlaceholderPage title="Floor Scrubbers" />} />
            <Route path="/cleaning-equipment/floor-cleaning/minuteman-floor-cleaners/" element={<PlaceholderPage title="Minuteman Floor Cleaners" />} />
            <Route path="/cleaning-equipment/floor-cleaning/karcher-floor-cleaners/" element={<PlaceholderPage title="Kärcher Floor Cleaners" />} />

            {/* Detergents */}
            <Route path="/detergents/" element={<Detergents />} />
            <Route path="/detergents/degreasers/" element={<PlaceholderPage title="Degreasers" />} />
            <Route path="/detergents/transportation-truck-bus-wash/" element={<PlaceholderPage title="Transportation / Truck & Bus Wash" />} />
            <Route path="/detergents/restoration-detergents/" element={<PlaceholderPage title="Restoration Detergents" />} />
            <Route path="/detergents/construction-equipment-cleaning/" element={<PlaceholderPage title="Construction Equipment Cleaning" />} />
            <Route path="/detergents/specialty-cleaning-products/" element={<PlaceholderPage title="Specialty Cleaning Products" />} />

            {/* Disinfecting */}
            <Route path="/disinfecting/" element={<Disinfecting />} />
            <Route path="/disinfecting/our-disinfectants-sanitizers/" element={<PlaceholderPage title="Disinfectants & Sanitizers" />} />
            <Route path="/disinfecting/our-disinfectant-sprayers/" element={<PlaceholderPage title="Disinfectant Sprayers" />} />
            <Route path="/disinfecting/vapore-dry-vapor-disinfecting/" element={<PlaceholderPage title="Vapore Dry Vapor Disinfecting" />} />
            <Route path="/disinfecting/disinfecting-best-practices/" element={<PlaceholderPage title="Disinfecting Best Practices" />} />

            {/* Touchless Drive Thru */}
            <Route path="/touchless-drive-thru/" element={<PlaceholderPage title="Automatic Drive-Through Wash System" subtitle="Our high-performance drive-through wash systems are completely automatic and deliver an unparalleled clean for your fleet." />} />

            {/* Industry Pages */}
            <Route path="/industries-we-serve/" element={<PlaceholderPage title="Industries We Serve" />} />
            <Route path="/construction-cleaning-equipment/" element={<PlaceholderPage title="Construction Cleaning Equipment" />} />
            <Route path="/agriculture-cleaning-equipment/" element={<PlaceholderPage title="Agriculture Cleaning Equipment" />} />
            <Route path="/transportation-and-fleet-management/" element={<PlaceholderPage title="Transportation & Fleet Management" />} />
            <Route path="/manufacturing/" element={<PlaceholderPage title="Manufacturing" />} />
            <Route path="/farming-equipment-cleaning/" element={<PlaceholderPage title="Farming Equipment Cleaning" />} />
            <Route path="/solutions-for-road-construction-excavating/" element={<PlaceholderPage title="Solutions for Road Construction & Excavating" />} />
            <Route path="/protect-your-fleet-from-corrosion-downtime/" element={<PlaceholderPage title="Protect Your Fleet from Corrosion & Downtime" />} />
            <Route path="/keep-plants-pavers-moving-remove-asphalt-not-time/" element={<PlaceholderPage title="Keep Plants & Pavers Moving – Remove Asphalt, Not Time" />} />

            {/* Healthcare / Hygiene */}
            <Route path="/hospital-clinical-hygiene-overview-protocols/" element={<PlaceholderPage title="Hospital & Clinical Hygiene Overview & Protocols" />} />
            <Route path="/our-hand-hygiene-systems/" element={<PlaceholderPage title="Our Hand Hygiene Systems" />} />
            <Route path="/implementation-in-hospitals/" element={<PlaceholderPage title="Implementation in Hospitals" />} />
            <Route path="/training-compliance-support/" element={<PlaceholderPage title="Training & Compliance Support" />} />

            {/* Wastewater */}
            <Route path="/wastewater-treatment-solutions/" element={<PlaceholderPage title="Wastewater Treatment Solutions" />} />

            {/* Special Equipment Pages */}
            <Route path="/heaters/" element={<PlaceholderPage title="Heaters" />} />
            <Route path="/single-dual-axle-trailer/" element={<PlaceholderPage title="Single & Dual Axle Trailers" />} />
            <Route path="/electric-hot-water/" element={<PlaceholderPage title="Electric Hot Water" />} />
            <Route path="/residential-consumer-coldwater/" element={<PlaceholderPage title="Residential Consumer Cold Water" />} />
            <Route path="/citymaster-1650-650multifunction-sweeper/" element={<PlaceholderPage title="Citymaster 1650/650 Multifunction Sweeper" />} />
            <Route path="/citymaster/" element={<PlaceholderPage title="Citymaster" />} />

            {/* Other Pages */}
            <Route path="/equipment-products/" element={<PlaceholderPage title="Equipment & Products" />} />
            <Route path="/faq/" element={<PlaceholderPage title="Frequently Asked Questions" />} />
            <Route path="/ota/" element={<PlaceholderPage title="OTA" />} />
            <Route path="/promotions/" element={<PlaceholderPage title="Promotions" />} />
            <Route path="/shop/" element={<PlaceholderPage title="Shop" />} />
            <Route path="/shop-now/" element={<PlaceholderPage title="Shop Now" />} />

            {/* About */}
            <Route path="/about-us/" element={<About />} />

            {/* Contact */}
            <Route path="/contact-us/" element={<ContactUs />} />

            {/* Referral Partner Pages */}
            <Route path="/hulabowl-ohiobrett/" element={<ReferralLanding partner="ohiobrett" />} />
            <Route path="/hulabowl-ohiobrett/ohiobrettform" element={<ReferralForm partner="ohiobrett" />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
