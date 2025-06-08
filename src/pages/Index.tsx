
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Leaf, Book, Thermometer, Weight, Microscope, Users, TestTube, BadgeCheck, Target, Shield, Zap, Coffee, Clock, Brain } from 'lucide-react';

const Index = () => {
  const primaryServices = [{
    title: "Naturopathy",
    description: "Holistic approach to health using natural remedies and lifestyle medicine",
    icon: <Leaf className="h-8 w-8 text-primary" />
  }, {
    title: "Nutrition Guidance",
    description: "Personalized nutrition plans to optimize your health and wellbeing",
    icon: <Heart className="h-8 w-8 text-primary" />
  }, {
    title: "Live Blood Analysis",
    description: "Advanced diagnostic technique to assess your body's nutritional status",
    icon: <Microscope className="h-8 w-8 text-primary" />
  }, {
    title: "Functional Medicine",
    description: "Root cause analysis and personalized treatment protocols",
    icon: <Book className="h-8 w-8 text-primary" />
  }, {
    title: "MLS Laser Therapy",
    description: "Advanced laser treatment for pain relief and tissue healing",
    icon: <Thermometer className="h-8 w-8 text-primary" />
  }, {
    title: "Personal Training",
    description: "Customized fitness programs to support your health journey",
    icon: <Weight className="h-8 w-8 text-primary" />
  }];
  
  const primaryConditions = [{
    name: "Gut Health",
    description: "Digestive disorders, IBS, SIBO, and microbiome optimization"
  }, {
    name: "Weight Loss",
    description: "Sustainable weight management through natural approaches"
  }, {
    name: "Fatigue",
    description: "Chronic fatigue, energy optimization, and adrenal support"
  }, {
    name: "Skin Conditions",
    description: "Eczema, acne, psoriasis, and other dermatological issues"
  }];
  
  const additionalConditions = ["Allergies & Food Sensitivities", "Asthma", "Children's Health", "Cardiovascular Health", "Chronic Inflammation & Pain", "Diabetes", "Detoxification (Environmental Toxins / Liver Support)", "Headaches (Migraines)", "Immune Health (Cold & Flu, Bacterial Infections)", "Insomnia (Poor Sleep Quality)", "Men's Health", "Mental Health (Stress, Anxiety & Depression)", "Musculoskeletal Issues", "Thyroid", "Athletic Performance and Recovery"];
  
  return <div className="min-h-screen bg-background">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full inline-block">
                  Best Naturopath in Brisbane - NXTLVL Health
                </h1>
                <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Not Feeling Like Yourself?{" "}
                  <span className="text-primary">Transform in 6 Weeks!</span>
                </h2>
                
                {/* Mobile Image - placed right after headline */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Mitchell Potts preparing natural herbal remedies at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/6e297df5-ddda-4561-bd5a-b77a997a6f3b.jpg" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Microscope className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Advanced Diagnostics</p>
                        <p className="text-xs text-muted-foreground">Live Blood Analysis • Natural Medicine</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I know exactly how frustrating it is to feel <strong>bloated, drained, and just out of it</strong>, but still have your doctor, friends, and family, tell you <strong>there's nothing wrong</strong>.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  That's why I'm here to tell you that <strong>you're not crazy</strong>, and I'm here to give you the <strong>answers you've been looking for</strong>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3 h-auto whitespace-normal leading-tight">
                  <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                  <span className="text-center">Book a Free 15-Minute Consult</span>
                </Button>
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3 h-auto">
                  Learn More
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
                    <p className="font-semibold">Advanced Diagnostics</p>
                    <p className="text-sm text-muted-foreground">Live Blood Analysis • Natural Medicine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Boosters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <Users className="h-8 w-8 text-primary mx-auto" />
              <div>
                <h3 className="text-xl font-bold text-foreground">1000+</h3>
                <p className="text-sm text-muted-foreground">Patients Helped</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <TestTube className="h-8 w-8 text-primary mx-auto" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Real Testing</h3>
                <p className="text-sm text-muted-foreground">No Guessing</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <BadgeCheck className="h-8 w-8 text-primary mx-auto" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Registered</h3>
                <p className="text-sm text-muted-foreground">Naturopath</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section that relates to them and really targets their pains and desires */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">If This Sounds Like You...</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You're smart, you've tried everything, but something still feels off. You're <strong>tired of feeling tired</strong>, 
              and you're ready for <strong>real answers</strong>—not just another band-aid solution.
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="/lovable-uploads/fe4256a1-0181-4c24-bf85-f8c27507574d.png" 
              alt="Woman feeling tired and unwell sitting on couch" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">You Wake Up Tired Every Morning</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">No matter how many hours you sleep, you <strong>hit snooze twice</strong> and still feel completely groggy</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Coffee className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">You <strong>need coffee just to function</strong>, then crash by 2pm every single day</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Brain fog makes you <strong>forget things mid-sentence</strong> during important meetings</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Your Body Feels Out of Control</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground"><strong>Bloated and uncomfortable</strong> after every meal, no matter what you eat</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Your skin breaks out randomly and your <strong>clothes feel tight</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">You're <strong>doing everything "right"</strong> but still feel completely wrong</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">You've Head It All Before</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Your doctor says <strong>"you're fine"</strong> but you know something's off. You've tried gut cleanses, 
              elimination diets, and expensive supplements—but <strong>nothing really worked</strong>. You're tired of 
              wasting money on generic plans that don't understand YOUR body.
            </p>
            <p className="text-xl font-semibold text-primary">
              You want someone who <strong>actually listens</strong>. Someone who gets it. Someone who can finally give you <strong>real answers</strong>.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Then You've Come To The Right Place</h2>
          </div>
        </div>
      </section>

      {/* 3. What is Naturopathy Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Finally, Someone Who Gets It</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You've been <strong>dismissed, misunderstood, and told it's all in your head</strong>. But here's the truth: 
              when your body isn't working right, there's <strong>always a reason</strong>—and I know how to find it.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Why You Keep Feeling Stuck</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">They Only Treat Symptoms</h4>
                    <p className="text-muted-foreground">Most doctors give you a pill for every symptom but <strong>never ask WHY</strong> you're sick in the first place</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Your Body Is Crying For Help</h4>
                    <p className="text-muted-foreground">That fatigue, bloating, and brain fog? It's your body <strong>screaming that something's wrong</strong>—but nobody's listening</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">You Deserve To Feel Amazing</h4>
                    <p className="text-muted-foreground"><strong>Imagine waking up energized</strong>, thinking clearly, and feeling comfortable in your own skin again</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/lovable-uploads/6e297df5-ddda-4561-bd5a-b77a997a6f3b.jpg" alt="Natural herbal remedies and naturopathic medicine preparation" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Real Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No more band-aids. We find the <strong>root cause</strong> and fix it using natural medicine that actually works
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">You're Finally Heard</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Someone who <strong>actually listens</strong> to your story and believes what you're experiencing is real
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Advanced testing shows us <strong>exactly what's wrong</strong> so we can create your personalized healing plan
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. About Section */}
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
              <img alt="Mitchell Potts performing microscopy analysis at NXTLVL Health clinic" className="rounded-2xl shadow-lg w-full h-auto" src="/lovable-uploads/aa4b685d-0956-463f-ad98-180c34dbdb0d.png" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Comprehensive Health Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A full range of natural health services designed to support your wellness journey at NXTLVL Health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryServices.map((service, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* 6. Primary Conditions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Specialized Treatment Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mitch specializes in treating these key health conditions with proven natural approaches at NXTLVL Health
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {primaryConditions.map((condition, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{condition.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {condition.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>

          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Additional Conditions Treated</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {additionalConditions.map((condition, index) => <Badge key={index} variant="secondary" className="justify-start p-3 text-sm">
                  {condition}
                </Badge>)}
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
              <Button size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free 15-Minute Consult
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3">
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

      {/* 7. Footer */}
      <footer className="py-8 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm">
            © 2024 NXTLVL Health - Mitchell Potts Naturopathy. All rights reserved. | Brisbane, Queensland, Australia
          </p>
        </div>
      </footer>
    </div>;
};

export default Index;
