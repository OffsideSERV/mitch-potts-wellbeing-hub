import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Activity, Brain, Microscope, MapPin, Phone, BookOpen } from "lucide-react";

const FunctionalMedicine = () => {
  return (
    <>
      <SEO 
        title="Functional Medicine Brisbane | Root Cause Health Solutions"
        description="Expert functional medicine practitioner in Brisbane. Advanced testing and personalised treatment plans to address root causes of chronic health conditions."
        canonical="/functional-medicine"
        keywords="functional medicine Brisbane, root cause medicine, functional medicine practitioner, holistic health Brisbane, integrative medicine"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  <span className="text-primary">Functional Medicine</span> In Brisbane
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  Feel Off and Can't Figure Out Why? This Is Where It Changes.
                </h2>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Functional medicine practitioner at NXTLVL Health Brisbane" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png"
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Brain className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Functional Medicine</p>
                        <p className="text-xs text-muted-foreground">Root Cause • Personalised • Effective</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                   <p>
                     At NXTLVL Health, our <strong>Functional Medicine in Brisbane</strong> doesn't just treat your symptoms, it's much more than that. We actually help you find out why you feel tired, bloated, foggy, or just off—then <strong>fix it properly</strong>. Our comprehensive approach includes advanced tools like <a href="/services/live-blood-analysis-brisbane" className="text-primary hover:underline">live blood analysis</a> and <a href="/services/mls-laser-therapy-treatment-brisbane" className="text-primary hover:underline">MLS laser therapy</a> to support your healing journey.
                   </p>
                  <p>
                    We're a <strong>functional medicine clinic in New Farm</strong> that uses a simple, whole-body approach. Instead of quick fixes like most solutions out there, we look at how your <strong>gut, brain, hormones, skin, and energy all connect together</strong>.
                  </p>
                   <p>
                     You'll get a <strong>full health plan that's made just for you</strong>, no one else—using real tests, not guesses. Whether you need <a href="/what-we-treat/weight-loss-naturopath-brisbane" className="text-primary hover:underline">sustainable weight loss support</a> or <a href="/services/personal-trainer-newstead" className="text-primary hover:underline">personalised fitness guidance</a>, we have the tools and expertise to help. If you're sick of that "not quite right" feeling, <strong>this is where you start feeling like you again</strong>.
                   </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight"
                >
                  <a href="/book-now">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">BOOK NOW</span>
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  asChild 
                  className="text-base sm:text-lg px-4 py-3 h-auto"
                >
                  <a href="#learn-more">
                    <BookOpen className="mr-2 h-4 w-4 flex-shrink-0" />
                    Learn More
                  </a>
                </Button>
              </div>

              {/* Google 5 Star Badge */}
              <div className="mt-6">
                <script defer async src='https://cdn.trustindex.io/loader.js?46476cb4757e774210564760f2f'></script>
              </div>
            </div>
            
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                alt="Functional medicine practitioner at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Brain className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Functional Medicine</p>
                    <p className="text-sm text-muted-foreground">Root Cause • Personalised • Effective</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Functional Medicine Section */}
      <section className="py-20 px-4" id="learn-more">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Our Functional Medicine Naturopathic Center in Brisbane?</h2>
          </div>

          {/* Image under heading */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/0aadec6a-7f1f-4a21-854c-39d8c3a218d0.png" 
              alt="Functional medicine testing and analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
              width={320}
              height={240}
              loading="lazy"
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Most health problems start when your body falls out of balance. This can be because of things like <strong>bad sleep, unhealthy food, a lot of stress, toxins in your body, or not moving enough</strong>.
            </p>
            <p>
              At NXTLVL Health, we'll <strong>find exactly what's out of balance</strong> and help your body fix it. We use <strong>nutrition, herbs, smart testing, and personalised plans</strong> to bring your body back to where it needs to be.
            </p>
            <p>
              Functional medicine really works because it <strong>treats the root cause of your problems, not just the surface</strong>. Your body already knows how to heal. We just help it do exactly that.
            </p>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="text-lg px-8 py-4">
              <a href="/book-now">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                </svg>
                BOOK NOW
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tired Bloated Foggy Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Tired? Bloated? Foggy? You're Not Crazy—<br />
                <span className="text-primary">You're Out of Balance.</span>
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  NXTLVL Health is a <strong>Naturopath based in New Farm</strong> that heals people who feel <strong>tired, bloated, foggy, or unwell</strong>—and can't find answers anywhere.
                </p>
                <p>
                  We go deep to <strong>find the root problem</strong>, then give you a <strong>custom plan to fix it</strong>.
                </p>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img 
                src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" 
                alt="Practitioner of Functional Medicine in Brisbane standing in his office and smiling" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inside Our Functional Naturopathic Clinic Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="relative mb-8 lg:mb-0">
              <img 
                src="/lovable-uploads/778efa12-2a50-4463-9137-b9811fb860b1.png" 
                alt="Practitioner at a Functional Naturopathic clinic looking through a microscope" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Inside Our <span className="text-primary">Functional Naturopathic Clinic</span> in New Farm
              </h2>
              
              <div className="grid gap-4">
                {[
                  "LIVE BLOOD READING",
                  "CELLULAR HEALTH SCAN", 
                  "GENE TESTING",
                  "BLOOD TESTING",
                  "IRIDOLOGY",
                  "PHYSICAL HEALTH SCREENING",
                  "FUNCTIONAL TESTING"
                ].map((service, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-foreground">{service}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Can You Find Us Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Where Can You Find Us?</h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-8 text-center space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <span className="text-xl font-semibold">NXTLVL Health – Naturopath</span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span className="text-lg">2/665 Brunswick St, New Farm, QLD 4005</span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <a href="tel:0731808853" className="text-lg text-primary hover:underline">
                      (07) 3180 8853
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <Button asChild className="text-lg px-8 py-4">
                    <a href="/book-now">
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                      </svg>
                      Book Your Consultation Today
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default FunctionalMedicine;