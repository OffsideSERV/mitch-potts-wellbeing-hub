
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Sparkles } from "lucide-react";

const SkinNaturopathy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Skin Naturopath | Clearer, Calmer Skin Starts at <span className="text-primary">NXTLVL Health</span>
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath consultation for skin health at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Sparkles className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Skin Naturopathy</p>
                        <p className="text-xs text-muted-foreground">Holistic • Natural • Effective</p>
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
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">Book an Appointment Today</span>
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
                alt="Naturopath consultation for skin health at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Skin Naturopathy</p>
                    <p className="text-sm text-muted-foreground">Holistic • Natural • Effective</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Naturopathy for Skin Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Naturopathy for Skin: Feel Good in Your Skin Again</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/KzhzvfYCqwWucZxbOivI.png" 
              alt="Healthy skin care natural products at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Are you tired of covering up breakouts, red patches, or itchy, irritated skin? Have you tried every cream, lotion, or skin care product without results? You're not alone. Many people struggle with skin conditions that don't respond to the usual treatments.
                </p>
                <p>
                  At NXTLVL Health, we offer naturopathy for skin to uncover the real reasons behind your skin issues. Mitch, an experienced naturopath for skin health, takes a holistic approach to support your skin and your body from the inside out. Because healthy skin doesn't just start with what you put on your face. It starts with what's happening inside.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/KzhzvfYCqwWucZxbOivI.png" 
                alt="Healthy skin care natural products at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* How a Skin Naturopath Helps Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How a Skin Naturopath Helps You</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
              alt="Woman consulting with skin naturopath at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Your skin tells a story about your health. That's why we don't just treat the surface, we go deeper. Naturopathy for skin means understanding your body, your immune function, your gut health, and your hormones. These all affect your skin. Multiple studies link gastrointestinal health to skin health, particularly for inflammatory skin conditions.
                </p>
                <p>
                  Whether it's acne, eczema, perioral dermatitis, rosacea, or psoriasis, our holistic naturopathic treatments are made to treat the root cause, not just the symptoms.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
                alt="Woman consulting with skin naturopath at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Common Skin Conditions We Help With:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Acne",
                "Eczema", 
                "Psoriasis",
                "Perioral dermatitis",
                "Rosacea",
                "Skin irritation and rashes",
                "Sensitive skin and inflammation"
              ].map((condition, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{condition}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Naturopathy for Skin Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Naturopathy for Skin Works</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-6">
              <p>
                Naturopathy for skin works because it sees your skin as part of a much bigger picture. Your skin issues might be linked to gut health, hormonal imbalances, food sensitivities, stress, or immune system challenges. We look at your whole person, not just your skin. The gut and skin are uniquely related in structure and function, making this connection vital to understanding and treating skin conditions.
              </p>
              <p>
                That means real answers. And real healing.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Signs It's Time to See a Naturopath for Skin</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Your skin flares up without warning",
                "You've tried every product, but nothing works long-term",
                "You feel embarrassed or frustrated by your skin",
                "Your skin issues affect your sleep, confidence, or mental health",
                "You want a natural, long-term treatment that helps your whole body"
              ].map((sign, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{sign}</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What to Expect at Your First Appointment</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-showing-patient-results-on-a-computer-scaled.jpeg" 
              alt="Naturopath showing patient results during skin health consultation" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              At your initial consultation, we'll take the time to get to know you. That means looking at your full health history, current symptoms, lifestyle choices, diet, stress levels, and more. Mitch will ask detailed questions and help you feel heard and understood.
            </p>
            <p>
              He may recommend blood tests or gut health assessments to check for hidden issues, like inflammation, food sensitivities, or poor nutrient absorption. All of this helps us build the best naturopathy skin treatment plan just for you. Deficiencies in zinc, copper, selenium, and iron may result in cutaneous abnormalities, so these factors are also considered during assessments.
            </p>
          </div>
        </div>
      </section>

      {/* How We Treat Skin Naturally Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How We Treat Skin Naturally at NXTLVL Health</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Every person is different, and so is every skin treatment plan. But here are some of the ways we support your skin health at our Gold Coast clinic:
            </p>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
              alt="Natural skin treatment analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Activity className="h-6 w-6 mr-3" />
                  1. Nutrition and Diet Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We look at your food choices to reduce triggers and support your healing process. Certain foods can cause flare-ups, while others can restore balance in your body.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Heart className="h-6 w-6 mr-3" />
                  2. Gut Health and Digestion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The digestive system plays a big role in skin health. We help improve digestion, support beneficial gut bacteria, and repair the gut lining so your skin can heal. The digestive tract is home to about 80% of the human immune system, which underscores its importance in maintaining healthy skin.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  3. Hormonal Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hormonal imbalances are often a big part of acne, eczema, and other skin problems. We work to bring your hormones back into balance naturally.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Brain className="h-6 w-6 mr-3" />
                  4. Stress and Mental Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Managing stress is key. Stress impacts your immune system, digestion, and inflammatory response, all of which affect your skin. We help reduce stress with proven naturopathic techniques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Sparkles className="h-6 w-6 mr-3" />
                  5. Herbal and Nutritional Medicine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use natural supplements and herbal blends to reduce inflammation, support immune function, and improve overall health. Naturopathy uses herbs and supplements as therapeutic agents for skin conditions, ensuring a natural and effective approach to healing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Root Cause Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Root Cause is the Real Cause</h2>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
              alt="NXTLVL Health natural medicine clinic for skin treatment" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Most skin care products only treat the surface. Naturopathic medicine treats what's happening inside, like inflammation, immune dysfunction, or poor gut health, and gives your body what it needs to heal. Chronic inflammation can negatively impact skin conditions, making it essential to address this underlying issue for lasting results.
            </p>
            <p>
              When you treat the root cause, your skin gets clearer, calmer, and healthier. Chronic skin conditions can be less common with a holistic approach, as it addresses the underlying factors contributing to skin issues.
            </p>
          </div>
        </div>
      </section>

      {/* Skin Health and Self-Esteem Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Skin Health and Self-Esteem</h2>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Skin issues don't just affect your body, they affect your confidence. Redness, rashes, or acne can make you feel anxious, embarrassed, or even depressed. But your skin doesn't have to control how you feel.
            </p>
            <p>
              Mitch understands how skin problems can affect mental health. That's why he supports the whole person, body, skin, and mind, through the entire healing journey. Naturopathy emphasizes treatment strategies that are collaborative and tailored to the individual, ensuring that each patient receives care suited to their unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Mitch Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Mitch at NXTLVL Health?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Special interest in skin conditions",
              "Deep experience with holistic skin treatment",
              "Root cause focused, not just symptom-focused",
              "Compassionate care that supports your entire health"
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
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Clear Things Up</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                If you've tried everything and still feel stuck, it's time to take a different approach. Naturopathy for skin gives you answers, support, and a path toward true healing. Personalized treatment plans can improve overall health and restore balance in life, offering a comprehensive solution to persistent skin issues.
              </p>
              <p className="font-semibold text-foreground">
                Book your free 15-minute consult with Mitch today and take the next step in feeling better in your skin, inside and out.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://nxtlvlhealth.com.au/book-now/">
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

export default SkinNaturopathy;
