import SEO from "@/components/SEO";
import AuthorBio from "@/components/AuthorBio";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, TrendingUp, Clock, Zap, Heart } from "lucide-react";

const AmIFatOrBloated = () => {
  const tableOfContents = [
    { id: "difference", title: "Fat or Just Bloating? What's the Difference" },
    { id: "signs-bloating", title: "Signs It's Likely Bloating (Not Fat)" },
    { id: "signs-fat", title: "Signs It's More Likely Belly Fat" },
    { id: "fluid-retention", title: "The Tricky Middle Ground: Fluid Retention" },
    { id: "pregnant-look", title: "Why Do I Look Pregnant Instead of Just Fat?" },
    { id: "causes", title: "Common Causes of Bloating" },
    { id: "quick-fixes", title: "Quick Fixes for Bloating" },
    { id: "long-term", title: "Longer-Term Solutions for Bloating" },
    { id: "how-to-tell", title: "How to Tell If It's Belly Fat or Bloating" },
    { id: "both", title: "Why Do Some People Get Both?" },
    { id: "reduce", title: "How to Reduce Bloating Quickly (and Fat Long-Term)" },
    { id: "patient-reports", title: "What Patients Often Report After Working on This" }
  ];

  return (
    <>
      <SEO
        title="Am I Fat Or Bloated? | Let's Take a Look"
        description="Wondering 'am I fat or bloated'? Learn how to spot the difference, what causes belly changes, and how to reduce bloating fast. Click to read."
        canonical="/am-i-fat-or-bloated"
        keywords="fat vs bloating, belly bloating, stomach bloating vs fat, digestive health Brisbane, naturopath Brisbane"
      />

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Am I Fat Or Bloated?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The question I get asked most in clinic. Learn how to tell the difference between belly fat and bloating, plus what to do about each one.
          </p>
          
          {/* Hero Image */}
          <div className="mt-8">
            <img 
              src="/lovable-uploads/consultation-discussion.png" 
              alt="Naturopath consultation discussing digestive health concerns"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </header>

        {/* Author and Reading Info */}
        <div className="flex items-center justify-between mb-8 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">8 min read</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Published: September 2025
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Table of Contents
            </h2>
            <div className="grid md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.id}`}
                  className="text-primary hover:text-primary/80 transition-colors text-sm py-1 block"
                >
                  {index + 1}. {item.title}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed">
            I get asked this question a lot in clinic: <strong>"Mitch, am I fat or bloated?"</strong>
          </p>

          <p>
            And it's a fair question. Many of my patients in New Farm, Brisbane come in feeling confused. 
            One day their belly looks flat. The next day it looks swollen, round, or "pregnant-like." 
            They wonder: <strong>is this fat gain, water retention, or just bloating from food?</strong>
          </p>

          <p>
            The truth is, it's not always easy to tell. But there are some clear signs I look for when helping people work it out.
          </p>
        </div>

        {/* Professional consultation image */}
        <div className="mb-12">
          <img 
            src="/lovable-uploads/naturopath-consultation.png" 
            alt="Professional naturopath consultation in modern clinic setting"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Main Content Sections */}
        <section id="difference" className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Fat or Just Bloating? What's the Difference</h2>
          
          <p className="mb-4">
            If you've ever thought <strong>"am I fat or just bloated?"</strong> you're not alone. Here's how I explain it:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-orange-500" />
                  Belly Fat
                </h3>
                <p><strong>Belly fat builds slowly, over weeks and months.</strong> It stays there all day, every day.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  Bloating
                </h3>
                <p><strong>Bloating comes and goes.</strong> Your stomach may look bigger after meals, in the evenings, or during your cycle, but not always in the morning.</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-lg font-medium bg-muted/50 p-4 rounded-lg">
            Think of fat as more <strong>constant</strong>, while bloating is more <strong>fluctuating</strong>.
          </p>
        </section>

        <section id="signs-bloating" className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Signs It's Likely Bloating (Not Fat)</h2>
          
          <p className="mb-6">When I see patients, I look for patterns. Here are some classic signs:</p>

          <div className="space-y-4 mb-6">
            {[
              { icon: CheckCircle, text: "Fluctuating belly size", detail: "Flat in the morning, swollen at night." },
              { icon: CheckCircle, text: "Tightness or pressure", detail: "Belly feels firm, stretched, or uncomfortable." },
              { icon: CheckCircle, text: "Gas, burping, or reflux", detail: "Linked with food reactions or gut bugs." },
              { icon: CheckCircle, text: "\"Why do my pants feel tight sometimes?\"", detail: "They fit one day, but not the next." },
              { icon: CheckCircle, text: "Digestive triggers", detail: "Meals with dairy, gluten, beans, onions, or fizzy drinks often set it off." },
              { icon: CheckCircle, text: "Stomach distension after meals", detail: "Looks like weight gain, but changes within hours." },
              { icon: CheckCircle, text: "Bloating related to menstrual cycle", detail: "Many women notice swelling just before their period." }
            ].map((item, index) => (
              <div key={index} className="flex gap-3 p-4 bg-green-50 rounded-lg">
                <item.icon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-800">{item.text}</p>
                  <p className="text-green-700 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bloating timeline image */}
          <div>
            <img 
              src="/lovable-uploads/belly-bloating-timeline.png" 
              alt="Timeline showing how belly bloating changes throughout the day from morning to evening"
              className="w-full h-48 object-contain rounded-lg shadow-lg bg-white"
            />
          </div>
        </section>

        <section id="signs-fat" className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Signs It's More Likely Belly Fat</h2>
          
          <p className="mb-6">On the other hand, here's what I see when it's fat gain:</p>

          <div className="space-y-4 mb-6">
            {[
              { icon: AlertCircle, text: "Consistent belly size", detail: "It doesn't shrink overnight." },
              { icon: AlertCircle, text: "Softness", detail: "Fat feels soft and squishy, not tight and swollen." },
              { icon: AlertCircle, text: "Fat accumulation vs temporary swelling", detail: "Slowly grows with time, especially with poor sleep, stress, or excess calories." },
              { icon: AlertCircle, text: "Other areas affected", detail: "Hips, thighs, arms, and face may also look fuller." },
              { icon: AlertCircle, text: "No link with meals", detail: "Belly doesn't change much before or after eating." }
            ].map((item, index) => (
              <div key={index} className="flex gap-3 p-4 bg-orange-50 rounded-lg">
                <item.icon className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-orange-800">{item.text}</p>
                  <p className="text-orange-700 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="fluid-retention" className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">The Tricky Middle Ground: Fluid Retention</h2>
          
          <p className="mb-4">
            Sometimes the question isn't just <strong>"bloating vs weight gain"</strong>. It can also be water retention.
            I've had patients ask: <strong>"is my belly fat or water retention?"</strong>
          </p>

          <p className="mb-4">Here's what I look for:</p>

          <ul className="list-disc list-inside space-y-2 mb-6 bg-blue-50 p-6 rounded-lg">
            <li>Swelling in the ankles, hands, or face.</li>
            <li>Belly feels puffy rather than gassy.</li>
            <li>Often worse with high salt, alcohol, or hormone shifts.</li>
          </ul>

          <p className="text-sm text-muted-foreground">
            This is less common than gut-driven bloating, but worth checking out.
          </p>

          {/* Health assessment image */}
          <div className="mt-6">
            <img 
              src="/lovable-uploads/health-assessment.png" 
              alt="Health professional conducting detailed assessment and documentation"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section id="pregnant-look" className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Why Do I Look Pregnant Instead of Just Fat?</h2>
          
          <p className="mb-4">
            This is one of the most common frustrations I hear. Patients say:
          </p>

          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="italic mb-2">"My belly looks fat, but is it bloating?"</p>
            <p className="italic">"Why do I look pregnant after dinner?"</p>
          </div>

          <p className="mb-4">This usually comes down to <strong>stomach bloated vs fat</strong>:</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Fat Gain</h3>
                <p>Spreads evenly</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Bloating</h3>
                <p>Pushes the stomach outward, often firm, round, and sudden</p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-6 text-center bg-primary/10 p-4 rounded-lg">
            If your belly looks fine in the morning but <strong>bloated stomach after dinner</strong> is your normal, it's almost always digestive.
          </p>
        </section>

        <section id="causes" className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Common Causes of Bloating</h2>
          
          <p className="mb-6">So, <strong>why am I bloated all the time?</strong></p>
          <p className="mb-6">Here are the patterns I see most often in clinic:</p>

          <div className="space-y-6">
            {[
              {
                title: "Food reactions",
                description: "Dairy, gluten, beans, onions, garlic, fizzy drinks.",
                detail: "These ferment in the gut → gas → belly distension."
              },
              {
                title: "Low stomach acid or enzymes",
                description: "If you don't break food down properly, it ferments instead."
              },
              {
                title: "Gut bugs (SIBO, candida, imbalance)",
                description: "Overgrowths cause bloating after meals."
              },
              {
                title: "Hormonal changes",
                description: "Bloating related to menstrual cycle is very real."
              },
              {
                title: "Stress and nervous system overload",
                description: "When you're \"wired but tired,\" digestion shuts down."
              }
            ].map((cause, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{cause.title}</h3>
                  <p className="mb-2">{cause.description}</p>
                  {cause.detail && <p className="text-sm text-muted-foreground">{cause.detail}</p>}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Digestive-friendly foods image */}
          <div className="mt-8">
            <img 
              src="/lovable-uploads/warm-soup-digestion.png" 
              alt="Warm, digestive-friendly soup with healing ingredients like ginger and carrots"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section id="quick-fixes" className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Quick Fixes for Bloating</h2>
          
          <p className="mb-6">Sometimes you just want fast relief. Here are a few <strong>quick fixes for bloating</strong> I share:</p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Chew slowly (20–30 chews per bite)",
              "Don't chug water with meals → small sips only",
              "Gentle walking after meals helps gas move through",
              "Warm foods (soups, stews) instead of cold raw foods when digestion is weak",
              "Breathing rituals → 3 deep breaths before eating. This calms the nervous system"
            ].map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <Zap className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-green-800">{tip}</p>
              </div>
            ))}
          </div>

        </section>

        <section id="long-term" className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Longer-Term Solutions for Bloating</h2>
          
          <p className="mb-4">Of course, quick fixes are only half the story. If bloating is constant, we need to look deeper.</p>
          
          <p className="mb-6">This is where <strong>naturopathy and functional medicine</strong> shine. I often test for:</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              "Food intolerances",
              "Stomach acid, enzymes, bile flow",
              "Gut microbiome balance",
              "Inflammation and immune markers"
            ].map((test, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                <Heart className="h-4 w-4 text-primary" />
                <span>{test}</span>
              </div>
            ))}
          </div>

          <p className="mb-4">
            From there, we make a plan. That might include gut repair nutrients, microbiome rebuild, stress resets, or meal timing changes.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg">
            <p className="text-center font-semibold">
              The goal isn't just to calm symptoms. It's to <strong>fix the root cause</strong>.
            </p>
          </div>

        </section>

        <section id="how-to-tell" className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">How to Tell If It's Belly Fat or Bloating</h2>
          
          <p className="mb-6">Here's a simple checklist I use with patients:</p>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { question: "Does your belly change size during the day?", answer: "Likely bloating" },
                  { question: "Does it feel firm and tight or soft and squishy?", answer: "Firm = bloating, soft = fat" },
                  { question: "Do certain foods trigger it?", answer: "Bloating" },
                  { question: "Has it built up slowly over months?", answer: "Fat" },
                  { question: "Does it come with gas, reflux, or pain?", answer: "Bloating" }
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <p className="font-medium">{item.question}</p>
                    <p className="text-primary text-sm">→ {item.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="mt-6 text-center bg-muted/50 p-4 rounded-lg">
            If you tick both columns, you might have a mix of fat and bloating. <strong>Many people do.</strong>
          </p>
        </section>

        <section id="both" className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Why Do Some People Get Both?</h2>
          
          <p className="mb-4">
            I've seen this in clinic so often: patients feel <strong>"fat stomach every morning vs bloated evenings."</strong>
          </p>

          <p className="mb-4">That's because:</p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-orange-600 mt-1" />
              <p><strong>Extra belly fat stays all day.</strong></p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
              <Zap className="h-5 w-5 text-blue-600 mt-1" />
              <p><strong>Digestive bloating stacks on top, especially after meals.</strong></p>
            </div>
          </div>

          <p className="bg-primary/10 p-4 rounded-lg">
            It can feel like a double-whammy. But when we work on digestion, people often notice they drop a clothing size just from less bloating, <strong>before even touching fat loss</strong>.
          </p>

        </section>

        <section id="reduce" className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">How to Reduce Bloating Quickly (and Fat Long-Term)</h2>
          
          <p className="mb-6">The best way to approach this is in steps:</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  1. Reduce bloating quickly
                </h3>
                <p>Fix chewing, breathing, hydration, meal timing.</p>
                <p className="text-sm text-muted-foreground mt-2">Use soothing herbs like slippery elm or peppermint.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-green-500" />
                  2. Tackle root causes
                </h3>
                <p>Gut testing, food plans, microbiome repair.</p>
                <p className="text-sm text-muted-foreground mt-2">Address stress and sleep.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-orange-500" />
                  3. Address fat gain if needed
                </h3>
                <p>Nutrition coaching, strength training, lifestyle habits.</p>
                <p className="text-sm text-muted-foreground mt-2">This isn't about fad diets — it's about balance.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="patient-reports" className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">What Patients Often Report After Working on This</h2>
          
          <p className="mb-6">When bloating improves, I hear patients say:</p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <div className="space-y-3">
              {[
                "\"I don't look 6 months pregnant after dinner anymore.\"",
                "\"My belly feels flatter and lighter.\"",
                "\"My pants fit all day instead of just in the morning.\"",
                "\"I finally know the difference between fat gain and bloat.\""
              ].map((quote, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="italic text-green-800">{quote}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6">
            And when fat loss is also a goal, <strong>combining gut health + smart training makes the results stick</strong>.
          </p>

        </section>

        {/* Final Thoughts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Final Thoughts: Am I Fat or Bloated?</h2>
          
          <p className="mb-4">If you're asking this question, <strong>you're not alone</strong>.</p>

          <p className="mb-4">
            The difference between <strong>fat accumulation vs temporary swelling</strong> can feel confusing. 
            But with the right approach, you can learn how to tell fat from bloating, calm your gut, and take charge of your health.
          </p>

          <p className="mb-8">
            At NXTLVL Health here in New Farm, I work with patients every week who feel heavy, swollen, or "stuck in their belly." 
            The good news? <strong>There's always a reason — and always a path forward</strong>.
          </p>

          {/* Call to Action */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Next Step: Get Clear on What's Happening in Your Body
              </h3>
              <p className="mb-6 text-lg">
                If you're tired of guessing, I'd love to help.
              </p>
              <Button size="lg" className="mb-4">
                Book Your Free 15-Minute Discovery Call
              </Button>
              <p className="text-sm text-muted-foreground">
                Bring your symptoms, your story, and your questions. Together we'll map out your first steps — whether it's bloating, fat gain, or both.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Author Bio */}
        <AuthorBio />

        {/* Final Image Placeholder */}
        <div className="bg-muted rounded-lg h-48 flex items-center justify-center mt-8">
          <p className="text-muted-foreground">[Image: NXTLVL Health clinic or consultation room]</p>
        </div>
      </article>
    </>
  );
};

export default AmIFatOrBloated;