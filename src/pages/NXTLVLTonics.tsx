import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Check, Leaf, Heart, Shield } from 'lucide-react';

const NXTLVLTonics = () => {
  const benefits = [
    "Low Energy & Fatigue – Feel more vibrant and recharged throughout the day.",
    "Sleep Support – Struggle to switch off? Let's help you find restful, rejuvenating sleep.",
    "Immune Boosting & Recovery – Strengthen your defences and bounce back faster.",
    "Cold & Flu Relief – Natural support to ease symptoms and promote faster recovery.",
    "Hormonal Balance – Support for hot flushes, period pain, PMS, and more.",
    "Gut Health & Digestion – From bloating to IBS, we've got you covered.",
    "Anxiety & Mood Support – Gentle, natural remedies to calm the mind.",
    "Stress & Burnout – Feel grounded and more in control, even on busy days.",
    "Joint Pain & Arthritis – Soothing support to keep you moving comfortably.",
    "Brain Fog & Focus – Sharpen your mind and boost mental clarity.",
    "Skin Conditions – Eczema, acne, or dryness? We can help from the inside out.",
    "Children's Health – Gentle, effective remedies for common childhood ailments.",
    "Allergies & Sinus Issues – Reduce inflammation and improve respiratory health.",
    "Headaches & Migraines – Natural relief for recurring pain.",
    "Detox & Liver Support – Help your body process toxins more efficiently.",
    "Weight Management – Support your metabolism and healthy weight goals.",
    "Men's Health – Support for energy, performance, and vitality.",
    "Women's Health – From cycle support to menopause care.",
    "Sleep Issues for Shift Workers – Special support for those with irregular hours.",
    "Study Stress & Exam Support – Keep calm, focused, and mentally sharp.",
    "Muscle Recovery & Performance – For active bodies that need a little extra care.",
    "Cold Hands & Feet – Support for circulation and warmth.",
    "Mood Swings & Emotional Support – Balance mood and emotions naturally.",
    "Immune Support for Kids & Adults – Help the whole family stay healthy year-round."
  ];

  const steps = [
    {
      number: "1",
      title: "Consult",
      description: "Begin with a quick chat with our naturopath to understand your health goals. Whether you're dealing with an infection (colds/flu & stomach bugs), burnout, sluggish digestion, or hormonal imbalances, we'll tailor a solution just for you."
    },
    {
      number: "2", 
      title: "Blend",
      description: "Your tonic is made fresh with practitioner-grade herbal blends and supplements from trusted Australian companies that exceed TGA standards, then selected specifically for your needs. Our traditional botanical remedies are combined with modern naturopathic insights."
    },
    {
      number: "3",
      title: "Enjoy", 
      description: "Your tonic can be taken daily to support your wellness goals. Simple, effective, and personalised."
    }
  ];

  const whyChoose = [
    {
      title: "Custom Blends Made for You",
      description: "We don't believe in cookie-cutter solutions. Every tonic we create is carefully crafted to suit your unique needs and health goals.",
      icon: Leaf
    },
    {
      title: "Guidance You Can Trust",
      description: "You're in good hands. Our naturopath has years of experience in herbal medicine and natural health, making sure your blend is right for you.",
      icon: Heart
    },
    {
      title: "Only the Best Ingredients",
      description: "We don't cut corners when it comes to quality. We use premium-grade herbs and extracts to give you the best results possible.",
      icon: Shield
    },
    {
      title: "Whole-Body Support",
      description: "Our approach is simple: treat the whole person, not just the symptoms. Our tonics work to restore balance from the inside out — body and mind.",
      icon: Check
    }
  ];

  return (
    <>
      <Helmet>
        <title>NXTLVL Tonics | Custom Herbal Blends & Natural Remedies</title>
        <meta name="description" content="Discover personalised herbal tonics at NXTLVL Health. Custom blends for energy, sleep, immunity, gut health & more. Made by qualified naturopaths in New Farm." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                NXTLVL Tonics
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Your personalised path to wellness, one blend at a time
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Free Consultation
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:0731808853">
                    <Phone className="h-5 w-5 mr-2" />
                    Call (07) 3180 8853
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Welcome to NXTLVL Tonics
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-8">
                  DISCOVER THE POWER OF NATURE TO ELEVATE YOUR HEALTH
                </h3>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  When your body sends you signals — fatigue, poor sleep, low immunity, or feeling out of balance — it's easy to jump straight to over-the-counter fixes or feel like a doctor's visit is your only option. But what if there's a natural, personalised solution that targets the root cause?
                </p>
                <p>
                  At NXTLVL Tonics, we offer custom herbal blends and nutraceuticals that are designed to support your health in a gentle yet powerful way. Created by a qualified naturopath in New Farm, these remedies are tailored to your unique needs!
                </p>
                <p>
                  Think of it as your first step towards feeling better — with fewer side effects and a more natural approach to wellbeing.
                </p>
                <p className="font-medium text-lg">
                  Our mission is simple: to help you feel more balanced, vibrant, and in control of your health. With the right herbs and nutrients, your body has the power to thrive, and we're here to guide you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Can Help With Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                What Can NXTLVL Tonics Help With?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg shadow-sm">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                How It Works
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <Calendar className="h-5 w-5 mr-2" />
                    BOOK NOW
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Why Choose NXTLVL Tonics
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChoose.map((item, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Start Your Natural Health Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Take the first step towards feeling better with personalised herbal tonics designed just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Your Free Consultation
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact">
                    Learn More
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

export default NXTLVLTonics;