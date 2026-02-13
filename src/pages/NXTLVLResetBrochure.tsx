import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const NXTLVLResetBrochure = () => {
  return (
    <>
      <Helmet>
        <title>NXTLVL Reset Brochure | 12 Week Health Program</title>
        <meta name="description" content="View the NXTLVL Reset 12-week health transformation program brochure. Learn about our structured approach to restoring energy, gut health, and performance." />
        <link rel="canonical" href="https://www.nxtlvlhealth.com.au/nxtlvl-reset/brochure" />
      </Helmet>

      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)' }}>
        <div className="container mx-auto px-4 py-8">
          <Link to="/nxtlvl-reset" className="inline-flex items-center gap-2 text-nxt-teal hover:text-nxt-teal-light transition-nxt mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to NXTLVL Reset
          </Link>

          <div className="text-center mb-12">
            <img src="/nxtlvl-reset-logo.jpeg" alt="NXTLVL Reset" className="h-16 md:h-20 mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl font-bold text-nxt-white mb-4">
              Program <span className="text-nxt-teal">Brochure</span>
            </h1>
            <p className="text-nxt-white/70 text-lg max-w-2xl mx-auto">
              Everything you need to know about the 12 Week NXTLVL Reset program.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img src="/lovable-uploads/trifold-brochure-front.png" alt="NXTLVL Reset Brochure - Front" className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img src="/lovable-uploads/trifold-brochure-inside.png" alt="NXTLVL Reset Brochure - Inside" className="w-full h-auto" />
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-nxt-white mb-4">
              Ready to <span className="text-nxt-teal">Get Started?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-nxt-teal hover:bg-nxt-teal-light text-nxt-white font-semibold px-8 py-4 text-lg transition-nxt shadow-teal" asChild>
                <a href="https://calendly.com/nxtlvlhealth-info/nxtlvl-30-15-min-call" target="_blank" rel="noopener noreferrer">
                  Book Your Discovery Call
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-nxt-white bg-white text-nxt-black hover:bg-nxt-teal hover:text-nxt-white hover:border-nxt-teal px-8 py-4 text-lg transition-nxt" asChild>
                <Link to="/nxtlvl-reset/learn-more">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default NXTLVLResetBrochure;
