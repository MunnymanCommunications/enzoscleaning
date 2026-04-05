import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
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
import HotsyElectricPumpFuelOilHeat from "./pages/HotsyElectricPumpFuelOilHeat";
import HotsyGasolinePumpFuelOilHeat from "./pages/HotsyGasolinePumpFuelOilHeat";
import HotsyNaturalGasHotWater from "./pages/HotsyNaturalGasHotWater";
import HotsyElectricColdWater from "./pages/HotsyElectricColdWater";
import HotsyGasolineColdWater from "./pages/HotsyGasolineColdWater";
import HotsyDieselHotWater from "./pages/HotsyDieselHotWater";
import MiTM from "./pages/MiTM";
import MiTMElectricHotWater from "./pages/MiTMElectricHotWater";
import MiTMNaturalGasHotWater from "./pages/MiTMNaturalGasHotWater";
import MiTMGasolineHotWaterPortable from "./pages/MiTMGasolineHotWaterPortable";
import MiTMGasolineHotWaterSkid from "./pages/MiTMGasolineHotWaterSkid";
import MiTMElectricColdWater from "./pages/MiTMElectricColdWater";
import MiTMAirCompressorGas from "./pages/MiTMAirCompressorGas";
import MiTMAirCompressorElectric from "./pages/MiTMAirCompressorElectric";
import TouchlessDriveThru from "./pages/TouchlessDriveThru";
import WashBayDesign from "./pages/WashBayDesign";
import UnderCarriageSprayers from "./pages/UnderCarriageSprayers";
import TowerBrushes from "./pages/TowerBrushes";
import PressureWasherAccessories from "./pages/PressureWasherAccessories";
import SurfaceCleaners from "./pages/SurfaceCleaners";
import TriggerGunsSprayGuns from "./pages/TriggerGunsSprayGuns";
import Nozzles from "./pages/Nozzles";
import WandsLances from "./pages/WandsLances";
import WetSandBlastingKit from "./pages/WetSandBlastingKit";
import Scaltrol from "./pages/Scaltrol";
import FloorCleaning from "./pages/FloorCleaning";
import FloorSweepers from "./pages/FloorSweepers";
import FloorScrubbers from "./pages/FloorScrubbers";
import MinutemanFloorCleaners from "./pages/MinutemanFloorCleaners";
import KarcherFloorCleaners from "./pages/KarcherFloorCleaners";
import RestorationDetergents from "./pages/RestorationDetergents";
import SpecialtyCleaningProducts from "./pages/SpecialtyCleaningProducts";
import DisinfectantsSanitizers from "./pages/DisinfectantsSanitizers";
import DisinfectantSprayers from "./pages/DisinfectantSprayers";
import VaporeDryVapor from "./pages/VaporeDryVapor";
import DisinfectingBestPractices from "./pages/DisinfectingBestPractices";
import IndustriesWeServe from "./pages/IndustriesWeServe";
import ConstructionCleaningEquipment from "./pages/ConstructionCleaningEquipment";
import AgricultureCleaningEquipment from "./pages/AgricultureCleaningEquipment";
import TransportationFleetManagement from "./pages/TransportationFleetManagement";
import ManufacturingPage from "./pages/ManufacturingPage";
import FarmingEquipmentCleaning from "./pages/FarmingEquipmentCleaning";
import RoadConstructionExcavating from "./pages/RoadConstructionExcavating";
import ProtectFleetCorrosion from "./pages/ProtectFleetCorrosion";
import KeepPlantsPaversMoving from "./pages/KeepPlantsPaversMoving";
import HospitalClinicalHygiene from "./pages/HospitalClinicalHygiene";
import HandHygieneSystems from "./pages/HandHygieneSystems";
import ImplementationInHospitals from "./pages/ImplementationInHospitals";
import TrainingComplianceSupport from "./pages/TrainingComplianceSupport";
import WastewaterTreatment from "./pages/WastewaterTreatment";
import Val6Heaters from "./pages/Val6Heaters";
import SingleDualAxleTrailer from "./pages/SingleDualAxleTrailer";
import ElectricHotWater from "./pages/ElectricHotWater";
import ResidentialConsumerColdwater from "./pages/ResidentialConsumerColdwater";
import CitymasterSweeper from "./pages/CitymasterSweeper";
import Citymaster from "./pages/Citymaster";
import EquipmentProducts from "./pages/EquipmentProducts";
import FAQ from "./pages/FAQ";
import Promotions from "./pages/Promotions";
import Shop from "./pages/Shop";
import Trident from "./pages/Trident";
import TridentUniversity from "./pages/TridentUniversity";
import PreventativeMaintenance from "./pages/PreventativeMaintenance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/services/" element={<Services />} />
            <Route path="/services/free-consultations/" element={<FreeConsultations />} />
            <Route path="/services/pressure-washer-service-repair/" element={<ServiceRepair />} />
            <Route path="/services/scheduled-maintenance/" element={<ScheduledMaintenance />} />
            <Route path="/cleaning-equipment/" element={<CleaningEquipment />} />
            <Route path="/cleaning-equipment/pressure-washers/" element={<PressureWashers />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/" element={<HotsyPressureWashers />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-electric-pump-fuel-oil-heat/" element={<HotsyElectricPumpFuelOilHeat />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-gasoline-pump-fuel-oil-heat/" element={<HotsyGasolinePumpFuelOilHeat />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/natural-gas-hot-water/" element={<HotsyNaturalGasHotWater />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/electric-cold-water/" element={<HotsyElectricColdWater />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/gasoline-cold-water/" element={<HotsyGasolineColdWater />} />
            <Route path="/cleaning-equipment/pressure-washers/hotsy-pressure-washers/diesel-cold-water/" element={<HotsyDieselHotWater />} />
            <Route path="/cleaning-equipment/mi-t-m/" element={<MiTM />} />
            <Route path="/cleaning-equipment/mi-t-m/electric-hot-water/" element={<MiTMElectricHotWater />} />
            <Route path="/cleaning-equipment/mi-t-m/natural-gas-hot-water/" element={<MiTMNaturalGasHotWater />} />
            <Route path="/cleaning-equipment/mi-t-m/gasoline-hot-water-portable/" element={<MiTMGasolineHotWaterPortable />} />
            <Route path="/cleaning-equipment/mi-t-m/gasoline-hot-water-skid/" element={<MiTMGasolineHotWaterSkid />} />
            <Route path="/cleaning-equipment/mi-t-m/electric-cold-water/" element={<MiTMElectricColdWater />} />
            <Route path="/cleaning-equipment/mi-t-m/air-compressor-gas/" element={<MiTMAirCompressorGas />} />
            <Route path="/cleaning-equipment/mi-t-m/air-compressor-electric/" element={<MiTMAirCompressorElectric />} />
            <Route path="/cleaning-equipment/under-carriage-sprayers/" element={<UnderCarriageSprayers />} />
            <Route path="/cleaning-equipment/under-carriage-sprayers/the-neutralizer/" element={<TheNeutralizer />} />
            <Route path="/cleaning-equipment/wash-bay-design/" element={<WashBayDesign />} />
            <Route path="/cleaning-equipment/wash-bay-design/tower-brushes/" element={<TowerBrushes />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/" element={<PressureWasherAccessories />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/surface-cleaners/" element={<SurfaceCleaners />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/trigger-guns-spray-guns/" element={<TriggerGunsSprayGuns />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/nozzles/" element={<Nozzles />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/wands-lances/" element={<WandsLances />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/wet-sand-blasting-kit/" element={<WetSandBlastingKit />} />
            <Route path="/cleaning-equipment/pressure-washers-accessories/scaltrol/" element={<Scaltrol />} />
            <Route path="/cleaning-equipment/floor-cleaning/" element={<FloorCleaning />} />
            <Route path="/cleaning-equipment/floor-cleaning/floor-sweepers/" element={<FloorSweepers />} />
            <Route path="/cleaning-equipment/floor-cleaning/floor-scrubbers/" element={<FloorScrubbers />} />
            <Route path="/cleaning-equipment/floor-cleaning/minuteman-floor-cleaners/" element={<MinutemanFloorCleaners />} />
            <Route path="/cleaning-equipment/floor-cleaning/karcher-floor-cleaners/" element={<KarcherFloorCleaners />} />
            <Route path="/detergents/" element={<Detergents />} />
            <Route path="/detergents/degreasers/" element={<Degreasers />} />
            <Route path="/detergents/transportation-truck-bus-wash/" element={<TransportationDetergents />} />
            <Route path="/detergents/construction-equipment-cleaning/" element={<ConstructionDetergents />} />
            <Route path="/detergents/restoration-detergents/" element={<RestorationDetergents />} />
            <Route path="/detergents/specialty-cleaning-products/" element={<SpecialtyCleaningProducts />} />
            <Route path="/hardscaping/trident/" element={<Trident />} />
            <Route path="/disinfecting/" element={<Disinfecting />} />
            <Route path="/disinfecting/our-disinfectants-sanitizers/" element={<DisinfectantsSanitizers />} />
            <Route path="/disinfecting/our-disinfectant-sprayers/" element={<DisinfectantSprayers />} />
            <Route path="/disinfecting/vapore-dry-vapor-disinfecting/" element={<VaporeDryVapor />} />
            <Route path="/disinfecting/disinfecting-best-practices/" element={<DisinfectingBestPractices />} />
            <Route path="/touchless-drive-thru/" element={<TouchlessDriveThru />} />
            <Route path="/industries-we-serve/" element={<IndustriesWeServe />} />
            <Route path="/construction-cleaning-equipment/" element={<ConstructionCleaningEquipment />} />
            <Route path="/agriculture-cleaning-equipment/" element={<AgricultureCleaningEquipment />} />
            <Route path="/transportation-and-fleet-management/" element={<TransportationFleetManagement />} />
            <Route path="/manufacturing/" element={<ManufacturingPage />} />
            <Route path="/farming-equipment-cleaning/" element={<FarmingEquipmentCleaning />} />
            <Route path="/solutions-for-road-construction-excavating/" element={<RoadConstructionExcavating />} />
            <Route path="/protect-your-fleet-from-corrosion-downtime/" element={<ProtectFleetCorrosion />} />
            <Route path="/keep-plants-pavers-moving-remove-asphalt-not-time/" element={<KeepPlantsPaversMoving />} />
            <Route path="/hospital-clinical-hygiene-overview-protocols/" element={<HospitalClinicalHygiene />} />
            <Route path="/our-hand-hygiene-systems/" element={<HandHygieneSystems />} />
            <Route path="/implementation-in-hospitals/" element={<ImplementationInHospitals />} />
            <Route path="/training-compliance-support/" element={<TrainingComplianceSupport />} />
            <Route path="/wastewater-treatment-solutions/" element={<WastewaterTreatment />} />
            <Route path="/heaters/" element={<Val6Heaters />} />
            <Route path="/single-dual-axle-trailer/" element={<SingleDualAxleTrailer />} />
            <Route path="/electric-hot-water/" element={<ElectricHotWater />} />
            <Route path="/residential-consumer-coldwater/" element={<ResidentialConsumerColdwater />} />
            <Route path="/citymaster-1650-650multifunction-sweeper/" element={<CitymasterSweeper />} />
            <Route path="/citymaster/" element={<Citymaster />} />
            <Route path="/equipment-products/" element={<EquipmentProducts />} />
            <Route path="/faq/" element={<FAQ />} />
            <Route path="/ota/" element={<FAQ />} />
            <Route path="/promotions/" element={<Promotions />} />
            <Route path="/shop/" element={<Shop />} />
            <Route path="/shop-now/" element={<Shop />} />
            <Route path="/about-us/" element={<About />} />
            <Route path="/contact-us/" element={<ContactUs />} />
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
