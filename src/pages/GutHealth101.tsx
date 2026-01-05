import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, CheckCircle, AlertTriangle, Brain, Heart, Zap } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";

const GutHealth101 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <SEO 
        title="Gut Health 101: Why Your Stomach Might Be Behind Your Brain Fog and Fatigue - Naturopath Brisbane - Health Optimisation Expert"
        description="Struggling with brain fog or constant fatigue? Your gut could be the missing link. Discover how poor gut health affects energy, focus, and mental clarity."
        canonical="/blog/gut-health/gut-health-101-why-your-stomach-might-be-behind-your-brain-fog-and-fatigue"
        keywords="gut health, brain fog, fatigue, naturopath Brisbane, digestive health, microbiome, energy, mental clarity"
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Gut Health 101
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Gut Health 101: Why Your Stomach Might Be Behind Your{" "}
            <span className="text-primary">Brain Fog and Fatigue</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Struggling with brain fog or constant fatigue? Your gut could be the missing link. Discover how poor gut health affects energy, focus, and mental clarity. Find out what to do to get back in control naturally.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>4 minutes read time</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <Card className="border-l-4 border-l-destructive bg-destructive/5">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                Is Your Gut Sabotaging Your Energy and Focus?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You wake up tired. Midday, your brain checks out. Coffee helps, but not much.</p>
                <p>If that's your norm, it might not be burnout. Or age. Or stress.</p>
                <p><strong className="text-foreground">It could be your gut.</strong></p>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-primary font-medium">
                    👉 Take our 3-minute Gut Health Quiz to find out what your symptoms are really trying to tell you.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Does Gut Health Have to Do With Fatigue */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary" />
              What Does Gut Health Have to Do With Fatigue?
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-6">
              <p className="text-lg">Much more than most people realise.</p>
              <p>Your gut is home to over 100 trillion microbes that control everything from digestion to dopamine production.</p>
              <p>When this system is out of balance (aka dysbiosis), your body goes into survival mode:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card className="bg-destructive/5 border-destructive/20">
                <CardContent className="pt-4">
                  <Zap className="w-8 h-8 text-destructive mb-2" />
                  <p className="font-medium text-foreground mb-2">Energy Plummets</p>
                  <p className="text-sm text-muted-foreground">As nutrients aren't absorbed properly</p>
                </CardContent>
              </Card>
              
              <Card className="bg-orange-500/5 border-orange-500/20">
                <CardContent className="pt-4">
                  <Brain className="w-8 h-8 text-orange-500 mb-2" />
                  <p className="font-medium text-foreground mb-2">Brain Fog Kicks In</p>
                  <p className="text-sm text-muted-foreground">Thanks to inflammatory signals crossing the blood-brain barrier</p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-500/5 border-blue-500/20">
                <CardContent className="pt-4">
                  <Heart className="w-8 h-8 text-blue-500 mb-2" />
                  <p className="font-medium text-foreground mb-2">Mood Crashes</p>
                  <p className="text-sm text-muted-foreground">As serotonin drops</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <p className="text-foreground font-medium">
                Gut health doesn't just affect digestion. It affects your clarity, drive, and ability to perform.
              </p>
              <p className="text-muted-foreground mt-2">
                That's why fixing gut health can often improve how you feel faster than any supplement.
              </p>
            </div>
          </section>

          {/* How Gut Health Affects Energy */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              How Gut Health Affects Energy and Brain Function
            </h2>
            
            <p className="text-muted-foreground mb-6">
              When your gut is off balance, even slightly, you can experience major disruptions in your energy, mood, sleep, and mental performance.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Here's what science now shows:</h3>
              
              <div className="space-y-4">
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="pt-4">
                    <h4 className="font-bold text-foreground mb-2">Leaky Gut = Systemic Inflammation</h4>
                    <p className="text-muted-foreground">Toxins escape the digestive tract and spark inflammation throughout the body, including the brain.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="pt-4">
                    <h4 className="font-bold text-foreground mb-2">Microbiome Imbalance = Low Brain Chemicals</h4>
                    <p className="text-muted-foreground">90% of serotonin and 50% of dopamine are made in the gut. When microbes are imbalanced, mood, motivation, and focus indirectly suffer.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="pt-4">
                    <h4 className="font-bold text-foreground mb-2">Poor Nutrient Absorption = Low Cellular Energy</h4>
                    <p className="text-muted-foreground">Even healthy food can't help if your body isn't absorbing nutrients.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-4">
                    <h4 className="font-bold text-foreground mb-2">Stress = Digestive Shutdown</h4>
                    <p className="text-muted-foreground">Chronic stress slows digestion, weakens the gut lining, and disrupts your nervous system.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Symptoms Most Doctors Miss */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              Symptoms Most Doctors Miss
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Many people get told their labs are "normal", but still feel awful.
            </p>
            
            <p className="text-foreground font-medium mb-4">
              If this sounds like you, pay attention to these red flags:
            </p>
            
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                "Constant fatigue",
                "Foggy thinking, poor memory, or trouble concentrating",
                "Sleep issues",
                "Low mood or irritability",
                "Digestive issues (bloating, gas, irregular bowel movements)",
                "Food sensitivities",
                "Cravings for sugar, carbs, or caffeine",
                "Hormonal imbalances",
                "Weak immunity or slow recovery from illness"
              ].map((symptom, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-muted-foreground">{symptom}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20">
              <p className="text-destructive font-bold mb-2">2 or more of these? You likely have a gut issue.</p>
              <p className="text-foreground">Take the quiz now to see where you stand.</p>
            </div>
          </section>

          {/* What Could Be Causing Gut Issues */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              What Could Be Causing Gut Issues in the First Place?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                "High sugar or processed diets",
                "Long-term stress",
                "Antibiotics or over-the-counter medications",
                "Hidden food intolerances",
                "Poor sleep",
                "Alcohol",
                "Lack of fibre and plant foods"
              ].map((cause, index) => (
                <div key={index} className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{cause}</span>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground">
              Even just a few of these can throw your system off. And once inflammation kicks in, it's easy to feel stuck.
            </p>
          </section>

          {/* What You Can Do */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              What You Can Do: A Simple Process to Start
            </h2>
            
            <p className="text-muted-foreground mb-6">
              You don't need fancy tests or expensive treatments to get started. These steps are safe, simple, and effective:
            </p>
            
            <div className="space-y-6">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    ✅ Step 1: Pay Attention
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Track how you feel after meals</li>
                    <li>• Notice patterns in your energy and focus</li>
                    <li>• Try removing common triggers like gluten, dairy, and processed sugar for 2–3 weeks</li>
                  </ul>
                  <p className="text-foreground font-medium mt-4">
                    This isn't about being perfect. It's about getting curious.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    ✅ Step 2: Support Your Gut With Basics
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Drink more water (add a pinch of salt if you're low energy)</li>
                    <li>• Eat slowly and without distractions</li>
                    <li>• Get 2–3 cups of veggies per day</li>
                    <li>• Move your body gently every day, walks count</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    ✅ Step 3: Clean Up the Inputs
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Cut back on alcohol and processed snacks</li>
                    <li>• Reduce screen time before bed</li>
                    <li>• Create a wind-down routine (even 10 minutes helps)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    ✅ Step 4: Check the Fundamentals
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Ask your GP for iron, B12, and CRP blood tests</li>
                    <li>• Use a symptom tracker to notice improvements</li>
                    <li>• Prioritise 7–9 hours of quality sleep</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What Kind of Support Actually Works */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              What Kind of Support Actually Works?
            </h2>
            
            <div className="bg-primary/10 p-8 rounded-lg border border-primary/20">
              <p className="text-foreground mb-4">
                At NXTLVL Health, we don't do cookie-cutter. We run high-level, lab-informed protocols personalised to your biology. You'll be guided every step with:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium text-foreground">Clear plans</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium text-foreground">Real human support</p>
                </div>
                <div className="text-center">
                  <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium text-foreground">No guesswork, no overwhelm</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Whether you're a working parent, student, shift worker, or business owner—your biology matters. And when you fix the gut, you reclaim your life.
              </p>
              
              <div className="text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="https://calendly.com/nxtlvlhealth-info/15-min-consult" target="_blank" rel="noopener noreferrer">
                    Book a Free Discovery Call
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  Speak with a practitioner who can help you decide your next step—without pressure or complexity.
                </p>
              </div>
            </div>
          </section>

          {/* Author Bio */}
          <section className="container mx-auto px-4 py-16">
            <AuthorBio />
          </section>

          {/* Final Word */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Final Word</h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>Brain fog, low energy, and mood dips don't mean you're broken. They're signals.</p>
              <p>And when your gut heals, everything else starts to work better.</p>
              <p>If you're ready to feel clearer, lighter, and more like yourself again:</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Take the quiz</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Book your Discovery Call</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Learn how our system works</span>
              </div>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg border border-primary/20">
              <p className="text-xl font-bold text-foreground mb-2">
                Because the best version of you starts in the gut.
              </p>
              <p className="text-muted-foreground italic">
                Yours in Health,<br />
                Mitchell.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GutHealth101;