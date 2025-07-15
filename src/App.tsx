import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import { Sonner } from 'sonner'

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import AcneNaturopathy from "./pages/AcneNaturopathy";
import ADHDNaturopathy from "./pages/ADHDNaturopathy";
import AllergyNaturopath from "./pages/AllergyNaturopath";
import AnxietyNaturopathy from "./pages/AnxietyNaturopathy";
import ChildrensHealth from "./pages/ChildrensHealth";
import Diabetes from "./pages/Diabetes";
import EczemaNaturopathy from "./pages/EczemaNaturopathy";
import GutHealth from "./pages/GutHealth";
import GutHealthSpecialist from "./pages/GutHealthSpecialist";
import HormonalAcneNaturopathy from "./pages/HormonalAcneNaturopathy";
import IBSClinic from "./pages/IBSClinic";
import IBSNaturopathy from "./pages/IBSNaturopathy";
import IBSTreatmentBrisbane from "./pages/IBSTreatmentBrisbane";
import SkinNaturopathy from "./pages/SkinNaturopathy";
import SIBONaturopathy from "./pages/SIBONaturopathy";
import ThyroidNaturopathy from "./pages/ThyroidNaturopathy";
import WeightLoss from "./pages/WeightLoss";
import NaturopathNewFarm from "./pages/NaturopathNewFarm";
import MlsLaserTherapy from "./pages/MlsLaserTherapy";
import LiveBloodAnalysis from "./pages/LiveBloodAnalysis";
import NaturopathicNutritionist from "./pages/NaturopathicNutritionist";
import PersonalTraining from "./pages/PersonalTraining";
import NaturopathForAthletes from "./pages/NaturopathForAthletes";

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />

                {/* Areas We Serve Routes */}
                <Route path="/areas-we-serve/naturopath-new-farm" element={<NaturopathNewFarm />} />

                {/* Services Routes */}
                <Route path="/services/mls-laser-therapy" element={<MlsLaserTherapy />} />
                <Route path="/services/live-blood-analysis" element={<LiveBloodAnalysis />} />
                <Route path="/services/naturopathic-nutritionist" element={<NaturopathicNutritionist />} />
                <Route path="/services/personal-training" element={<PersonalTraining />} />
                
                {/* What We Treat Routes */}
                <Route path="/what-we-treat/acne-naturopathy" element={<AcneNaturopathy />} />
                <Route path="/what-we-treat/adhd-naturopath" element={<ADHDNaturopathy />} />
                <Route path="/what-we-treat/allergy-naturopath" element={<AllergyNaturopath />} />
                <Route path="/what-we-treat/naturopath-anxiety" element={<AnxietyNaturopathy />} />
                <Route path="/what-we-treat/childrens-health" element={<ChildrensHealth />} />
                <Route path="/what-we-treat/diabetes" element={<Diabetes />} />
                <Route path="/what-we-treat/naturopath-eczema" element={<EczemaNaturopathy />} />
                <Route path="/what-we-treat/gut-health" element={<GutHealth />} />
                <Route path="/what-we-treat/gut-health-specialist" element={<GutHealthSpecialist />} />
                <Route path="/what-we-treat/hormonal-acne-naturopath" element={<HormonalAcneNaturopathy />} />
                <Route path="/what-we-treat/ibs-clinic" element={<IBSClinic />} />
                <Route path="/what-we-treat/ibs-naturopathy" element={<IBSNaturopathy />} />
                <Route path="/what-we-treat/ibs-treatment-brisbane" element={<IBSTreatmentBrisbane />} />
                <Route path="/what-we-treat/naturopath-for-athletes" element={<NaturopathForAthletes />} />
                <Route path="/what-we-treat/naturopathy-for-skin" element={<SkinNaturopathy />} />
                <Route path="/what-we-treat/sibo-naturopathy" element={<SIBONaturopathy />} />
                <Route path="/what-we-treat/thyroid-naturopathy" element={<ThyroidNaturopathy />} />
                <Route path="/what-we-treat/naturopathy-weight-loss" element={<WeightLoss />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
