
import React from 'react';
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, Leaf, TestTube, Salad, Zap, Target, Heart, Shield, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "NATUROPATHY",
      icon: <Leaf className="h-8 w-8 text-primary" />
    },
    {
      title: "FUNCTIONAL MEDICINE", 
      icon: <TestTube className="h-8 w-8 text-primary" />
    },
    {
      title: "NUTRITION",
      icon: <Salad className="h-8 w-8 text-primary" />
    },
    {
      title: "LASER THERAPY",
      icon: <Zap className="h-8 w-8 text-primary" />
    },
    {
      title: "PERSONAL TRAINING",
      icon: <Target className="h-8 w-8 text-primary" />
    }
  ];

  const whyChoose = [
    {
      title: "PERSONALISED PLANS",
      description: "We develop tailored plans integrating a range of options including genetic and blood analysis, naturopathic consultations, and comprehensive assessments to understand your body's systems synergistically.",
      icon: <Heart className="h-8 w-8 text-primary" />
    },
    {
      title: "HOLISTIC APPROACH",
      description: "Our approach includes nutrition, herbal medicine, targeted supplementation, and customised training programs to boost both mental and physical performance, prevent issues, and promote overall well-being.",
      icon: <Shield className="h-8 w-8 text-primary" />
    },
    {
      title: "UNLOCK YOUR FULL POTENTIAL",
      description: "Elevate your fitness, transform your lifestyle, and embrace a future filled with vitality. Experience NXTLVL Health's tailored health plans to unlock your full potential and reach your goals.",
      icon: <Star className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Naturopathic Services Brisbane | NXTLVL Health"
        description="Comprehensive naturopathic services including functional medicine, nutrition, laser therapy, and personal training. Tailored health plans for your well-being in Brisbane."
        canonical="/services"
        keywords="naturopathic services Brisbane, functional medicine Brisbane, nutrition Brisbane, laser therapy Brisbane, personal training Brisbane"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Our <span className="text-primary">Naturopathic Services</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  Tailored for Your Health Journey
                </h2>
                <p className="text-lg text-muted-foreground">
                  Naturopath, PT & functional medicine services for holistic wellness
                </p>
                <p className="text-lg text-muted-foreground">
                  With the guidance and expert knowledge of naturopathy Mitch at NXTLVL Health in New Farm your goals are well within reach. Start your journey towards optimal well-being and book an appointment today!
                </p>
                
                {/* Mobile Image - placed right after headline */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/b156db4f-02ff-40d6-948b-3ea5abb31621.png" />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight" asChild>
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-center">BOOK NOW</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-4 py-3 h-auto" asChild>
                  <a href="tel:0731808853">
                    <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                    Call Mitch
                  </a>
                </Button>
              </div>

              {/* Google 5 Star Badge */}
              <div className="mt-6">
                <script defer async src='https://cdn.trustindex.io/loader.js?46476cb4757e774210564760f2f'></script>
              </div>
            </div>
            
            {/* Desktop Image - only visible on large screens */}
            <div className="relative hidden lg:block">
              <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/b156db4f-02ff-40d6-948b-3ea5abb31621.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">WHY CHOOSE NXTLVL?</h2>
            <p className="text-xl text-muted-foreground">Personalised health plans for your well-being</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {whyChoose.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4 text-center">
                  <div className="mx-auto mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-center">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Your Health, Your Foundation Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">YOUR HEALTH, YOUR FOUNDATION</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We believe that your health is the foundation for a life lived at its absolute peak. Are you ready to pursue a stronger, healthier, and happier you?
            </p>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-base sm:text-lg px-6 py-4 h-auto" asChild>
              <a href="https://nxtlvlhealth.com.au/book-now/">
                <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                BOOK NOW
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
