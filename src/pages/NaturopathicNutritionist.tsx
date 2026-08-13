import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Sparkles, Leaf, Stethoscope } from "lucide-react";

const NaturopathicNutritionist = () => {
  return (
    <>
      <SEO 
        title="Naturopathic Nutritionist Brisbane | Holistic Nutrition Therapy"
        description="Expert naturopathic nutritionist in Brisbane combining nutrition science with natural medicine. Personalised nutrition plans for optimal health and wellness."
        canonical="/naturopathic-nutritionist"
        keywords="naturopathic nutritionist Brisbane, holistic nutrition, functional nutrition, naturopathic nutrition therapy, nutritional medicine"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Naturopathic Nutritionist | Natural, Personalised Health Support at <span className="text-primary">NXTLVL Health</span>
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Naturopathic nutritionist consultation at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Leaf className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Naturopathic Nutrition</p>
                        <p className="text-xs text-muted-foreground">Natural • Science-Based • Personalised</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
              </div>

              {/* Google 5 Star Badge */}
              <div className="mt-6">
                <script defer async src='https://cdn.trustindex.io/loader.js?46476cb4757e774210564760f2f'></script>
              </div>
            </div>
            
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                alt="Naturopathic nutritionist consultation at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Leaf className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Naturopathic Nutrition</p>
                    <p className="text-sm text-muted-foreground">Natural • Science-Based • Personalised</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome to NXTLVL Health Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Welcome to NXTLVL Health: Where Food Meets Function</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/507d386f-e7d8-4e14-a144-56b40f6d528f.png" 
              alt="NXTLVL Health clinic Brisbane naturopathic nutrition" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto" 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Are you feeling tired, overwhelmed, or simply not yourself lately? Struggling with skin issues, gut problems, or stress? At NXTLVL Health, our focus is on restoring your health naturally—with food, lifestyle, and science.
                </p>
                <p>
                  Our Brisbane-based clinic is led by Mitch, a compassionate and experienced naturopathic nutritionist. Mitch blends evidence-based nutrition with naturopathic medicine to help you feel your best, support your body, and reach your health goals.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/507d386f-e7d8-4e14-a144-56b40f6d528f.png" 
                alt="NXTLVL Health clinic Brisbane naturopathic nutrition" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* CTA after first section */}
          <div className="text-center mb-16">
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default NaturopathicNutritionist;
