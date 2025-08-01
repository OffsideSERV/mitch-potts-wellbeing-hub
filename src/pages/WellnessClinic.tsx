import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, CheckCircle, Heart, Users, Target, Leaf, Zap, Shield, Activity } from "lucide-react";
const WellnessClinic = () => {
  return <>
      <SEO 
        title="Best Wellness Clinic Brisbane | Book a FREE 15-Min Consult!"
        description="Feeling off lately with no idea why? At NXTLVL Health, the best wellness clinic in Brisbane, we will find the real cause and heal the problem at its root."
        canonical="/what-we-treat/wellness-clinic-brisbane"
        keywords="wellness clinic Brisbane, natural health clinic Brisbane, holistic health clinic, naturopathic clinic Brisbane"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Wellness Clinic <span className="text-primary">Brisbane</span> | Natural Support for a Healthier, Happier Life
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Wellness Clinic</p>
                        <p className="text-xs text-muted-foreground">Natural Health • Brisbane</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base sm:text-lg px-4 py-3 h-auto whitespace-normal leading-tight">
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-center">Book a Free 15-Min Consult</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-base sm:text-lg px-4 py-3 h-auto">
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
            
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/1c52b36e-138d-4d78-8ac8-3cdb353d57fd.png" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Wellness Clinic</p>
                    <p className="text-sm text-muted-foreground">Natural Health • Brisbane</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Brisbane Wellness Clinic Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Brisbane Wellness Clinic That Supports You, Every Step of the Way</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/d515fc10-3cc2-4062-adf8-2638cee1c7bc.png" alt="Naturopath preparing herbal medicine in Brisbane at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  At NXTLVL Health, we believe you deserve to <strong>feel well</strong>, inside and out. Our wellness clinic in Brisbane is here to help you feel <strong>more energy, better sleep, and less stress</strong> using natural care that makes sense for your life.
                </p>
                <p>
                  We're not about quick fixes. We're about <strong>real answers and long-term change</strong> to your wellbeing. Whether you need help with your gut, your energy, your hormones, or your mood, our team listens carefully and works with you to create a plan that works.
                </p>
                <p>
                  Our clinic in New Farm is trusted by people from Fortitude Valley, Spring Hill, Newstead, and all across Brisbane. If you're looking for a <strong>warm, expert-led space</strong> that blends natural care with real results, you've just found your Brisbane wellness clinic.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/d515fc10-3cc2-4062-adf8-2638cee1c7bc.png" alt="Naturopath preparing herbal medicine in Brisbane at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Looks Different Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Wellness Looks Different for Everyone</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Everyone's body and life are different. That's why we take a <strong>personalised, gentle approach</strong>. We listen. We care. And we always aim to <strong>get to the root cause</strong> of your health issues, not just cover up symptoms.
              </p>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" alt="Woman experiencing health concerns and seeking wellness support at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">You might be dealing with:</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Low energy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Poor sleep</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Gut problems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Hormonal imbalances</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Skin flare-ups</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Mood changes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Chronic fatigue</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Stress or anxiety</span>
                </li>
              </ul>
              <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                <p className="text-lg font-medium text-foreground">
                  We're here to help you find the balance again.
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <Button asChild className="text-base px-6 py-3">
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Free 15-Min Consult
                  </a>
                </Button>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" alt="Woman experiencing health concerns and seeking wellness support at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Mitch Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Mitch – Lead Practitioner at NXTLVL Health</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Mitchell Potts is a <strong>university-qualified naturopath</strong> with years of experience helping people feel like themselves again. He combines <strong>traditional naturopathic wisdom with modern science</strong> to offer care that makes real sense.
                </p>
                <p>
                  Mitch believes your body has the power to heal when given the right support. Whether you're dealing with <strong>digestive troubles, hormonal imbalances, chronic fatigue, or stress</strong>, he'll listen deeply and work with you to create a plan that feels right. Our specialized services include <a href="/what-we-treat/naturopath-thyroid-brisbane" className="text-primary hover:underline">thyroid naturopathy</a>, <a href="/what-we-treat/naturopath-diabetes-brisbane" className="text-primary hover:underline">diabetes support</a>, comprehensive <a href="/what-we-treat/naturopathy-for-skin" className="text-primary hover:underline">skin naturopathy</a>, and targeted treatments for <a href="/what-we-treat/acne-naturopathy" className="text-primary hover:underline">acne</a>, <a href="/what-we-treat/hormonal-acne-naturopath" className="text-primary hover:underline">hormonal acne</a>, and <a href="/what-we-treat/naturopath-eczema" className="text-primary hover:underline">eczema</a>.
                </p>
                <p>
                  When he's not in clinic, Mitch is continually learning about the latest in <strong>nutritional medicine, herbal therapies, and functional testing</strong> so he can offer the best care possible.
                </p>
                <p>
                  <strong>His approach? Kind, clear, and honest.</strong> No judgment. No overwhelming protocols. Just practical support to help you feel well again.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <img src="/lovable-uploads/001a23d3-f9a1-4973-a6a1-a0bf46a7cfbb.png" alt="Mitchell Potts, lead practitioner at NXTLVL Health wellness clinic Brisbane" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* More Than a Clinic Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">More Than a Clinic, a Wellness Centre That Gets You</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  We're not just another wellness clinic in Brisbane. We're a <strong>community of caring, passionate health professionals</strong> who want you to feel your best.
                </p>
                <p>
                  When you come to NXTLVL Health, you'll meet a team that includes: Unlike Brisbane Livewell Clinic, which offers Allied Health therapies and Natural Therapies, we focus on <strong>creating a community of care</strong> tailored to your unique needs.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">A university-qualified naturopath with years of experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Skilled support staff who are friendly and non-judgemental</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Access to referrals for massage therapists, allied health, and fitness coaches</span>
                </li>
              </ul>
              <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                <p className="text-lg font-medium text-foreground">
                  Our goal is simple: <strong>help you enjoy life more</strong>, with less pain and more peace.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <img src="/lovable-uploads/5ab885c2-6334-4880-bd61-dce3bd826f8e.png" alt="Naturopath consulting with patient and discussing treatment options at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What We Offer at Our Wellness Clinic</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We support your <strong>physical and mental health</strong> with a wide range of natural therapies, including:
            </p>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png" alt="Naturopath taking blood pressure measurement at NXTLVL Health wellness clinic" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="space-y-8">
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    <a href="#herbal-medicine" className="hover:text-primary/80 underline">
                      Herbal Medicine
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We use western herbal medicine to gently support the body. Herbs like <strong>lemon balm, licorice, or turmeric</strong> can help with inflammation, hormones, stress, and digestion.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Nutritional Medicine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Food is powerful</strong>. We use nutritional medicine to help with energy, gut health, and nutrient balance. Whether you need support with weight loss, immune health, or sleep, we'll guide you with <strong>simple, real-world changes</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Functional Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sometimes the answers are deeper. We may recommend testing (if needed) to check <strong>gut bacteria, hormones, or nutrient levels</strong>. This helps us make clear, confident choices with your plan.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Lifestyle Advice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    What you do every day matters. We help you build <strong>better habits</strong> around sleep, exercise, food, and stress so your body gets the consistent care it needs. <strong>Small changes can make a big difference</strong> in your health and wellness.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Ongoing Care and Check-Ins</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We don't just give you a plan and leave you on your own. We <strong>check in with you, tweak things</strong>, and keep walking with you on your health journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-center">
            <Button asChild className="text-base px-6 py-3">
              <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free 15-Min Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Health Concerns Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">We Work With a Wide Range of Health Concerns</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our <strong>wellness services</strong> support many kinds of health issues, including:
            </p>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/27a9d38d-9848-4b64-aa99-831c8689e952.png" alt="Woman struggling with mental health concerns seeking natural wellness support" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Digestive disorders like IBS, bloating, constipation, or reflux</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Hormonal concerns including PMS, PCOS, or perimenopause</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Chronic fatigue and low energy</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Chronic pain and inflammation</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Mental health and nervous system support</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Poor sleep quality</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Weight loss support and metabolic health</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Skin issues like acne or eczema</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Support with autoimmune and immune health</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our <strong>holistic approach</strong> blends natural care with science and evidence. We focus on <strong>your whole body</strong>, not just the symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose NXTLVL Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Clients Choose NXTLVL Health</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                There are a lot of places in Brisbane to get help with your health. Health & Healing Wellness Centre, for example, is one of the largest holistic health clinics in Brisbane. <strong>So why choose us?</strong>
              </p>
              <p>
                Here's why people trust NXTLVL Health as their go-to wellness clinic: While other clinics, like Health & Healing Wellness Centre, offer services from chiropractors, acupuncturists, naturopaths, massage therapists, and holistic therapists, we focus on providing a <strong>deeply personalized and caring approach</strong>.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/123c33a8-6a44-4e25-911f-05813ec42a6f.png" alt="Happy family at NXTLVL Health wellness clinic showing community wellness approach" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">We listen closely and take time to understand your story</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">We only recommend what's needed and explain everything clearly</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">We create plans that fit your lifestyle, not just cookie-cutter protocols</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">We use the latest in nutritional medicine, herbal care, and functional testing</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">We create a warm, real approach that puts you back in charge of your body</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support for Every Step Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Support for Every Step of Your Health Journey</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Your <strong>health journey doesn't end</strong> when you walk out the door. We're here for <strong>the ups, the downs, and everything in between</strong>.
                </p>
                <p>
                  Whether you need to <strong>adjust your plan, try something new, or just check in</strong> to see how you're feeling, we're here to support you.
                </p>
                <p>
                  We want to be your <strong>trusted health allies</strong> for years to come.
                </p>
              </div>
              <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                <p className="text-lg font-medium text-foreground">
                  <strong>Your wellness matters to us</strong>, and we're committed to walking this journey with you.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <img src="/lovable-uploads/95e81372-7d61-43a1-b42c-b1cf39f1ff92.png" alt="Naturopath using technology to support patient health journey at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Natural Therapies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Therapies That Work With Your Life</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We believe the <strong>best health solutions are ones that fit into your real life</strong>. Our natural therapies are designed to be practical, sustainable, and effective.
            </p>
          </div>

          {/* Image */}
          <div className="mb-12">
            <img src="/lovable-uploads/6253d25b-6827-4ec4-81ad-37d3b431a140.png" alt="Naturopath selecting natural herbal medicines for patient treatment at NXTLVL Health" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Leaf className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Gentle and Effective</h3>
                      <p className="text-muted-foreground">Our treatments work with your body's natural healing processes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Evidence-Based</h3>
                      <p className="text-muted-foreground">We use scientifically-backed natural therapies for real results</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Personalised Care</h3>
                      <p className="text-muted-foreground">Every treatment plan is tailored specifically to your needs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Safe and Natural</h3>
                      <p className="text-muted-foreground">Minimal side effects with maximum health benefits</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* A Warm Space Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Warm, Non-Judgemental Space</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  We know that sharing your <strong>health concerns can feel vulnerable</strong>. That's why we've created a space where you can feel completely comfortable and safe.
                </p>
                <p>
                  No matter what you're going through, <strong>we're here to listen without judgment</strong>. You'll never feel rushed, dismissed, or misunderstood.
                </p>
                <p>
                  Our clinic is designed to be a <strong>peaceful, welcoming environment</strong> where you can relax and focus on your healing.
                </p>
              </div>
              <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                <p className="text-lg font-medium text-foreground">
                  <strong>You deserve to be heard, understood, and supported</strong> on your wellness journey.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <img src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png" alt="Naturopath and patient in consultation showing warm professional relationship at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto max-w-sm mx-auto" />
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Feel Like Yourself Again?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                If you're tired of feeling tired, stressed, or just not quite right, <strong>we're here to help</strong>. Our Brisbane wellness clinic offers the gentle, effective care you've been looking for.
              </p>
              <p>
                Book your consultation with Mitch at NXTLVL Health today and <strong>take the first step toward better health</strong>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3">
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Free 15-Min Consult
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base sm:text-lg px-6 py-4 sm:px-6 sm:py-3">
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
    </>;
};
export default WellnessClinic;