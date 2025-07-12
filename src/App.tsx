
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";

// Critical pages - load immediately
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load all other pages for better performance
const Services = lazy(() => import("./pages/Services"));
const MLSLaser = lazy(() => import("./pages/MLSLaser"));
const PersonalTraining = lazy(() => import("./pages/PersonalTraining"));
const GutHealth = lazy(() => import("./pages/GutHealth"));
const GutHealthSpecialist = lazy(() => import("./pages/GutHealthSpecialist"));
const WeightLoss = lazy(() => import("./pages/WeightLoss"));
const ThyroidNaturopathy = lazy(() => import("./pages/ThyroidNaturopathy"));
const Diabetes = lazy(() => import("./pages/Diabetes"));
const ChildrensHealth = lazy(() => import("./pages/ChildrensHealth"));
const ADHDNaturopathy = lazy(() => import("./pages/ADHDNaturopathy"));
const AnxietyNaturopathy = lazy(() => import("./pages/AnxietyNaturopathy"));
const NorthBrisbaneNaturopathy = lazy(() => import("./pages/NorthBrisbaneNaturopathy"));
const NewsteadNaturopathy = lazy(() => import("./pages/NewsteadNaturopathy"));
const NewFarmNaturopathy = lazy(() => import("./pages/NewFarmNaturopathy"));
const MorningsideNaturopathy = lazy(() => import("./pages/MorningsideNaturopathy"));
const IBSNaturopathy = lazy(() => import("./pages/IBSNaturopathy"));
const SIBONaturopathy = lazy(() => import("./pages/SIBONaturopathy"));
const WellnessClinic = lazy(() => import("./pages/WellnessClinic"));
const Areas = lazy(() => import("./pages/Areas"));
const IBSTreatmentBrisbane = lazy(() => import("./pages/IBSTreatmentBrisbane"));
const IBSClinic = lazy(() => import("./pages/IBSClinic"));
const SkinNaturopathy = lazy(() => import("./pages/SkinNaturopathy"));
const EczemaNaturopathy = lazy(() => import("./pages/EczemaNaturopathy"));
const AcneNaturopathy = lazy(() => import("./pages/AcneNaturopathy"));
const HormonalAcneNaturopathy = lazy(() => import("./pages/HormonalAcneNaturopathy"));
const HamiltonNaturopathy = lazy(() => import("./pages/HamiltonNaturopathy"));
const ClayfieldNaturopathy = lazy(() => import("./pages/ClayfieldNaturopathy"));
const WindsorNaturopathy = lazy(() => import("./pages/WindsorNaturopathy"));
const GutFreedomOptIn = lazy(() => import("./pages/GutFreedomOptIn"));
const AllergyNaturopath = lazy(() => import("./pages/AllergyNaturopath"));
const NaturopathicNutritionist = lazy(() => import("./pages/NaturopathicNutritionist"));
const IndooroopillyNaturopathy = lazy(() => import("./pages/IndooroopillyNaturopathy"));
const FunctionalMedicine = lazy(() => import("./pages/FunctionalMedicine"));
const LiveBloodAnalysisBrisbane = lazy(() => import("./pages/LiveBloodAnalysisBrisbane"));
const CancellationPolicy = lazy(() => import("./pages/CancellationPolicy"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const WebsiteDisclaimer = lazy(() => import("./pages/WebsiteDisclaimer"));
const WhatWeTreat = lazy(() => import("./pages/WhatWeTreat"));
const NXTLVLTonics = lazy(() => import("./pages/NXTLVLTonics"));
const NutritionistBrisbane = lazy(() => import("./pages/NutritionistBrisbane"));
const BookNow = lazy(() => import("./pages/BookNow"));
const Blog = lazy(() => import("./pages/Blog"));
const BestTeaForStomachPain = lazy(() => import("./pages/BestTeaForStomachPain"));
const HowToFlushSalicylates = lazy(() => import("./pages/HowToFlushSalicylates"));
const WorstFoodsForGutHealth = lazy(() => import("./pages/WorstFoodsForGutHealth"));
const NaturopathyForWeightLoss = lazy(() => import("./pages/NaturopathyForWeightLoss"));
const GutHealth101 = lazy(() => import("./pages/GutHealth101"));
const NaturopathyVsHomeopathy = lazy(() => import("./pages/NaturopathyVsHomeopathy"));
const OzempicNaturalWeightLoss = lazy(() => import("./pages/OzempicNaturalWeightLoss"));
const GutBrainConnection = lazy(() => import("./pages/GutBrainConnection"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<PageLoader />}>
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
              <Route path="/blog" element={<Blog />} />
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
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
