
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Baby } from "lucide-react";

const MorningsideNaturopathy = () => {
  return (
    <>
      <SEO 
        title="Best Naturopath Morningside | Book a Free 15-Min Consult!"
        description="Not feeling like yourself and not getting answers? Mitchell is a 5-star Naturopath in Morningside that will find and heal the root cause of your problems."
        canonical="/areas-we-serve/naturopath-morningside"
        keywords="naturopath Morningside, Morningside naturopathy, natural health Morningside, holistic health Morningside Brisbane"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath <span className="text-primary">Morningside</span> | Natural Health Support Near You
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath consultation at NXTLVL Health near Morningside" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/4c05f756-6f70-466c-b4f4-5f0fd25a5d07.png"
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Natural Health Care</p>
                        <p className="text-xs text-muted-foreground">Morningside • Naturopathy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-0">
                <Button 
                  asChild 
                  className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight"
                >
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
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
                alt="Naturopath consultation at NXTLVL Health near Morningside" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/4c05f756-6f70-466c-b4f4-5f0fd25a5d07.png"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Natural Health Care</p>
                    <p className="text-sm text-muted-foreground">Morningside • Naturopathy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for a Naturopath Near Morningside Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Looking for a Naturopath Near Morningside?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/6caf4653-ba09-4b1f-929c-62c5d0e78b84.png" 
              alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed">
                <p>
                  If you're in Morningside and searching for a <strong>trusted, experienced naturopath</strong>, NXTLVL Health is just a short drive away. While our clinic isn't located directly in Morningside, we proudly support clients from this vibrant Brisbane suburb every day. We're just around the corner and passionate about helping you <strong>feel better—naturally</strong>.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/6caf4653-ba09-4b1f-929c-62c5d0e78b84.png" 
                alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Natural Health Care That Puts You First Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Health Care That Puts You First</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/70956186-692e-4b37-8f6b-21a8b48d2ced.png" 
              alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  At NXTLVL Health, we understand that <strong>every person is different</strong>. That's why we take the time to truly listen and get to the root cause of your symptoms. Whether you're dealing with gut health issues, chronic fatigue, hormone imbalance, or skin conditions like acne, we're here to help. Our naturopathic practitioners provide <strong>individualised care plans</strong> to address hormonal health based on the patient's unique biochemistry.
                </p>
                <p>
                  Our clinic is led by <strong>Mitch, a dedicated naturopath and herbalist</strong> with a special interest in women's health, mental health, and natural medicine. With an evidence-based approach and deep knowledge of health science, Mitch creates <strong>tailored treatment plans</strong> to support your body, mind, and wellbeing. Common women's health issues treated by naturopaths include endometriosis and polycystic ovary syndrome (PCOS).
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/70956186-692e-4b37-8f6b-21a8b48d2ced.png" 
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

      {/* Supporting Clients in Morningside Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Supporting Clients in Morningside and Beyond</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/782c2cb5-efd2-4857-a69b-0d9109cecd01.png" 
              alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
            <p>
              Although we're not located in Morningside itself, our clinic is <strong>very close by</strong>—and many of our clients live in the area. They come to us because they want:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Real answers, not just quick fixes",
              "A practitioner who listens",
              "Support for hormonal issues, fertility, anxiety, and fatigue",
              "Help with conditions like menopause, PCOS, acne, and digestive problems",
              "To feel like themselves again"
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

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We make your journey <strong>easy, accessible, and supportive</strong> from your very first consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions We Help With Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Conditions We Help With</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Whether you're seeking help for a specific condition or looking to improve your general wellbeing, NXTLVL Health offers <strong>natural health care that works</strong>. We regularly support clients with:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Gut health concerns (IBS, bloating, reflux, constipation)",
              "Women's health (menstrual issues, menopause, fertility, pregnancy support)",
              "Hormone imbalance (PMS, acne, PCOS, post-pill recovery)",
              "Mental health (anxiety, low mood, burnout)",
              "Fatigue and chronic fatigue",
              "Weight loss and healthy metabolism support",
              "Skin conditions (eczema, acne, perioral dermatitis)"
            ].map((condition, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{condition}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our natural treatments include herbs, nutrition, lifestyle guidance, and functional testing when needed. <strong>Everything we recommend is tailored to you</strong>. Natural remedies may include the use of herbs and lifestyle modifications to balance hormones and treat skin conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Women's Health Support Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Women's Health Support Near Morningside</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/cd75ffc8-9415-45d0-9672-6edf4a641eeb.png" 
              alt="Child with healthy food at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Women in Morningside often visit NXTLVL Health to <strong>get to the bottom of their hormone-related symptoms</strong>. Whether it's painful periods, <a href="https://www.skin.software/journal/post-pill-acne#:~:text=It%20is%20a%20common%20complaint,seem%20that%20it%20never%20ends." target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">post-pill acne</a>, irregular cycles, or fertility support—we look at your <strong>full health picture</strong> to develop a plan that works with your body. Many women seek naturopathic support when coming off hormonal contraceptives to address hormone imbalances.
                </p>
                <p>
                  Mitch is especially passionate about helping women understand what's going on in their body and how to <strong>regain control naturally</strong>. From pregnancy support to menopause and everything in between, you'll be <strong>supported at every stage</strong>. Naturopathic care can help manage fertility challenges and support women during IVF cycles.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/cd75ffc8-9415-45d0-9672-6edf4a641eeb.png" 
                alt="Child with healthy food at NXTLVL Health Brisbane" 
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

      {/* Helping You Heal From the Inside Out Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Helping You Heal From the Inside Out</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Our philosophy is simple: we <strong>treat the whole person, not just the symptoms</strong>. Your health is more than just one diagnosis—it's your lifestyle, emotions, nutrition, and body systems all working together. That's why we:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Take a whole-body approach",
              "Look for the root cause of symptoms",
              "Use herbal medicine, nutrition, and natural therapies",
              "Offer personalised support, not generic plans"
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

      {/* Our Naturopathic Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Naturopathic Services</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              When you visit NXTLVL Health, we'll start with a <strong>full health consultation</strong> to understand your history, symptoms, lifestyle, and goals. From there, we'll build a naturopathic treatment plan that may include:
            </p>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/4b9725be-487a-42cc-bb60-fc545a412113.png" 
              alt="Naturopath showing patient results on a computer at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Targeted nutritional therapy",
              "Herbal medicine tailored to your body",
              "Gut health and digestive support",
              "Stress and mental health strategies",
              "Functional testing (if needed)",
              "Ongoing support to help you feel your best"
            ].map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Mitch Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Mitch – Your Local Naturopath</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/bc3acafc-cc9e-44ef-9e64-44d898e3ac97.png" 
              alt="Mitch - Naturopath working at desk at NXTLVL Health clinic" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Mitch is a <strong>qualified naturopath practitioner and herbalist</strong> with years of experience helping clients improve their health naturally. He has a strong background in health science and brings both <strong>compassion and deep expertise</strong> to every appointment.
                </p>
                <p>
                  He has a special interest in women's health, gut health, and mental wellbeing—and he's known for his <strong>practical, down-to-earth approach</strong>. Mitch believes in empowering his clients with the tools, knowledge, and confidence to <strong>take control of their health</strong>.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/bc3acafc-cc9e-44ef-9e64-44d898e3ac97.png" 
                alt="Mitch - Naturopath working at desk at NXTLVL Health clinic" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Morningside Clients Choose NXTLVL Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Morningside Clients Choose NXTLVL Health</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Many of our clients come to us after <strong>trying everything else</strong>. They're tired of feeling unwell and not being heard. They want:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "A natural way to manage health",
              "To understand what's going on in their body",
              "A plan that's easy to follow",
              "Real results and support"
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

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              At NXTLVL Health, we're here to <strong>listen, to support, and to help you heal</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Free 15-Min Consult CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4">Have Questions About Your Health?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Let's chat for 15 minutes about your health concerns and how naturopathy might help.
          </p>
          <Button asChild className="text-lg px-8 py-4">
            <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
              Book a Free 15-Min Consult!
            </a>
          </Button>
        </div>
      </section>

      {/* Ready to Take the Next Step Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              If you're looking for a <strong>naturopath Morningside locals trust</strong>—NXTLVL Health is just a short drive away and ready to support you.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We'd love to meet you and help you <strong>feel better, naturally</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Experience a New Level of Care Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Experience a New Level of Care</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              <strong>Natural health doesn't mean guesswork</strong>. At NXTLVL Health, our care is:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Backed by science",
              "Rooted in experience",
              "Tailored just for you",
              "Driven by real results"
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

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Get the guidance and support you need from a passionate naturopath who's just around the corner from Morningside. We're here to help you <strong>heal your body, calm your mind, and live with confidence</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your First Appointment Today</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your journey to better health starts with a simple, <strong>one-on-one consultation</strong>. Book your visit with Mitch at NXTLVL Health today and take that first step toward <strong>feeling more like yourself again</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
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

export default MorningsideNaturopathy;
