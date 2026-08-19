
import React from 'react';
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Heart, Brain, Users, Target, Clock, Shield } from "lucide-react";

const IBSClinic = () => {
  return (
    <>
      <SEO 
        title="Online IBS Programme Brisbane | Week-by-Week Process | NXTLVL Health"
        description="See exactly what happens week by week in our online IBS programme, from your free first chat through testing, results, protocol and review. Video consults Australia-wide."
        canonical="/what-we-treat/ibs-clinic"
        keywords="IBS programme Brisbane, online IBS treatment process, IBS testing timeline, IBS protocol weeks, IBS review consult"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Our Online IBS Programme, Week by Week: <span className="text-primary">From First Consult to Review</span>
                </h1>
                
                {/* Mobile Image */}
                <div className="relative lg:hidden mb-8 -mx-4">
                  <img 
                    alt="Online IBS programme consultation at NXTLVL Health Brisbane" 
                    className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
                    src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png"
                  />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Structured Programme</p>
                        <p className="text-xs text-muted-foreground">Clear Timeline • Online • Australia-Wide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground">
                Wondering what actually happens once you book in? Here's our online IBS programme laid out stage by stage, so you know what to expect, what's included, and roughly when things should start to shift.
              </p>
              
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
                alt="Online IBS programme consultation at NXTLVL Health Brisbane" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Structured Programme</p>
                    <p className="text-sm text-muted-foreground">Clear Timeline • Online • Australia-Wide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before You Start Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Before You Start: The Free 15-Minute Chat</h2>
            
            <div className="mb-12">
              <img 
                src="/lovable-uploads/291dac49-43a8-4619-95ce-899c186cb8e0.png" 
                alt="Woman preparing for her free IBS consultation call" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                If you're not sure whether our online IBS programme is the right fit, we start with a short, free video call. This isn't a full consult — it's a chance for us to hear a quick summary of what's going on, check whether we're a good match, and answer any practical questions about cost, timing, or how the video consults work.
              </p>
              <p>
                If you already suspect small intestinal bacterial overgrowth rather than classic IBS (think sudden bloating soon after eating, or symptoms that started after a course of antibiotics or food poisoning), it's worth reading about our dedicated <a href="/what-we-treat/sibo-naturopath" className="text-primary hover:underline">SIBO programme</a> before you book, as the testing pathway differs slightly.
              </p>
              <p>
                Not sure if what you're experiencing is actually IBS? Our separate page on <a href="/what-we-treat/ibs-brisbane" className="text-primary hover:underline">recognising and understanding an IBS diagnosis</a> covers that in more detail — this page assumes you already have a working diagnosis or a strong suspicion, and focuses purely on the process from here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Week 1 Consult Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Week 1: Your First Full Consult</h2>
            
            <div className="mb-12">
              <img 
                src="/lovable-uploads/5ab885c2-6334-4880-bd61-dce3bd826f8e.png" 
                alt="Naturopath conducting first full IBS video consult" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Your first proper appointment is an hour-long video consult with Mitch, booked at a time that suits you wherever you are in Australia. This session is mostly about building an accurate timeline: when symptoms started, what makes them better or worse, past courses of antibiotics, previous investigations, stress patterns, sleep, and how your bowel habits have changed over months and years, not just this week.
              </p>
              <p>
                To get the most out of this hour, it helps to arrive with a rough symptom diary (even two weeks of notes on meals, stools and pain is useful), a list of any medications or supplements you're taking, and copies of any previous test results, scopes, or specialist letters. None of this is compulsory, but it saves time and means we can move straight to decisions rather than history-gathering.
              </p>
              <p>
                By the end of Week 1 you'll usually leave with a short-term plan — a few immediate changes to try — plus a decision on whether functional testing makes sense for your case, and if so, which tests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weeks 1-2 Testing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Weeks 1–2: Test Kits Posted Out</h2>
            
            <div className="mb-12">
              <img 
                src="/lovable-uploads/27a9d38d-9848-4b64-aa99-831c8689e952.png" 
                alt="IBS test kit posted to patient's home for sampling" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                If testing is recommended, your kit (usually a stool test, sometimes alongside a food sensitivity or breath test) is posted straight to your door — there's no need to visit anywhere in person. Each kit comes with plain-English instructions covering how to take the sample, how to store it, and how to arrange courier or reply-paid postage back to the lab.
              </p>
              <p>
                Sampling itself typically takes a few minutes and can usually be done on a normal day, though we'll flag anything you need to pause beforehand, such as probiotics or certain medications, so the results aren't skewed. Most people complete and return their kit within a few days of receiving it, and lab turnaround from there is generally one to two weeks.
              </p>
              <p>
                We keep the rationale for which markers we're testing brief here — if you'd like the fuller explanation of why we choose particular tests and how they guide herbal prescribing, that's covered on our <a href="/what-we-treat/ibs-naturopath" className="text-primary hover:underline">IBS naturopath page</a>.
              </p>
              <p>
                While you wait on results, we're still reachable by message for quick practical questions — this isn't a stage where you're left in the dark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weeks 2-3 Results Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Weeks 2–3: The Results Interpretation Session</h2>
            
            <div className="mb-12">
              <img 
                src="/lovable-uploads/001a23d3-f9a1-4973-a6a1-a0bf46a7cfbb.png" 
                alt="Naturopath explaining IBS test results during video session" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground"><strong>We walk through your report together</strong> on a video call, in plain language rather than lab jargon.</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Brain className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground"><strong>We connect findings back to your timeline</strong> from Week 1, so the results explain your actual symptoms, not just numbers on a page.</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground"><strong>We agree the protocol together</strong> — priorities, sequencing, and what you can realistically fit around work and family life.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 mt-8">
              <p>
                This session is also where we talk through cost and duration of any recommended supplements or herbal formulas, so there are no surprises once the protocol phase begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weeks 3-8 Protocol Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Weeks 3–8: The Protocol Phase</h2>
            
            <div className="mb-12">
              <img 
                src="/lovable-uploads/95e81372-7d61-43a1-b42c-b1cf39f1ff92.png" 
                alt="Patient following personalised IBS protocol at home" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                This is the longest stretch of the programme and the part where most of the actual change happens. You'll be following a personalised combination of diet adjustments, herbal medicine and targeted supplements, with a short check-in consult roughly midway through to fine-tune dosing and troubleshoot anything that isn't sitting well.
              </p>
              <p>
                Expectation-setting matters here. Bowel regularity and bloating are often the first things to shift, sometimes within the first couple of weeks. Pain and urgency tend to follow a little later, as gut lining and motility settle. Energy, skin and mood changes are usually the slowest to show, often not obvious until six to eight weeks in.
              </p>
              <p>
                It's also completely normal to hit a wobble around weeks four to five — a stressful week, a dietary slip, or a temporary flare as your gut adjusts to new herbs. This doesn't mean the plan has failed; it's exactly why we stay in contact through this phase rather than sending you off for two months alone.
              </p>
              <p>
                Communication between consults happens by message, so if a symptom changes, a herb doesn't agree with you, or you're simply unsure whether something is expected, you're not waiting weeks for an answer. What we ask of you in return is honesty about adherence — if a food plan or dosing schedule isn't realistic for your week, tell us so we can adjust it rather than guess later why progress has stalled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weeks 8-12 Review Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Weeks 8–12: Review, Retesting and Reintroduction</h2>
            
            <div className="mb-12">
              <img 
                src="/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png" 
                alt="Naturopath reviewing IBS progress during retest consult" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Around the two to three month mark, we hold a formal review consult. For many people this includes a retest of the original markers, so we can see objectively what's shifted rather than relying on memory of how you felt on any given day. If trigger foods were removed earlier in the programme, this is also the stage where we guide a structured reintroduction, adding items back one at a time so any reaction is easy to trace.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">What This Stage Typically Covers:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Comparing retest results against your original baseline</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>A structured, one-at-a-time food reintroduction plan</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Tapering or adjusting herbs and supplements based on progress</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Flagging anything that still needs further investigation, including a possible SIBO pathway</span>
                  </li>
                </ul>
                <p className="text-muted-foreground text-lg mt-6">
                  If bloating patterns still point to bacterial overgrowth rather than resolved IBS at this stage, we'll talk through whether our <a href="/what-we-treat/sibo-naturopath" className="text-primary hover:underline">SIBO programme</a> is a more accurate next step.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Beyond Week 12: Maintenance</h2>
            
            <div className="mb-12">
              <img 
                src="/lovable-uploads/6253d25b-6827-4ec4-81ad-37d3b431a140.png" 
                alt="Patient maintaining IBS improvements after completing the programme" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Once symptoms have settled and reintroduction is complete, most people move to occasional maintenance check-ins rather than regular consults — perhaps once every few months, or simply on an as-needed basis if stress, travel or illness threatens to unsettle things again. Some patients stay on a low, ongoing dose of a particular herb or supplement long term; others need nothing further at all.
              </p>
              <p>
                What's expected of you at this stage is mainly self-monitoring: noticing early if old patterns creep back, and reaching out promptly rather than waiting for a full relapse before booking back in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing rationale brief Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why This Order, Briefly</h2>
            
            <div className="mb-12">
              <img 
                src="/lovable-uploads/d515fc10-3cc2-4062-adf8-2638cee1c7bc.png" 
                alt="Naturopath planning IBS programme sequencing" 
                className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto" 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                We test before we treat because guessing at herbs and supplements wastes both your time and money. We retest before declaring victory because how you feel and what's actually changed internally don't always move at the same pace. And we reintroduce foods gradually because an overly restricted diet is not a long-term solution.
              </p>
              <p>
                The detailed reasoning behind our specific testing choices and herbal selections lives on our <a href="/what-we-treat/ibs-naturopath" className="text-primary hover:underline">IBS naturopath page</a> — this page is deliberately focused on the process and timeline rather than the clinical rationale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to See Where You'd Start?</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                Every programme starts in the same place: a short, free conversation to work out whether this timeline fits your situation. From there, it's a clear sequence of consults, testing, and check-ins — never guesswork, and never open-ended.
              </p>
              <p>
                If you'd like to understand your symptoms first, read more on our <a href="/what-we-treat/ibs-brisbane" className="text-primary hover:underline">IBS Brisbane page</a>, or head back to our <a href="/what-we-treat/gut-health-naturopath-brisbane" className="text-primary hover:underline">gut health naturopathy hub</a> to compare this with our other digestive programmes.
              </p>
              <p className="font-semibold text-primary">
                Ready to find out where you'd start? Book your free 15-minute chat below.
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

export default IBSClinic;
