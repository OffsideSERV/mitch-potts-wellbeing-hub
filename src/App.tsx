import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Naturopathy from './pages/Naturopathy';
import GutHealth from './pages/GutHealth';
import FatigueTreatment from './pages/FatigueTreatment';
import HormoneImbalance from './pages/HormoneImbalance';
import MensHealth from './pages/MensHealth';
import WomensHealth from './pages/WomensHealth';
import WeightLoss from './pages/WeightLoss';
import SkinConditions from './pages/SkinConditions';
import PainManagement from './pages/PainManagement';
import WellnessClinic from './pages/WellnessClinic';
import IBSTreatmentBrisbane from "./pages/IBSTreatmentBrisbane";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/naturopathy" element={<Naturopathy />} />
          <Route path="/gut-health" element={<GutHealth />} />
          <Route path="/fatigue-treatment" element={<FatigueTreatment />} />
          <Route path="/hormone-imbalance" element={<HormoneImbalance />} />
          <Route path="/mens-health" element={<MensHealth />} />
          <Route path="/womens-health" element={<WomensHealth />} />
          <Route path="/weight-loss" element={<WeightLoss />} />
          <Route path="/skin-conditions" element={<SkinConditions />} />
          <Route path="/pain-management" element={<PainManagement />} />
          <Route path="/wellness-clinic" element={<WellnessClinic />} />
          <Route path="/ibs-treatment-brisbane" element={<IBSTreatmentBrisbane />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
