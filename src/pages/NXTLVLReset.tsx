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
        <title>NXTLVL Reset | 12-Week Gut and Energy Reset Programme</title>
        <meta name="description" content="The NXTLVL Reset is a 12-week programme for busy professionals tackling fatigue, gut issues and stress. See the phases, inclusions and real results." />
        <meta property="og:title" content="NXTLVL Reset | 12-Week Gut and Energy Reset Programme" />
        <meta property="og:description" content="The NXTLVL Reset is a 12-week programme for busy professionals tackling fatigue, gut issues and stress. See the phases, inclusions and real results." />
        <meta name="keywords" content="health transformation, 12 week program, naturopath Brisbane, gut health reset, stress management, energy optimization" />
        <link rel="canonical" href="https://nxtlvlhealth.com.au/nxtlvl-reset" />
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
