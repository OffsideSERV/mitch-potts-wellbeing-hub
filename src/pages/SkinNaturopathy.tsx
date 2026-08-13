
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Activity, Brain, Sparkles } from "lucide-react";

const SkinNaturopathy = () => {
  return (
    <>
      <SEO 
        title="Naturopathy for Skin Conditions | The Best in Brisbane"
        description="Skin breaking out and have no idea why? No problem, Mitch's naturopathy for skin treatment will finally give you answers. Book a free 15-min consult today!"
        canonical="/what-we-treat/naturopathy-for-skin"
        keywords="skin naturopath Brisbane, naturopathy for skin, natural skin treatment, holistic skin care, skin specialist Brisbane"
      />
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
                    src="/lovable-uploads/5ab885c2-6334-4880-bd61-dce3bd826f8e.png"
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
                src="/lovable-uploads/5ab885c2-6334-4880-bd61-dce3bd826f8e.png" 
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
              src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png"
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
                  At NXTLVL Health, we offer naturopathy for skin to uncover the real reasons behind your skin issues. Mitch, an experienced naturopath for skin health, takes a holistic approach to support your skin and your body from the inside out. Whether you're struggling with <a href="/what-we-treat/acne-naturopathy" className="text-primary hover:underline">acne</a>, <a href="/what-we-treat/hormonal-acne-naturopath" className="text-primary hover:underline">hormonal acne</a>, <a href="/what-we-treat/naturopath-eczema" className="text-primary hover:underline">eczema</a>, or other skin conditions, healthy skin doesn't just start with what you put on your face. It starts with what's happening inside.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" 
                alt="Healthy skin care natural products at NXTLVL Health" 
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

export default SkinNaturopathy;
