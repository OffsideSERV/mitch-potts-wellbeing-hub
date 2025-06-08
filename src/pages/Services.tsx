
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, ChevronDown, ChevronUp, Microscope, Heart, TestTube, Eye, Activity, Beaker } from 'lucide-react';

const Services = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const testingServices = [
    {
      title: "CELLULAR HEALTH SCAN",
      description: "This is a quick, painless scan that shows us your hydration, fat/muscle levels, inflammation, and more—so we know exactly how well your body is performing.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "GENE TESTING", 
      description: "We'll look at your DNA to see how your body handles food, stress, detoxing, and more. Then, we'll create you a plan that's built around your biology.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    },
    {
      title: "BLOOD TESTING",
      description: "We check key markers like your iron, sugar, hormones, vitamins, and more. It gives us the real data to build the right plan for you and your body and track your progress.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "IRIDOLOGY",
      description: "Your eyes can actually show signs of stress or imbalance. We look at patterns in your iris to learn more about how your body is doing.",
      icon: <Eye className="h-6 w-6 text-primary" />
    },
    {
      title: "PHYSICAL HEALTH SCREENING",
      description: "We'll check your blood pressure, heart rate, strength, posture, and mobility so we know what your body really needs to feel strong and supported.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "FUNCTIONAL TESTING",
      description: "We'll test your stool, urine, skin, and more to spot gut issues, hormone imbalances, or detox blocks—then give you the exact steps to fix them.",
      icon: <Beaker className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Live Blood Analysis <span className="text-primary">Naturopath in Brisbane</span>
                </h1>
                
                {/* Mobile Image - placed right after headline */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Mitchell Potts preparing natural herbal remedies at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/6e297df5-ddda-4561-bd5a-b77a997a6f3b.jpg" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Microscope className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Live Blood Analysis</p>
                        <p className="text-xs text-muted-foreground">Advanced Testing • Natural Medicine</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight" asChild>
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-center">Book an Appointment Today!</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-4 py-3 h-auto" asChild>
                  <a href="tel:0731808853">
                    <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                    Call Mitch
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Desktop Image - only visible on large screens */}
            <div className="relative hidden lg:block">
              <img alt="Mitchell Potts preparing natural herbal remedies at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/6e297df5-ddda-4561-bd5a-b77a997a6f3b.jpg" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Microscope className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Live Blood Analysis</p>
                    <p className="text-sm text-muted-foreground">Advanced Testing • Natural Medicine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Naturopathy Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Naturopathy Services in New Farm, Brisbane</h2>
          </div>

          {/* Mobile Image positioned after heading */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/1bd48616-2927-4298-ac11-2883825577b5.png" alt="Professional consultation at NXTLVL Health showing personalised patient care" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Are you sick of feeling <strong>tired, bloated, foggy, or just off</strong>—and getting no answers?
                </p>
                <p>
                  We get it. That's why here at NXTLVL Health, registered live blood analysis Naturopath Mitch builds a plan for you that <strong>actually works with your body</strong>.
                </p>
                <p>
                  He blends nature and real science to treat the <strong>root cause of your problems</strong>—not just cover up the symptoms. Using tools like nutrition, herbal medicine, lifestyle coaching, live blood analysis, and smart testing, he helps your body get back to being balance.
                </p>
                <p>
                  Whether you're dealing with gut problems, burnout, poor sleep, or mood swings—naturopathy helps <strong>your whole body heal</strong>, not just one part of it.
                </p>
                <p>
                  <a href="https://www.torrens.edu.au/stories/blog/health/naturopathy-explained#:~:text=What%20does%20a%20Naturopath%20do,whole%20health%20of%20the%20individual." className="text-primary hover:underline font-semibold">Learn more about Naturopathy</a>
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/1bd48616-2927-4298-ac11-2883825577b5.png" alt="Professional consultation at NXTLVL Health showing personalised patient care" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Approach Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Nutrition, Movement, Live Blood Analysis, and More</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Naturopathy isn't just one thing. It's a <strong>full-body approach</strong>. We use food, herbs, movement, mindset and testing to bring your body back to life.
              </p>
              <p>
                This isn't one-size-fits-all. We partner with you to build a plan that feels <strong>simple, doable, and works long-term</strong>.
              </p>
              <p>
                In addition to our naturopathy services, we also offer a range of holistic services in Brisbane such as{' '}
                <a href="https://nxtlvlhealth.com.au/personal-trainer-new-farm/" className="text-primary hover:underline font-semibold">personal training</a>,{' '}
                <a href="https://nxtlvlhealth.com.au/mls-laser-therapy-treatment-brisbane/" className="text-primary hover:underline font-semibold">MLS laser treatment</a>, and{' '}
                <a href="https://nxtlvlhealth.com.au/functional-medicine-brisbane/" className="text-primary hover:underline font-semibold">functional medicine</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unexplained Symptoms Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">EXPERIENCING UNEXPLAINED SYMPTOMS?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              At NXTLVL Health in New Farm, we go way deeper than <strong>"you're fine"</strong>, which is probably something you're sick of. We find out <strong>what's really going on</strong>—and then give you a step-by-step plan to actually fix it.
            </p>
          </div>

          <div className="mb-12">
            <img src="/lovable-uploads/aa4b685d-0956-463f-ad98-180c34dbdb0d.png" alt="Mitchell Potts performing microscopy analysis at NXTLVL Health clinic" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>
        </div>
      </section>

      {/* Real Testing Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Real Testing By a Naturopathic Specialist</h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {testingServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/20 transition-colors"
                  onClick={() => toggleDropdown(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {service.icon}
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                    {openDropdown === index ? 
                      <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    }
                  </div>
                </CardHeader>
                {openDropdown === index && (
                  <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Real Answers About Your Health?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Book your consultation with Mitch and discover what's really going on in your body through <strong>advanced naturopathic testing and live blood analysis</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3" asChild>
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book an Appointment Today!
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3" asChild>
                <a href="tel:0731808853">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Mitch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
