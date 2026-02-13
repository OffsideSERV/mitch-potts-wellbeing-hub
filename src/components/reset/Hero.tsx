import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--nxt-orange))_0%,transparent_50%)] opacity-5"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img src="/nxtlvl-reset-logo.jpeg" alt="NXTLVL Reset" className="h-24 md:h-32 mx-auto" />
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-nxt-white mb-6 leading-tight">
            Transform Your Health in
            <span className="block text-nxt-orange">12 Weeks</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-nxt-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Overcome fatigue, digestive issues, and stress with our structured health optimization program designed for busy professionals.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-nxt-orange hover:bg-nxt-orange-light text-nxt-black font-semibold px-8 py-4 text-lg transition-nxt shadow-orange" asChild>
              <a href="https://nxtlvl-health-quiz.scoreapp.com" target="_blank" rel="noopener noreferrer">Take the 5-minute Health Quiz</a>
            </Button>
            <Button variant="outline" size="lg" className="border-nxt-white bg-transparent text-nxt-white hover:bg-nxt-white hover:text-nxt-black px-8 py-4 text-lg transition-nxt" asChild>
              <a href="https://calendly.com/nxtlvlhealth-info/nxtlvl-30-15-min-call" target="_blank" rel="noopener noreferrer">
                Book Your Discovery Call
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-nxt-orange bg-transparent text-nxt-orange hover:bg-nxt-orange hover:text-nxt-black px-8 py-4 text-lg transition-nxt" asChild>
              <a href="/nxtlvl-reset/learn-more">
                Learn More
              </a>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-nxt-white/60">
            <div className="flex items-center gap-2">
              <span className="text-nxt-orange text-2xl">✓</span>
              <span>12-Week Structured Program</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-nxt-orange text-2xl">✓</span>
              <span>Professional Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-nxt-orange text-2xl">✓</span>
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-nxt-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-nxt-orange rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
