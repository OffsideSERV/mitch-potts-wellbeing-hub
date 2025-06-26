
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Services from './pages/Services';
import GutHealth from './pages/GutHealth';
import WeightLoss from './pages/WeightLoss';
import WellnessClinic from './pages/WellnessClinic';
import IBSTreatmentBrisbane from "./pages/IBSTreatmentBrisbane";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gut-health" element={<GutHealth />} />
          <Route path="/weight-loss" element={<WeightLoss />} />
          <Route path="/wellness-clinic" element={<WellnessClinic />} />
          <Route path="/ibs-treatment-brisbane" element={<IBSTreatmentBrisbane />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
