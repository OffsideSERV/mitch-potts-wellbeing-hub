
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import MLSLaser from "./pages/MLSLaser";
import PersonalTraining from "./pages/PersonalTraining";
import GutHealth from "./pages/GutHealth";
import GutHealthSpecialist from "./pages/GutHealthSpecialist";
import WeightLoss from "./pages/WeightLoss";
import ThyroidNaturopathy from "./pages/ThyroidNaturopathy";
import Diabetes from "./pages/Diabetes";
import ChildrensHealth from "./pages/ChildrensHealth";
import ADHDNaturopathy from "./pages/ADHDNaturopathy";
import AnxietyNaturopathy from "./pages/AnxietyNaturopathy";
import NorthBrisbaneNaturopathy from "./pages/NorthBrisbaneNaturopathy";
import NewsteadNaturopathy from "./pages/NewsteadNaturopathy";
import NewFarmNaturopathy from "./pages/NewFarmNaturopathy";
import MorningsideNaturopathy from "./pages/MorningsideNaturopathy";
import IBSNaturopathy from "./pages/IBSNaturopathy";
import SIBONaturopathy from "./pages/SIBONaturopathy";
import WellnessClinic from "./pages/WellnessClinic";
import Areas from "./pages/Areas";
import NotFound from "./pages/NotFound";
import IBSTreatmentBrisbane from "./pages/IBSTreatmentBrisbane";
import IBSClinic from "./pages/IBSClinic";
import SkinNaturopathy from "./pages/SkinNaturopathy";
import EczemaNaturopathy from "./pages/EczemaNaturopathy";
import AcneNaturopathy from "./pages/AcneNaturopathy";
import HormonalAcneNaturopathy from "./pages/HormonalAcneNaturopathy";
import HamiltonNaturopathy from "./pages/HamiltonNaturopathy";
import ClayfieldNaturopathy from "./pages/ClayfieldNaturopathy";
import WindsorNaturopathy from "./pages/WindsorNaturopathy";
import GutFreedomOptIn from "./pages/GutFreedomOptIn";
import AllergyNaturopath from "./pages/AllergyNaturopath";
import NaturopathicNutritionist from "./pages/NaturopathicNutritionist";
import IndooroopillyNaturopathy from "./pages/IndooroopillyNaturopathy";
import FunctionalMedicine from "./pages/FunctionalMedicine";
import LiveBloodAnalysisBrisbane from "./pages/LiveBloodAnalysisBrisbane";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/mls-laser-therapy-treatment-brisbane" element={<MLSLaser />} />
            <Route path="/services/personal-trainer-new-farm" element={<PersonalTraining />} />
            <Route path="/what-we-treat/gut-health-naturopath-brisbane" element={<GutHealth />} />
            <Route path="/what-we-treat/gut-health-specialist" element={<GutHealthSpecialist />} />
            <Route path="/what-we-treat/weight-loss-naturopath-brisbane" element={<WeightLoss />} />
            <Route path="/what-we-treat/naturopath-thyroid-brisbane" element={<ThyroidNaturopathy />} />
            <Route path="/what-we-treat/naturopath-diabetes-brisbane" element={<Diabetes />} />
            <Route path="/what-we-treat/childrens-naturopath-brisbane" element={<ChildrensHealth />} />
            <Route path="/adhd-naturopathy" element={<ADHDNaturopathy />} />
            <Route path="/anxiety-naturopathy" element={<AnxietyNaturopathy />} />
            <Route path="/north-brisbane-naturopathy" element={<NorthBrisbaneNaturopathy />} />
            <Route path="/newstead-naturopathy" element={<NewsteadNaturopathy />} />
            <Route path="/new-farm-naturopathy" element={<NewFarmNaturopathy />} />
            <Route path="/morningside-naturopathy" element={<MorningsideNaturopathy />} />
            <Route path="/ibs-naturopathy" element={<IBSNaturopathy />} />
            <Route path="/sibo-naturopathy" element={<SIBONaturopathy />} />
            <Route path="/wellness-clinic" element={<WellnessClinic />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/ibs-treatment-brisbane" element={<IBSTreatmentBrisbane />} />
            <Route path="/ibs-clinic" element={<IBSClinic />} />
            <Route path="/skin-naturopathy" element={<SkinNaturopathy />} />
            <Route path="/eczema-naturopathy" element={<EczemaNaturopathy />} />
            <Route path="/acne-naturopathy" element={<AcneNaturopathy />} />
            <Route path="/hormonal-acne-naturopathy" element={<HormonalAcneNaturopathy />} />
            <Route path="/hamilton-naturopathy" element={<HamiltonNaturopathy />} />
            <Route path="/clayfield-naturopathy" element={<ClayfieldNaturopathy />} />
            <Route path="/windsor-naturopathy" element={<WindsorNaturopathy />} />
            <Route path="/gut-freedom" element={<GutFreedomOptIn />} />
            <Route path="/allergy-naturopath" element={<AllergyNaturopath />} />
            <Route path="/naturopathic-nutritionist" element={<NaturopathicNutritionist />} />
            <Route path="/indooroopilly-naturopathy" element={<IndooroopillyNaturopathy />} />
            <Route path="/functional-medicine" element={<FunctionalMedicine />} />
            <Route path="/services/live-blood-analysis-brisbane" element={<LiveBloodAnalysisBrisbane />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
