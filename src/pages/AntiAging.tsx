import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Sparkles, Heart, Brain, Zap, CheckCircle, Users, Award, Phone } from "lucide-react";
import antiAgingConsultation from "@/assets/anti-aging-consultation.jpg";
import naturalAntiAgingTreatments from "@/assets/natural-anti-aging-treatments.jpg";

const antiAgingSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "NXTLVL Health - Anti-Aging Naturopath Brisbane",
  "description": "Professional naturopathic anti-aging treatments in Brisbane. Natural approaches to slow aging, improve vitality, and enhance longevity.",
  "url": "https://www.nxtlvlhealth.com.au/what-we-treat/anti-aging-naturopath-brisbane",
  "telephone": "07 3256 6886",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1/58 Longland Street",
    "addressLocality": "Newstead",
    "addressRegion": "QLD",
    "postalCode": "4006",
    "addressCountry": "AU"
  },
  "medicalSpecialty": ["Naturopathy", "Anti-Aging Medicine", "Longevity Medicine"],
  "serviceType": "Anti-Aging Naturopathic Treatment"
};

export default function AntiAging() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SEO 
        title="Anti-Aging Naturopath Brisbane | Natural Longevity Medicine | NXTLVL Health"
        description="Expert naturopathic anti-aging treatments in Brisbane. Natural approaches to slow aging, boost vitality, and enhance longevity. Book your consultation today."
        keywords="anti-aging naturopath Brisbane, longevity medicine, natural anti-aging, vitality enhancement, healthy aging, naturopathic anti-aging treatment"
        canonical="https://www.nxtlvlhealth.com.au/what-we-treat/anti-aging-naturopath-brisbane"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Natural Anti-Aging Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Age Gracefully with Natural Medicine
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Turn back the clock naturally with our comprehensive anti-aging protocols. 
              Enhance vitality, improve longevity, and feel your best at any age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="w-5 h-5 mr-2" />
                Book Anti-Aging Consultation
              </Button>
              <Button variant="outline" size="lg">
                Learn More About Our Approach
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto max-w-4xl px-4 mb-16">
          <img 
            src={antiAgingConsultation} 
            alt="Professional anti-aging naturopathy consultation"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* What We Address */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Signs of Aging We Address</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Premature Aging", description: "Visible signs of aging appearing earlier than expected" },
              { icon: Zap, title: "Low Energy & Fatigue", description: "Decreased vitality and energy levels with age" },
              { icon: Brain, title: "Cognitive Decline", description: "Memory issues, brain fog, and reduced mental clarity" },
              { icon: Heart, title: "Cardiovascular Aging", description: "Age-related changes to heart and blood vessel health" },
              { icon: Shield, title: "Immune System Decline", description: "Weakened immunity and increased susceptibility to illness" },
              { icon: Sparkles, title: "Skin Aging", description: "Wrinkles, age spots, and loss of skin elasticity" }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Natural Anti-Aging Approach</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Cellular Health Optimization",
                    description: "Supporting mitochondrial function and cellular repair mechanisms"
                  },
                  {
                    title: "Hormone Balance",
                    description: "Naturally optimizing hormone levels for healthy aging"
                  },
                  {
                    title: "Oxidative Stress Reduction",
                    description: "Advanced antioxidant protocols to combat free radical damage"
                  },
                  {
                    title: "Nutritional Medicine",
                    description: "Targeted nutrients and supplements to support longevity"
                  },
                  {
                    title: "Lifestyle Medicine",
                    description: "Evidence-based lifestyle interventions for healthy aging"
                  }
                ].map((approach, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">{approach.title}</h3>
                      <p className="text-muted-foreground">{approach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Natural Treatments Image */}
            <img 
              src={naturalAntiAgingTreatments} 
              alt="Natural anti-aging treatments and supplements"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits You Can Expect</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Increased energy and vitality",
              "Improved skin health and appearance",
              "Enhanced cognitive function",
              "Better sleep quality",
              "Stronger immune system",
              "Improved cardiovascular health",
              "Better stress resilience",
              "Enhanced overall wellbeing"
            ].map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Testing */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Advanced Anti-Aging Testing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use comprehensive testing to assess your biological age and create personalized anti-aging protocols.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Comprehensive hormone panels",
              "Oxidative stress markers",
              "Inflammatory markers",
              "Nutrient deficiency testing",
              "Heavy metal analysis",
              "Cellular health markers",
              "Metabolic function tests",
              "Genetic testing options",
              "Biological age assessment"
            ].map((test, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-medium">{test}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NXTLVL Health for Anti-Aging?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Expert Anti-Aging Practitioner",
                description: "Specialized training in naturopathic anti-aging medicine and longevity protocols"
              },
              {
                icon: Users,
                title: "Personalized Protocols",
                description: "Individualized treatment plans based on your unique aging patterns and goals"
              },
              {
                icon: Shield,
                title: "Evidence-Based Approach",
                description: "Latest research in anti-aging medicine combined with natural therapeutics"
              }
            ].map((reason, index) => (
              <Card key={index} className="border-2 text-center">
                <CardContent className="p-8">
                  <reason.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Turn Back the Clock Naturally?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't let aging slow you down. Book your comprehensive anti-aging consultation 
            and discover how natural medicine can help you age gracefully and maintain vitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Phone className="w-5 h-5 mr-2" />
              Book Your Anti-Aging Consultation
            </Button>
            <Button variant="outline" size="lg">
              Call (07) 3256 6886
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}