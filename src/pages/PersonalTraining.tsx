import React, { useState } from 'react';
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, ChevronDown, ChevronUp, Dumbbell, Heart, Activity, Target, Users, Monitor, MapPin } from 'lucide-react';
const PersonalTraining = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Service Schema for Personal Training
  const personalTrainingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nxtlvlhealth.com.au/services/personal-trainer-newstead#service",
    "name": "Personal Training in Newstead",
    "alternateName": ["Personal Fitness Training", "Exercise Therapy", "Strength Training", "Fitness Coaching"],
    "description": "Expert personal training in Newstead, Brisbane. Specialising in strength training, injury prevention, body composition changes, and functional movement with a dual-qualified naturopath and exercise scientist.",
    "url": "https://www.nxtlvlhealth.com.au/services/personal-trainer-newstead",
    "image": "https://www.nxtlvlhealth.com.au/lovable-uploads/dd4ff0ea-d4e7-416c-b0d9-d3a541758d60.png",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.nxtlvlhealth.com.au/#organization",
      "name": "NXTLVL Health - Naturopath",
      "image": "https://www.nxtlvlhealth.com.au/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png",
      "telephone": "(07) 3180 8853",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 2/665 Brunswick St",
        "addressLocality": "New Farm",
        "addressRegion": "QLD",
        "addressCountry": "AU",
        "postalCode": "4005"
      }
    },
    "serviceType": "Fitness and Exercise Training",
    "category": "Personal Training",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Personal Training Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Individual Personal Training Session",
          "description": "One-on-one personal training session with qualified exercise scientist and naturopath"
        },
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personal Training Package",
          "description": "Multiple personal training sessions for ongoing fitness development and goal achievement"
        },
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }]
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-27.4646",
        "longitude": "153.0448"
      },
      "geoRadius": "50000"
    },
    "areaServed": ["Brisbane", "Newstead", "New Farm", "Fortitude Valley", "Teneriffe", "Kangaroo Point", "East Brisbane", "Norman Park", "Bulimba", "Hawthorne", "Morningside", "Ascot", "Hamilton", "Clayfield", "Wilston", "Windsor", "Kelvin Grove", "Paddington", "Red Hill", "Auchenflower", "Toowong", "Bowen Hills", "South Brisbane", "Queensland"],
    "availableChannel": {
      "@type": "ServiceChannel",
      "name": "In-Person Training at Function Well",
      "serviceLocation": {
        "@type": "Place",
        "name": "Function Well - Mercedes Benz Building",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mercedes Benz Building",
          "addressLocality": "Newstead",
          "addressRegion": "QLD",
          "addressCountry": "AU",
          "postalCode": "4006"
        },
        "amenityFeature": [{
          "@type": "LocationFeatureSpecification",
          "name": "Free Parking",
          "value": "true"
        }, {
          "@type": "LocationFeatureSpecification",
          "name": "Private Gym Facility",
          "value": "true"
        }, {
          "@type": "LocationFeatureSpecification",
          "name": "Professional Equipment",
          "value": "true"
        }]
      },
      "servicePhone": "(07) 3180 8853",
      "serviceUrl": "https://www.nxtlvlhealth.com.au/services/personal-trainer-newstead"
    },
    "serviceOutput": ["Strength Building", "Weight Loss", "Body Composition Improvement", "Injury Prevention", "Functional Movement", "Athletic Performance", "Mobility Enhancement", "Exercise Therapy"],
    "audience": {
      "@type": "PeopleAudience",
      "audienceType": "Fitness Enthusiasts, Athletes, Beginners, Injury Recovery Clients"
    },
    "potentialAction": [{
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://nxtlvlhealth.com.au/book-now/",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      },
      "result": {
        "@type": "Reservation",
        "name": "Personal Training Session Booking"
      }
    }]
  };
  const trainingIncludes = [{
    title: "STRENGTH TRAINING AND PROGRESSIVE OVERLOAD",
    description: "Build muscle, increase strength, and improve your physical capacity with scientifically-proven progressive overload methods tailored to your current fitness level.",
    icon: <Dumbbell className="h-6 w-6 text-primary" />
  }, {
    title: "BODY COMPOSITION TRACKING AND COACHING",
    description: "Monitor your progress with detailed body composition analysis and receive expert coaching to optimize your results and stay motivated.",
    icon: <Target className="h-6 w-6 text-primary" />
  }, {
    title: "MOBILITY TRAINING AND REHAB-STYLE MOVEMENT",
    description: "Improve your range of motion, reduce stiffness, and prevent injuries with targeted mobility work and rehabilitation-focused exercises.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "FUNCTIONAL TRAINING FOR DAILY MOVEMENT IMPROVEMENT",
    description: "Train movements that translate to real-life activities, making everyday tasks easier and reducing your risk of injury.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "ATHLETIC PERFORMANCE WORK FOR MORE EXPLOSIVE MOVEMENT",
    description: "Develop power, speed, and agility with sport-specific training methods that enhance your athletic performance.",
    icon: <Target className="h-6 w-6 text-primary" />
  }, {
    title: "EXERCISE THERAPY TO REDUCE INJURY RISK",
    description: "Therapeutic exercises designed to address imbalances, strengthen weak areas, and prevent future injuries.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "INTEGRATED HEALTH AND LIFESTYLE GUIDANCE TO IMPROVE QUALITY OF LIFE",
    description: "Holistic approach combining exercise with lifestyle modifications to enhance your overall health and wellbeing.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }];
  const whyChooseMitch = [{
    title: "YEARS OF EXPERIENCE TRAINING BEGINNERS TO ATHLETES",
    description: "Extensive experience working with clients of all fitness levels, from complete beginners to elite athletes, ensuring you receive expert guidance regardless of your starting point.",
    icon: <Target className="h-6 w-6 text-primary" />
  }, {
    title: "DUAL-QUALIFIED NATUROPATH AND EXERCISE SCIENTIST",
    description: "Unique combination of qualifications allows for a comprehensive approach to your health, addressing both fitness and overall wellbeing.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "BASED AT FUNCTION WELL, A CLEAN, MODERN PRIVATE GYM WITH FREE PARKING",
    description: "Train in a premium, private facility without the crowds and chaos of commercial gyms, with the convenience of free parking.",
    icon: <MapPin className="h-6 w-6 text-primary" />
  }, {
    title: "OFFERS GREAT EXPERIENCE, STRUCTURE, AND SUPPORT",
    description: "Professional, structured approach with ongoing support to ensure you stay motivated and achieve your goals.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "FOCUSES ON LONG-TERM TRANSFORMATION, NOT QUICK FIXES",
    description: "Sustainable approach to fitness that creates lasting changes rather than temporary results that don't stick.",
    icon: <Dumbbell className="h-6 w-6 text-primary" />
  }, {
    title: "TRAINS CLIENTS FROM NEARBY AREAS LIKE BOWEN HILLS, KANGAROO POINT, AND SOUTH BRISBANE",
    description: "Convenient location serving clients from across Brisbane's inner suburbs with easy access and parking.",
    icon: <MapPin className="h-6 w-6 text-primary" />
  }];
  const additionalServices = [{
    title: "REMEDIAL MASSAGE AND RECOVERY SESSIONS",
    description: "Professional massage therapy to aid recovery, reduce muscle tension, and improve your overall training performance.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }, {
    title: "NUTRITION COACHING FOR FAT LOSS, DIGESTION, AND VITALITY",
    description: "Expert nutrition guidance to support your training goals, improve digestion, and increase energy levels.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "FUNCTIONAL TESTING TO ASSESS HORMONAL OR NUTRIENT IMBALANCES",
    description: "Advanced testing to identify underlying health issues that may be affecting your fitness progress and overall wellbeing.",
    icon: <Target className="h-6 w-6 text-primary" />
  }, {
    title: "MOVEMENT TRAINING TO SUPPORT MENTAL HEALTH AND CLARITY",
    description: "Specialized movement practices designed to improve mental health, reduce stress, and enhance cognitive function.",
    icon: <Activity className="h-6 w-6 text-primary" />
  }];
  const gymFeatures = [{
    title: "FULLY EQUIPPED PRIVATE STUDIO",
    description: "Access to a complete range of professional equipment in a private setting designed for optimal training results.",
    icon: <Dumbbell className="h-6 w-6 text-primary" />
  }, {
    title: "CLEAN, HIGH-END ENVIRONMENT",
    description: "Train in a premium, well-maintained facility that provides an inspiring and motivating atmosphere for your workouts.",
    icon: <Heart className="h-6 w-6 text-primary" />
  }, {
    title: "FREE PARKING INCLUDED",
    description: "Convenient free parking takes the stress out of getting to your training sessions.",
    icon: <MapPin className="h-6 w-6 text-primary" />
  }, {
    title: "FLEXIBLE PERSONAL TRAINING SESSIONS",
    description: "Scheduling flexibility to accommodate your busy lifestyle and ensure consistency in your training program.",
    icon: <Target className="h-6 w-6 text-primary" />
  }, {
    title: "CONVENIENT FOR THOSE IN BOWEN HILLS, NEWSTEAD, AND SURROUNDS",
    description: "Strategically located for easy access from surrounding Brisbane suburbs with excellent transport links.",
    icon: <MapPin className="h-6 w-6 text-primary" />
  }];
  return <>
      <SEO title="5-Star Rated Personal Trainer In Newstead | Mitchell Potts" description="Train right with Mitch, a 5-star personal trainer in Newstead. Build your strength, lose weight, boost energy, and feel confidence that lasts a lifetime." canonical="/services/personal-trainer-newstead" keywords="personal trainer Newstead, personal trainer Brisbane, fitness trainer, strength training, weight loss trainer" serviceSchema={personalTrainingServiceSchema} />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-8 lg:mt-0 mt-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Personal Trainer <span className="text-primary">Newstead</span>
                </h1>
                
                {/* Mobile Image - placed right after headline */}
                <div className="relative lg:hidden mb-24 -mx-4">
                  <img alt="Personal trainer working with client at Function Well gym in Newstead" className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" src="/lovable-uploads/dd4ff0ea-d4e7-416c-b0d9-d3a541758d60.png" />
                  <div className="absolute -bottom-6 left-2 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Dumbbell className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">Personal Training</p>
                        <p className="text-xs text-muted-foreground">Function Well • Newstead</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 mt-8 lg:mt-0">
                <Button size="lg" className="text-lg px-10 py-6 h-auto w-full lg:w-auto" asChild>
                  <a href="https://nxtlvlhealth.com.au/book-now/">
                    <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                    Book Your Personal Training Session
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto w-full lg:w-auto" asChild>
                  <a href="tel:0731808853">
                    <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                    Call Mitch
                  </a>
                </Button>
              </div>

              {/* Google 5 Star Badge */}
              <div className="mt-6">
                <script defer async src='https://cdn.trustindex.io/loader.js?46476cb4757e774210564760f2f'></script>
              </div>
            </div>
            
            {/* Desktop Image - only visible on large screens */}
            <div className="relative hidden lg:block">
              <img alt="Personal trainer working with client at Function Well gym in Newstead" className="rounded-2xl shadow-2xl w-full h-auto" src="/lovable-uploads/dd4ff0ea-d4e7-416c-b0d9-d3a541758d60.png" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Dumbbell className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Personal Training</p>
                    <p className="text-sm text-muted-foreground">Function Well • Newstead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Level Up Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Level Up With a Personal Trainer in Newstead, QLD 4006</h2>
          </div>

          {/* Mobile Image positioned after heading */}
          <div className="lg:hidden mb-12">
            <img src="/lovable-uploads/c27cfaf2-b8ca-4803-a8dc-56755e37f880.png" alt="Mitch providing personal training at Function Well in Newstead" className="rounded-2xl shadow-lg w-full h-auto mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                 <p>
                   Looking for a <strong>personal trainer in Newstead</strong> who actually listens, understands your body, and helps you get long-term results? At NXTLVL Health, Mitch offers <strong>expert-led personal training in Newstead</strong> that's tailored to your fitness level, lifestyle, and personal goals. Combined with our <a href="/functional-medicine" className="text-primary hover:underline">functional medicine approach</a> and <a href="/what-we-treat/weight-loss-naturopath-brisbane" className="text-primary hover:underline">natural weight loss solutions</a>, this holistic approach ensures lasting results. Whether you want to build strength, lose fat, recover from injury, or just feel better in your body, this is your next step.
                 </p>
                <p>
                  All sessions are held at <a href="https://functionwell.com.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Why Clients Choose Mitch From NXTLVL Health</a>, a premium private gym in the Mercedes Benz Building, Newstead QLD 4006. It's an inspiring space—free from the crowds and chaos of commercial gyms—giving you room to move freely and train with purpose.
                </p>
                 <p>
                   Forget cookie-cutter workouts. This is <strong>training designed for your unique body and real goals</strong>, delivered by one of the best personal trainers in Brisbane. We also offer <a href="/services/mls-laser-therapy-treatment-brisbane" className="text-primary hover:underline">MLS laser therapy</a> for injury recovery and <a href="/services/live-blood-analysis-brisbane" className="text-primary hover:underline">live blood analysis</a> to optimize your health from the inside out.
                 </p>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="relative hidden lg:block">
              <img src="/lovable-uploads/c27cfaf2-b8ca-4803-a8dc-56755e37f880.png" alt="Mitch providing personal training at Function Well in Newstead" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Smarter Workouts Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Smarter Workouts. Real Results.</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Mitch doesn't believe in pushing your body past its limits just for the sake of it. With a strong background as an <strong>Exercise Scientist</strong>, in functional training, and naturopathic care, he combines science-backed methods to help you <strong>train effectively</strong>—so you can get better results without burning out.
              </p>
              <p>
                Whether you're focused on <strong>Weight Loss, building muscle mass, injury prevention</strong>, or improving your mental health through movement, Mitch creates sessions that work with your body, not against it.
              </p>
              <p>
                These are not just workouts. They're <strong>stepping stones in your fitness journey</strong>—designed to support long-term health, strength, and performance.
              </p>
            </div>
          </div>

          {/* Add image after heading and description */}
          <div className="mb-12">
            <img src="/lovable-uploads/ebe57be4-34e5-44ef-a092-f4c535a3e714.png" alt="Personal trainer demonstrating proper exercise form" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>
        </div>
      </section>

      {/* Personal Training That Matches Your Lifestyle Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Personal Training in Newstead That Matches Your Lifestyle</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                No matter your current fitness level, your program is <strong>custom-built for you</strong>. Mitch crafts each training block around your individual needs, recovery ability, and personal routine—so your sessions never feel random or overwhelming.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">Mitch's personal training sessions might include:</h3>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto mb-16">
            {trainingIncludes.map((item, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                    {openDropdown === index ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Thanks to Mitch's background in natural health, every training plan supports not just your muscles—but your <strong>wellness goals, stress response, and recovery</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Mitch Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Clients Choose Mitch at NXTLVL Health</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Here's why Mitch is one of the most trusted Newstead personal trainers and a standout in the fitness industry:
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {whyChooseMitch.map((reason, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index + 10)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {reason.icon}
                      <CardTitle className="text-lg">{reason.title}</CardTitle>
                    </div>
                    {openDropdown === index + 10 ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index + 10 && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {reason.description}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
          </div>
        </div>
      </section>

      {/* What Mitch Offers Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Mitch Offers</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Whether you're after a 1-on-1 plan, small group training, or virtual support, Mitch has a service option to suit your goals and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">1-on-1 Personal Training</h3>
              </div>
              <p className="text-muted-foreground">
                Private sessions tailored entirely to your body, training history, and goals. Ideal for clients serious about body transformation, injury recovery, or regaining confidence.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Group Fitness Sessions</h3>
              </div>
              <p className="text-muted-foreground">
                Fun, focused training with friends or like-minded individuals. Still personal, still effective—perfect for staying accountable and progressing together.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Monitor className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Online Training & Programming</h3>
              </div>
              <p className="text-muted-foreground">
                Based outside of Newstead? Mitch offers online training with check-ins, form feedback, and custom workouts. Stay on track anywhere—East Brisbane, West End, or Victoria Point.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Every program is built for <strong>sustainable progress, backed by science</strong>, and aligned with your personal goals.
            </p>
          </div>
        </div>
      </section>

      {/* Whole-Body Health Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Personal Training With Whole-Body Health In Mind</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Unlike most Brisbane personal trainers, Mitch integrates <strong>naturopathy, nutrition, and movement coaching</strong> into one powerful plan—so your entire health gets a reset.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">Many clients also book:</h3>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto mb-16">
            {additionalServices.map((service, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index + 20)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {service.icon}
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                    {openDropdown === index + 20 ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index + 20 && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              This is about much more than reps and sets. It's about <strong>total-body transformation</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Function Well Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Train at Function Well – Newstead's Premier Gym</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                You'll train at <strong>Function Well, one of the top gyms in Newstead QLD 4006</strong>. Located on Level 3, 194 Breakfast Creek Rd in the Mercedes Benz building, it's a world-class facility with everything you need to get real results.
              </p>
            </div>
          </div>

          {/* Add image after heading and description */}
          <div className="mb-12">
            <img src="/lovable-uploads/2acfe9ea-e8c0-461e-8881-8afe96eee441.png" alt="Function Well gym interior showing modern equipment and clean environment" className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto" />
          </div>

          <div className="space-y-4 max-w-4xl mx-auto mb-16">
            {gymFeatures.map((feature, index) => <Card key={index} className="border-0 shadow-md">
                <CardHeader className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => toggleDropdown(index + 30)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {feature.icon}
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                    {openDropdown === index + 30 ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </CardHeader>
                {openDropdown === index + 30 && <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>}
              </Card>)}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Whether you're training for an event, getting back into shape, or finally investing in your fitness—<strong>this is your launchpad</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Book Your Personal Training Session in Newstead</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Your first session with Mitch is more than just a workout. It's a <strong>personalised strategy session</strong> where you'll gain insight, direction, and real motivation to transform your health.
              </p>
              <p>
                Whether you're just starting or looking to elevate your current training, <strong>NXTLVL Health is where your fitness goals finally become reality</strong>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto" asChild>
                <a href="https://nxtlvlhealth.com.au/book-now/">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Personal Training Session
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto" asChild>
                <a href="tel:0731808853">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Mitch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>;
};
export default PersonalTraining;