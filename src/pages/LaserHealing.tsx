
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { Calendar, Zap, Target, Heart, Sparkles, Gift, Clock } from 'lucide-react';

const LaserHealing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Finally Get Relief From Chronic Pain | MLS Laser Therapy Brisbane"
        description="Tired of painful periods, bloating & fatigue? MLS Laser Therapy targets inflammation naturally. 80% of women feel relief in just 3 sessions. Book now."
        canonical="/laser-healing"
        keywords="chronic pain relief Brisbane, endometriosis treatment, PCOS natural treatment, gut health, hormone balance Brisbane"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Zap className="h-4 w-4" />
                  <span>Pain-Free Living Starts Here</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  TIRED OF LIVING IN <span className="text-primary">PAIN</span>?
                </h1>
                
                <p className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  You're not broken. You just need the right solution.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  If you're exhausted from dealing with:
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-foreground font-medium">Periods that ruin your week every month</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-foreground font-medium">Bloating that makes you avoid social events</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-foreground font-medium">Constant tiredness no matter how much you sleep</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <p className="text-xl font-semibold text-foreground mb-2">
                  There's a natural way to get your life back.
                </p>
                <p className="text-muted-foreground">
                  <strong>MLS Laser Therapy</strong> uses special light to heal your body from the inside out. No drugs, no surgery, no side effects. Just real relief that lasts.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg border border-orange-200 mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Gift className="h-5 w-5 text-yellow-300" />
                  <span className="font-bold text-lg">40% OFF Initial Consultation</span>
                </div>
                <p className="text-center text-sm opacity-90">
                  Limited time offer - Save on your first MLS Laser session
                </p>
              </div>
              
              <Button size="lg" className="text-lg px-8 py-4 h-auto w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700" asChild>
                <a href="/book-now">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Healing Session
                </a>
              </Button>
            </div>
            
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/52dcb3cf-1433-453e-a73e-21c9ea77037b.png" 
                alt="Professional administering MLS Laser therapy treatment for pain relief" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border-2 border-primary/20">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Advanced Light Therapy</p>
                    <p className="text-sm text-muted-foreground">Targets pain at the source</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Image */}
          <div className="relative lg:hidden mt-8">
            <img 
              src="/lovable-uploads/4748db27-c782-4bc2-b09d-d93a2b5b2433.png" 
              alt="Woman receiving natural MLS Laser treatment for pain relief" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute -bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg border-2 border-primary/20">
              <div className="flex items-center space-x-3">
                <Target className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Advanced Light Therapy</p>
                  <p className="text-xs text-muted-foreground">Targets pain at the source</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why this works when nothing else has:</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Most treatments only treat symptoms. MLS Laser goes deeper - it fixes the <strong>root cause of your pain</strong> by healing damaged cells and reducing inflammation throughout your body.
              </p>
              
              <p className="text-lg text-muted-foreground">
                This means real relief for conditions that seem impossible to fix:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Endometriosis pain</span>
                  </div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="h-5 w-5 text-primary" />
                    <span className="font-semibold">PCOS symptoms</span>
                  </div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Chronic fatigue</span>
                  </div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Gut problems</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
                alt="Happy woman after successful natural treatment" 
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Here's what happens in your body:</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The special light waves work deep inside your cells to:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" 
                alt="Professional consultation for natural healing" 
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
                    <h3 className="font-semibold text-lg mb-1">Give your cells more energy</h3>
                    <p className="text-muted-foreground">So they can heal and repair themselves properly</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-background rounded-lg border">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Boost blood flow</h3>
                    <p className="text-muted-foreground">To wash away toxins and bring in fresh nutrients</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-background rounded-lg border">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Stop inflammation</h3>
                    <p className="text-muted-foreground">The real cause of most chronic pain and symptoms</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-background rounded-lg border">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Calm your nervous system</h3>
                    <p className="text-muted-foreground">So your hormones can balance naturally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-primary/5 p-8 lg:p-12 rounded-2xl border border-primary/20">
            <div className="space-y-6">
              <div className="text-6xl lg:text-8xl font-bold text-primary mb-4">8 out of 10</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                women feel real relief after just 3 sessions
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Imagine waking up without pain. Having energy to do what you love. Feeling like yourself again.
              </p>
              <p className="text-lg font-medium text-foreground mb-8">
                That's what's waiting for you.
              </p>
              
              <Button size="lg" className="text-xl px-12 py-6 h-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700" asChild>
                <a href="/book-now">
                  <Calendar className="mr-3 h-6 w-6" />
                  Start Your Healing Journey
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
            Ready to Feel Like Yourself Again?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop suffering in silence. Book your MLS Laser session today and take the first step to getting your life back.
          </p>
          <div className="bg-orange-500/20 p-6 rounded-lg border border-orange-300 mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="h-6 w-6 text-orange-300" />
              <span className="text-2xl font-bold text-orange-100">40% OFF INITIAL CONSULTATION</span>
            </div>
            <p className="text-lg opacity-90">
              Limited time offer - Book your session today
            </p>
          </div>
          
          <Button size="lg" variant="secondary" className="text-xl px-12 py-6 h-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0" asChild>
            <a href="/book-now">
              <Calendar className="mr-3 h-6 w-6" />
              Book Your Session Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LaserHealing;
