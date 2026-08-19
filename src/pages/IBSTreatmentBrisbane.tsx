
import React from 'react';
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Heart, Brain, Users, Target, Clock, Shield, AlertTriangle } from "lucide-react";

const IBSTreatmentBrisbane = () => {
  return (
    <>
      <SEO 
        title="IBS in Brisbane: Understanding Your Diagnosis | NXTLVL Health"
        description="Just been told you have IBS? A plain-English guide for Brisbane locals to the Rome criteria, IBS subtypes, common triggers, and why your tests keep coming back normal."
        canonical="/what-we-treat/ibs-brisbane"
        keywords="IBS diagnosis Brisbane, what is IBS, Rome criteria IBS, IBS subtypes, IBS Brisbane"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  IBS in Brisbane: <span className="text-primary">Understanding Your Diagnosis When Every Test Comes Back Normal</span>
                </h1>

                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Person reading through IBS test results at home in Brisbane" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png"
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Understanding IBS</p>
                        <p className="text-xs text-muted-foreground">Clear • Evidence-based • Online</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  A gastroenterologist has told you it's IBS. Your colonoscopy was clear, your bloods were fine, your coeliac screen was negative, and the ultrasound showed nothing unusual — yet you still feel bloated, sore and unpredictable most days. If this sounds familiar, you're not imagining it, and you're not alone. This page is a plain-English explainer for Brisbane locals who have just received an IBS diagnosis and want to actually understand what it means, why the tests came back clear, and what to ask next.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="text-base sm:text-lg px-6 py-3 h-auto">
                  <a href="/#free-consult">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Free 15-Min Consult
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
                alt="Person reading through IBS test results at home in Brisbane" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Understanding IBS</p>
                    <p className="text-sm text-muted-foreground">Clear • Evidence-based • Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What "IBS" Actually Means Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What "IBS" Actually Means</h2>

            <div className="mb-12">
              <img 
                src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" 
                alt="Woman thinking through her IBS diagnosis" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Irritable bowel syndrome is a <strong>functional gut disorder</strong>. That word "functional" is important: it means the gut isn't structurally damaged, inflamed or diseased in a way that shows up on a scope or a scan, but it isn't working the way it should. The nerves lining your bowel are more sensitive than usual, the muscles that push food through can contract too quickly or too slowly, and the gut-brain communication that normally runs quietly in the background gets noisy. The result is real, physical pain, bloating and altered bowel habits — even though the tissue itself looks normal under a microscope.
              </p>
              <p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4014048/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">IBS affects roughly 10–20% of the population</a>, with women affected more often than men, and it's one of the most common reasons people in Brisbane are referred to a gastroenterologist. It sits in a category doctors call "disorders of gut-brain interaction" — not psychological in the sense of "it's in your head", but genuinely a two-way conversation between your gut and nervous system that has gone off track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rome Criteria & Subtypes Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Rome Criteria and Your IBS Subtype</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Doctors don't diagnose IBS with a single test. Instead, they use a checklist called the <strong>Rome IV criteria</strong>: recurrent abdominal pain, on average at least one day a week over the last three months, linked to at least two of the following — pain related to passing a bowel motion, a change in how often you go, or a change in the form or appearance of your stool.
            </p>

            <div className="mb-12">
              <img 
                src="/lovable-uploads/5ab885c2-6334-4880-bd61-dce3bd826f8e.png" 
                alt="Chart showing the three IBS subtypes" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">IBS-C</h3>
                  <p className="text-muted-foreground">Constipation-predominant. Hard, infrequent stools, straining, and a feeling of incomplete emptying dominate the picture.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">IBS-D</h3>
                  <p className="text-muted-foreground">Diarrhoea-predominant. Loose, frequent stools, urgency and sometimes accidents are the main concern.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">IBS-M</h3>
                  <p className="text-muted-foreground">Mixed type. Bowel habits swing between constipation and diarrhoea, sometimes within the same week.</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                Knowing your subtype matters, because it shapes which questions are worth asking next and which patterns are worth tracking — but it doesn't, by itself, tell you why your gut is behaving this way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Symptom Picture Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Full Symptom Picture</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              IBS is often reduced to "tummy trouble", but the day-to-day reality is broader than that.
            </p>

            <div className="mb-12">
              <img 
                src="/lovable-uploads/95e81372-7d61-43a1-b42c-b1cf39f1ff92.png" 
                alt="List of symptoms commonly seen alongside IBS" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Abdominal pain or cramping that eases after a bowel motion</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Brain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Bloating and visible abdominal distension that builds through the day</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Excess wind, urgency, or a sense of incomplete emptying</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Fatigue, brain fog and low mood on flare days</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Symptoms that flare with certain meals, stress, travel or your menstrual cycle</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Anxiety about food, socialising or being far from a bathroom</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                This is why IBS is described as a condition that affects <strong>quality of life</strong>, not just digestion — and why understanding your own pattern of symptoms is the first useful step, well before any treatment conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Triggers Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Common IBS Triggers</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              No two people with IBS have identical triggers, but certain patterns come up again and again in clinic conversations with Brisbane patients.
            </p>

            <div className="mb-12">
              <img 
                src="/lovable-uploads/d515fc10-3cc2-4062-adf8-2638cee1c7bc.png" 
                alt="Common food and lifestyle triggers for IBS" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground"><strong>High-FODMAP foods</strong> – fermentable carbohydrates found in onion, garlic, wheat, certain fruits and legumes can pull water into the bowel and feed gas-producing bacteria</p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground"><strong>Stress and the nervous system</strong> – the gut and brain share nerve pathways, so anxiety or a stressful week can directly alter gut motility and pain sensitivity</p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground"><strong>Past gut infections</strong> – a bout of gastro or food poisoning can trigger "post-infectious IBS" that lingers long after the infection has cleared</p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground"><strong>Hormonal shifts</strong> – many women notice symptoms flare around their period</p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground"><strong>Sleep and routine disruption</strong> – irregular meal timing, shift work and poor sleep can all unsettle bowel rhythm</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Your Tests Keep Coming Back Normal Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Your Colonoscopy, Bloods and Ultrasound Keep Coming Back Normal</h2>

            <div className="mb-12">
              <img 
                src="/lovable-uploads/001a23d3-f9a1-4973-a6a1-a0bf46a7cfbb.png" 
                alt="Normal test results next to persistent IBS symptoms" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                It can feel maddening to be told everything is "normal" when you clearly don't feel normal. But this is expected with IBS, not a sign the tests were wrong. A colonoscopy looks for structural problems: inflammation, ulceration, polyps, tumours. Bloods can flag anaemia, inflammation markers or thyroid dysfunction. An abdominal ultrasound checks organs like the gallbladder, liver and kidneys. A coeliac screen checks for an immune reaction to gluten. IBS sits outside all of these — it's a problem of gut <strong>function and sensitivity</strong>, not visible structure, so these investigations are specifically designed to come back clear once other conditions have been ruled out.
              </p>
              <p>
                This is what doctors mean when they call IBS a <strong>"diagnosis of exclusion"</strong>: it's confirmed by ruling out coeliac disease, inflammatory bowel disease, thyroid issues and other structural causes, then matching your symptom pattern against the Rome criteria. A clear scope isn't a dead end — it's actually the point at which the useful questions about triggers, subtype and daily management can properly begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Red-Flag Symptoms: When to See Your GP Again</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Most IBS symptoms are uncomfortable rather than dangerous, but a small number of symptoms fall outside the typical IBS picture and need medical review before anything else is considered.
            </p>

            <div className="mb-12">
              <img 
                src="/lovable-uploads/27a9d38d-9848-4b64-aa99-831c8689e952.png" 
                alt="Checklist of IBS red flag symptoms requiring GP review" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <Card className="shadow-md border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Unintentional weight loss</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-md border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Blood in your stool, or black/tarry stools</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-md border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Waking from sleep with pain or the urge to go to the toilet</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-md border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">New symptoms appearing after age 50, or a family history of bowel cancer or inflammatory bowel disease</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-md border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Fever, persistent vomiting, or a palpable lump in the abdomen</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground">
                If any of these apply to you, please see your GP promptly — this page is educational and isn't a substitute for medical assessment of new or worsening symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions to Ask Next Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Questions Worth Asking Next</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Once red flags have been ruled out and you have your IBS diagnosis in hand, these are the questions that tend to move things forward:
            </p>

            <div className="mb-12">
              <img 
                src="/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png" 
                alt="Person writing down questions to ask about their IBS" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground">Which subtype am I — IBS-C, IBS-D or IBS-M — and does my symptom diary actually match it?</p>
                </CardContent>
              </Card>
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground">Could small intestinal bacterial overgrowth (SIBO) be part of the picture, particularly if bloating dominates? Our page on <a href="/what-we-treat/sibo-naturopath" className="text-primary hover:underline">SIBO and IBS-like symptoms</a> explains how to tell the difference.</p>
                </CardContent>
              </Card>
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground">Are there specific foods, stress patterns or timing issues worth tracking before making any dietary changes?</p>
                </CardContent>
              </Card>
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground">What does a structured, naturopathic approach to IBS actually involve, and how is it different from just "cutting out foods"? See <a href="/what-we-treat/ibs-naturopath" className="text-primary hover:underline">how IBS is treated naturopathically</a> for a fuller explanation.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Where to From Here Section (short, links out) */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Where to From Here</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Understanding your diagnosis is the first step — actually settling your gut usually takes a structured process of narrowing down triggers, testing where appropriate, and building a food and lifestyle plan around your own results rather than a generic list of "IBS foods to avoid". Mitch runs hour-long video consultations Australia-wide, with any recommended stool or breath testing kits posted straight to your door, so you can work through this properly no matter where in Brisbane (or beyond) you're based.
              </p>
              <p>
                If you'd like to go deeper, our <a href="/what-we-treat/gut-health-naturopath-brisbane" className="text-primary hover:underline">gut health naturopath Brisbane hub</a> is a good starting point, our <a href="/what-we-treat/ibs-naturopath" className="text-primary hover:underline">IBS naturopathic treatment page</a> explains how a personalised plan is built, our <a href="/what-we-treat/sibo-naturopath" className="text-primary hover:underline">SIBO page</a> covers what to do when bacterial overgrowth is the real driver behind an IBS label, and our <a href="/what-we-treat/ibs-clinic" className="text-primary hover:underline">IBS clinic programme</a> outlines the structured, step-by-step process from first consult through to long-term management.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-base sm:text-lg px-6 py-4">
                <a href="/#free-consult">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Free 15-Min Consult
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

export default IBSTreatmentBrisbane;
