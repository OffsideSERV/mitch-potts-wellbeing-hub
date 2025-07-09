import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';

const BestTeaForStomachPain = () => {
  const tableOfContents = [
    "Why Your Stomach Feels Sore and Bloated",
    "How Tea Can Help Your Gut Feel Better", 
    "The Best Tea for Stomach Pain and Bloating",
    "When to Drink These Teas (and How Often)",
    "What to Avoid If You're Bloated",
    "Bonus Tips from My Clinic",
    "FAQs"
  ];

  const teas = [
    {
      name: "Peppermint Tea",
      bestFor: "Gas, cramps, trapped wind",
      description: "Peppermint relaxes your gut muscles and helps move gas through more easily. It's a go-to for tight, crampy bellies.",
      quote: "I feel like there's air stuck in my belly.",
      recommendation: "This is the tea I'd recommend first."
    },
    {
      name: "Chamomile Tea", 
      bestFor: "Stress-related gut pain, light nausea",
      description: "Chamomile isn't just calming for your mind—it's also calming for your stomach. If stress makes you bloat or feel sick, this tea is gold.",
      quote: "I get bloated when I'm overwhelmed.",
      recommendation: "Chamomile is your new best mate."
    },
    {
      name: "Ginger Tea",
      bestFor: "Nausea, sluggish digestion", 
      description: "Ginger helps wake up your digestive system. It's a warming tea that helps food move and reduces that heavy, slow feeling after meals.",
      quote: "My food just sits in my stomach.",
      recommendation: "Try a warm cup of ginger tea with a splash of lemon."
    },
    {
      name: "Fennel Tea",
      bestFor: "Bloating, burping, gas",
      description: "Fennel is amazing at reducing trapped wind. It tastes a little like liquorice, and works fast if your tummy feels gassy or swollen.",
      quote: "I burp a lot and feel full quickly.",
      recommendation: "Fennel tea might be your answer."
    },
    {
      name: "Slippery Elm Tea",
      bestFor: "Sensitive stomachs, inflamed gut", 
      description: "Slippery elm coats and soothes the gut lining. It's best for people who say food makes them sore, even if it's \"clean\" food.",
      quote: "Everything I eat seems to upset my stomach.",
      recommendation: "This one is worth trying with guidance from your naturopath."
    }
  ];

  const faqs = [
    {
      question: "Can I drink tea on an empty stomach?",
      answer: "Yes—gentle teas like chamomile or slippery elm are fine. Just go slow if your gut is really sensitive."
    },
    {
      question: "How long does it take for tea to work?",
      answer: "Some people feel relief within 20 minutes. Others may need to drink it consistently for a few days."
    },
    {
      question: "Can I drink these teas every day?",
      answer: "Yes, most of them are safe for daily use. Just rotate a little and don't overdo any one kind."
    },
    {
      question: "What if tea makes my bloating worse?",
      answer: "That can happen if there's an underlying gut issue. In that case, get some guidance—it might be more than just food causing the problem."
    },
    {
      question: "Should I drink tea instead of eating when I feel bloated?",
      answer: "No—don't skip meals. But tea can help calm the gut before or after eating."
    }
  ];

  return (
    <>
      <Helmet>
        <title>The Best Tea for Stomach Pain and Bloating | 2025 Look</title>
        <meta name="description" content="Are you struggling with bloating or tummy pain? Learn about the best tea for stomach pain and bloating in this quick guide. Let's jump in!" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  The Best Tea for Stomach Pain and Bloating
                </h1>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>By NXTLVL Health</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">What's Inside This Guide</h2>
                <ul className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <li key={index} className="flex items-center text-muted-foreground hover:text-primary cursor-pointer">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              {/* Why Your Stomach Feels Sore and Bloated */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Your Stomach Feels Sore and Bloated
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Let's be honest—bloating is the worst.</p>
                  <p>You eat something "healthy" and suddenly feel heavy, puffed, or like your belly is about to pop.</p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                    "I feel bloated after every meal, and I don't even know why."
                  </blockquote>
                  <p>That's what I hear from people every week in my clinic.</p>
                  <p>Whether it's from food, stress, gut bugs, or hormone shifts—your gut is trying to tell you something.</p>
                  <p>And while we work on fixing the root cause, sometimes you need fast, natural relief—and that's where the best tea for stomach pain and bloating can really help.</p>
                </div>
              </div>

              {/* How Tea Can Help */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  How Tea Can Help Your Gut Feel Better
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Certain herbal teas calm the gut, relax the muscles, reduce gas, and help food move through more smoothly.</p>
                  <p>The right tea can give you a gentle reset when things feel stuck, heavy, or irritated.</p>
                  <p>And no—it doesn't need to be fancy.</p>
                  <p>But it does need to be the right kind of tea—not just any "detox" blend from the supermarket.</p>
                </div>
              </div>

              {/* Best Teas */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  The Best Tea for Stomach Pain and Bloating
                </h2>
                <p className="text-muted-foreground mb-8">Here's my go-to list of gentle, effective teas that actually work.</p>
                
                <div className="space-y-8">
                  {teas.map((tea, index) => (
                    <div key={index} className="bg-muted/20 rounded-lg p-6">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {index + 1}. {tea.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        <strong>Best for:</strong> {tea.bestFor}
                      </p>
                      <p className="text-muted-foreground mb-4">{tea.description}</p>
                      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-2">
                        "{tea.quote}"
                      </blockquote>
                      <p className="text-foreground font-medium">{tea.recommendation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* When to Drink */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  When to Drink These Teas (and How Often)
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>After meals:</strong> To help digestion and reduce bloating</li>
                    <li><strong>Mid-morning or mid-afternoon:</strong> For gentle gut support</li>
                    <li><strong>Before bed:</strong> To calm your body and belly before sleep</li>
                  </ul>
                  <p>You can drink 1–3 cups a day of most of these teas. Just start slow and see what works best for your body.</p>
                </div>
              </div>

              {/* What to Avoid */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What to Avoid If You're Bloated
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>While you're sipping your way to gut calm, also try to avoid:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Carbonated drinks</strong> – even if it's kombucha</li>
                    <li><strong>Chewing gum</strong> – it adds more air</li>
                    <li><strong>Too much raw food</strong> – can be hard to digest</li>
                    <li><strong>Food with lots of additives or sugar-free sweeteners</strong> – they can irritate your gut</li>
                  </ul>
                  <p>And don't forget—rushing meals and eating while stressed will undo all your good work. Slow it down.</p>
                </div>
              </div>

              {/* Bonus Tips */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Bonus Tips from My Clinic
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Here's what I tell clients at NXTLVL Health when they ask about the best tea for stomach pain and bloating:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Try peppermint after big meals</li>
                    <li>Use chamomile in the evenings to calm your whole system</li>
                    <li>Blend fennel and ginger together for double relief</li>
                    <li>Notice which tea your body responds to best—everyone's a little different</li>
                    <li>Drink it warm—not hot, not cold</li>
                  </ul>
                  <p>And if tea helps a little but your gut's still off most days, that's a sign to dig deeper.</p>
                  <p className="font-medium text-lg">Bloating isn't something you just have to live with.</p>
                </div>
              </div>

              {/* FAQs */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  FAQs – Best Tea for Stomach Pain and Bloating
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-muted/20 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        Q: {faq.question}
                      </h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-primary/5 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Need More Help with Your Gut Health?
                </h3>
                <p className="text-muted-foreground mb-6">
                  If tea provides some relief but your digestive issues persist, it might be time to dig deeper and address the root cause.
                </p>
                <Button size="lg" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book a Free 15-Min Consultation
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

export default BestTeaForStomachPain;