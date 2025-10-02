import { Helmet } from "react-helmet-async";
import Hero from "@/components/reset/Hero";
import TransformationResults from "@/components/reset/TransformationResults";
import ProgramPhases from "@/components/reset/ProgramPhases";
import WhatYouGet from "@/components/reset/WhatYouGet";
import Outcomes from "@/components/reset/Outcomes";
import CTA from "@/components/reset/CTA";
import Footer from "@/components/Footer";

const NXTLVLReset = () => {
  return (
    <>
      <Helmet>
        <title>NXTLVL Reset - 12 Week Health Transformation Program | Brisbane</title>
        <meta 
          name="description" 
          content="Transform your health in 12 weeks with NXTLVL Reset. Overcome fatigue, digestive issues, and stress with our structured health optimization program for busy professionals in Brisbane."
        />
        <meta name="keywords" content="health transformation, 12 week program, naturopath Brisbane, gut health reset, stress management, energy optimization" />
        <link rel="canonical" href="https://www.nxtlvlhealth.com.au/nxtlvl-reset" />
      </Helmet>
      
      <div className="min-h-screen">
        <Hero />
        <TransformationResults />
        <ProgramPhases />
        <WhatYouGet />
        <Outcomes />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default NXTLVLReset;
