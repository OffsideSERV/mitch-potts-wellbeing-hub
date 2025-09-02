import SEO from "@/components/SEO";
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Heart, Brain, Shield, Activity } from 'lucide-react';

const WhatWeTreat = () => {
  const conditions = [
    "Allergies & Food Sensitivities",
    "Asthma", 
    "Children's Health",
    "Cardiovascular Health",
    "Chronic Inflammation & Pain",
    "Diabetes",
    "Detoxification (Environmental Toxins / Liver Support)",
    "Fatigue",
    "Headaches (Migraines)",
    "Gut Health (IBS, IBD, Bloating, Leaky Gut)",
    "Immune Health (Cold & Flu, Bacterial Infections)",
    "Insomnia (Poor Sleep Quality)",
    "Men's Health",
    "Mental Health (Stress, Anxiety & Depression)",
    "Musculoskeletal Issues",
    "Nutrition",
    "Skin Conditions",
    "Thyroid",
    "Weight Management",
    "Athletic Performance and Recovery"
  ];

  return (
    <>
      <SEO 
        title="What We Treat | Conditions & Health Issues | NXTLVL Health"
        description="Discover the wide range of health conditions we treat at NXTLVL Health. From gut health and fatigue to thyroid issues and weight management - we can help you feel your best."
        canonical="/what-we-treat"
        keywords="naturopath conditions Brisbane, health conditions treated, naturopathic medicine Brisbane, holistic health treatment"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Conditions We Treat at NXTLVL Health
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Looking to boost your energy, shed excess weight, manage a health condition, or uncover the root cause of your discomfort? We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* About Naturopathy */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-muted/30 rounded-lg p-8 mb-12">
                <div className="flex items-center mb-4">
                  <Heart className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-semibold text-foreground">
                    What is Naturopathy?
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Naturopathy combines cutting-edge scientific research with time-tested traditional medicine to deliver optimal health outcomes. Think of a Naturopath as your dedicated health coach – they work to identify the underlying cause of your health concerns, design a personalised treatment plan, and provide ongoing support to ensure you're achieving the best possible results.
                </p>
              </div>

              {/* CTA Section */}
              <div className="text-center mb-16">
                <p className="text-lg text-muted-foreground mb-8">
                  Here are just some of the conditions we can help with. To learn more, use our contact form to schedule phone call from a Naturopath call us at (07) 3180 8853 for a free 15-minute phone consultation with a Naturopath. Let us help you get back to feeling your best!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Free 15-Min Consult
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:0731808853">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (07) 3180 8853
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Read the conditions we treat below to find out if we can help you!
                </h2>
              </div>

              {/* Health Categories with Icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-background rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center mb-4">
                    <Activity className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-foreground">Gut Health</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    IBS, IBD, Bloating, Leaky Gut and digestive disorders
                  </p>
                </div>

                <div className="bg-background rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center mb-4">
                    <Brain className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-foreground">Mental Health</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Stress, Anxiety, Depression and sleep issues
                  </p>
                </div>

                <div className="bg-background rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-foreground">Immune Support</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Cold & Flu prevention, bacterial infections
                  </p>
                </div>
              </div>

              {/* Complete Conditions List */}
              <div className="bg-background rounded-lg p-8 shadow-sm border">
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  Complete List of Conditions We Treat
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {conditions.map((condition, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="text-center mt-12">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Ready to Start Your Health Journey?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Don't see your condition listed? We treat many more health concerns. Contact us to discuss how we can help you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Your Free Consultation
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/contact">
                      Contact Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatWeTreat;