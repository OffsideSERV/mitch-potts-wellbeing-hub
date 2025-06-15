
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import MLSLaser from "./pages/MLSLaser";
import PersonalTraining from "./pages/PersonalTraining";
import GutHealth from "./pages/GutHealth";
import WeightLoss from "./pages/WeightLoss";
import ThyroidNaturopathy from "./pages/ThyroidNaturopathy";
import Diabetes from "./pages/Diabetes";
import ChildrensHealth from "./pages/ChildrensHealth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mls-laser" element={<MLSLaser />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/gut-health" element={<GutHealth />} />
          <Route path="/weight-loss" element={<WeightLoss />} />
          <Route path="/thyroid-naturopathy" element={<ThyroidNaturopathy />} />
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/childrens-health" element={<ChildrensHealth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
