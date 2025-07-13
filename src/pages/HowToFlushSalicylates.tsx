import SEO from "@/components/SEO";
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ChevronRight, AlertTriangle } from 'lucide-react';

const HowToFlushSalicylates = () => {
  const tableOfContents = [
    "What Are Salicylates?",
    "Why Some People React to Them",
    "Common Signs Your Body's Not Coping",
    "How to Flush Salicylates From Your Body (Step-by-Step)",
    "Foods to Avoid (and What to Eat Instead)",
    "Extra Tips to Feel Better Faster",
    "When to Get Help",
    "FAQs"
  ];

  const symptoms = [
    "Itchy skin, rashes or hives",
    "Stomach pain, bloating or loose bowels",
    "Headaches or foggy brain",
    "Mood swings, anxiety, or feeling flat",
    "Blocked or runny nose",
    "Tired all the time—even after sleep"
  ];

  const steps = [
    {
      number: "1",
      title: "Lower the Load",
      description: "Start by giving your body a break. That means cutting back (not cutting out forever) on foods high in salicylates.",
      foods: ["Herbs and spices", "Berries", "Tomatoes", "Avocado", "Almonds", "Coconut", "Tea and coffee"],
      note: "Not all at once—just enough to feel a shift. This helps lower the bucket so your body can start to reset."
    },
    {
      number: "2", 
      title: "Support Your Liver",
      description: "Your liver is your main detox organ. If it's sluggish, salicylates stick around longer than they should.",
      foods: ["Filtered water (lots of it!)", "Broccoli, cauliflower, cabbage (gently steamed is best)", "Good sleep (the liver works hardest at night)", "No alcohol (even small amounts slow everything down)"]
    },
    {
      number: "3",
      title: "Get Your Minerals In", 
      description: "Certain nutrients help your body process salicylates better. These are my top picks:",
      foods: ["Magnesium – calms your nervous system and helps with detox", "Vitamin B6 – helps break down salicylates in the liver", "Glycine – a gentle amino acid that supports phase II detox", "Glutathione – the body's master antioxidant"]
    },
    {
      number: "4",
      title: "Support Your Gut",
      description: "You can't flush anything properly with an unhappy gut. Here's how to help it heal:",
      foods: ["Eat simple, low-salicylate meals for a week or two", "Avoid processed foods and additives", "Support digestion with warm teas like chamomile or slippery elm", "Go slow—no need to overhaul everything overnight"]
    }
  ];

  const avoidFoods = [
    "Avocado", "Tomato", "Capsicum", "Berries", "Almonds", "Olives", "Coconut products", "Dried fruits", "Spices like cinnamon, curry powder, turmeric", "Herbal teas"
  ];

  const enjoyFoods = [
    "White rice", "Chicken, turkey", "Pears, bananas", "Cabbage, zucchini, iceberg lettuce", "Gluten-free oats", "Freshly cooked meals with simple ingredients"
  ];

  const extraTips = [
    "Move your body gently – walking helps move toxins out",
    "Try Epsom salt baths – helps relax muscles and supports detox", 
    "Nasal rinses – helpful for sinus issues",
    "Mindfulness or breathwork – stress makes symptoms worse",
    "Avoid fragrances and strong skincare – they often contain salicylates too"
  ];

  const faqs = [
    {
      question: "Can I remove salicylates completely forever?",
      answer: "Not usually—and not needed. The goal is to lower the load, not cut everything forever."
    },
    {
      question: "How long does it take to flush salicylates out?",
      answer: "Some people feel better in a few days. Others take a few weeks. It depends on your body, gut health and how much support it needs."
    },
    {
      question: "What if I react when I eat healthy foods?",
      answer: "That's a clue your body isn't processing them well. Don't stress—we can support your detox systems and calm things down."
    },
    {
      question: "Should I stop all herbs and spices?",
      answer: "Only if you're reacting strongly. Otherwise, go slow and pay attention to your symptoms."
    },
    {
      question: "Do I need to do this alone?",
      answer: "Nope. I'm here to help if you need support and a clear plan. You don't have to keep guessing."
    }
  ];

  return (
    <>
      <SEO 
        title="How to Flush Salicylates from Your Body | 4-Step Guide"
        description="Always feel bloated, itchy or foggy after eating healthy foods? Learn how to flush salicylates from your body gently and naturally in this guide, let's jump in!"
        canonical="/blog/naturopathy/how-to-flush-salicylates-from-your-body"
        keywords="flush salicylates, salicylate intolerance, food sensitivities, naturopathy, detox, natural remedies"
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  How to Flush Salicylates From Your Body
                </h1>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>By NXTLVL Health</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>10 min read</span>
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

              <div className="text-center text-muted-foreground">
                <p>Today, we'll be talking about what Salicylates are, and I'll walk you through exactly how to flush Salicylates from your body.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              {/* What Are Salicylates */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What Are Salicylates?
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Let's keep this simple. Salicylates are natural chemicals found in lots of healthy foods—like fruits, herbs, spices, and even some skincare.</p>
                  <p>They're part of a plant's defence system. For most people, they're no problem. But for others, they can cause big trouble.</p>
                </div>
              </div>

              {/* Why Some People React */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Some People React to Salicylates
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>If you've landed on this article, you probably already feel off—even when you're eating healthy.</p>
                  <p>You might be thinking, "I've cleaned up my diet, so why do I still feel bloated, itchy or moody?"</p>
                  <p>Here's the thing: Some bodies struggle to break down salicylates. It's like a traffic jam in your detox pathways. And when these build up? You feel it.</p>
                </div>
              </div>

              {/* Common Signs */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Common Signs Your Body's Not Coping With Salicylates
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Here are some red flags I often see in clinic:</p>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
                      <span className="font-medium text-orange-800">Warning Signs</span>
                    </div>
                    <ul className="space-y-2">
                      {symptoms.map((symptom, index) => (
                        <li key={index} className="flex items-start text-orange-700">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p>If you're nodding along, keep reading. I'll walk you through how to flush salicylates from your body gently and safely.</p>
                </div>
              </div>

              {/* Step-by-Step Guide */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  How to Flush Salicylates From Your Body (Step-by-Step)
                </h2>
                
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div key={index} className="bg-muted/20 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mr-4">
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground">
                          Step {step.number}: {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      
                      {step.title === "Lower the Load" && (
                        <p className="text-muted-foreground mb-4">I'm talking:</p>
                      )}
                      
                      <ul className="space-y-2 mb-4">
                        {step.foods.map((food, foodIndex) => (
                          <li key={foodIndex} className="flex items-start text-muted-foreground">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {food}
                          </li>
                        ))}
                      </ul>
                      
                      {step.note && (
                        <p className="text-muted-foreground italic">{step.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Foods Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Foods to Avoid (and What to Eat Instead)
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Foods to Avoid */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">
                      Foods to Avoid (High in Salicylates)
                    </h3>
                    <p className="text-red-700 mb-4 text-sm">These foods are healthy—but can cause symptoms if you're sensitive:</p>
                    <ul className="space-y-2">
                      {avoidFoods.map((food, index) => (
                        <li key={index} className="flex items-start text-red-700">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {food}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Foods to Enjoy */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      Foods to Enjoy (Lower in Salicylates)
                    </h3>
                    <p className="text-green-700 mb-4 text-sm">Here's what to eat while you reset:</p>
                    <ul className="space-y-2">
                      {enjoyFoods.map((food, index) => (
                        <li key={index} className="flex items-start text-green-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {food}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 font-medium">Remember—this isn't forever. It's just a step to help your body feel safe again.</p>
                </div>
              </div>

              {/* Extra Tips */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Extra Tips to Feel Better Faster
                </h2>
                <div className="bg-muted/20 rounded-lg p-6">
                  <ul className="space-y-3">
                    {extraTips.map((tip, index) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* When to Get Help */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  When to Get Help
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>If you've:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Been feeling "off" for a long time</li>
                    <li>Tried multiple diets with no real change</li>
                    <li>Felt dismissed or confused by health advice</li>
                    <li>Been told "your tests are fine" but you don't feel fine…</li>
                  </ul>
                  <p>You don't have to figure it out alone. I've worked with hundreds of clients just like you—smart, proactive people who just want real answers and a plan that makes sense.</p>
                  <p>Sometimes it's salicylates. Sometimes it's something deeper. But either way, I'll help you find it.</p>
                </div>
                
                <div className="mt-6 p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-muted-foreground mb-4">
                    Click here to book a completely free 15 minute consult with me, let's talk about what you've been going through.
                  </p>
                  <Button size="lg" asChild>
                    <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Your Free 15-Min Consultation
                    </a>
                  </Button>
                </div>
              </div>

              {/* FAQs */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  FAQs – How to Flush Salicylates From Your Body
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

              {/* Final CTA */}
              <div className="bg-primary/5 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Take Control of Your Health?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Don't let salicylate sensitivity control your life. Get the personalized support you need to feel better naturally.
                </p>
                <Button size="lg" asChild>
                  <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult">
                    <Calendar className="h-5 w-5 mr-2" />
                    Start Your Journey Today
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

export default HowToFlushSalicylates;