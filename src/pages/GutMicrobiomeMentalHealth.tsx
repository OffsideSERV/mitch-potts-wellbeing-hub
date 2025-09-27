import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Brain, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AuthorBio from '@/components/AuthorBio';
import SEO from '@/components/SEO';

const GutMicrobiomeMentalHealth = () => {
  return (
    <>
      <SEO
        title="Gut Microbiome and Mental Health | What's The Link? - NXTLVL Health"
        description="Discover how your gut microbiome affects mental health. Learn about the gut-brain axis, depression, anxiety, and natural ways to improve mood through gut health."
        canonical="https://www.nxtlvlhealth.com.au/gut-microbiome-mental-health"
        keywords="gut microbiome, mental health, gut-brain axis, depression, anxiety, probiotics, gut health, microbiome diversity, psychobiotics"
      />

      <article className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                <Brain className="w-4 h-4 mr-2" />
                Mental Health & Gut Health
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Gut Microbiome and Mental Health
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              What's The Link Between Your Gut Bacteria and Your Mood?
            </p>

            {/* Hero Image Placeholder */}
            <div className="w-full h-64 md:h-80 bg-muted/50 rounded-xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mb-8">
              <div className="text-center">
                <Brain className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                <p className="text-muted-foreground">Hero Image: Brain-Gut Connection Illustration</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                8 min read
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Mental Health
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Gut Health
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                In my New Farm clinic, I often hear patients ask: <strong>"Mitch, what does my gut have to do with my mood?"</strong>
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                And it's a good question. We usually think of digestion and mental health as two separate worlds. But science — and what I see in patients every week — tells a different story.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                <strong>The gut microbiome and mental health are closely linked.</strong> Your gut bacteria don't just digest food. They send signals to your brain, make neurotransmitters, and even shape mood and resilience. Let's take a closer look at the brain-gut-microbiome relationship.
              </p>

              {/* Image Placeholder */}
              <div className="w-full h-48 bg-muted/50 rounded-xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center my-8">
                <div className="text-center">
                  <Heart className="w-12 h-12 mx-auto mb-2 text-muted-foreground/50" />
                  <p className="text-muted-foreground text-sm">Image: Patient consultation scene</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is the Gut Microbiome */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Is the Gut Microbiome?</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>The gut microbiome is the community of microbes</strong> (bacteria, fungi, and other tiny organisms) living in your digestive tract.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">When it's balanced:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>You digest food well.</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Your immune system stays calm.</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Your brain gets healthy signals.</strong></span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">When it's out of balance (dysbiosis):</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-red-500 rounded-full mr-2 mt-1 flex-shrink-0"></div>
                      <span><strong>Digestion struggles.</strong></span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-red-500 rounded-full mr-2 mt-1 flex-shrink-0"></div>
                      <span><strong>Inflammation rises.</strong></span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-red-500 rounded-full mr-2 mt-1 flex-shrink-0"></div>
                      <span><strong>Your brain may feel stressed, anxious, or low.</strong></span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg leading-relaxed">
              This is why I pay close attention to <strong>gut bacteria and mental health</strong> when I assess patients.
            </p>
          </div>
        </section>

        {/* How Gut Microbiome Affects Mental Health */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How Gut Microbiome Affects Mental Health</h2>
            
            <p className="text-lg leading-relaxed mb-8">Here are the main ways the gut links to the brain:</p>

            <div className="space-y-12">
              {/* 1. Gut-Brain Axis */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-4">1. Gut-Brain Axis and Mood</h3>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>The gut and brain talk to each other through the gut-brain axis.</strong> Messages travel via nerves (especially the vagus nerve) and through chemicals made in the gut.
                </p>
                <p className="text-lg leading-relaxed">
                  This is why <strong>stress can cause stomach upsets, and gut issues can cause mood swings.</strong>
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="w-full h-48 bg-muted/50 rounded-xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-12 h-12 mx-auto mb-2 text-muted-foreground/50" />
                  <p className="text-muted-foreground text-sm">Image: Gut-Brain Axis Diagram</p>
                </div>
              </div>

              {/* 2. Depression */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-4">2. Gut Microbes and Depression</h3>
                <ul className="space-y-3 text-lg">
                  <li><strong>Studies show that certain gut microbes are low in people with depression.</strong> Others are higher.</li>
                  <li>It's not the only cause, but it's part of the picture.</li>
                  <li>Patients often tell me: <strong>"When my gut is off, I feel flat and tired."</strong> That's not in their head — it's biology.</li>
                </ul>
              </div>

              {/* 3. Anxiety */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-4">3. Microbiome Connection to Anxiety</h3>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>I've seen many anxious patients improve when we restore gut balance.</strong> Why?
                </p>
                <ul className="space-y-3 text-lg">
                  <li><strong>Gut microbes make GABA and serotonin</strong> — neurotransmitters that calm the brain.</li>
                  <li><strong>Dysbiosis can lower these, leaving people wired but tired.</strong></li>
                  <li>This is one reason I test gut health in patients who struggle with anxiety.</li>
                </ul>
              </div>

              {/* 4. Brain Function */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-4">4. Gut Health and Brain Function</h3>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>It's not just mood. Brain clarity, focus, and memory are linked to gut microbiota too.</strong>
                </p>
                <p className="text-lg leading-relaxed">
                  When inflammation rises in the gut, it can cloud thinking — what many call <strong>"brain fog."</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stress Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Gut Microbiome and Stress</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Chronic stress changes gut bacteria.</strong> Stress hormones affect the gut lining, leading to leaks and imbalance.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              In turn, <strong>dysbiosis sends stress signals back to the brain. It becomes a loop.</strong>
            </p>

            <p className="text-lg leading-relaxed">
              I've seen patients break this loop by working on <strong>gut microbiome influence on stress.</strong> The result? <strong>Calmer mind, better sleep, and more resilience.</strong>
            </p>

            {/* Image Placeholder */}
            <div className="w-full h-48 bg-muted/50 rounded-xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mt-8">
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-2 text-muted-foreground/50" />
                <p className="text-muted-foreground text-sm">Image: Stress cycle diagram</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dysbiosis Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Dysbiosis and Mood Disorders</h2>
            
            <p className="text-lg leading-relaxed mb-6">When the gut microbiome is out of balance:</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold mb-2">Bad bugs overgrow</h3>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold mb-2">Good bugs shrink</h3>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold mb-2">Gut barrier weakens</h3>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              <strong>This can lead to inflammation that fuels depression and anxiety.</strong>
            </p>

            <p className="text-lg leading-relaxed">
              <strong>The mental health impact of gut dysbiosis is real</strong> — I've watched patients feel better mentally after we restored balance.
            </p>
          </div>
        </section>

        {/* Research Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What the Research Says</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              There's growing <strong>gut microbiome and mental health research</strong> showing strong links. Studies report:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-lg"><strong>People with depression often have less diverse microbiomes.</strong></span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-lg"><strong>Probiotics (sometimes called psychobiotics) can improve mood.</strong></span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-lg"><strong>Prebiotics (fibres that feed good bugs) can reduce stress hormones.</strong></span>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              The science is still building, but <strong>the microbiome mental health link is now well accepted.</strong>
            </p>
          </div>
        </section>

        {/* Can Gut Microbiome Affect Mental Health */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Can Gut Microbiome Affect Mental Health?</h2>
            
            <div className="text-6xl font-bold text-primary mb-6">YES</div>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>I've seen it over and over.</strong> Patients with poor gut health often feel:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl mb-2">😰</div>
                  <h3 className="font-semibold">More anxious</h3>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl mb-2">😔</div>
                  <h3 className="font-semibold">More depressed</h3>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl mb-2">🌫️</div>
                  <h3 className="font-semibold">More brain fogged</h3>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              <strong>When we restore the microbiome, their mental health shifts.</strong>
            </p>

            <p className="text-xl leading-relaxed font-semibold">
              So, the answer is clear: <strong>gut microbiome and mental health are deeply connected.</strong>
            </p>
          </div>
        </section>

        {/* Improving Mental Health */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Improving Mental Health by Balancing Microbiome</h2>
            
            <p className="text-lg leading-relaxed mb-8 text-center">Here are the main tools I use with patients:</p>

            <div className="space-y-12">
              {/* 1. Food First */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-4">1. Food First</h3>
                <ul className="space-y-3 text-lg">
                  <li><strong>Add diversity:</strong> fruits, veg, whole foods.</li>
                  <li><strong>Reduce processed sugar and additives.</strong></li>
                  <li><strong>Balance fibre</strong> — too much, too fast can backfire.</li>
                </ul>
              </div>

              {/* Image Placeholder */}
              <div className="w-full h-48 bg-muted/50 rounded-xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-12 h-12 mx-auto mb-2 text-muted-foreground/50" />
                  <p className="text-muted-foreground text-sm">Image: Diverse healthy foods</p>
                </div>
              </div>

              {/* 2. Probiotics */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-4">2. Probiotics for Mood and Brain</h3>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Certain probiotic strains support mood.</strong> For example, Lactobacillus and Bifidobacterium have been shown to help.
                </p>
                <p className="text-lg leading-relaxed">
                  I don't hand out probiotics to everyone — it depends on the patient — but <strong>they can be powerful.</strong>
                </p>
              </div>

              {/* 3. Prebiotics */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-4">3. Prebiotics and Mental Health</h3>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Prebiotics (fibres like inulin, resistant starch, PHGG) feed the good bugs.</strong>
                </p>
                <p className="text-lg leading-relaxed">
                  They help the gut produce <strong>short-chain fatty acids, which calm inflammation and support brain function.</strong>
                </p>
              </div>

              {/* 4. Reduce Inflammation */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-4">4. Reduce Gut Inflammation</h3>
                <ul className="space-y-3 text-lg">
                  <li><strong>Use gut-healing nutrients</strong> (glutamine, zinc carnosine, collagen).</li>
                  <li><strong>Remove food irritants.</strong></li>
                  <li><strong>Balance lifestyle factors</strong> like sleep and stress.</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  <strong>Reducing gut inflammation and depression together often makes a big difference.</strong>
                </p>
              </div>

              {/* 5. Lifestyle */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-4">5. Lifestyle for the Microbiome-Brain Axis</h3>
                <ul className="space-y-3 text-lg">
                  <li><strong>Sleep</strong> → resets gut and brain.</li>
                  <li><strong>Exercise</strong> → boosts good microbes.</li>
                  <li><strong>Stress tools</strong> (breathing, mindfulness, walks) → calm both systems.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Psychobiotics */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Psychobiotics: The Future?</h2>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Psychobiotics are probiotics shown to improve mental health.</strong> They may be the future of gut microbiome therapy for mental health.
              </p>
              <p className="text-lg leading-relaxed">
                But even now, <strong>I've seen huge benefits from using the right strains in practice.</strong>
              </p>
            </div>

            {/* Gut Barrier */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Gut Barrier, Microbiome, and Mental Wellness</h2>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Your gut lining is like a filter.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-lg"><strong>When strong</strong> → toxins stay out, nutrients get in.</p>
                </div>
                <div>
                  <p className="text-lg"><strong>When weak</strong> → toxins leak into the blood, driving brain inflammation.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                This <strong>"leaky gut" pattern is a hidden trigger for mood issues.</strong>
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Restoring the gut barrier is part of mental wellness through gut balance.</strong>
              </p>
            </div>

            {/* Diversity */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Microbiome Diversity and Mood</h2>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Diversity = resilience.</strong> The more types of good bacteria you have, the more stable your mood and health.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Patients with restricted diets often have low diversity</strong> — and higher risk of depression or anxiety.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Expanding plant foods slowly is one of the best ways to build resilience.</strong> This is key to dietary changes for microbiome and mood.
              </p>
            </div>
          </div>
        </section>

        {/* Patient Stories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Patient Stories (What I See in Clinic)</h2>
            
            <div className="space-y-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Case 1: Anxiety and IBS</h3>
                  <p className="text-lg leading-relaxed">
                    A patient came in with <strong>constant bloating and panic attacks.</strong> Testing showed dysbiosis. We rebalanced with diet and targeted probiotics. <strong>Her gut calmed — and so did her anxiety.</strong>
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Case 2: Depression and Brain Fog</h3>
                  <p className="text-lg leading-relaxed">
                    Another patient <strong>felt flat for years.</strong> Gut testing showed low microbiome diversity. After we worked on fibre and lifestyle, <strong>his mood lifted, and brain fog cleared.</strong>
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Case 3: Stress and Insomnia</h3>
                  <p className="text-lg leading-relaxed">
                    A stressed office worker had <strong>reflux, poor sleep, and mood swings.</strong> By supporting her microbiota and nervous system together, <strong>she felt calmer and slept deeply again.</strong>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Image Placeholder */}
            <div className="w-full h-48 bg-muted/50 rounded-xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mt-12">
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-2 text-muted-foreground/50" />
                <p className="text-muted-foreground text-sm">Image: Happy patient testimonials</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Final Thoughts: Gut Microbiome and Mental Health</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              So, what's the link? <strong>The gut microbiome affects:</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">Mood</h3>
                  <p className="text-sm text-muted-foreground">(depression, anxiety)</p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">Brain function</h3>
                  <p className="text-sm text-muted-foreground">(focus, clarity)</p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">Stress resilience</h3>
                  <p className="text-sm text-muted-foreground">(coping ability)</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              <strong>When I see patients with mental health struggles, I always consider the gut.</strong> Often, gut bacteria and mental health are two sides of the same coin.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Your Next Step</h2>
            
            <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              If you've been struggling with <strong>mood, anxiety, or brain fog</strong> — and nothing seems to shift — <strong>your gut might be the missing piece.</strong>
            </p>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-primary/20">
              <div className="flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-primary mr-2" />
                <span className="text-lg font-semibold">Book a Free 15-Minute Discovery Call</span>
              </div>
              <p className="text-muted-foreground mb-6">
                We'll look at your story and see how your gut and brain might be linked. From there, we'll map your first steps to restoring balance and feeling better.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
                  onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2FER0ii_FeUy91jVq2erEqzKqY3KIZKSGgJz5ew8nKvnRLPrzpJx0TSZSUGlOcq1F98jY5wjAZ', '_blank')}
                >
                  Book Free Discovery Call
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 text-lg"
                  onClick={() => window.open('tel:+61732520645', '_blank')}
                >
                  Call (07) 3252 0645
                </Button>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="w-full h-48 bg-muted/50 rounded-xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-2 text-muted-foreground/50" />
                <p className="text-muted-foreground text-sm">Image: Consultation booking</p>
              </div>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <AuthorBio />
      </article>
    </>
  );
};

export default GutMicrobiomeMentalHealth;