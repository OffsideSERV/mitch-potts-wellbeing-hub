
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Baby } from "lucide-react";

const ClayfieldNaturopathy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopath <span className="text-primary">Clayfield</span> | Personalised Natural Health Support Near You
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopath consultation at NXTLVL Health near Clayfield" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Natural Health Care</p>
                        <p className="text-xs text-muted-foreground">Clayfield • Naturopathy</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-center">Book an Appointment Today!</span>
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
                alt="Naturopath consultation at NXTLVL Health near Clayfield" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Natural Health Care</p>
                    <p className="text-sm text-muted-foreground">Clayfield • Naturopathy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for a Naturopath Near Clayfield Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Looking for a Naturopath Near Clayfield?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
              alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  If you're based in Clayfield and searching for a kind, experienced naturopath who takes the time to really listen, NXTLVL Health is just around the corner. While we're not located directly in Clayfield, our clinic is close by—and we regularly see clients from this beautiful Brisbane suburb.
                </p>
                <p>
                  Whether you're feeling tired, stressed, run-down, or struggling with a chronic health issue, we're here to help you feel your best again—naturally.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
                alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Helping You Feel Better, Naturally Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Helping You Feel Better, Naturally</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
              alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  At NXTLVL Health, we offer a holistic approach to health and wellbeing. That means we look at your whole body—not just one symptom or one part. Naturopathy is a holistic approach to healthcare that views the body as a whole. Whether it's your digestion, hormones, skin, or mood, everything in your body is connected. And when we support the root cause, your body can begin to heal.
                </p>
                <p>
                  We use natural therapies, herbal medicine, nutritional medicine, and functional testing to help you feel more balanced, calm, and full of energy.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-looking-through-microscope-for-live-blood-analysis-scaled.jpeg" 
                alt="Naturopath looking through microscope for live blood analysis at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Naturopathic Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Naturopathic Services</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              We help people with a wide range of health concerns every day. Whether you're starting your health journey, managing an ongoing condition, or just wanting more energy and vitality, we'll support you every step of the way.
            </p>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/KzhzvfYCqwWucZxbOivI.png" 
              alt="Health and wellness consultation at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Some of the areas we support include:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Digestive issues like bloating, reflux, IBS, and constipation",
              "Mental health symptoms such as anxiety, low mood, and stress",
              "Hormonal imbalances like PMS, menopause, and irregular cycles",
              "Skin conditions like acne, eczema, and perioral dermatitis",
              "Fatigue, burnout, and chronic tiredness",
              "Women's health and fertility",
              "General health and wellness support"
            ].map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We believe every person is unique. That's why we create tailored support plans that match your body, lifestyle, and goals. Empowering clients with knowledge and tools is a key component of personalized health plans. No cookie-cutter plans. Just what works for you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Clayfield Locals Trust NXTLVL Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Clayfield Locals Trust NXTLVL Health</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Even though our clinic isn't in Clayfield, many of our clients live just around the corner and are happy to make the short trip for high-quality naturopathic care.
            </p>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
              alt="NXTLVL Health natural medicine clinic in New Farm Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Here's why Clayfield clients choose us:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "We take the time to listen",
              "We focus on the root cause, not just the symptoms",
              "We offer natural treatments that support your body",
              "We work with you—not just at you",
              "We believe in long-lasting results, not quick fixes"
            ].map((reason, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Your wellbeing matters to us. That's why we offer a supportive space where you feel heard, understood, and empowered to take control of your health.
            </p>
          </div>
        </div>
      </section>

      {/* A Collaborative Approach to Your Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Collaborative Approach to Your Health</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-showing-patient-results-on-a-computer-scaled.jpeg" 
              alt="Naturopath showing patient results on a computer at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Your health is personal. It's not just about fixing one problem—it's about helping your whole body and mind feel better. True health encompasses the mind, body, and spirit.
                </p>
                <p>
                  At NXTLVL Health, we take a collaborative approach. That means we work with you to create a simple, clear plan that fits your daily life. We may also work alongside other medical professionals if needed, so you get the most complete care possible.
                </p>
                <p>
                  We combine herbal medicine, nutrition, and lifestyle guidance to support your healing process from the inside out.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-showing-patient-results-on-a-computer-scaled.jpeg" 
                alt="Naturopath showing patient results on a computer at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Your Mental Health, Gently Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Supporting Your Mental Health, Gently</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Mental health can affect every part of your life—your sleep, your focus, your mood, your energy. At NXTLVL Health, we offer gentle, supportive strategies to help with:
            </p>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/kcF6c6jGP3wRQF0L9ySy.png" 
              alt="Mental health support consultation at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Anxiety",
              "Depression", 
              "Low motivation",
              "Poor concentration",
              "Emotional overwhelm"
            ].map((condition, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center space-y-3">
                    <Brain className="h-8 w-8 text-primary" />
                    <span className="text-muted-foreground font-medium">{condition}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our naturopathic approach to mental health uses nutrition, herbs, and lifestyle changes to support your nervous system and help you feel more calm, centred, and clear.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We also offer natural therapies to reduce stress, improve sleep, and help your body feel safe again.
            </p>
          </div>
        </div>
      </section>

      {/* Hormonal Balance and Women's Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Hormonal Balance and Women's Health</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Many women come to us feeling confused, overwhelmed, or frustrated with their hormones. Whether it's irregular periods, PMS, perimenopause, or recovering after the pill, we're here to help.
            </p>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
              alt="Women's health consultation at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We look at the underlying cause of hormone symptoms and create a plan to support your body back to balance. This might include:
              </p>
              
              <div className="grid gap-4">
                {[
                  "Herbal medicine to support hormone pathways",
                  "Prescribing supplements to correct deficiencies",
                  "Functional blood tests to explore your hormones deeper",
                  "Nutritional guidance for a healthy lifestyle"
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Women from Clayfield often visit our clinic for help with hormonal concerns because they want real answers, not just temporary solutions.
              </p>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Woman-talking-to-a-naturopath-in-Brisbane-scaled.jpeg" 
                alt="Women's health consultation at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* A Focus on Gut Health and Digestive Support Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Focus on Gut Health and Digestive Support</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              So many health problems start in the gut. If your digestion isn't working well, it can affect your mood, energy, skin, hormones, and even immune health.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              At NXTLVL Health, we look closely at your digestive issues and use naturopathic treatments to support healing from the inside out.
            </p>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/DSC_4578-scaled.jpeg" 
              alt="Gut health and digestive support at NXTLVL Health clinic" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">This might include:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Functional testing to explore gut bacteria and inflammation",
              "Tailored herbal medicine and probiotics",
              "Food and lifestyle guidance to rebuild gut health",
              "Nutritional medicine to support absorption and healing"
            ].map((approach, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Activity className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{approach}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our goal is to help you enjoy food again, reduce symptoms, and support your overall vitality.
            </p>
          </div>
        </div>
      </section>

      {/* Stress, Fatigue, and Burnout Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stress, Fatigue, and Burnout</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-doing-work-at-desk-scaled.jpg" 
              alt="Stress and fatigue support at NXTLVL Health clinic" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Feeling tired all the time? Many of our Clayfield clients come to us when they're completely exhausted—mentally, emotionally, and physically.
                </p>
                <p>
                  We understand how draining it can be to push through each day with no energy, poor sleep, and constant overwhelm. That's why we support your adrenal health, your nervous system, and your daily life.
                </p>
                <p>
                  You don't have to do it alone. With the right guidance and tailored support, your body can recover, recharge, and feel strong again. The human body has a remarkable capacity to heal and maintain optimal health.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-doing-work-at-desk-scaled.jpg" 
                alt="Stress and fatigue support at NXTLVL Health clinic" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Natural Support for the Whole Family Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Natural Support for the Whole Family</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/kcF6c6jGP3wRQF0L9ySy.png" 
              alt="Family health support at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center">
            <p>
              At NXTLVL Health, we welcome people of all ages and stages. Whether you're a parent, student, professional, or retiree—your health matters. And we're here to support you.
            </p>
            <p>
              We love working with the Clayfield community and helping families feel confident in their health decisions. We're also happy to work alongside massage therapists, doctors, or other wellness providers to give you the care you need.
            </p>
            <p>
              We believe health is a team effort. And you're at the centre of it.
            </p>
          </div>
        </div>
      </section>

      {/* Our Holistic Approach to Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Holistic Approach to Health</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              When you visit NXTLVL Health, we start with a thorough health consultation. We ask about your symptoms, lifestyle, medical history, and health goals. Appointments can be booked online or by phone at naturopath clinics.
            </p>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/05/DSC_4485-scaled.jpeg" 
              alt="Holistic health approach at NXTLVL Health natural medicine clinic" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">From there, we build a personalised plan using:</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Naturopathic medicine",
              "Herbal remedies",
              "Nutritional support",
              "Functional testing and blood tests",
              "Stress and lifestyle advice",
              "Relaxation techniques"
            ].map((approach, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center space-y-3">
                    <Heart className="h-8 w-8 text-primary" />
                    <span className="text-muted-foreground font-medium">{approach}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our goal is always to help you enjoy life, feel good in your body, and experience better health—naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Mitch Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Mitch – Your Naturopath Near Clayfield</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
              alt="Mitch, experienced naturopath at NXTLVL Health Brisbane" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mitch is an experienced, compassionate naturopath who's helped hundreds of people transform their health. He has a special interest in:
              </p>
              
              <div className="grid gap-4">
                {[
                  "Mental health",
                  "Women's hormones",
                  "Digestive problems",
                  "Fatigue and burnout"
                ].map((specialty, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground font-medium">{specialty}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Mitch takes the time to understand what's going on in your body and in your life. His approach is practical, evidence-based, and tailored to you.
                </p>
                <p>
                  With over a decade in the field, Mitch combines clinical experience, ongoing education, and a warm, supportive presence to help you feel truly cared for.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg" 
                alt="Mitch, experienced naturopath at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Take the Next Step Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
          </div>

          {/* Centered Image */}
          <div className="mb-12">
            <img 
              src="https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-showing-patient-results-on-a-computer-scaled.jpeg" 
              alt="Ready to start your health journey at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" 
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-center">
            <p>
              If you've been looking for a naturopath Clayfield locals trust, NXTLVL Health is just a short drive away—and we're ready to help.
            </p>
            <p>
              Whether you're managing stress, dealing with hormonal changes, or just want to feel more balanced, we'll help you get to the root of the problem and support your journey to optimal health.
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
                You deserve to feel good in your body, your mind, and your daily life. Book your first consultation with Mitch at NXTLVL Health today and take the first step toward real, lasting change.
              </p>
              <p>
                We're here for you, every step of the way.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Your First Appointment Today
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

export default ClayfieldNaturopathy;
