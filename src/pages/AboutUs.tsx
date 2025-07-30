import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, CheckCircle, Star, BookOpen, Microscope, Brain } from "lucide-react";
const AboutUs = () => {
  return <div className="min-h-screen">
      <SEO title="About Mitch Potts - Brisbane's Most Trusted Naturopath | NXTLVL Health" description="Meet Mitch Potts, Brisbane's leading naturopath who has helped thousands feel better naturally. Discover his story, qualifications, and why patients trust him with their health journey." canonical="/about-us" keywords="Mitch Potts naturopath, Brisbane naturopath qualifications, trusted naturopath Brisbane, experienced naturopath, natural health practitioner Brisbane" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-accent/20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Brisbane's Most Trusted Naturopath
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Meet Mitch Potts
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The naturopath who listens when others won't. For over a decade, Mitch has helped thousands of people find real answers to their health problems using natural medicine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                    Book Your Free 15-Min Chat
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact">Get In Touch</a>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img src="/lovable-uploads/6e318a68-c5c0-4f4a-99c5-45a48e41649f.png" alt="Mitch Potts naturopath consultation at NXTLVL Health Brisbane" className="rounded-2xl shadow-2xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-foreground">2000+</h3>
              <p className="text-muted-foreground">Happy Patients</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-foreground">10+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-foreground">5.0</h3>
              <p className="text-muted-foreground">Star Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-foreground">100%</h3>
              <p className="text-muted-foreground">Care Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mitch's Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Why Mitch Became a Naturopath
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Like many of his patients, Mitch knows what it feels like when something's wrong but doctors can't find answers. Years ago, he struggled with his own health issues that traditional medicine couldn't solve.
                </p>
                <p>
                  That's when he discovered natural medicine. It changed his life completely. Now, he helps others who feel lost in the medical system find real solutions that work.
                </p>
                <p>
                  Mitch believes everyone deserves to feel healthy and happy. He takes time to listen to your story and find the root cause of your problems, not just treat symptoms.
                </p>
              </div>
            </div>
            <div>
              <img src="/lovable-uploads/48cc100b-f874-40cd-a474-951bb035ed9c.png" alt="Mitch Potts naturopath providing personalized care at NXTLVL Health Brisbane" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Mitch's Training & Qualifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mitch has spent years studying the best natural medicine practices. He keeps learning new ways to help people feel better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bachelor of Health Science</h3>
                <p className="text-muted-foreground">Naturopathy degree with honors</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Advanced Screening 
Training</h3>
                <p className="text-muted-foreground">Live blood analysis & functional testing</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gut Health Specialist</h3>
                <p className="text-muted-foreground">Advanced training in digestive disorders</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Mitch Different */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/lovable-uploads/284f6d80-2bc3-4ed3-937b-219b575000c5.png" alt="Mitch Potts naturopath explaining personalized treatment plan to patient" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                What Makes Mitch Different
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">He Really Listens</h3>
                    <p className="text-muted-foreground">Mitch gives you time to tell your story. No rushing, no interrupting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Finds the Real Problem</h3>
                    <p className="text-muted-foreground">He looks deeper than symptoms to find what's really causing your health issues.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Uses Natural Solutions</h3>
                    <p className="text-muted-foreground">Safe, effective treatments that work with your body, not against it.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Supports You Every Step</h3>
                    <p className="text-muted-foreground">You're never alone on your health journey. Mitch is there to guide and support you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Mitch's Areas of Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These are the health problems Mitch helps with most. If you don't see your issue here, just ask - he might still be able to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Gut Health & IBS", "Hormonal Imbalances", "Chronic Fatigue", "Anxiety & Stress", "Skin Problems", "Weight Management", "ADHD Support", "Thyroid Issues", "Digestive Problems"].map(expertise => <Card key={expertise} className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-4 text-center">
                  <p className="font-medium text-foreground">{expertise}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Book a free 15-minute chat with Mitch. No pressure, no sales talk - just a friendly conversation about how he might be able to help you feel better.
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
            <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
              Book Your Free 15-Min Chat
            </a>
          </Button>
        </div>
      </section>
    </div>;
};
export default AboutUs;