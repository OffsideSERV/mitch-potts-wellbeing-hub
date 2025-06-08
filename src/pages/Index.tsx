import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Leaf, Book, Thermometer, Weight, Microscope } from 'lucide-react';

const Index = () => {
  const primaryServices = [
    {
      title: "Naturopathy",
      description: "Holistic approach to health using natural remedies and lifestyle medicine",
      icon: <Leaf className="h-8 w-8 text-primary" />
    },
    {
      title: "Nutrition Guidance",
      description: "Personalized nutrition plans to optimize your health and wellbeing",
      icon: <Heart className="h-8 w-8 text-primary" />
    },
    {
      title: "Live Blood Analysis",
      description: "Advanced diagnostic technique to assess your body's nutritional status",
      icon: <Microscope className="h-8 w-8 text-primary" />
    },
    {
      title: "Functional Medicine",
      description: "Root cause analysis and personalized treatment protocols",
      icon: <Book className="h-8 w-8 text-primary" />
    },
    {
      title: "MLS Laser Therapy",
      description: "Advanced laser treatment for pain relief and tissue healing",
      icon: <Thermometer className="h-8 w-8 text-primary" />
    },
    {
      title: "Personal Training",
      description: "Customized fitness programs to support your health journey",
      icon: <Weight className="h-8 w-8 text-primary" />
    }
  ];

  const primaryConditions = [
    { name: "Gut Health", description: "Digestive disorders, IBS, SIBO, and microbiome optimization" },
    { name: "Weight Loss", description: "Sustainable weight management through natural approaches" },
    { name: "Fatigue", description: "Chronic fatigue, energy optimization, and adrenal support" },
    { name: "Skin Conditions", description: "Eczema, acne, psoriasis, and other dermatological issues" }
  ];

  const additionalConditions = [
    "Allergies & Food Sensitivities",
    "Asthma",
    "Children's Health",
    "Cardiovascular Health",
    "Chronic Inflammation & Pain",
    "Diabetes",
    "Detoxification (Environmental Toxins / Liver Support)",
    "Headaches (Migraines)",
    "Immune Health (Cold & Flu, Bacterial Infections)",
    "Insomnia (Poor Sleep Quality)",
    "Men's Health",
    "Mental Health (Stress, Anxiety & Depression)",
    "Musculoskeletal Issues",
    "Thyroid",
    "Athletic Performance and Recovery"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  NXTLVL Health - Brisbane Clinic
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Advanced Natural Health Solutions with{" "}
                  <span className="text-primary">Mitchell Potts</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Experience cutting-edge naturopathic care at NXTLVL Health. Mitch combines advanced 
                  diagnostic techniques like Live Blood Analysis with personalized natural medicine 
                  to help you achieve optimal wellness.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=600" 
                alt="Mitchell Potts preparing natural herbal remedies at NXTLVL Health"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Microscope className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Advanced Diagnostics</p>
                    <p className="text-sm text-muted-foreground">Live Blood Analysis • Natural Medicine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Mitchell "Mitch" Potts</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your dedicated naturopath at NXTLVL Health, combining traditional healing wisdom 
              with modern diagnostic technology for personalized healthcare solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Why Choose Mitch at NXTLVL Health?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Microscope className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Advanced Live Blood Analysis</h4>
                    <p className="text-muted-foreground">Real-time assessment of your blood's nutritional status and cellular health</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Custom Herbal Medicine</h4>
                    <p className="text-muted-foreground">Personalized herbal formulations prepared specifically for your health needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Holistic Approach</h4>
                    <p className="text-muted-foreground">Addressing root causes through comprehensive natural health solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&h=600" 
                alt="Mitchell Potts at NXTLVL Health clinic"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Blood Analysis Showcase */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Advanced Live Blood Analysis</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience cutting-edge diagnostic technology that reveals the real-time state of your cellular health
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">What Live Blood Analysis Reveals</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Nutritional deficiencies and cellular metabolism</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Immune system function and inflammatory markers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Blood circulation and oxygenation levels</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Digestive health and toxin load assessment</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=600" 
                alt="Mitch performing Live Blood Analysis at NXTLVL Health"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Comprehensive Health Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A full range of natural health services designed to support your wellness journey at NXTLVL Health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Natural Medicine Preparation */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Custom Herbal Medicine</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch Mitch prepare personalized herbal formulations using high-quality natural ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=300" 
                alt="Mitch preparing herbal tinctures"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&h=300" 
                alt="Natural medicine bottles and preparations"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=400&h=300" 
                alt="Herbal medicine consultation process"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Primary Conditions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Specialized Treatment Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mitch specializes in treating these key health conditions with proven natural approaches at NXTLVL Health
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {primaryConditions.map((condition, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{condition.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {condition.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Additional Conditions Treated</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {additionalConditions.map((condition, index) => (
                <Badge key={index} variant="secondary" className="justify-start p-3 text-sm">
                  {condition}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Start Your Health Journey at NXTLVL Health</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to experience advanced natural healthcare? Book a consultation with Mitch at NXTLVL Health 
              and discover how cutting-edge diagnostics and personalized natural medicine can transform your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Call: (07) 3000 0000
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">NXTLVL Health</h3>
              <p className="text-muted-foreground">
                Brisbane, Queensland<br />
                Australia
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Contact</h3>
              <p className="text-muted-foreground">
                Phone: (07) 3000 0000<br />
                Email: info@nxtlvlhealth.com.au
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm">
            © 2024 NXTLVL Health - Mitchell Potts Naturopathy. All rights reserved. | Brisbane, Queensland, Australia
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
