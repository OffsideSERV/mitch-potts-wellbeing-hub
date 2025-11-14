import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import SEO from "@/components/SEO";
import consultationImage from "@/assets/naturopath-consultation-supplements.jpg";

const HealthPackages = () => {
  const gutHealthPackages = [
    {
      name: "6-Month Gut Reset",
      price: "$1,550",
      savings: "Save $250",
      duration: "6 months",
      features: [
        "1 × Initial Naturopathic Consultation (60 mins)",
        "1 × Comprehensive Report Analysis & Treatment Consultation (60 mins)",
        "4 × Monthly Follow-Up Consultations (30 mins each)",
        "Comprehensive Gut Microbiome Test (RRP $485)",
        "12-Month Nerva App Subscription (RRP $250)",
        "Full access to the 10-Module NXTLVL Optimal Nutrition Course (RRP $99)",
        "Personalised dietary, lifestyle & supplement recommendations",
        "Email support between sessions",
      ],
    },
    {
      name: "9-Month Gut Rebuild",
      price: "$2,250",
      savings: "Save $450",
      duration: "9 months",
      popular: true,
      features: [
        "1 × Initial Naturopathic Consultation (60 mins)",
        "1 × Comprehensive Report Analysis & Treatment Consultation (60 mins)",
        "7 × Follow-Up Consultations (30 mins each)",
        "Comprehensive Gut Microbiome Test (RRP $485)",
        "SIBO Breath Test (RRP $270)",
        "12-Month Nerva App Subscription (RRP $250)",
        "Full access to the 10-Module NXTLVL Optimal Nutrition Course (RRP $99)",
        "Personalised nutrition, lifestyle & treatment plan",
        "Email support throughout the program",
      ],
    },
    {
      name: "12-Month Gut Transformation",
      price: "$3,840",
      savings: "Save $750",
      duration: "12 months",
      features: [
        "1 × Initial Naturopathic Consultation (60 mins)",
        "1 × Comprehensive Report Analysis & Treatment Consultation (60 mins)",
        "10 × Follow-Up Consultations (30 mins each)",
        "SIBO Breath Test (RRP $270)",
        "Repeat Gut Microbiome & SIBO Tests toward the end of the program",
        "12-Month Nerva App Subscription (RRP $250)",
        "Full access to the 10-Module NXTLVL Optimal Nutrition Course (RRP $99)",
        "Email support between sessions",
      ],
    },
  ];

  const weightLossPackage = {
    name: "NXTLVL Transform - 6 Month Weight Loss",
    price: "$4,250",
    savings: "Save $750",
    duration: "6 months",
    features: [
      "Weekly 1-on-1 coaching calls (24 sessions)",
      "Personalised meal plans",
      "Custom training programs (gym & home options)",
      "Initial body composition analysis",
      "Monthly progress assessments",
      "Supplement recommendations",
      "24/7 WhatsApp support",
      "Access to NXTLVL training app",
      "Mindset & habit coaching",
      "Nutritional education modules",
      "Final transformation photoshoot",
    ],
  };

  const symptoms = [
    "Your bloating seems to always be there or gets worse throughout the day",
    "You experience irregular bowel movements - constipation or diarrhea",
    "You suspect food intolerances but can't pinpoint which foods",
    "You experience reflux or indigestion after eating",
    "Your energy levels are low despite adequate sleep",
    "You notice your anxiety worsens when gut symptoms flare",
    "You experience unexplained nausea or discomfort",
  ];

  return (
    <>
      <SEO 
        title="Health Packages Brisbane | Gut Health & Weight Loss Programs - NXTLVL Health"
        description="Comprehensive health packages for gut health transformation and weight loss. 3, 6 and 12-month programs with personalised care, testing, and ongoing support in Brisbane."
        canonical="https://nxtlvlhealth.com.au/health-packages"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Do any of these sound familiar and you're ready to go all in?
                </h1>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  {symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-2xl font-semibold text-primary">
                    WE'VE GOT YOU COVERED.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src={consultationImage}
                  alt="Naturopath consultation at NXTLVL Health clinic"
                  className="rounded-2xl shadow-2xl max-w-md w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gut Health Packages Section */}
        <section className="py-16 px-4 bg-accent/10">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Gut Health Reset Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At NXTLVL Health, we know that you get the best results when you receive consistent care. 
                That's why we offer packages to maximise your results and set you on a solid path to healing your gut.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                There are three packages to choose from, depending on your goals and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {gutHealthPackages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`relative ${pkg.popular ? 'border-primary border-2 shadow-xl scale-105' : 'border-border'}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">Package {index + 1}</div>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-sm">{pkg.duration} of personalised care</CardDescription>
                    <div className="mt-4">
                      <div className="text-4xl font-bold text-foreground">{pkg.price}</div>
                      <div className="text-sm text-primary font-semibold mt-1">{pkg.savings}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-4 text-foreground">Included:</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      size="lg"
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={() => window.location.href = '/book-now'}
                    >
                      Book Package
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Weight Loss Package Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Weight Loss Transformation
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive 6-month online coaching program designed to help you achieve sustainable weight loss 
                through personalised nutrition, training, and ongoing support.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-primary border-2 shadow-2xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl mb-2">{weightLossPackage.name}</CardTitle>
                  <CardDescription className="text-base">{weightLossPackage.duration} of dedicated 1-on-1 coaching</CardDescription>
                  <div className="mt-6">
                    <div className="text-5xl font-bold text-foreground">{weightLossPackage.price}</div>
                    <div className="text-sm text-primary font-semibold mt-1">{weightLossPackage.savings}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-6 text-lg text-foreground">Everything you need to succeed:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {weightLossPackage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> This is a comprehensive online coaching program. 
                      All consultations are conducted via video call, with training programs delivered through our app 
                      and meal plans provided digitally. Perfect for those who want flexibility and convenience.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => window.location.href = '/book-now'}
                  >
                    Start Your Transformation
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to invest in your health?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Choose the package that suits your goals and let's start your transformation journey together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = '/book-now'}
              >
                Book Your Package
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.location.href = '/contact'}
              >
                Ask a Question
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Note */}
        <section className="py-12 px-4 bg-accent/5">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm text-muted-foreground">
              * All package consultations must be used within the specified timeframe. 
              Package prices are subject to change. Payment plans available upon request.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HealthPackages;
