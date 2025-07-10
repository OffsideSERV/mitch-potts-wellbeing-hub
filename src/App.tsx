
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
import CancellationPolicy from "./pages/CancellationPolicy";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WebsiteDisclaimer from "./pages/WebsiteDisclaimer";
import WhatWeTreat from "./pages/WhatWeTreat";
import NXTLVLTonics from "./pages/NXTLVLTonics";
import NutritionistBrisbane from "./pages/NutritionistBrisbane";
import BookNow from "./pages/BookNow";
import BestTeaForStomachPain from "./pages/BestTeaForStomachPain";
import HowToFlushSalicylates from "./pages/HowToFlushSalicylates";
import WorstFoodsForGutHealth from "./pages/WorstFoodsForGutHealth";
import NaturopathyForWeightLoss from "./pages/NaturopathyForWeightLoss";
import GutHealth101 from "./pages/GutHealth101";
import NaturopathyVsHomeopathy from "./pages/NaturopathyVsHomeopathy";
import OzempicNaturalWeightLoss from "./pages/OzempicNaturalWeightLoss";
import GutBrainConnection from "./pages/GutBrainConnection";

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
            <Route path="/what-we-treat/adhd-naturopath" element={<ADHDNaturopathy />} />
            <Route path="/what-we-treat/naturopath-anxiety" element={<AnxietyNaturopathy />} />
            <Route path="/areas-we-serve/naturopath-north-brisbane" element={<NorthBrisbaneNaturopathy />} />
            <Route path="/areas-we-serve/naturopath-newstead" element={<NewsteadNaturopathy />} />
            <Route path="/areas-we-serve/naturopath-new-farm" element={<NewFarmNaturopathy />} />
            <Route path="/areas-we-serve/naturopath-morningside" element={<MorningsideNaturopathy />} />
            <Route path="/what-we-treat/ibs-naturopath" element={<IBSNaturopathy />} />
            <Route path="/what-we-treat/sibo-naturopath" element={<SIBONaturopathy />} />
            <Route path="/what-we-treat/wellness-clinic-brisbane" element={<WellnessClinic />} />
            <Route path="/areas-we-serve" element={<Areas />} />
            <Route path="/what-we-treat/ibs-brisbane" element={<IBSTreatmentBrisbane />} />
            <Route path="/what-we-treat/ibs-clinic" element={<IBSClinic />} />
            <Route path="/what-we-treat/naturopathy-for-skin" element={<SkinNaturopathy />} />
            <Route path="/what-we-treat/naturopath-eczema" element={<EczemaNaturopathy />} />
            <Route path="/what-we-treat/acne-naturopathy" element={<AcneNaturopathy />} />
            <Route path="/what-we-treat/hormonal-acne-naturopath" element={<HormonalAcneNaturopathy />} />
            <Route path="/areas-we-serve/naturopath-hamilton" element={<HamiltonNaturopathy />} />
            <Route path="/areas-we-serve/naturopath-clayfield-brisbane" element={<ClayfieldNaturopathy />} />
            <Route path="/areas-we-serve/naturopath-windsor" element={<WindsorNaturopathy />} />
            <Route path="/gut-freedom" element={<GutFreedomOptIn />} />
            <Route path="/allergy-naturopath" element={<AllergyNaturopath />} />
            <Route path="/naturopathic-nutritionist" element={<NaturopathicNutritionist />} />
            <Route path="/indooroopilly-naturopathy" element={<IndooroopillyNaturopathy />} />
            <Route path="/functional-medicine" element={<FunctionalMedicine />} />
            <Route path="/services/live-blood-analysis-brisbane" element={<LiveBloodAnalysisBrisbane />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/website-disclaimer" element={<WebsiteDisclaimer />} />
            <Route path="/what-we-treat" element={<WhatWeTreat />} />
            <Route path="/nxtlvl-tonics" element={<NXTLVLTonics />} />
            <Route path="/services/nutritionist-brisbane" element={<NutritionistBrisbane />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/blog/gut-health/best-tea-for-stomach-pain-and-bloating" element={<BestTeaForStomachPain />} />
            <Route path="/blog/naturopathy/how-to-flush-salicylates-from-your-body" element={<HowToFlushSalicylates />} />
            <Route path="/blog/gut-health/7-worst-foods-for-gut-health" element={<WorstFoodsForGutHealth />} />
            <Route path="/blog/naturopathy/naturopathy-for-weight-loss" element={<NaturopathyForWeightLoss />} />
            <Route path="/blog/gut-health/gut-health-101-why-your-stomach-might-be-behind-your-brain-fog-and-fatigue" element={<GutHealth101 />} />
            <Route path="/blog/naturopathy/naturopathy-vs-homeopathy" element={<NaturopathyVsHomeopathy />} />
            <Route path="/blog/weight-loss/embracing-natural-weight-loss-with-ozempic-a-naturopaths-approach" element={<OzempicNaturalWeightLoss />} />
            <Route path="/blog/gut-health/gut-brain-connection-how-your-gut-affects-mental-health" element={<GutBrainConnection />} />
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
