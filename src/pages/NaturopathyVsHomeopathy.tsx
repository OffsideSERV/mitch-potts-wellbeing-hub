import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Brain, TestTube, Stethoscope, Leaf, Zap, Heart, CheckCircle, HelpCircle, ArrowRight } from "lucide-react";

const NaturopathyVsHomeopathy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Helmet>
        <title>Naturopathy vs Homeopathy | Which Should You Pick in 2025?</title>
        <meta name="description" content="Confused about naturopathy vs homeopathy? Learn the 5 big differences between these natural healing approaches and discover which one is right for you." />
        <meta name="keywords" content="naturopathy vs homeopathy, natural healing, alternative medicine, holistic health, Brisbane naturopath, homeopath" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Natural Health Comparison
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">Naturopathy vs Homeopathy</span> | 5 Big Differences
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Leaf className="w-3 h-3" />
              Naturopathy
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Zap className="w-3 h-3" />
              VS
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <TestTube className="w-3 h-3" />
              Homeopathy
            </Badge>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12 bg-muted/50">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              What's Inside This Blog
            </h2>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <div className="space-y-1">
                <p>👋 Meet Me – And Why I'm Writing This</p>
                <p>🌿 What Is Naturopathy?</p>
                <p>🧪 What Is Homeopathy?</p>
                <p>🔍 Naturopathy vs Homeopathy – 5 Big Differences</p>
                <p>🧑‍⚕️ Naturopath vs Homeopath – Who Should You See?</p>
              </div>
              <div className="space-y-1">
                <p>🧠 Homeopathic vs Naturopathic – How They Treat the Mind</p>
                <p>🧭 Finding the Right Fit for You</p>
                <p>💬 Final Thoughts</p>
                <p>🙋‍♀️ FAQs</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              👋 Hey, I'm Mitchell – Let's Clear This Up
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>A lot of people who walk into my clinic in Brisbane always ask this one question:</p>
              <blockquote className="border-l-4 border-primary pl-6 text-lg italic text-foreground">
                "What's the difference between naturopathy and homeopathy?"
              </blockquote>
              <p>It's a very fair question. Both sound natural. Both sound gentle. And if you've been feeling tired, stressed, or unwell for a while, you're probably looking at all your options.</p>
              <p>I've been helping people feel better using naturopathy for years, and I often explain the difference in simple terms—because honestly, the two are very different. Let's walk through it together.</p>
            </div>
          </section>

          {/* What Is Naturopathy */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              🌿 What Is Naturopathy?
            </h2>
            
            <Card className="bg-green-50 border-green-200 mb-6">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Naturopathy is a special type of natural health care that looks at the whole person—not just one symptom they're having. It's about finding out what's really going on inside your body and helping it get back into balance.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-600" />
                  Natural Healing for the Whole Body
                </h3>
                <p className="text-muted-foreground">
                  When I work with someone, I look at everything—their gut health, hormones, energy, sleep, diet, movement, and even stress levels. All of these things are actually connected. Naturopathy works by supporting the body to heal itself, using natural tools like herbal medicine, nutrition, and some lifestyle changes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-green-600" />
                  What It Might Look Like in Practice
                </h3>
                <p className="text-muted-foreground">
                  Say you've been feeling bloated after meals and tired. In naturopathy, I'd want to know: what foods are you eating? Are you digesting well? How's your stress? Are your hormones playing a part? Then we'd build a plan together—maybe some gut healing herbs, changes to your meals, and ways to improve your sleep and your stress levels.
                </p>
              </div>
            </div>
          </section>

          {/* What Is Homeopathy */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              🧪 What Is Homeopathy?
            </h2>
            
            <Card className="bg-blue-50 border-blue-200 mb-6">
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  Homeopathy is another form of natural medicine—but it's quite different from naturopathy.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <TestTube className="w-5 h-5 text-blue-600" />
                  How It Works
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>Homeopathy is built on a big idea that: <strong className="text-foreground">"like cures like."</strong></p>
                  <p>So that means if a substance can cause symptoms in a healthy person, giving a tiny, tiny amount of that same substance might help someone who has those symptoms.</p>
                  <p>For example, if cutting an onion makes your eyes water and your nose run, a homeopathic remedy made from onion might be used to treat a cold or an allergy that causes those same symptoms.</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Why the Doses Are So Small
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>Here's the part that confuses most people—homeopathic remedies are diluted over and over again. We're talking really diluted. So much so, that in many cases, there's no measurable part of the original ingredient left.</p>
                  <p>What's left behind, according to homeopathic thinking, is the "energy" or "vibration" of the substance. That's what's believed to trigger the body to actually heal.</p>
                  <p>It's not about the ingredient itself—it's about how your body responds to its energetic imprint.</p>
                  <p>Some people love how gentle and subtle it is. Others prefer something more measurable and hands-on—like what we do in naturopathy.</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  The Experience with a Homeopath
                </h3>
                <p className="text-muted-foreground">
                  A homeopath will ask deep questions about your physical symptoms, but also your emotions, your dreams, your fears, and your personality. And based on that, they'll choose a remedy that matches your overall pattern. There's no testing, and the remedies usually come in little sugar pills or drops.
                </p>
              </div>
            </div>
          </section>

          {/* 5 Big Differences */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              🔍 Naturopathy vs Homeopathy – 5 Big Differences
            </h2>
            
            <p className="text-muted-foreground mb-8">Let's break it down into clear, real-life differences.</p>

            <div className="space-y-6">
              {[
                {
                  number: "1",
                  title: "How They Look at the Body",
                  naturopathy: "Work on your physical body—organs, digestion, inflammation, hormones—and how it all works together.",
                  homeopathy: "Focus more on energetic imbalances and matching your symptoms to a specific remedy.",
                  color: "green"
                },
                {
                  number: "2", 
                  title: "The Type of Remedies Used",
                  naturopathy: "Use herbs, nutrition, supplements, and sometimes even therapies like acupuncture or massage.",
                  homeopathy: "Use ultra-diluted substances in liquid or pellet form—meant to stimulate the body's healing energy.",
                  color: "blue"
                },
                {
                  number: "3",
                  title: "The Role of Testing", 
                  naturopathy: "Often use functional testing—like blood tests, gut health tests, hormone panels—to find the root cause behind your symptoms.",
                  homeopathy: "Don't usually test. They rely more on detailed conversations and symptom matching.",
                  color: "purple"
                },
                {
                  number: "4",
                  title: "Scientific Support",
                  naturopathy: "Has a lot of growing evidence behind it, especially for areas like digestive health, fatigue, and stress.",
                  homeopathy: "Has more mixed reviews in the science world—some people find it helpful, others say the evidence is limited.",
                  color: "orange"
                },
                {
                  number: "5",
                  title: "Who Might Benefit Most",
                  naturopathy: "If you're dealing with chronic bloating, low energy, mood swings, or trouble sleeping, naturopathy might offer more structure and tools.",
                  homeopathy: "If you're drawn to more energetic or emotional healing and want something very gentle on your body, homeopathy might be worth exploring.",
                  color: "pink"
                }
              ].map((difference, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-8 h-8 rounded-full bg-${difference.color}-500 text-white flex items-center justify-center font-bold text-sm`}>
                        {difference.number}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{difference.title}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <Leaf className="w-4 h-4" />
                          Naturopaths
                        </h4>
                        <p className="text-green-700 text-sm">{difference.naturopathy}</p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <TestTube className="w-4 h-4" />
                          Homeopaths
                        </h4>
                        <p className="text-blue-700 text-sm">{difference.homeopathy}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Who Should You See */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              🧑‍⚕️ Naturopath vs Homeopath – Who Should You See?
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>Choosing between a naturopath and a homeopath comes down to what you're really looking for.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    <Leaf className="w-5 h-5" />
                    Choose Naturopathy If:
                  </h3>
                  <p className="text-green-700">
                    You want to understand your body, get tested, and have a clear plan to follow.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <TestTube className="w-5 h-5" />
                    Choose Homeopathy If:
                  </h3>
                  <p className="text-blue-700">
                    You feel like you want a subtle approach that matches how you feel emotionally, and you're open to energetic remedies.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-muted-foreground">
                Both can be valid. It just depends on your goals, your personality, and how you want to be supported.
              </p>
            </div>
          </section>

          {/* How They Treat the Mind */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              🧠 Homeopathic vs Naturopathic – How They Treat the Mind
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-green-600" />
                  Naturopathy and Mental Health
                </h3>
                <p className="text-muted-foreground">
                  In naturopathy, we take mental health very seriously. We look at how your stress affects digestion, how poor sleep impacts hormones, and how food affects mood. We might support your nervous system with calming herbs, mindfulness strategies, or simple routines that help your body feel safe again.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-blue-600" />
                  Homeopathy and Emotions
                </h3>
                <p className="text-muted-foreground">
                  Homeopathy often focuses a lot on emotional themes. Remedies are chosen based on personality traits and emotional patterns, not just your physical symptoms. Some people find this style of healing incredibly gentle and intuitive.
                </p>
              </div>
            </div>
          </section>

          {/* Finding the Right Fit */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              🧭 Finding the Right Fit for You
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>You don't have to pick one forever. Some people start with just one and try the other later. Others use both alongside each other at the same time.</p>
              <p>The best healing path is the one that fits you—your body, your lifestyle, and your personal preference.</p>
              <p>If you're feeling unsure, talk to both kinds of practitioners. Ask questions. Get a feel for their style. And trust your gut.</p>
            </div>
          </section>

          {/* Final Thoughts */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">💬 Final Thoughts</h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>Natural healing doesn't have to be confusing. Both naturopathy and homeopathy offer valuable paths—but they're different in how they work, what they focus on, and the tools they use.</p>
              <p>If you're leaning toward naturopathy and want to understand what's really going on in your body, that's where I come in.</p>
              <p>At my clinic in New Farm, I use naturopathy, nutrition, functional testing, and movement to support real change. I'm here to help people who feel tired, bloated, or just not themselves anymore—finally feel strong again.</p>
              <p>Still not sure? That's okay. You can always reach out and ask questions. I'm more than happy to help.</p>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Your Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              🙋‍♀️ FAQs About Naturopathy vs Homeopathy
            </h2>

            <div className="space-y-4">
              {[
                {
                  question: "Can you use both together?",
                  answer: "Yes, some people do. There's no rule against it."
                },
                {
                  question: "Is one better than the other?",
                  answer: "Not really—it depends on what you're dealing with and how you want to approach it."
                },
                {
                  question: "Are naturopaths real health professionals?",
                  answer: "Yes. In Australia, we're trained in nutrition, herbal medicine, anatomy, and more. We also use testing to guide our plans."
                },
                {
                  question: "Is homeopathy safe?",
                  answer: "Generally, yes. The remedies are very diluted. But it's always good to see a trained, registered homeopath."
                },
                {
                  question: "Do I need a referral?",
                  answer: "No referral needed. You can book in directly with a naturopath or homeopath whenever you're ready."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NaturopathyVsHomeopathy;