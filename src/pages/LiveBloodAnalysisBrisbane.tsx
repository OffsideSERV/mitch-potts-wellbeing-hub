import React, { useState } from 'react';
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, ChevronDown, ChevronUp, Microscope, Heart, TestTube, Eye, Activity, Beaker } from 'lucide-react';

const LiveBloodAnalysisBrisbane = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const diagnosticIndicators = [
    {
      title: "GUT HEALTH DYSFUNCTION OR LEAKY GUT SYNDROME",
      description: "Live blood analysis can reveal signs of digestive dysfunction and intestinal permeability, helping us understand how your gut health is affecting your overall wellbeing.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "HORMONAL IMBALANCES", 
      description: "Through blood cell patterns and formations, we can identify potential hormonal disruptions that may be affecting your energy, mood, and overall health.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    },
    {
      title: "MINERAL DEFICIENCIES",
      description: "Your blood cells can show us signs of mineral imbalances that standard tests might miss, helping us target specific nutritional needs.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "HEAVY METAL TOXICITY",
      description: (
        <div>
          Live blood screening can reveal cellular stress patterns that may indicate heavy metal burden affecting your body's natural detoxification processes.
          <br /><br />
          <a 
            href="https://my.clevelandclinic.org/health/diseases/23424-heavy-metal-poisoning-toxicity" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline"
          >
            Click to learn more about Heavy Metal Toxicity
          </a>
        </div>
      ),
      icon: <Eye className="h-6 w-6 text-primary" />
    },
    {
      title: "NUTRITIONAL DEFICIENCIES",
      description: "See real-time how your cells are functioning and identify specific vitamin and mineral deficiencies that could be impacting your health.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "IMMUNE RESPONSE ISSUES",
      description: "Your white blood cells and overall blood terrain can show us how well your immune system is functioning and responding to stressors.",
      icon: <Beaker className="h-6 w-6 text-primary" />
    },
    {
      title: "EARLY SIGNS OF CHRONIC PAIN OR INFLAMMATION",
      description: "Live blood analysis can help identify inflammatory markers and patterns that may contribute to chronic pain conditions.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "FUNCTIONAL IMBALANCES THAT AREN'T FLAGGED IN TYPICAL MEDICAL TESTS",
      description: "Many functional health issues exist in the grey area between wellness and disease, and live blood analysis can help identify these subtle imbalances.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    }
  ];

  const bloodScreeningFindings = [
    {
      title: "POOR RED BLOOD CELL FORMATION",
      description: "We can see the shape, size, and quality of your red blood cells, revealing potential issues with oxygen transport and cellular health.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "STRESSED OR LOW-FUNCTIONING WHITE CELLS",
      description: "Your white blood cells tell us about your immune system's current state and how well it's handling stress and potential threats.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "SIGNS OF OXIDATIVE STRESS AND TOXICITY",
      description: "Live blood analysis reveals cellular damage from free radicals and toxins that may be affecting your energy and overall health.",
      icon: <TestTube className="h-6 w-6 text-primary" />
    },
    {
      title: "CLOTTING TENDENCIES",
      description: "We can observe how your blood flows and clots, which gives us insights into circulation and cardiovascular health.",
      icon: <Eye className="h-6 w-6 text-primary" />
    },
    {
      title: "DIGESTIVE ISSUES",
      description: "Your blood can show signs of digestive dysfunction, food sensitivities, and gut health imbalances that affect your whole body.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "POSSIBLE VITAMIN AND MINERAL IMBALANCES",
      description: "Live blood screening helps identify specific nutritional gaps that may be contributing to your symptoms and health concerns.",
      icon: <Beaker className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Live Blood Analysis in Brisbane | Finally Get Answers"
        description="Tired, bloated, or just feel off? Get a live blood analysis in Brisbane to discover what's been holding you back and heal the root cause. Book a consult today!"
        canonical="/services/live-blood-analysis-brisbane"
        keywords="live blood analysis Brisbane, blood screening Brisbane, naturopath Brisbane, gut health Brisbane, nutritional deficiencies testing"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Live Blood Analysis in <span className="text-primary">Brisbane</span> | Real-Time Insights into Your Health
                </h1>
                
                {/* Mobile Image - placed right after headline */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Microscope className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Live Blood Screening</p>
                        <p className="text-xs text-muted-foreground">Gut Health • Natural Therapies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight" asChild>
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-center">Book an Appointment Today</span>
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
              <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Microscope className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Live Blood Screening</p>
                    <p className="text-sm text-muted-foreground">Gut Health • Natural Therapies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See What's Really Going On Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">See What's Really Going On Inside Your Body</h2>
          </div>

          {/* Mobile Image positioned after heading */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Tired of feeling <strong>bloated, foggy, or low on energy</strong>, and getting no answers?
                </p>
                 <p>
                   At NXTLVL Health in New Farm, we offer <strong>live blood analysis Brisbane locals trust</strong> to finally get clarity on their health. With just a few drops of blood, you'll see your own live blood cells on screen, in real time. This advanced diagnostic tool works perfectly alongside our <a href="/functional-medicine" className="text-primary hover:underline">functional medicine approach</a> and complements treatments like <a href="/services/mls-laser-therapy-treatment-brisbane" className="text-primary hover:underline">MLS laser therapy</a> for comprehensive healing.
                 </p>
                <p>
                  Using dark field microscopy, Mitch, our qualified naturopath and clinical health professional, shows you what your <strong>red blood cells, white blood cells, and overall blood terrain</strong> are really saying about your health. Whether it's signs of oxidative stress, free radical damage, nutritional deficiencies, or maybe even immune system imbalances, you'll walk away with <strong>answers you can actually act on</strong>.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/c8bb9855-7c0b-45b1-8e50-ae2da28905ea.png" alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Screening Tool Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">An Advanced Screening Tool That Makes Healing Personal</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                This isn't generic advice. <strong>Live blood cell analysis will help us understand your body</strong> in a more dynamic, personal way than standard pathology tests alone.
              </p>
              <p>
                We use live blood analysis as a <strong>key screening tool to help guide us</strong> when creating your personalised treatment plan. We may pick up indicators of:
              </p>
            </div>
          </div>

          {/* Add image after heading and description */}
          <div className="mb-12">
            <img src="/lovable-uploads/0aadec6a-7f1f-4a21-854c-39d8c3a218d0.png" alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" width={320} height={240} loading="lazy" />
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {diagnosticIndicators.map((indicator, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/20 transition-colors"
                  onClick={() => toggleDropdown(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {indicator.icon}
                      <CardTitle className="text-lg">{indicator.title}</CardTitle>
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
                      {indicator.description}
                    </CardDescription>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              It's not a standalone test, but when used alongside thorough case taking and other testing, it helps us <strong>treat the root cause of your symptoms</strong>. Whether you're seeking <a href="/what-we-treat/weight-loss-naturopath-brisbane" className="text-primary hover:underline">natural weight loss solutions</a> or <a href="/services/personal-trainer-newstead" className="text-primary hover:underline">personalized fitness guidance</a>, this analysis provides valuable insights to optimize your health journey.
            </p>
          </div>
        </div>
      </section>

      {/* What Does Live Blood Screening Show Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Does Live Blood Screening Show?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Using a blood sample under high magnification, Mitch walks you through signs of:
            </p>
          </div>

          <div className="mb-12">
            <img src="/lovable-uploads/778efa12-2a50-4463-9137-b9811fb860b1.png" alt="Live blood screening equipment and analysis at NXTLVL Health clinic" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {bloodScreeningFindings.map((finding, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/20 transition-colors"
                  onClick={() => toggleDropdown(index + 20)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {finding.icon}
                      <CardTitle className="text-lg">{finding.title}</CardTitle>
                    </div>
                    {openDropdown === index + 20 ? 
                      <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    }
                  </div>
                </CardHeader>
                {openDropdown === index + 20 && (
                  <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {finding.description}
                    </CardDescription>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              You'll see all this right there on his screen, and you'll actually <strong>understand what it means</strong> because he explains it in detail for you.
            </p>
          </div>
        </div>
      </section>

      {/* Whole-Body Strategy Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">More Than Blood | A Whole-Body Strategy for Better Health</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                At NXTLVL Health, <strong>live blood analysis is just the first step</strong>.
              </p>
              <p>
                From there, we build a comprehensive treatment plan that brings together:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-left mt-8">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Herbal Medicine</strong></span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Clinical Nutrition</strong></span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Lifestyle changes</strong></span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Food Intolerance Testing</strong></span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Hormone Testing</strong></span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Micronutrient Testing</strong></span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Digestive Function Testing</strong></span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Personalised supplementation</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <img src="/lovable-uploads/611cabfc-2300-478c-a789-817b8bac2f8e.png" alt="Naturopath checking patient vitals at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="text-center">
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              This whole-body approach helps you understand and heal the root causes of your symptoms so you can <strong>feel amazing again</strong>.
            </p>
            <Button size="lg" className="text-base sm:text-lg px-6 py-4 h-auto" asChild>
              <a href="https://nxtlvlhealth.com.au/book-now/">
                <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                Book an Appointment Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Ready to See What's Going On Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to See What's Going On Inside Your Body?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                If you're tired of feeling off and want answers that actually help, <strong>live blood analysis at NXTLVL Health</strong> could be exactly what you've been looking for.
              </p>
              <p>
                Our clinic is located in <strong>New Farm, Brisbane</strong>, and we also offer telehealth consultations for those who can't make it in person.
              </p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base sm:text-lg px-6 py-4 h-auto" asChild>
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                  Book an Appointment Today
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 py-4 h-auto" asChild>
                <a href="tel:0731808853">
                  <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                  Call Mitch Now
                </a>
              </Button>
            </div>
            
            <div className="space-y-2 text-muted-foreground">
              <p><strong>NXTLVL Health – Naturopath</strong></p>
              <p>2/665 Brunswick St, New Farm, QLD 4005</p>
              <p>(07) 3180 8853</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveBloodAnalysisBrisbane;
