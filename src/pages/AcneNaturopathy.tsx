
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Users, Zap, Target, Sparkles } from "lucide-react";

const AcneNaturopathy = () => {
  return (
    <>
      <SEO 
        title="Acne Naturopathy for YOU | Book a Free 15-Min Consult Today!"
        description="Skin breaking out and have no idea why? No problem, Mitch's Acne Naturopathy will finally give you answers. Book a free 15-min consult today!"
        canonical="/what-we-treat/acne-naturopathy"
        keywords="acne naturopath Brisbane, natural acne treatment, acne specialist, holistic acne care, naturopathic acne treatment"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Acne Naturopathy | <span className="text-primary">Heal Your Skin</span> From the Inside Out at NXTLVL Health
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Woman with healthy skin after acne naturopathy treatment at NXTLVL Health" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png"
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Sparkles className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Acne Naturopathy</p>
                        <p className="text-xs text-muted-foreground">Natural • Inside Out • Lasting</p>
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
                alt="Woman with healthy skin after acne naturopathy treatment at NXTLVL Health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Acne Naturopathy</p>
                    <p className="text-sm text-muted-foreground">Natural • Inside Out • Lasting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struggling With Acne Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Struggling With Acne That Just Won't Go Away?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img 
              src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" 
              alt="Healthy lifestyle and nutrition consultation at NXTLVL Health" 
              className="rounded-2xl shadow-lg w-full h-auto mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Do you feel like you've tried every cream, face wash, and topical treatment out there? Does your acne keep coming back no matter what you do? Are you tired of hiding your skin and feeling self-conscious?
                </p>
                <p>
                  You're not alone. Acne is one of the most common skin conditions, and it can affect teens and adults alike. Whether you're dealing with general breakouts or specifically <a href="/what-we-treat/hormonal-acne-naturopath" className="text-primary hover:underline">hormonal acne</a>, At NXTLVL Health, we understand how deeply acne can impact your confidence, your daily life, and your overall well being.
                </p>
                <p>
                  That's why Mitch, our <strong>trusted naturopath for acne</strong>, takes a different approach—one that gets to the root cause. Our comprehensive <a href="/what-we-treat/naturopathy-for-skin" className="text-primary hover:underline">naturopathic approach to skin health</a> includes running lab work to assess digestion and nutritional status. A <strong>comprehensive health assessment</strong> is essential in the naturopathic approach to acne.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" 
                alt="Healthy lifestyle and nutrition consultation at NXTLVL Health" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default AcneNaturopathy;
