import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Download } from "lucide-react";
import Footer from "@/components/Footer";
import brochureFront from "@/assets/nxtlvl-reset-brochure-front.png";
import brochureBack from "@/assets/nxtlvl-reset-brochure-back.png";

const NXTLVLResetBrochure = () => {
  return (
    <>
      <Helmet>
        <title>NXTLVL Reset Brochure - 12 Week Health Transformation Program</title>
        <meta 
          name="description" 
          content="View and download the NXTLVL Reset program brochure. Learn about our 12-week health transformation program for busy professionals."
        />
        <link rel="canonical" href="https://www.nxtlvlhealth.com.au/nxtlvl-reset/brochure" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <Link to="/nxtlvl-reset" className="inline-flex items-center text-nxt-grey hover:text-nxt-orange mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to NXTLVL Reset
            </Link>
            
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-nxt-black mb-4">
                NXTLVL Reset <span className="text-nxt-orange">Brochure</span>
              </h1>
              <p className="text-lg text-nxt-grey mb-8">
                Everything you need to know about our 12-week health transformation program.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-nxt-orange hover:bg-nxt-orange-light text-nxt-black font-semibold" asChild>
                  <a href="https://nxtlvl-health-quiz.scoreapp.com" target="_blank" rel="noopener noreferrer">
                    Take the Health Quiz
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-nxt-black text-nxt-black hover:bg-nxt-black hover:text-nxt-white" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/nxtlvl-30-15-min-call" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Discovery Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Brochures */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Brochure Front */}
              <div className="bg-slate-50 rounded-2xl p-4 md:p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-nxt-black mb-4 text-center">Front</h2>
                <img 
                  src={brochureFront} 
                  alt="NXTLVL Reset Brochure - Front" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              {/* Brochure Back */}
              <div className="bg-slate-50 rounded-2xl p-4 md:p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-nxt-black mb-4 text-center">Back</h2>
                <img 
                  src={brochureBack} 
                  alt="NXTLVL Reset Brochure - Back" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-nxt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-nxt-white mb-4">
                Ready to Start Your Reset?
              </h2>
              <p className="text-nxt-white/80 mb-8">
                Take the first step towards transforming your health in just 12 weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-nxt-orange hover:bg-nxt-orange-light text-nxt-black font-semibold" asChild>
                  <a href="https://nxtlvl-health-quiz.scoreapp.com" target="_blank" rel="noopener noreferrer">
                    Take the 5-minute Health Quiz
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-nxt-white bg-nxt-white text-nxt-black hover:bg-nxt-orange hover:border-nxt-orange" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/nxtlvl-30-15-min-call" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Free Discovery Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default NXTLVLResetBrochure;
