import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";

// Import all page components
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
import ClaudeTest from "./pages/ClaudeTest";

export function render(url: string) {
  const queryClient = new QueryClient();

  const html = ReactDOMServer.renderToString(
    React.createElement(
      QueryClientProvider,
      { client: queryClient },
      React.createElement(
        TooltipProvider,
        null,
        React.createElement(
          StaticRouter,
          { location: url },
          React.createElement(
            Routes,
            null,
            React.createElement(
              Route,
              { element: React.createElement(Layout) },
              React.createElement(Route, { path: "/", element: React.createElement(Index) }),
              React.createElement(Route, { path: "/services/", element: React.createElement(Services) }),
              React.createElement(Route, { path: "/services/free-consultations/", element: React.createElement(FreeConsultations) }),
              React.createElement(Route, { path: "/services/pressure-washer-service-repair/", element: React.createElement(ServiceRepair) }),
              React.createElement(Route, { path: "/services/scheduled-maintenance/", element: React.createElement(ScheduledMaintenance) }),
              React.createElement(Route, { path: "/services/preventative-maintenance/", element: React.createElement(PreventativeMaintenance) }),
              React.createElement(Route, { path: "/cleaning-equipment/", element: React.createElement(CleaningEquipment) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers/", element: React.createElement(PressureWashers) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/", element: React.createElement(HotsyPressureWashers) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-electric-pump-fuel-oil-heat/", element: React.createElement(HotsyElectricPumpFuelOilHeat) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/hotsy-gasoline-pump-fuel-oil-heat/", element: React.createElement(HotsyGasolinePumpFuelOilHeat) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/natural-gas-hot-water/", element: React.createElement(HotsyNaturalGasHotWater) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/electric-cold-water/", element: React.createElement(HotsyElectricColdWater) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/gasoline-cold-water/", element: React.createElement(HotsyGasolineColdWater) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers/hotsy-pressure-washers/diesel-cold-water/", element: React.createElement(HotsyDieselHotWater) }),
              React.createElement(Route, { path: "/cleaning-equipment/mi-t-m/", element: React.createElement(MiTM) }),
              React.createElement(Route, { path: "/cleaning-equipment/mi-t-m/electric-hot-water/", element: React.createElement(MiTMElectricHotWater) }),
              React.createElement(Route, { path: "/cleaning-equipment/mi-t-m/natural-gas-hot-water/", element: React.createElement(MiTMNaturalGasHotWater) }),
              React.createElement(Route, { path: "/cleaning-equipment/mi-t-m/gasoline-hot-water-portable/", element: React.createElement(MiTMGasolineHotWaterPortable) }),
              React.createElement(Route, { path: "/cleaning-equipment/mi-t-m/gasoline-hot-water-skid/", element: React.createElement(MiTMGasolineHotWaterSkid) }),
              React.createElement(Route, { path: "/cleaning-equipment/mi-t-m/electric-cold-water/", element: React.createElement(MiTMElectricColdWater) }),
              React.createElement(Route, { path: "/cleaning-equipment/mi-t-m/air-compressor-gas/", element: React.createElement(MiTMAirCompressorGas) }),
              React.createElement(Route, { path: "/cleaning-equipment/mi-t-m/air-compressor-electric/", element: React.createElement(MiTMAirCompressorElectric) }),
              React.createElement(Route, { path: "/cleaning-equipment/under-carriage-sprayers/", element: React.createElement(UnderCarriageSprayers) }),
              React.createElement(Route, { path: "/cleaning-equipment/under-carriage-sprayers/the-neutralizer/", element: React.createElement(TheNeutralizer) }),
              React.createElement(Route, { path: "/cleaning-equipment/wash-bay-design/", element: React.createElement(WashBayDesign) }),
              React.createElement(Route, { path: "/cleaning-equipment/wash-bay-design/tower-brushes/", element: React.createElement(TowerBrushes) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers-accessories/", element: React.createElement(PressureWasherAccessories) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers-accessories/surface-cleaners/", element: React.createElement(SurfaceCleaners) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers-accessories/trigger-guns-spray-guns/", element: React.createElement(TriggerGunsSprayGuns) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers-accessories/nozzles/", element: React.createElement(Nozzles) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers-accessories/wands-lances/", element: React.createElement(WandsLances) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers-accessories/wet-sand-blasting-kit/", element: React.createElement(WetSandBlastingKit) }),
              React.createElement(Route, { path: "/cleaning-equipment/pressure-washers-accessories/scaltrol/", element: React.createElement(Scaltrol) }),
              React.createElement(Route, { path: "/cleaning-equipment/floor-cleaning/", element: React.createElement(FloorCleaning) }),
              React.createElement(Route, { path: "/cleaning-equipment/floor-cleaning/floor-sweepers/", element: React.createElement(FloorSweepers) }),
              React.createElement(Route, { path: "/cleaning-equipment/floor-cleaning/floor-scrubbers/", element: React.createElement(FloorScrubbers) }),
              React.createElement(Route, { path: "/cleaning-equipment/floor-cleaning/minuteman-floor-cleaners/", element: React.createElement(MinutemanFloorCleaners) }),
              React.createElement(Route, { path: "/cleaning-equipment/floor-cleaning/karcher-floor-cleaners/", element: React.createElement(KarcherFloorCleaners) }),
              React.createElement(Route, { path: "/detergents/", element: React.createElement(Detergents) }),
              React.createElement(Route, { path: "/detergents/degreasers/", element: React.createElement(Degreasers) }),
              React.createElement(Route, { path: "/detergents/transportation-truck-bus-wash/", element: React.createElement(TransportationDetergents) }),
              React.createElement(Route, { path: "/detergents/construction-equipment-cleaning/", element: React.createElement(ConstructionDetergents) }),
              React.createElement(Route, { path: "/detergents/restoration-detergents/", element: React.createElement(RestorationDetergents) }),
              React.createElement(Route, { path: "/detergents/specialty-cleaning-products/", element: React.createElement(SpecialtyCleaningProducts) }),
              React.createElement(Route, { path: "/hardscaping/trident/", element: React.createElement(Trident) }),
              React.createElement(Route, { path: "/hardscaping/trident/university/", element: React.createElement(TridentUniversity) }),
              React.createElement(Route, { path: "/disinfecting/", element: React.createElement(Disinfecting) }),
              React.createElement(Route, { path: "/disinfecting/our-disinfectants-sanitizers/", element: React.createElement(DisinfectantsSanitizers) }),
              React.createElement(Route, { path: "/disinfecting/our-disinfectant-sprayers/", element: React.createElement(DisinfectantSprayers) }),
              React.createElement(Route, { path: "/disinfecting/vapore-dry-vapor-disinfecting/", element: React.createElement(VaporeDryVapor) }),
              React.createElement(Route, { path: "/disinfecting/disinfecting-best-practices/", element: React.createElement(DisinfectingBestPractices) }),
              React.createElement(Route, { path: "/touchless-drive-thru/", element: React.createElement(TouchlessDriveThru) }),
              React.createElement(Route, { path: "/industries-we-serve/", element: React.createElement(IndustriesWeServe) }),
              React.createElement(Route, { path: "/construction-cleaning-equipment/", element: React.createElement(ConstructionCleaningEquipment) }),
              React.createElement(Route, { path: "/agriculture-cleaning-equipment/", element: React.createElement(AgricultureCleaningEquipment) }),
              React.createElement(Route, { path: "/transportation-and-fleet-management/", element: React.createElement(TransportationFleetManagement) }),
              React.createElement(Route, { path: "/manufacturing/", element: React.createElement(ManufacturingPage) }),
              React.createElement(Route, { path: "/farming-equipment-cleaning/", element: React.createElement(FarmingEquipmentCleaning) }),
              React.createElement(Route, { path: "/solutions-for-road-construction-excavating/", element: React.createElement(RoadConstructionExcavating) }),
              React.createElement(Route, { path: "/protect-your-fleet-from-corrosion-downtime/", element: React.createElement(ProtectFleetCorrosion) }),
              React.createElement(Route, { path: "/keep-plants-pavers-moving-remove-asphalt-not-time/", element: React.createElement(KeepPlantsPaversMoving) }),
              React.createElement(Route, { path: "/hospital-clinical-hygiene-overview-protocols/", element: React.createElement(HospitalClinicalHygiene) }),
              React.createElement(Route, { path: "/our-hand-hygiene-systems/", element: React.createElement(HandHygieneSystems) }),
              React.createElement(Route, { path: "/implementation-in-hospitals/", element: React.createElement(ImplementationInHospitals) }),
              React.createElement(Route, { path: "/training-compliance-support/", element: React.createElement(TrainingComplianceSupport) }),
              React.createElement(Route, { path: "/wastewater-treatment-solutions/", element: React.createElement(WastewaterTreatment) }),
              React.createElement(Route, { path: "/heaters/", element: React.createElement(Val6Heaters) }),
              React.createElement(Route, { path: "/single-dual-axle-trailer/", element: React.createElement(SingleDualAxleTrailer) }),
              React.createElement(Route, { path: "/electric-hot-water/", element: React.createElement(ElectricHotWater) }),
              React.createElement(Route, { path: "/residential-consumer-coldwater/", element: React.createElement(ResidentialConsumerColdwater) }),
              React.createElement(Route, { path: "/citymaster-1650-650multifunction-sweeper/", element: React.createElement(CitymasterSweeper) }),
              React.createElement(Route, { path: "/citymaster/", element: React.createElement(Citymaster) }),
              React.createElement(Route, { path: "/equipment-products/", element: React.createElement(EquipmentProducts) }),
              React.createElement(Route, { path: "/faq/", element: React.createElement(FAQ) }),
              React.createElement(Route, { path: "/ota/", element: React.createElement(FAQ) }),
              React.createElement(Route, { path: "/promotions/", element: React.createElement(Promotions) }),
              React.createElement(Route, { path: "/shop/", element: React.createElement(Shop) }),
              React.createElement(Route, { path: "/shop-now/", element: React.createElement(Shop) }),
              React.createElement(Route, { path: "/about-us/", element: React.createElement(About) }),
              React.createElement(Route, { path: "/contact-us/", element: React.createElement(ContactUs) }),
              React.createElement(Route, { path: "/claude-test/", element: React.createElement(ClaudeTest) }),
              React.createElement(Route, { path: "/hulabowl-ohiobrett/", element: React.createElement(ReferralLanding, { partner: "ohiobrett" }) }),
              React.createElement(Route, { path: "/hulabowl-ohiobrett/ohiobrettform", element: React.createElement(ReferralForm, { partner: "ohiobrett" }) }),
              React.createElement(Route, { path: "*", element: React.createElement(NotFound) }),
            )
          )
        )
      )
    )
  );

  return html;
}
