import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import FreeConsultations from "./pages/FreeConsultations";
import ServiceRepair from "./pages/ServiceRepair";
import ScheduledMaintenance from "./pages/ScheduledMaintenance";
import CleaningEquipment from "./pages/CleaningEquipment";
import PressureWashers from "./pages/PressureWashers";
import Detergents from "./pages/Detergents";
import Degreasers from "./pages/Degreasers";
import TransportationDetergents from "./pages/TransportationDetergents";
import ConstructionDetergents from "./pages/ConstructionDetergents";
import Disinfecting from "./pages/Disinfecting";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import HotsyPressureWashers from "./pages/HotsyPressureWashers";
import ReferralLanding from "./pages/ReferralLanding";
import ReferralForm from "./pages/ReferralForm";
import TheNeutralizer from "./pages/TheNeutralizer";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "@/components/shared/PlaceholderPage";

// New full-content pages
import HotsyElectricPumpFuelOilHeat from "./pages/HotsyElectricPumpFuelOilHeat";
import HotsyGasolinePumpFuelOilHeat from "./pages/HotsyGasolinePumpFuelOilHeat";
import HotsyNaturalGasHotWater from "./pages/HotsyNaturalGasHotWater";
import HotsyElectricColdWater from "./pages/HotsyElectricColdWater";
import HotsyGasolineColdWater from "./pages/HotsyGasolineColdWater";
import HotsyDieselHotWater from "./pages/HotsyDieselHotWater";
import MiTM from "./pages/MiTM";
import TouchlessDriveThru from "./pages/TouchlessDriveThru";
import WashBayDesign from "./pages/WashBayDesign";
import PressureWasherAccessories from "./pages/PressureWasherAccessories";
import FloorCleaning from "./pages/FloorCleaning";
import WastewaterTreatment from "./pages/WastewaterTreatment";
import DisinfectantsSanitizers from "./pages/DisinfectantsSanitizers";
import IndustriesWeServe from "./pages/IndustriesWeServe";

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
            <Route path="/services/free-consultations/" element={<FreeConsultations />} />
            <Route path="/services/pressure-washer-service-repair/" element={<ServiceRepair />} />
            <Route path="/services/scheduled-maintenance/" element={<ScheduledMaintenance />} />

            {/* Cleaning Equipment */}
            <Route path="/cleaning-equipment/" element={<CleaningEquipment />} />
            <Route path="/cleaning-equipment/pressure-washers/" element={<PressureWashers />} />

            {/* Hotsy */}
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/" element={<HotsyPressureWashers />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-electric-pump-fuel-oil-heat/" element={<HotsyElectricPumpFuelOilHeat />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-gasoline-pump-fuel-oil-heat/" element={<HotsyGasolinePumpFuelOilHeat />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/natural-gas-hot-water/" element={<HotsyNaturalGasHotWater />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/electric-cold-water/" element={<HotsyElectricColdWater />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/gasoline-cold-water/" element={<HotsyGasolineColdWater />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/diesel-cold-water/" element={<HotsyDieselHotWater />} />

            {/* Mi-T-M */}
            <Route path="/cleaning-equipment/mi-t-m/" element={<MiTM />} />
            <Route path="/cleaning-equipment/mi-t-m/electric-hot-water/" element={<PlaceholderPage title="Mi-T-M Electric Hot Water" subtitle="Powerful electric hot water pressure washers from Mi-T-M." />} />
            <Route path="/cleaning-equipment/mi-t-m/natural-gas-hot-water/" element={<PlaceholderPage title="Mi-T-M Natural Gas Hot Water" subtitle="Natural gas powered hot water cleaning from Mi-T-M." />} />
            <Route path="/cleaning-equipment/mi-t-m/gasoline-hot-water-portable/" element={<PlaceholderPage title="Mi-T-M Gasoline Hot Water Portable" subtitle="Portable gas-powered hot water cleaning solutions." />} />
            <Route path="/cleaning-equipment/mi-t-m/gasoline-hot-water-skid/" element={<PlaceholderPage title="Mi-T-M Gasoline Hot Water Skid" subtitle="Skid-mounted gas hot water machines for heavy-duty cleaning." />} />
            <Route path="/cleaning-equipment/mi-t-m/electric-cold-water/" element={<PlaceholderPage title="Mi-T-M Electric Cold Water" subtitle="Electric cold water pressure washers from Mi-T-M." />} />
            <Route path="/cleaning-equipment/mi-t-m/air-compressor-gas/" element={<PlaceholderPage title="Mi-T-M Gas Air Compressors" subtitle="Gas-powered air compressors for industrial applications." />} />
            <Route path="/cleaning-equipment/mi-t-m/air-compressor-electric/" element={<PlaceholderPage title="Mi-T-M Electric Air Compressors" subtitle="Electric air compressors for shop and facility use." />} />

            {/* Under Carriage & Wash Bay */}
            <Route path="/cleaning-equipment/under-carriage-sprayers/" element={<PlaceholderPage title="Under Carriage Sprayers" subtitle="Effective and efficient cleaning equipment for underneath your vehicles." />} />
            <Route path="/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" element={<TheNeutralizer />} />
            <Route path="/cleaning-equipment/wash-bay-design/" element={<WashBayDesign />} />
            <Route path="/cleaning-equipment/wash-bay-design/tower-brushes/" element={<PlaceholderPage title="Tower Brushes" subtitle="Full height cleaning for buses, tractor trailers and motorcoaches." />} />

            {/* Accessories */}
            <Route path="/cleaning-equipment/pressure-washers-accessories/" element={<PressureWasherAccessories />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/surface-cleaners/" element={<PlaceholderPage title="Surface Cleaners" subtitle="Blast away dirt from walkways, shop floors and other surfaces." />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/trigger-guns-spray-guns/" element={<PlaceholderPage title="Trigger Guns & Spray Guns" subtitle="Full range of trigger guns and spray guns for powerful performance." />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/nozzles/" element={<PlaceholderPage title="Nozzles" subtitle="Properly sized nozzles are critical to proper pressure washer operation." />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/wands-lances/" element={<PlaceholderPage title="Wands & Lances" subtitle="Several lines from Mecline, HPC, Suttner, General Pump and more." />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/wet-sand-blasting-kit/" element={<PlaceholderPage title="Wet Sand Blasting Kit" subtitle="Maximum cleaning power with dustless sandblasting capabilities." />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/scaltrol/" element={<PlaceholderPage title="Scaltrol" subtitle="Descaling filters designed for hot water pressure washers." />} />

            {/* Floor Cleaning */}
            <Route path="/cleaning-equipment/floor-cleaning/" element={<FloorCleaning />} />
            <Route path="/cleaning-equipment/floor-cleaning/floor-sweepers/" element={<PlaceholderPage title="Floor Sweepers" subtitle="Walk-behind and ride-on sweepers for every facility." />} />
            <Route path="/cleaning-equipment/floor-cleaning/floor-scrubbers/" element={<PlaceholderPage title="Floor Scrubbers" subtitle="Deep-clean hard floors with powerful scrubbing machines." />} />
            <Route path="/cleaning-equipment/floor-cleaning/minuteman-floor-cleaners/" element={<PlaceholderPage title="Minuteman Floor Cleaners" subtitle="Reliable Minuteman floor cleaning equipment." />} />
            <Route path="/cleaning-equipment/floor-cleaning/karcher-floor-cleaners/" element={<PlaceholderPage title="Kärcher Floor Cleaners" subtitle="Industry-leading Kärcher floor cleaning machines." />} />

            {/* Detergents */}
            <Route path="/detergents/" element={<Detergents />} />
            <Route path="/detergents/degreasers/" element={<Degreasers />} />
            <Route path="/detergents/transportation-truck-bus-wash/" element={<TransportationDetergents />} />
            <Route path="/detergents/construction-equipment-cleaning/" element={<ConstructionDetergents />} />
            <Route path="/detergents/restoration-detergents/" element={<PlaceholderPage title="Restoration Detergents" subtitle="Rejuvenate worn surfaces like brick, glass and concrete." />} />
            <Route path="/detergents/specialty-cleaning-products/" element={<PlaceholderPage title="Specialty Cleaning Products" subtitle="Special cleaning solutions for leather, fabric, wood, rubber and metals." />} />

            {/* Disinfecting */}
            <Route path="/disinfecting/" element={<Disinfecting />} />
            <Route path="/disinfecting/our-disinfectants-sanitizers/" element={<DisinfectantsSanitizers />} />
            <Route path="/disinfecting/our-disinfectant-sprayers/" element={<PlaceholderPage title="Disinfectant Sprayers" subtitle="Efficient sprayers for faster application and more coverage." />} />
            <Route path="/disinfecting/vapore-dry-vapor-disinfecting/" element={<PlaceholderPage title="Vapore Dry Vapor Disinfecting" subtitle="Clean, sanitize, and disinfect any surface with hot vapor." />} />
            <Route path="/disinfecting/disinfecting-best-practices/" element={<PlaceholderPage title="Disinfecting Best Practices" subtitle="Guidelines and recommendations for effective disinfection." />} />

            {/* Touchless Drive Thru */}
            <Route path="/touchless-drive-thru/" element={<TouchlessDriveThru />} />

            {/* Industry Pages */}
            <Route path="/industries-we-serve/" element={<IndustriesWeServe />} />
            <Route path="/construction-cleaning-equipment/" element={<PlaceholderPage title="Construction Cleaning Equipment" subtitle="Keep your equipment CLEAN and operating at peak efficiency." />} />
            <Route path="/agriculture-cleaning-equipment/" element={<PlaceholderPage title="Agriculture Cleaning Equipment" subtitle="Protect your machinery from corrosive fertilizers and the elements." />} />
            <Route path="/transportation-and-fleet-management/" element={<PlaceholderPage title="Transportation & Fleet Management" subtitle="No one knows transportation equipment like Enzo's." />} />
            <Route path="/manufacturing/" element={<PlaceholderPage title="Manufacturing" subtitle="Keep production lines working safely and efficiently." />} />
            <Route path="/farming-equipment-cleaning/" element={<PlaceholderPage title="Farming Equipment Cleaning" subtitle="Protect your farming investment with proper cleaning." />} />
            <Route path="/solutions-for-road-construction-excavating/" element={<PlaceholderPage title="Solutions for Road Construction & Excavating" subtitle="Heavy-duty cleaning for road construction and excavation equipment." />} />
            <Route path="/protect-your-fleet-from-corrosion-downtime/" element={<PlaceholderPage title="Protect Your Fleet from Corrosion & Downtime" subtitle="Targeted chemistries and undercarriage systems that stop salt-related damage." />} />
            <Route path="/keep-plants-pavers-moving-remove-asphalt-not-time/" element={<PlaceholderPage title="Keep Plants & Pavers Moving" subtitle="Remove asphalt buildup without removing uptime." />} />

            {/* Healthcare */}
            <Route path="/hospital-clinical-hygiene-overview-protocols/" element={<PlaceholderPage title="Hospital & Clinical Hygiene" subtitle="Comprehensive hygiene protocols for healthcare environments." />} />
            <Route path="/our-hand-hygiene-systems/" element={<PlaceholderPage title="Hand Hygiene Systems" subtitle="Advanced hand hygiene dispensing and monitoring systems." />} />
            <Route path="/implementation-in-hospitals/" element={<PlaceholderPage title="Implementation in Hospitals" subtitle="Seamless implementation of cleaning and hygiene protocols." />} />
            <Route path="/training-compliance-support/" element={<PlaceholderPage title="Training & Compliance Support" subtitle="Training programs and compliance tracking for healthcare teams." />} />

            {/* Wastewater & Special */}
            <Route path="/wastewater-treatment-solutions/" element={<WastewaterTreatment />} />
            <Route path="/heaters/" element={<PlaceholderPage title="Val 6 Heaters" subtitle="Warm up any work space and keep working no matter the season." />} />
            <Route path="/single-dual-axle-trailer/" element={<PlaceholderPage title="Single & Dual Axle Trailers" subtitle="Mobile cleaning rigs on single and dual axle platforms." />} />
            <Route path="/electric-hot-water/" element={<PlaceholderPage title="Electric Hot Water" subtitle="Electric-powered hot water pressure washers for indoor use." />} />
            <Route path="/residential-consumer-coldwater/" element={<PlaceholderPage title="Residential Consumer Cold Water" subtitle="Home-grade cold water pressure washers for residential use." />} />
            <Route path="/citymaster-1650-650multifunction-sweeper/" element={<PlaceholderPage title="Citymaster 1650/650 Multifunction Sweeper" subtitle="Municipal-grade multifunction sweeping equipment." />} />
            <Route path="/citymaster/" element={<PlaceholderPage title="Citymaster" subtitle="Professional-grade sweeping solutions for municipalities." />} />
            <Route path="/equipment-products/" element={<PlaceholderPage title="Equipment & Products" subtitle="Pressure washers, air compressors, degreasers and accessories." />} />
            <Route path="/faq/" element={<PlaceholderPage title="Frequently Asked Questions" subtitle="Answers to common questions about our products and services." />} />
            <Route path="/ota/" element={<PlaceholderPage title="OTA" />} />
            <Route path="/promotions/" element={<PlaceholderPage title="Promotions" subtitle="Current deals and promotions on cleaning equipment." />} />
            <Route path="/shop/" element={<PlaceholderPage title="Shop" subtitle="Browse our full catalog of cleaning equipment and supplies." />} />
            <Route path="/shop-now/" element={<PlaceholderPage title="Shop Now" subtitle="Browse our full catalog of cleaning equipment and supplies." />} />

            {/* About & Contact */}
            <Route path="/about-us/" element={<About />} />
            <Route path="/contact-us/" element={<ContactUs />} />

            {/* Referral */}
            <Route path="/hulabowl-ohiobrett/" element={<ReferralLanding partner="ohiobrett" />} />
            <Route path="/hulabowl-ohiobrett/ohiobrettform" element={<ReferralForm partner="ohiobrett" />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
