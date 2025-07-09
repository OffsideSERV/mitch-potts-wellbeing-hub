import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, AlertTriangle, CheckCircle } from 'lucide-react';

const WorstFoodsForGutHealth = () => {
  const worstFoods = [
    {
      number: "1",
      title: "Processed Foods",
      description: "Processed foods are in almost everything at the supermarket. They're quick, easy, and tasty, but they're also one of the worst foods for the gut.",
      why: "They usually contain lots of sugar, fake ingredients, preservatives, and unhealthy fats. These feed the wrong bacteria in your gut and hurt the good ones. That messes with your gut microbiota and causes problems like bloating, tiredness, and even skin breakouts.",
      examples: ["Instant noodles", "Sugary cereals", "Packaged snacks", "Ready-made sauces"],
      alternatives: ["Real whole foods like fruits, veggies, and whole grains", "Home-cooked meals with ingredients you can name"]
    },
    {
      number: "2",
      title: "Fried Foods",
      description: "Fried foods taste great, but they can be a nightmare for your gut.",
      why: "Foods like fried chicken, hot chips, and takeaway burgers are full of trans fats and oils that create inflammation in your digestive tract. They also slow down digestion, which can make you feel heavy, sluggish, and sore.",
      examples: ["Fried chicken", "Hot chips", "Takeaway burgers"],
      alternatives: ["Baked or grilled food with olive oil", "Homemade meals using wholefood ingredients"]
    },
    {
      number: "3", 
      title: "Artificial Sweeteners",
      description: "You might think diet drinks and sugar-free gum are better, but artificial sweeteners like aspartame and sucralose can mess with your gut bacteria.",
      why: "They can lower the amount of beneficial bacteria in your gut and increase bad ones. This can cause digestive issues and affect your mood, energy, and sugar cravings.",
      examples: ["Diet drinks", "Sugar-free gum", "Aspartame", "Sucralose"],
      alternatives: ["Real fruit", "Small amounts of honey or maple syrup (in moderation)"]
    },
    {
      number: "4",
      title: "Red Meat & Processed Meats", 
      description: "Eating red meat now and then is okay, but having too much, especially processed meats, can upset your gut.",
      why: "These meats are linked to inflammation, changes in gut bacteria, and a higher risk of colon cancer. They're also harder to digest and often contain added sugars and preservatives.",
      examples: ["Bacon", "Ham", "Salami", "Sausages"],
      alternatives: ["Lean proteins like chicken, turkey, fish, or lentils", "Eggs and plant-based proteins"]
    },
    {
      number: "5",
      title: "High Fructose Corn Syrup",
      description: "One of the worst things hiding in many foods is high fructose corn syrup. It feeds bad bacteria, raises blood sugar, and increases the risk of digestive disorders and inflammatory bowel disease.",
      why: "It feeds bad bacteria, raises blood sugar, and increases the risk of digestive disorders and inflammatory bowel disease.",
      examples: ["Soft drinks", "Lollies", "Packaged cakes", "Flavoured yoghurts"],
      alternatives: ["Fresh fruit", "Snacks made without added sugar or corn syrup"]
    },
    {
      number: "6",
      title: "Dairy (If You're Sensitive)",
      description: "Not everyone can handle dairy well. If you have lactose intolerance, even a small amount of milk or cheese can cause tummy pain, gas, or diarrhoea.",
      why: "Dairy may also cause inflammation in some people, especially those with celiac disease or ulcerative colitis.",
      examples: ["Milk", "Cheese", "Lactose-containing products"],
      alternatives: ["Coconut or almond milk", "Lactose-free dairy options"]
    },
    {
      number: "7",
      title: "Refined Grains (White Bread & White Rice)",
      description: "White bread and white rice might look safe, but they've had all the good stuff taken out. That means no fiber, no resistant starch, and fewer essential nutrients.",
      why: "Without these, your gut flora can't stay healthy, and your digestion slows down.",
      examples: ["White bread", "White rice", "Refined pasta"],
      alternatives: ["Whole grains like oats, brown rice, quinoa, and whole-wheat bread", "Fiber-rich foods like beans, lentils, and veggies"]
    }
  ];

  const gutEffects = [
    "Your good bacteria start to die off",
    "Bad bacteria start to take over", 
    "Your immune system gets weaker",
    "You get more bloated and tired",
    "Your risk of chronic diseases like colon cancer, heart disease, and metabolic disorders goes up"
  ];

  const healthyFoods = [
    "Leafy greens like spinach and kale",
    "Whole foods like oats, brown rice, and sweet potatoes",
    "Fermented foods like sauerkraut, kefir, and kimchi",
    "Healthy fats like avocado, olive oil, and nuts",
    "Bone broth for healing and soothing the gut",
    "Lots of clean water"
  ];

  const gutSigns = [
    "Bloating and gas after meals",
    "Irregular bowels (constipation or diarrhoea)",
    "Feeling tired all the time",
    "Skin breakouts or eczema",
    "Sugar cravings you can't control",
    "Trouble sleeping",
    "Mood swings or brain fog"
  ];

  return (
    <>
      <Helmet>
        <title>7 Worst Foods for Gut Health | Avoid These Like The Plague</title>
        <meta name="description" content="Are you struggling with bloating or tummy pain? Learn about the 7 worst foods for gut health that might be causing your pain. Let's jump in!" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  The Top 7 Worst Foods for Gut Health
                </h1>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>By Mitch - NXTLVL Health</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>12 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              {/* Introduction */}
              <div className="mb-12">
                <div className="text-muted-foreground space-y-4">
                  <p>Hey, it's Mitch here from NXTLVL Health in New Farm.</p>
                  <p>Let's talk gut health.</p>
                  <p>If you're feeling bloated, constipated, tired, moody, or just not quite right, your gut might be the reason why. I see it every week in clinic, gut health affects everything. And one of the biggest things that hurts your gut? The food you're eating.</p>
                  <p>Some foods help your gut grow strong and full of good bacteria. Other foods? They do the exact opposite. In fact, there are certain foods I always ask my clients to avoid first because they can hurt how you digest food and your overall health, even if they look "normal."</p>
                  <p>So today, I want to share the 7 worst foods for gut health, and what you can eat instead to start healing.</p>
                  <p className="font-medium text-lg">Let's jump in.</p>
                </div>
              </div>

              {/* The 7 Worst Foods */}
              <div className="mb-12">
                <div className="space-y-10">
                  {worstFoods.map((food, index) => (
                    <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                          {food.number}
                        </div>
                        <h2 className="text-2xl font-bold text-red-800">
                          {food.title}
                        </h2>
                      </div>
                      
                      <p className="text-red-700 mb-4">{food.description}</p>
                      
                      <div className="mb-4">
                        <p className="text-red-700 mb-3"><strong>Why?</strong> {food.why}</p>
                      </div>

                      {food.examples && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-red-800 mb-2">Examples:</h4>
                          <ul className="space-y-1">
                            {food.examples.map((example, exIndex) => (
                              <li key={exIndex} className="flex items-start text-red-700">
                                <AlertTriangle className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                        <h4 className="font-semibold text-green-800 mb-2">Eat this instead:</h4>
                        <ul className="space-y-1">
                          {food.alternatives.map((alternative, altIndex) => (
                            <li key={altIndex} className="flex items-start text-green-700">
                              <CheckCircle className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                              {alternative}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What These Foods Do */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What These Foods Do to Your Gut
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Here's what happens when you eat the worst foods for gut health too often:</p>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <ul className="space-y-2">
                      {gutEffects.map((effect, index) => (
                        <li key={index} className="flex items-start text-orange-700">
                          <AlertTriangle className="h-4 w-4 mt-1 mr-2 flex-shrink-0 text-orange-600" />
                          {effect}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p>It doesn't happen overnight, but it builds up fast.</p>
                </div>
              </div>

              {/* What to Eat for Healthy Gut */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What Should You Eat for a Healthy Gut?
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>A healthy gut microbiome needs gut-healthy foods that are high in fiber, full of nutrients, and easy to digest.</p>
                  <p>Here's what I recommend:</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <ul className="space-y-2">
                      {healthyFoods.map((food, index) => (
                        <li key={index} className="flex items-start text-green-700">
                          <CheckCircle className="h-4 w-4 mt-1 mr-2 flex-shrink-0 text-green-600" />
                          {food}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p>These foods help grow beneficial gut bacteria, reduce inflammation, and give your body the fuel it needs.</p>
                </div>
              </div>

              {/* How to Know If Your Gut Needs Help */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  How to Know If Your Gut Needs Help
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>If you eat a lot of the 7 worst foods for gut health, your body might already be trying to tell you something.</p>
                  <p>Here are some signs your gut is out of balance:</p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <ul className="space-y-2">
                      {gutSigns.map((sign, index) => (
                        <li key={index} className="flex items-start text-blue-700">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p>If any of these sound like you, it might be time to make a change.</p>
                </div>
              </div>

              {/* Where to Start */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Where to Start
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>You don't have to be perfect.</p>
                  <p>Even small changes like swapping white bread for sourdough or replacing soft drinks with water can have massive health benefits. Your gut wants to heal, it just needs the right foods.</p>
                  <p>If you're not sure what's right for you, start by cutting down on the worst offenders, then slowly add in more whole, real food.</p>
                  <p className="font-medium">Focus on one step at a time. That's how real, long-term health starts.</p>
                  <p className="font-medium text-lg">Take care of your gut. It takes care of you.</p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-12">
                <div className="text-muted-foreground space-y-4">
                  <p>If you'd like to learn about the best foods for gut health, stay tuned, I've got a post coming soon to help you know exactly what to eat for a happier belly and a healthier you.</p>
                  <p className="font-medium">– Mitch</p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-primary/5 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Heal Your Gut?
                </h3>
                <p className="text-muted-foreground mb-6">
                  If you're struggling with gut issues and need personalized guidance, I'm here to help. Let's work together to get your digestive health back on track.
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

export default WorstFoodsForGutHealth;