import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Activity, Users, Brain, Zap } from "lucide-react";
const SIBONaturopathy = () => {
  return <>
      <SEO title="SIBO Naturopath | The Best in Brisbane | NXTLVL Health" description="Feeling tired, bloated, foggy or just flat? Our SIBO naturopath will the real cause of your symptoms, so you can finally feel like YOU again." canonical="/what-we-treat/sibo-naturopath" keywords="SIBO naturopath Brisbane, small intestinal bacterial overgrowth treatment, SIBO specialist, gut health Brisbane, natural SIBO treatment" />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  SIBO Naturopath | <span className="text-primary">Natural Help</span> for Small Intestinal Bacterial Overgrowth
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/48968bce-0083-4fb8-bc0f-6069bc00aead.png" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">SIBO Naturopathy</p>
                        <p className="text-xs text-muted-foreground">Natural • Evidence-Based</p>
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
              <img alt="Naturopath having consultation with female patient at NXTLVL Health" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/48968bce-0083-4fb8-bc0f-6069bc00aead.png" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">SIBO Naturopathy</p>
                    <p className="text-sm text-muted-foreground">Natural • Evidence-Based</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struggling with Bloating Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Are You Struggling With Bloating, Pain, or IBS That Just Won't Go Away?</h2>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/6bc3a61d-d439-45ef-a4b6-164d539d1bad.png" alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  If your gut always feels <strong>bloated, uncomfortable, or unpredictable</strong>, you may have something called <strong>SIBO</strong> — short for Small Intestinal Bacterial Overgrowth.
                </p>
                <p>
                  At NXTLVL Health, we specialise in helping people understand and <strong>naturally treat SIBO</strong> using evidence-based naturopathic medicine, functional testing, and personalised care plans. Our comprehensive approach includes working with our experienced <a href="/what-we-treat/gut-health-specialist" className="text-primary hover:underline">gut health specialist</a> and providing specialized care for those who also struggle with <a href="/what-we-treat/ibs-naturopath" className="text-primary hover:underline">IBS symptoms</a>.
                </p>
                <p>
                  You don't need to live with constant discomfort. Let's help you <strong>get to the root cause</strong> and find lasting relief.
                </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/6bc3a61d-d439-45ef-a4b6-164d539d1bad.png" alt="Woman talking to a naturopath in Brisbane at NXTLVL Health" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            </div>
          </div>
        </div>
      </section>
      </div>
    </>;
};
export default SIBONaturopathy;