import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-nxt-black mb-6">
            Ready to Reset Your Health?
          </h2>
          <p className="text-xl text-nxt-grey mb-8 max-w-2xl mx-auto">
            Join busy professionals who have already transformed their energy, digestion, 
            and overall wellbeing with the NXTLVL Reset program.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-nxt-orange hover:bg-nxt-orange-light text-nxt-black font-semibold px-8 py-4 text-lg transition-nxt shadow-orange" asChild>
              <a href="https://nxtlvl-health-quiz.scoreapp.com" target="_blank" rel="noopener noreferrer">
                Start With A 5-minute Health Quiz
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-nxt-black text-nxt-black hover:bg-nxt-black hover:text-nxt-white px-8 py-4 text-lg transition-nxt" asChild>
              <a href="https://calendly.com/nxtlvlhealth-info/nxtlvl-30-15-min-call" target="_blank" rel="noopener noreferrer">
                Book Your Free Discovery Call
              </a>
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="bg-gradient-subtle rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-nxt-black mb-4">
              Have Questions?
            </h3>
            <p className="text-nxt-grey mb-6">
              Ready to take the next level? Get in touch to learn more about the program and see if NXTLVL Reset is right for you by{" "}
              <a 
                href="https://calendly.com/nxtlvlhealth-info/nxtlvl-30-15-min-call" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-nxt-orange hover:text-nxt-orange-light underline transition-nxt"
              >
                Booking Your Free Discovery Call
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
