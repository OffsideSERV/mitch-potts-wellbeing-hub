
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { Calendar, Zap, Target, Heart, Sparkles } from 'lucide-react';

const LaserHealing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Healing with Light? MLS Laser Therapy Brisbane | NXTLVL Health"
        description="Done with painful periods, chronic bloating & ongoing fatigue? MLS Laser Therapy targets inflammation at the source. 80% of clients feel relief in just a few sessions."
        canonical="/laser-healing"
        keywords="MLS laser therapy Brisbane, endometriosis treatment, PCOS treatment, chronic pain relief, gut health Brisbane, hormone balance"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Zap className="h-4 w-4" />
                  <span>Revolutionary Light Therapy</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  HEALING WITH <span className="text-primary">LIGHT</span>?
                </h1>
                
                <p className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  Sounds fake... but it's not.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  If you're done putting up with:
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-foreground font-medium">Painful periods, endo or PCOS flares</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-foreground font-medium">Chronic bloating and gut issues</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-foreground font-medium">Ongoing pain, tension, or fatigue</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <p className="text-xl font-semibold text-foreground mb-2">
                  It's time to try something different.
                </p>
                <p className="text-muted-foreground">
                  <strong>MLS Laser Therapy</strong> is a non-invasive treatment that uses dual wavelengths of light to target inflammation at the source. No heat, no needles, no downtime, just relief.
                </p>
              </div>
              
              <Button size="lg" className="text-lg px-8 py-4 h-auto w-full sm:w-auto" asChild>
                <a href="/book-now">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Appointment Now
                </a>
              </Button>
            </div>
            
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/4748db27-c782-4bc2-b09d-d93a2b5b2433.png" 
                alt="MLS Laser Therapy treatment at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Dual Wavelength Technology</p>
                    <p className="text-sm text-muted-foreground">Surface + Deep Tissue Healing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Image */}
          <div className="relative lg:hidden mt-8">
            <img 
              src="/lovable-uploads/4748db27-c782-4bc2-b09d-d93a2b5b2433.png" 
              alt="MLS Laser Therapy treatment at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute -bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Target className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Dual Wavelength Technology</p>
                  <p className="text-xs text-muted-foreground">Surface + Deep Tissue Healing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why it actually works:</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Unlike basic red-light therapy, MLS targets both <strong>surface & deep tissue inflammation simultaneously</strong>, making it more effective for chronic, hard-to-treat conditions like:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Endometriosis & PCOS</span>
                  </div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="h-5 w-5 text-primary" />
                    <span className="font-semibold">IBS, gut issues, hormonal imbalances</span>
                  </div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Chronic pain, fatigue & nervous system burnout</span>
                  </div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Injury recovery & joint inflammation</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
                alt="Woman receiving naturopathic consultation at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xl text-muted-foreground mb-8">
              It doesn't just mask symptoms, it works at a cellular level to:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" 
                alt="Naturopath consultation at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-background rounded-lg border">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Stimulate ATP (cell energy)</h3>
                    <p className="text-muted-foreground">Boost cellular energy production for faster healing</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-background rounded-lg border">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Improve circulation + detox pathways</h3>
                    <p className="text-muted-foreground">Enhanced blood flow and lymphatic drainage</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-background rounded-lg border">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Reduce inflammation and pain messengers</h3>
                    <p className="text-muted-foreground">Target inflammatory markers at their source</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-background rounded-lg border">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Calm the nervous system and support hormone balance</h3>
                    <p className="text-muted-foreground">Restore balance to your body's natural systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-primary/5 p-8 lg:p-12 rounded-2xl border border-primary/20">
            <div className="space-y-6">
              <div className="text-6xl lg:text-8xl font-bold text-primary mb-4">80%</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Over 80% of clients feel relief in just a few sessions, naturally.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                DM "LASER" for 40% OFF your first consultation.
              </p>
              <p className="text-2xl font-semibold text-foreground mb-8">
                Let's get your body back on your side
              </p>
              
              <Button size="lg" className="text-xl px-12 py-6 h-auto" asChild>
                <a href="/book-now">
                  <Calendar className="mr-3 h-6 w-6" />
                  Book Your Appointment Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience Natural Healing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your MLS Laser Therapy consultation today and start your journey to lasting relief.
          </p>
          <Button size="lg" variant="secondary" className="text-xl px-12 py-6 h-auto" asChild>
            <a href="/book-now">
              <Calendar className="mr-3 h-6 w-6" />
              Book Your Appointment
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LaserHealing;
