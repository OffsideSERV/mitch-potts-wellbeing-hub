
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Sparkles } from "lucide-react";

const EczemaNaturopathy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath Eczema | Calm, Clearer Skin with Help from <span className="text-primary">NXTLVL Health</span>
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath consultation for eczema treatment at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Sparkles className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Eczema Naturopathy</p>
                        <p className="text-xs text-muted-foreground">Natural • Holistic • Effective</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">Book a Free 15-Min Consult</span>
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
                alt="Naturopath consultation for eczema treatment at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Eczema Naturopathy</p>
                    <p className="text-sm text-muted-foreground">Natural • Holistic • Effective</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tired of Eczema Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Tired of Eczema Taking Over Your Life?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/KzhzvfYCqwWucZxbOivI.png" 
              alt="Natural skin care products for eczema treatment at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Do you feel like your skin is always itchy, red, or dry? Do you have to be careful about what you wear, what you eat, or even where you go? Do flare ups feel like they come out of nowhere?
                </p>
                <p>
                  You're not alone. Eczema is a common inflammatory skin condition that can affect both kids and adults. It often starts in early childhood and can continue into adulthood. And while conventional treatments like steroid creams may offer short-term relief, they often don't get to the root cause.
                </p>
                <p>
                  At NXTLVL Health, we use a natural, holistic approach to support your skin and your body. Mitch is a trusted naturopath eczema specialist who helps people find lasting relief through deeper healing. If your eczema symptoms are controlling your life, we're here to help you take it back.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/KzhzvfYCqwWucZxbOivI.png" 
                alt="Natural skin care products for eczema treatment at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* CTA after first section */}
          <div className="text-center mb-16">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is Eczema Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Is Eczema?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
              alt="Woman consulting with naturopath about eczema at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Eczema, also known as atopic dermatitis or atopic eczema, is a chronic skin condition that causes itchy skin, red patches, dryness, and inflammation. For some people, it leads to constant itching, cracked skin, and even pain. It can show up on the face, hands, arms, legs, or anywhere on the body. Eczema often presents as patches of dry, red, raised, or scaly skin, which can blister, crack, and exude fluid.
                </p>
                <p>
                  Eczema is more than just dry skin. It's a sign that something deeper is going on inside your body. Eczema often signals deeper immune and gut imbalances. And that's why a naturopathic approach is so effective.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
                alt="Woman consulting with naturopath about eczema at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Naturopathic Doctor Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose a Naturopathic Doctor for Eczema?</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-6">
              <p>
                A naturopathic doctor for eczema looks at the whole person, not just the affected areas. We ask: Why is the skin reacting? What is happening in the immune system, the gut, or even your stress levels that could be contributing?
              </p>
              <p>
                At NXTLVL Health, we take the time to understand your symptoms, your lifestyle, and your history. Through a comprehensive assessment, we can uncover the root causes of your flare ups and build a personalised plan to support your healing from the inside out.
              </p>
            </div>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-showing-patient-results-on-a-computer-scaled.jpeg" 
              alt="Naturopath showing patient eczema treatment results during consultation" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Naturopathic Eczema Treatment Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Testing for food allergies and sensitivities",
                "Supporting gut health and the digestive system", 
                "Reduce inflammation with herbs and nutrients",
                "Improving the skin barrier with essential fatty acids",
                "Balancing the immune system",
                "Identifying environmental and emotional triggers",
                "Addressing food allergies and sensitivities, which can exacerbate atopic dermatitis in 10-30% of cases, particularly due to common allergens like eggs and milk"
              ].map((treatment, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{treatment}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Symptoms Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Common Symptoms of Eczema</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Dry, itchy, or irritated skin",
                "Red patches or rashes", 
                "Cracked or thickened skin",
                "Eczema flare ups that worsen in cold weather or from certain foods",
                "Areas that feel hot, sore, or inflamed",
                "Difficulty sleeping due to intense itching"
              ].map((symptom, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{symptom}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA after symptoms section */}
          <div className="text-center mt-16">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Makes NXTLVL Different Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Makes NXTLVL Health Different?</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-6">
              <p>
                Most conventional treatments focus only on the symptoms. You get steroid creams, antihistamines, or topical corticosteroids, which might help for a while, but often lead to more irritated skin or red skin syndrome when overused.
              </p>
              <p className="font-semibold text-foreground">
                We go deeper.
              </p>
              <p>
                At NXTLVL Health, Mitch uses naturopathic eczema treatment to address the true root causes of your condition. That might include gut health problems, immune dysfunction, hormone imbalances, or poor diet. We also consider contributing factors like skincare products, stress, sleep, and exposure to common triggers like dust mites, pet dander, and environmental factors such as mould.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
              alt="NXTLVL Health natural medicine clinic for eczema treatment" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>
        </div>
      </section>

      {/* Healing Eczema Naturally Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Healing Eczema Naturally</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
              alt="Natural eczema treatment analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Activity className="h-6 w-6 mr-3" />
                  1. Diet and Food Choices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We work with you to find and remove foods that exacerbate eczema, like dairy, soy, or processed foods. We also support you with an anti inflammatory diet to nourish the skin and calm the immune system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Heart className="h-6 w-6 mr-3" />
                  2. Gut Health Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your gut and skin are closely linked. We use natural supplements, probiotics, and herbs to heal the gut lining and support digestion. Restoring the microbiome is a key focus in naturopathic treatments for eczema. When the digestive system is working well, your skin can improve too.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  3. Immune System Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We help your immune system respond more calmly, using nutrients and herbs to support immune function and reduce eczema flare ups.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Sparkles className="h-6 w-6 mr-3" />
                  4. Natural Topical Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We recommend gentle topical herbs, sunflower oil, or coconut oil to support the skin barrier, soothe irritation, and hydrate sensitive skin naturally.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Brain className="h-6 w-6 mr-3" />
                  5. Stress and Lifestyle Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stress is one of the most common triggers for eczema. We help with stress management techniques, sleep support, and lifestyle changes that help your body stay calm and balanced.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA after healing section */}
          <div className="text-center mt-16">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Help</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Babies and toddlers with atopic eczema",
                "Teens and adults with chronic eczema flare ups", 
                "People dealing with red, itchy skin that hasn't responded to conventional medicine",
                "Those looking to stop relying on steroid creams",
                "Anyone wanting to treat eczema naturally and long term"
              ].map((person, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{person}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect From Your First Visit</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "A full health history",
                "A look at your eczema symptoms and patterns", 
                "Discussion of your food, stress, sleep, and lifestyle",
                "Assessment of contributing factors and common triggers",
                "Optional blood tests or functional testing"
              ].map((expectation, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{expectation}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA after expectations section */}
          <div className="text-center mt-16">
            <Button asChild className="text-base sm:text-lg px-6 py-4">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Treat Eczema Naturally?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                You don't have to live with constant itching, red skin, and frustration. With the right support, your skin can heal. Your body can calm down. And you can feel like yourself again.
              </p>
              <p>
                Book your free 15-minute consult with Mitch today. As a trusted naturopath eczema specialist, Mitch will help you understand what's happening inside your body and guide you through a natural, effective plan to heal your skin and improve your quality of life.
              </p>
              <p className="font-semibold text-foreground">
                Let's help you feel good in your skin again.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Your Free 15-Minute Consult
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
  );
};

export default EczemaNaturopathy;
