
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Baby } from "lucide-react";

const HamiltonNaturopathy = () => {
  return (
    <>
      <SEO 
        title="Best Naturopath Hamilton | Book a Free 15-Min Consult!"
        description="Not feeling like yourself and not getting answers? Mitchell is a 5-star Naturopath in Hamilton that will find and heal the root cause of your problems."
        canonical="/areas-we-serve/naturopath-hamilton"
        keywords="naturopath Hamilton, Hamilton naturopathy, natural health Hamilton, holistic health Hamilton Brisbane"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath <span className="text-primary">Hamilton</span> | Personalised Natural Health Care Near You
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath consultation at NXTLVL Health near Hamilton" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/5ab885c2-6334-4880-bd61-dce3bd826f8e.png"
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Natural Health Care</p>
                        <p className="text-xs text-muted-foreground">Hamilton • Naturopathy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight"
                >
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">Book a Free 15-Min Consult!</span>
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  asChild 
                  className="text-base sm:text-lg px-4 py-3 h-auto"
                >
                  <a href="tel:0731808853">
                    <svg className="mr-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    Call Mitch
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
                alt="Naturopath consultation at NXTLVL Health near Hamilton" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/5ab885c2-6334-4880-bd61-dce3bd826f8e.png"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Natural Health Care</p>
                    <p className="text-sm text-muted-foreground">Hamilton • Naturopathy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for a Naturopath Near Hamilton Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Looking for a Naturopath Near Hamilton?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png" 
              alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed">
                <p>
                  If you're in Hamilton and searching for a <strong>caring, knowledgeable naturopath</strong>, NXTLVL Health is just a short drive away. While we're not located directly in Hamilton, we proudly support many clients from the area as well as nearby suburbs like <a href="/areas-we-serve/naturopath-clayfield-brisbane" className="text-primary hover:underline">Clayfield</a>, <a href="/areas-we-serve/naturopath-new-farm" className="text-primary hover:underline">New Farm</a>, and <a href="/areas-we-serve/naturopath-newstead" className="text-primary hover:underline">Newstead</a> who are looking for <strong>natural ways to feel better, regain energy, and enjoy life again</strong>.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png" 
                alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Natural Health Support That Works With Your Body Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Health Support That Works With Your Body</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/d515fc10-3cc2-4062-adf8-2638cee1c7bc.png" 
              alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  At NXTLVL Health, we believe in helping the body heal by <strong>finding and treating the underlying cause</strong> of your symptoms—not just covering them up. Whether you're facing digestive complaints, irregular periods, menopause symptoms, or low energy, our naturopathic treatment focuses on <strong>individualised patient care</strong> to help you feel your best.
                </p>
                <p>
                  Our clinic is led by Mitch, a <strong>trusted and experienced naturopath</strong> with a particular interest in women's health, gut health, and mental wellbeing. Mitch has been a naturopath for 20 years and treats various gut problems. Using <strong>naturopathic medicine that is backed by the latest research</strong>, Mitch creates tailored plans using herbal medicine, nutrition, and advanced health science to help you reach long-lasting results.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/d515fc10-3cc2-4062-adf8-2638cee1c7bc.png" 
                alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free 15-Min Consult CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4">Not Sure If We're Right for You?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Book a free 15-minute consultation to discuss your health concerns and see how we can help.
          </p>
          <Button asChild className="text-lg px-8 py-4">
            <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
              Book a Free 15-Min Consult!
            </a>
          </Button>
        </div>
      </section>

      {/* Supporting Hamilton Clients Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Supporting Hamilton Clients with Care That's Close By</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/001a23d3-f9a1-4973-a6a1-a0bf46a7cfbb.png" 
              alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
            <p>
              Although we're not in Hamilton itself, our clinic is <strong>very close</strong>—and many Hamilton locals choose NXTLVL Health because they want quality care that rivals our services in <a href="/areas-we-serve/naturopath-north-brisbane" className="text-primary hover:underline">North Brisbane</a>, <a href="/areas-we-serve/naturopath-indooroopilly" className="text-primary hover:underline">Indooroopilly</a>, and <a href="/areas-we-serve/naturopath-morningside" className="text-primary hover:underline">Morningside</a>. They choose us because they want:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "A results-driven practitioner who listens",
              "A natural medicine approach that works with their lifestyle",
              "Real answers for ongoing health concerns",
              "Help for fertility, anxiety, depression, or rheumatoid arthritis",
              "Care that fits the whole family's needs"
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {item.includes("rheumatoid arthritis") ? (
                        <>
                          Help for fertility, anxiety, depression, or{" "}
                          <a 
                            href="https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 underline"
                          >
                            rheumatoid arthritis
                          </a>
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              <strong>Your health is personal. That's why our approach is too.</strong> Learn more about our philosophy as <a href="/" className="text-primary hover:underline">Brisbane's trusted naturopaths</a> or explore our approach to <a href="/blog/naturopathy/naturopathy-vs-homeopathy" className="text-primary hover:underline">naturopathy versus homeopathy</a> and <a href="/blog/naturopathy/naturopathy-for-weight-loss" className="text-primary hover:underline">natural weight loss solutions</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Common Conditions We Treat Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Common Conditions We Treat</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              We see clients with a <strong>wide range of health concerns</strong>, including:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Digestive complaints (bloating, reflux, IBS, constipation)",
              "Women's health (menstrual pain, irregular periods, fertility support, perimenopause)",
              "Mental wellbeing (anxiety, depression, fatigue, sleep issues)",
              "Rheumatoid arthritis and other inflammatory conditions",
              "Hormone balance and menopause symptoms",
              "General wellbeing, stress support, and more"
            ].map((condition, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {condition.includes("Rheumatoid arthritis") ? (
                        <>
                          <a 
                            href="https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 underline"
                          >
                            Rheumatoid arthritis
                          </a>
                          {" and other inflammatory conditions"}
                        </>
                      ) : (
                        condition
                      )}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our naturopathic treatments may include <strong>herbs, nutritional supplements, lifestyle changes, and personalised recommendations</strong> to support your body's healing. Whether you're looking for a <a href="/what-we-treat/weight-loss-naturopath-brisbane" className="text-primary hover:underline">weight loss naturopath</a> or comprehensive <a href="/what-we-treat/wellness-clinic-brisbane" className="text-primary hover:underline">wellness clinic support</a>, we have natural solutions tailored for you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose NXTLVL Health Near Hamilton?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/95e81372-7d61-43a1-b42c-b1cf39f1ff92.png" 
              alt="Naturopath showing patient results on a computer at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  At NXTLVL Health, we know that health is more than just feeling "okay." Our <strong>integrative healthcare approach</strong> means we work alongside your other medical professionals (if needed), bringing together the best of natural and conventional care to get to the root of what's really going on. Naturopathy recognises the importance of <strong>combining conventional therapies with naturopathic medicine</strong>.
                </p>
                <p>
                  Mitch has an <strong>Advanced Diploma in Naturopathy and years of clinical experience</strong>. He offers expert advice with real empathy, helping you feel supported from your very first visit. Sarah, who graduated with a Bachelor of Naturopathy in 2010, also offers <strong>expert naturopathic advice</strong> at our clinic.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/95e81372-7d61-43a1-b42c-b1cf39f1ff92.png" 
                alt="Naturopath showing patient results on a computer at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Here's what makes our clinic different:</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "We take time to understand your story",
                "We treat you as a whole person—not just a list of symptoms",
                "We create a treatment plan just for you and your individual needs",
                "We use evidence-based tools and herbal medicine to support lasting results",
                "Naturopaths can create personalised herbal tonics to suit individual needs"
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                We're passionate about <strong>better health and helping you feel more like yourself again</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Health Support Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Women's Health Support Near Hamilton</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" 
              alt="Health and wellness consultation at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Many women from Hamilton visit our clinic for help with <strong>period problems, fertility, hormone imbalances, or menopause support</strong>. Emma, who has been a naturopath since 2003, has a special interest in hormones and fertility. These health changes can be overwhelming—but they don't have to be.
                </p>
                <p>
                  With <strong>gentle, effective naturopathic care</strong>, we can help you understand your body better, ease your symptoms, and support your natural cycles. Whether you're coming off the pill, planning a pregnancy, or just not feeling yourself—<strong>there is a natural way forward</strong>.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" 
                alt="Health and wellness consultation at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free 15-Min Consult CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Health Journey?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Take the first step with a free 15-minute consultation to see how we can support your health goals.
          </p>
          <Button asChild className="text-lg px-8 py-4">
            <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
              Book a Free 15-Min Consult!
            </a>
          </Button>
        </div>
      </section>

      {/* Naturopathic Care for the Whole Family Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Naturopathic Care for the Whole Family</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png" 
              alt="Naturopath working at desk at NXTLVL Health clinic" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center">
            <p>
              <strong>Health affects the whole family.</strong> At NXTLVL Health, we help clients of all ages feel their best. Whether it's your child with food sensitivities, your partner with sleep issues, or your own concerns with fatigue or stress—we're here to support you.
            </p>
            <p>
              We love helping our local community, and many of our Hamilton clients <strong>feel like part of our extended family</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your First Appointment Today</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                If you've been searching for a <strong>naturopath Hamilton locals trust</strong>, NXTLVL Health is just around the corner and ready to help.
              </p>
              <p>
                <strong>Book your first consultation today</strong> and take the first step toward better health, balance, and natural support that works.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book a Free 15-Min Consult!
                </a>
              </Button>
              <Button variant="outline" asChild className="text-base sm:text-lg px-6 py-4">
                <a href="tel:0731808853">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Call Mitch Today
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default HamiltonNaturopathy;
