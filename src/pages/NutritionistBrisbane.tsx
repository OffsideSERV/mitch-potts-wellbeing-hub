import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Apple, Activity, Target, Dna } from 'lucide-react';

const NutritionistBrisbane = () => {
  const services = [
    {
      title: "CELLULAR HEALTH SCAN",
      description: "Advanced testing to understand your body's cellular health and nutritional needs at the deepest level.",
      icon: Activity
    },
    {
      title: "BODY COMPOSITION", 
      description: "Comprehensive body composition analysis to track your progress and optimize your nutrition plan.",
      icon: Target
    },
    {
      title: "CUSTOMISED MEAL PLANS",
      description: "Personalised meal plans designed specifically for your goals, preferences, and lifestyle.",
      icon: Apple
    },
    {
      title: "PERSONALISED GENETIC HEALTH",
      description: "Genetic testing and analysis to create nutrition plans based on your unique genetic makeup.",
      icon: Dna
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nutritionist Brisbane | Expert Nutrition Plans | New Farm</title>
        <meta name="description" content="Expert nutritionist in New Farm, Brisbane. Get tailored nutrition plans for weight loss, muscle gain, gut health & more. Book with Mitch for personalised nutrition guidance." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Nutrition
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Tailored nutrition plans by expert nutritionists in New Farm, Brisbane
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <Calendar className="h-5 w-5 mr-2" />
                    BOOK NOW
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

        {/* Main Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  YOU ARE WHAT YOU ABSORB. NUTRITION MATTERS…
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  There's a lot of truth to this statement. If you aren't optimising your nutrition, it is incredibly hard to optimise your health.
                </p>
                
                <p>
                  Learn from a professional how important the food you eat really is. How it plays a big role in your energy, mental state, pain, allergies, and weight gain / reduction.
                </p>
                
                <p>
                  Eat your way into perfect health by learning how to eat foods that will nourish your body and achieve your goals. If you don't want to think about nutrition, have a personalised nutrition plan created. Whether that is weight loss goals (rapid or slow), muscle gain, brain function, gut health, anti-inflammatory, blood pressure reduction, athletic performance or even just a balanced lifestyle to enjoy the all the foods without missing out.
                </p>
                
                <p className="font-medium text-lg">
                  You shouldn't feel guilty for consuming foods that are considered "bad". Finding dietary balance is something Mitch prides himself on doing for his clients.
                </p>
                
                <p>
                  Book in with Mitch to optimise your nutrition and achieve your health objectives. Conveniently located in New Farm, Brisbane.
                </p>
              </div>

              <div className="text-center mt-8">
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

        {/* Services Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  ELEVATE YOUR WELL-BEING WITH NUTRITION
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition Goals Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Achieve Your Nutrition Goals
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-muted/30 rounded-lg p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Weight Management</h3>
                  <p className="text-sm text-muted-foreground">Rapid or gradual weight loss and muscle gain programs</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Brain Function</h3>
                  <p className="text-sm text-muted-foreground">Optimize cognitive performance and mental clarity</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Gut Health</h3>
                  <p className="text-sm text-muted-foreground">Improve digestion and gut microbiome balance</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Anti-Inflammatory</h3>
                  <p className="text-sm text-muted-foreground">Reduce inflammation through targeted nutrition</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Athletic Performance</h3>
                  <p className="text-sm text-muted-foreground">Fuel your body for optimal performance and recovery</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Balanced Lifestyle</h3>
                  <p className="text-sm text-muted-foreground">Enjoy all foods without guilt or missing out</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Mitch Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Work with Mitch - Your Expert Nutritionist
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Located conveniently in New Farm, Brisbane, Mitch specializes in creating personalized nutrition plans that help you achieve your health goals without the guilt. Experience the difference that balanced, evidence-based nutrition can make in your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Your Consultation
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

export default NutritionistBrisbane;