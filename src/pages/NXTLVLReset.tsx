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
