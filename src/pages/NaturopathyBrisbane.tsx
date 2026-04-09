import React, { useEffect, useRef, useState, useCallback } from 'react';
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { 
  Heart, Leaf, Zap, Brain, Shield, Target, Microscope, TestTube, 
  Users, Clock, CheckCircle, Star, ArrowRight, MapPin, Phone,
  Frown, Coffee, Stethoscope, Flame, CloudRain, Ghost,
  Salad, Dumbbell, Sparkles, ChevronRight, BadgeCheck,
  X, Check, CircleDot, Mail, ChevronLeft
} from 'lucide-react';
import consultationHeroBg from '@/assets/consultation-hero-bg.webp';
import googleIcon from '@/assets/google-icon.png';
import verifiedIcon from '@/assets/verified-icon.png';
import verifiedCheck from '@/assets/verified-check.png';
import danielMortonProfile from '@/assets/daniel-morton-profile.png';
import mitchConsultation from '@/assets/mitch-consultation.png';
import mitchSupplements from '@/assets/mitch-supplements.png';
import mitchMicroscope from '@/assets/mitch-microscope.png';
import mitchAnalysis from '@/assets/mitch-analysis.png';
import nxtlvlLogo from '/lovable-uploads/0aadec6a-7f1f-4a21-854c-39d8c3a218d0.png';

const renderBold = (text: string) => {
  return text.split('**').map((part, index) =>
    index % 2 === 1 ? <strong key={index} className="font-semibold text-foreground">{part}</strong> : part
  );
};

const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll('.scroll-animate');
      children.forEach((child) => observer.observe(child));
    }
    
    return () => observer.disconnect();
  }, []);
  
  return ref;
};

const allReviews = [
  { name: "Kathy Bush", content: "A-M-A-Z-I-N-G! I have just had my first appointment with Mitch. He is approachable, **knowledgeable** and takes the time to **explain in detail**. I am excited to see what he can tell me about my body and what I can achieve under his guidance.", timeAgo: "6 days ago", reviews: "Local Guide • 18 reviews" },
  { name: "S Grant", content: "I highly recommend Mitch from NXTLVL Health. His professional yet friendly approach creates the perfect balance, and his **holistic methods** truly set him apart. Mitch combines **science-backed results** with **personalised** nutrition and training plans.", timeAgo: "4 weeks ago", reviews: "Local Guide • 18 reviews" },
  { name: "Janine Laniewski", content: "I had a great experience with Mitch. Although I only had a few sessions before moving back to Sydney, I really appreciated how **thoroughly** he went through my **blood test results** and explained things I hadn't heard from other practitioners.", timeAgo: "4 days ago", reviews: "12 reviews" },
  { name: "michael jaynes", content: "Exactly what I have been looking for. **Scientific based advice** on supplements and eating plan. The first weeks changes to my **sleep, mood, focus** and motivation have got me excited to see what's next.", timeAgo: "5 weeks ago", reviews: "2 reviews" },
  { name: "Shenoa Fox", content: "I had an exceptional experience at NXTLVL with Mitch Potts, whose **naturopathic approach** was both **thorough and insightful**. After struggling with a persistent cough for over four months, he took the time to **explore the potential causes** and gave me **tangible insights**.", timeAgo: "6 weeks ago", reviews: "10 reviews" },
  { name: "Kate Brooks", content: "Great to have **compassionate & thorough support** and investigation into causes of my health issues. Mitch is helping me with lowering my **stress levels** in the body and **gut healing**. Thanks Mitch.", timeAgo: "6 weeks ago", reviews: "Local Guide • 48 reviews" },
  { name: "Dylan-Tane Moore", content: "I've been working with Mitch now for just over a month and it's hard to describe in words beneficial this has been for me. I'm the **healthiest I've ever been**, reaching PB goals in the gym, **no more gut issues/bloating** and have gained significant weight and muscle mass.", timeAgo: "43 weeks ago", reviews: "2 reviews" },
  { name: "lerryn kearton", content: "I cannot recommend Mitch highly enough! His guidance and expertise have been amazing in **transforming my gut health**. After struggling with gut issues for years, I am so so grateful to have finally found Mitch and have someone so **caring and knowledgeable** guide me through this journey.", timeAgo: "8 Apr 2024", reviews: "5 reviews" },
  { name: "Jacques Wade", content: "Mitch is helping me work through a health scare because I couldn't find answers elsewhere. His approach is **science-based and wholistic**. What I appreciate most is just having someone there who can advise me with **expertise and knowledge** of my history.", timeAgo: "19 weeks ago", reviews: "1 review" },
  { name: "Jazzy Lee", content: "Mitch is incredibly **knowledgeable and kind**, I've felt an overwhelming amount of support since working with him. He takes the time to **listen, understand** what's going on, and explain things in a way that actually makes sense. Nothing ever feels **rushed or generic**.", timeAgo: "9 weeks ago", reviews: "5 reviews" },
  { name: "Tash K", content: "Mitch is certainly a **master of his craft**. Despite the body being such a complex machine he is able to **explain things in a simplistic manner**. He takes the time to understand your issues and your goals and carefully works his **treatment plan to suit your needs**.", timeAgo: "9 weeks ago", reviews: "1 review" },
  { name: "Monica Boules", content: "Mitch took the time to **thoroughly understand** my health concerns and provided **thoughtful, personalised advice** that really resonated with me. If you're looking for a naturopath who **truly listens** and provides exceptional care, I can't recommend NXTLVL enough.", timeAgo: "32 weeks ago", reviews: "1 review" },
  { name: "Rebecca Hayman", content: "Mitch's **scientific approach** to naturopathic medicine is awesome. Highly recommended for those seeking an **evidence-based holistic approach**.", timeAgo: "10 Jun 2024", reviews: "2 reviews" },
];

const TruncatedReview: React.FC<{ content: string }> = ({ content }) => {
  const [expanded, setExpanded] = useState(false);
  const words = content.split(' ');
  const truncated = words.length > 25;
  const displayText = !expanded && truncated ? words.slice(0, 25).join(' ') + '...' : content;

  return (
    <>
      <blockquote className="text-muted-foreground leading-relaxed mb-4 italic text-sm">
        "{displayText.split('**').map((part, index) =>
          index % 2 === 1 ? <strong key={index} className="font-semibold text-foreground not-italic">{part}</strong> : part
        )}"
      </blockquote>
      {truncated && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary text-sm font-semibold hover:underline mb-3"
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </>
  );
};

const LPReviewCard: React.FC<{ name: string; content: string; timeAgo: string; reviews?: string }> = ({ name, content, timeAgo, reviews }) => (
  <Card className="border-0 shadow-md h-full">
    <CardContent className="p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img src={googleIcon} alt="Google" className="w-5 h-5 object-contain" />
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <img src={verifiedCheck} alt="Verified" className="w-5 h-5 object-contain" />
        </div>
      </div>
      <div className="flex-1">
        <TruncatedReview content={content} />
      </div>
      <div className="flex items-center justify-between mt-auto pt-2">
        <div>
          <div className="font-semibold text-foreground">{name}</div>
          {reviews && <div className="text-xs text-muted-foreground">{reviews}</div>}
        </div>
        <div className="text-xs text-muted-foreground">{timeAgo}</div>
      </div>
    </CardContent>
  </Card>
);

const ReviewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(0, allReviews.length - slidesPerView);

  const goNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  }, [goNext, goPrev]);

  return (
    <section id="reviews" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">Hear What Our Patients Say</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <div className="relative">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center shadow-md hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={goNext}
            disabled={currentIndex >= maxIndex}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center shadow-md hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div className="overflow-hidden mx-4 md:mx-2" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
            >
              {allReviews.map((review, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <LPReviewCard
                    name={review.name}
                    content={review.content}
                    timeAgo={review.timeAgo}
                    reviews={review.reviews}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-primary w-6' : 'bg-border hover:bg-muted-foreground/50'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const NaturopathyBrisbane = () => {
  const pageRef = useScrollAnimation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  useEffect(() => {
    if (window.location.hash === '#free-consult') {
      setTimeout(() => {
        document.getElementById('free-consult-lp')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, []);

  const scrollToConsult = () => {
    document.getElementById('free-consult-lp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <SEO 
        title="Best Naturopath Brisbane | Book a FREE 15-Min Consult" 
        description="We'll give you energy that never dies, skin that never breaks out, and a gut that never bloats in as little as 21 days. Book your free 15-minute consult now." 
        canonical="/naturopathy-brisbane"
        keywords="naturopath Brisbane, naturopathy Brisbane, natural medicine Brisbane, gut health Brisbane, holistic health Brisbane"
        noindex={false}
      />

      <style>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-animate.delay-1 { transition-delay: 0.1s; }
        .scroll-animate.delay-2 { transition-delay: 0.2s; }
        .scroll-animate.delay-3 { transition-delay: 0.3s; }
        .scroll-animate.delay-4 { transition-delay: 0.4s; }
        .scroll-animate.delay-5 { transition-delay: 0.5s; }
      `}</style>

      {/* LANDING PAGE HEADER */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img src={nxtlvlLogo} alt="NXTLVL Health" className="h-14 w-14" />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "What We Treat", id: "what-we-treat" },
              { label: "Services", id: "services" },
              { label: "Why Us?", id: "why-us" },
              { label: "Reviews", id: "reviews" },
              { label: "FAQs", id: "faqs" },
              { label: "Location", id: "location" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="tel:0731913367" className="flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors">
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">(07) 3191 3367</span>
            <span className="sm:hidden">Call Us</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${consultationHeroBg})` }}
        />
        <div className="absolute inset-0 bg-black/75" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center flex flex-col items-center">
          <h1 className="scroll-animate inline-block bg-primary text-primary-foreground text-sm md:text-base font-semibold px-4 py-1.5 rounded-full mb-6">
            #1 Naturopath In Brisbane
          </h1>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8 scroll-animate delay-1">
            We'll Give You Energy That <span className="text-primary">Never Dies</span>, Skin That <span className="text-primary">Never Breaks Out</span>, & a Gut That <span className="text-primary">Never Bloats</span> In As Little As <span className="text-primary">21 Days!</span>
          </h2>

          {/* Testimonial */}
          <div className="scroll-animate delay-1 max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <img src={googleIcon} alt="Google" className="w-5 h-5" loading="eager" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <img src={verifiedIcon} alt="Verified" className="w-5 h-auto" loading="eager" />
              </div>
              <p className="text-white/90 italic text-lg mb-3">
                "From the very first appointment, I <strong>instantly</strong> felt like I was getting to the <strong>bottom of my issues</strong> that <strong>no GP could figure out</strong>"
              </p>
              <div className="flex items-center justify-center gap-3">
                <img src={danielMortonProfile} alt="Daniel Morton" className="w-10 h-10 rounded-full" loading="eager" />
                <span className="text-white font-semibold">Daniel Morton</span>
              </div>
            </div>
          </div>

          {/* Sub-headline */}
          <h2 className="scroll-animate delay-2 text-2xl md:text-3xl font-bold text-white/90 mb-8 max-w-3xl mx-auto">
            We <span className="text-primary">Don't</span> Focus On Fixing Just <span className="text-primary">Symptoms</span>, We <span className="text-primary">Heal</span> What's Really Going On <span className="text-primary">Inside</span>.
          </h2>

          {/* CTA */}
          <div className="scroll-animate delay-3 mb-10">
            <Button 
              onClick={scrollToConsult}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg md:text-xl px-10 py-7 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book a FREE 15-Minute Consult!
            </Button>
          </div>

          {/* Trust Boosters */}
          <div className="scroll-animate delay-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto mb-12">
            {[
              { icon: <Users className="w-5 h-5 text-primary" />, text: "947+ Patients Healed" },
              { icon: <Zap className="w-5 h-5 text-primary" />, text: "90% See Results In 3 Weeks!" },
              { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Free 15-Min Consult for New Patients!" },
              { icon: <Clock className="w-5 h-5 text-primary" />, text: "Consults Last 1hr, Not 5mins" },
              { icon: <Target className="w-5 h-5 text-primary" />, text: "Your Health Plan Is Made Just for You" },
              { icon: <Star className="w-5 h-5 text-primary" />, text: "5-Star Rated Naturopath" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                {item.icon}
                <span className="text-white/90 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Calendly Embed inside Hero */}
          <div id="free-consult-lp" className="scroll-mt-24 scroll-animate delay-5 w-full max-w-full lg:max-w-5xl lg:mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Book Your FREE 15-Minute Consult</h3>
            <p className="text-white/70 mb-6">Pick a time that works for you. No pressure. No obligations.</p>
            <div className="bg-white rounded-2xl overflow-hidden">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/nxtlvlhealth-info/15-min-consult?primary_color=009485" 
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LET ME GUESS SECTION */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="scroll-animate text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">Does This Feel Like You?</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 scroll-animate delay-1" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Coffee className="w-8 h-8" />, title: "You're \"Bone Tired\"", desc: "You wake up feeling like you **haven't slept at all**. Your body feels heavy, and just getting out of bed is a struggle. You rely on **coffee to get through the day**, but it just leaves you feeling jittery and anxious." },
              { icon: <Flame className="w-8 h-8" />, title: "Your Tummy Hurts", desc: "After you eat, your stomach **blows up like a balloon**. It's painful and uncomfortable. You're **scared to eat out** with friends because you don't know what will set it off." },
              { icon: <Stethoscope className="w-8 h-8" />, title: "Doctors Don't Listen", desc: "You wait weeks for a doctor's appointment, only to be **rushed out in 5 minutes**. They tell you \"your tests are normal\" and \"**it's just stress**.\" You leave feeling **unheard, hopeless**, and a little bit crazy." },
              { icon: <Frown className="w-8 h-8" />, title: "Your Skin Is Angry", desc: "**Painful pimples** show up on your face at the worst times. Or you have **dry, itchy patches of eczema** that just won't go away, no matter what cream you use." },
              { icon: <CloudRain className="w-8 h-8" />, title: "Your Mood Is All Over The Place", desc: "You feel **anxious for no reason**. Small things make you feel **overwhelmed and teary**. You don't feel like the happy, calm person you used to be." },
              { icon: <Ghost className="w-8 h-8" />, title: "You Feel Lost In Your Own Body", desc: "You look in the mirror and **don't recognize** the tired person with dark circles under their eyes. You just want to **feel like yourself again**." },
            ].map((item, i) => (
              <Card key={i} className={`scroll-animate delay-${(i % 3) + 1} group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-destructive/20`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4 text-destructive group-hover:bg-destructive group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{renderBold(item.desc)}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="scroll-animate max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-foreground font-medium">
              If you nodded your head to any of this, please know <strong>you are not alone</strong>.
            </p>
            <p className="text-muted-foreground text-lg">
              We have sat in a room with thousands of people in Brisbane, just like you. We have heard their stories. We have seen their frustration.
            </p>
            <p className="text-lg font-semibold text-primary">
              And we are here to tell you that there IS an answer. We are here to give you the help you've been searching so tirelessly for.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE TREAT SECTION */}
      <section id="what-we-treat" className="py-20 bg-muted scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="scroll-animate text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">What We Treat</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 scroll-animate delay-1" />

          {/* Section Image */}
          <div className="scroll-animate delay-1 max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img src={mitchConsultation} alt="Mitch consulting with a patient at NXTLVL Health" className="w-full h-auto object-cover" loading="lazy" />
          </div>

          <p className="scroll-animate delay-1 text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
            We help people in Brisbane find the <strong className="text-foreground">real reason</strong> behind their health problems. We don't just put a band-aid on them. We focus on <strong className="text-foreground">healing you from the inside out</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Heart className="w-6 h-6" />, title: "Gut Health", desc: "Stop the **bloating, gas, pain**, and running to the toilet." },
              { icon: <Zap className="w-6 h-6" />, title: "Low Energy & Fatigue", desc: "Get your **energy back** so you can live your life." },
              { icon: <Sparkles className="w-6 h-6" />, title: "Skin Conditions", desc: "Heal **acne, eczema, and psoriasis** for good." },
              { icon: <CircleDot className="w-6 h-6" />, title: "Hormone Problems", desc: "Fix **painful periods, PMS**, and menopause symptoms." },
              { icon: <Target className="w-6 h-6" />, title: "Weight Loss", desc: "Lose weight **without starving yourself**." },
              { icon: <Brain className="w-6 h-6" />, title: "Anxiety & Depression", desc: "Feel **calm, happy, and in control** again." },
              { icon: <Shield className="w-6 h-6" />, title: "Thyroid Problems", desc: "Get your **metabolism and energy** back on track." },
              { icon: <Leaf className="w-6 h-6" />, title: "Autoimmune Conditions", desc: "Calm down your immune system and **reduce flare-ups**." },
              { icon: <Clock className="w-6 h-6" />, title: "Sleep Problems", desc: "Fall asleep easily and **wake up feeling refreshed**." },
            ].map((item, i) => (
              <div key={i} className={`scroll-animate delay-${(i % 3) + 1} flex items-start gap-4 bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300`}>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{renderBold(item.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS NATUROPATHY SECTION */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="scroll-animate text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">What Is Naturopathy & Why Should You Care?</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 scroll-animate delay-1" />

          {/* Section Image */}
          <div className="scroll-animate delay-1 max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img src={mitchSupplements} alt="Mitch selecting natural supplements for patient treatment" className="w-full h-auto object-cover" loading="lazy" />
          </div>

          <div className="scroll-animate delay-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-foreground font-semibold text-xl">Imagine your body is a car.</p>
            <p>When a warning light comes on (like a headache or a skin rash), you can do two things:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-7 h-7 text-destructive" />
                </div>
                <p className="text-foreground font-semibold mb-2">Option 1</p>
                <p className="text-muted-foreground">Put a piece of tape over the light so you can't see it.</p>
              </div>
              <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7 text-primary" />
                </div>
                <p className="text-foreground font-semibold mb-2">Option 2</p>
                <p className="text-muted-foreground">Open the hood and find out WHY the light is on.</p>
              </div>
            </div>

            <p>Normal doctors often just put tape over the light. They give you a pill to hide the symptom.</p>
            <p className="text-foreground font-bold text-xl">A Naturopath opens the hood.</p>
            <p>We use science and nature to find the <strong className="text-foreground">root cause</strong> of your problem. We don't give you a quick fix. We give you a real, long-term solution so you can finally heal.</p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="scroll-animate text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">The Tools We Use To Heal You</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 scroll-animate delay-1" />

          {/* Section Image */}
          <div className="scroll-animate delay-1 max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img src={mitchMicroscope} alt="Mitch performing live blood analysis with microscope" className="w-full h-auto object-cover" loading="lazy" />
          </div>

          <p className="scroll-animate delay-1 text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
            We use a mix of <strong className="text-foreground">modern science</strong> and <strong className="text-foreground">natural medicine</strong> to create a plan that is <strong className="text-foreground">perfect for you</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Salad className="w-7 h-7" />, title: "Nutritional Medicine", desc: "Using **food as medicine** to heal your body." },
              { icon: <TestTube className="w-7 h-7" />, title: "Functional Testing", desc: "**Advanced tests** to find the **hidden cause** of your problems." },
              { icon: <Microscope className="w-7 h-7" />, title: "Live Blood Analysis", desc: "A drop of blood on a big screen shows us **what's happening inside your body** right now." },
              { icon: <Heart className="w-7 h-7" />, title: "Lifestyle Coaching", desc: "Helping you build **healthy habits** that last a lifetime." },
              { icon: <Dumbbell className="w-7 h-7" />, title: "Personal Training", desc: "Creating a **fitness plan** that works for your body." },
              { icon: <Zap className="w-7 h-7" />, title: "MLS Laser Therapy", desc: "A special light that helps **reduce pain and swelling**." },
            ].map((item, i) => (
              <Card key={i} className={`scroll-animate delay-${(i % 3) + 1} group hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{renderBold(item.desc)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="scroll-animate text-center text-primary font-semibold text-lg mt-8">And much more...</p>
          <div className="scroll-animate text-center mt-10">
            <Button size="lg" className="text-base sm:text-lg px-8 py-4 h-auto" asChild>
              <a href="#free-consult-lp">Book Your Free Consult!</a>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US SECTION - Comparison Table */}
      <section id="why-us" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="scroll-animate text-3xl md:text-4xl font-extrabold text-foreground text-center mb-6">Why Choose Us Over Other Naturopaths?</h2>

          {/* Section Image */}
          <div className="scroll-animate delay-1 max-w-3xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img src={mitchAnalysis} alt="Mitch reviewing functional test results on screen" className="w-full h-auto object-cover" loading="lazy" />
          </div>

          <div className="scroll-animate delay-1 overflow-hidden rounded-2xl border border-border shadow-lg">
            {/* Header */}
            <div className="grid grid-cols-2">
              <div className="bg-muted p-5 text-center border-r border-border">
                <h3 className="font-bold text-muted-foreground text-lg">Other Naturopaths</h3>
              </div>
              <div className="bg-primary p-5 text-center">
                <h3 className="font-bold text-primary-foreground text-lg">NXTLVL Health</h3>
              </div>
            </div>
            {/* Rows */}
            {[
              { them: "They give you the same plan they give everyone else.", us: "We create a plan that is 100% unique to you and your body." },
              { them: "They rush you out the door after 30 minutes.", us: "We spend a full hour listening to your whole story." },
              { them: "They give you a huge list of expensive supplements.", us: "We only give you what you truly need to get better." },
              { them: "They don't look deep enough to find the real problem.", us: "We use advanced testing to find the root cause of your issues." },
              { them: "You leave feeling confused and overwhelmed.", us: "You leave with a clear, simple plan and a feeling of hope." },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-card' : 'bg-muted/50'}`}>
                <div className="p-5 border-r border-border flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm">{row.them}</p>
                </div>
                <div className="p-5 flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium text-sm">{row.us}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="scroll-animate text-center mt-10">
            <Button size="lg" className="text-base sm:text-lg px-8 py-4 h-auto" asChild>
              <a href="#free-consult-lp">I'm Choosing You, Let's Do This!</a>
            </Button>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <ReviewsSlider />

      {/* OUR PROCESS SECTION */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="scroll-animate text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">Our Simple, Step-by-Step Process</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 scroll-animate delay-1" />
          <p className="scroll-animate delay-1 text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
            We make it <strong className="text-foreground">simple</strong> to finally get the help you need. Here is what your journey with us looks like.
          </p>

          <div className="space-y-8">
            {[
              { step: 1, title: "Book Your FREE 15-Minute Consult", desc: "This is a **quick, easy chat** with our head naturopath, Mitch. You can tell him what's going on. He will **listen**. He will let you know if we are the right place to help you. There is **no pressure**." },
              { step: 2, title: "Your First Real Appointment (1 Hour)", desc: "This is where the **real healing begins**. You will sit down with Mitch (in our clinic or online). You will have a **full hour** to tell him everything. He will listen to your whole story. By the end, you will have a **clear, custom health plan** made just for you." },
              { step: 3, title: "Your Monthly Check-ins", desc: "We don't just give you a plan and say goodbye. You will come back each month so Mitch can see how you are doing. We will **check in**, make sure you are **on the right track**, and **support you every step of the way**." },
              { step: 4, title: "Get Your Life Back", desc: "Slowly, you will start to feel the changes. The **bloating will go down**. The **tiredness will lift**. You will start to feel **lighter, brighter**, and more like your old self. You will feel **comfortable and happy** in your body again." },
            ].map((item, i) => (
              <div key={i} className={`scroll-animate delay-${i + 1} flex gap-6 items-start`}>
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-extrabold text-xl flex-shrink-0 shadow-lg">
                  {item.step}
                </div>
                <div className="flex-1 bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{renderBold(item.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="scroll-animate text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">Questions You Might Be Asking</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 scroll-animate delay-1" />

          <div className="scroll-animate delay-2">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "How is this different from a doctor?", a: "Your doctor is great for emergencies. But for long-term health problems, they often only have **5-10 minutes** and a prescription pad. We spend a **full hour** with you to find the **real cause** of your problem, and then we use **natural ways** to help your body heal itself." },
                { q: "I've tried a naturopath before and it didn't work.", a: "We hear this a lot. Many naturopaths give the **same recycled plan** to everyone. At NXTLVL Health, we use **advanced functional testing** to get real data about your body. Your plan is **100% custom to you**. This is why we get results when others don't." },
                { q: "Is it expensive?", a: "Your health is the **best thing you can ever spend money on**. Think about how much your health problems are already costing you in lost energy, missed fun, and feeling terrible. We have **payment plans** to make it easier, and your first **15-minute consult is completely FREE**." },
                { q: "Will I have to stop eating everything I love?", a: "No! This is **not about starving yourself** or eating boring food. It's about finding **delicious foods that heal your body**. We will work with you to create a plan that you can actually **enjoy and stick to**." },
                { q: "How long will it take to see results?", a: "Everyone is different. But most of our patients start to feel a real, noticeable change in as little as **3 weeks**. Some feel a difference in just **a few days**!" },
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-sm">
                  <AccordionTrigger className="text-left text-foreground font-semibold text-lg hover:no-underline py-5">
                    "{item.q}"
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                    {renderBold(item.a)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="location" className="py-20 bg-muted scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="scroll-animate text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12">Come See Us In New Farm, Brisbane</h2>

          <div className="scroll-animate delay-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.0!2d153.0534!3d-27.4634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a07e7e3b3c1%3A0x0!2sSuite%202%2F665%20Brunswick%20St%2C%20New%20Farm%20QLD%204005!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NXTLVL Health Location"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-foreground text-lg">Suite 2/665 Brunswick St, New Farm QLD 4005</p>
                </div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our beautiful, calm clinic is located in New Farm, Brisbane.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We help people from all over Brisbane, including Paddington, Teneriffe, Newstead, Fortitude Valley, and beyond. We also offer <strong className="text-foreground">online appointments</strong> if you can't make it in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 overflow-hidden">
          <h2 className="scroll-animate text-3xl md:text-4xl font-extrabold text-center mb-12">You Have Three Choices Now...</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Choice 1 */}
            <div className="scroll-animate delay-1 rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="w-10 h-10 bg-destructive/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-destructive font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Do Nothing</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                You can click away from this page and <strong>keep doing what you're doing</strong>. Keep going back to the doctors who rush you and tell you "it's all in your head." Keep feeling <strong>tired, bloated, and in pain</strong>. Keep <strong>missing out on your life</strong>.
              </p>
            </div>

            {/* Choice 2 */}
            <div className="scroll-animate delay-2 rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-yellow-400 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Choose Another Naturopath</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                You can take a gamble on another naturopath who might give you the <strong>same recycled plan</strong> they give to everyone else, leaving you with a bag of <strong>expensive supplements</strong> and <strong>no real answers</strong>.
              </p>
            </div>

            {/* Choice 3 */}
            <div className="scroll-animate delay-3 rounded-2xl border-2 border-primary p-6 bg-primary/10 shadow-lg shadow-primary/10">
              <div className="w-10 h-10 bg-primary/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Choose Us and Finally Heal</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                You can choose to work with a team that is obsessed with getting to the <strong>root cause</strong> of your problems. A team that will <strong>listen to you, support you</strong>, and give you a plan that is <strong>made just for you</strong>. You can choose to finally get your <strong>energy, your health, and your life back</strong>.
              </p>
            </div>
          </div>

          <div className="scroll-animate text-center space-y-6">
            <p className="text-white/80 text-lg font-medium">The choice is yours.</p>
            <p className="text-white/60 text-lg">
              If you are ready to <strong>feel great again</strong>, book your free 15-minute consult now. You have <strong>nothing to lose</strong>, and a <strong>whole new life to gain</strong>.
            </p>
            <Button 
              onClick={scrollToConsult}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-xl px-6 md:px-10 py-7 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 max-w-full"
            >
              Book My FREE 15-Minute Consult Now!
              <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
            </Button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-foreground border-t border-white/10 py-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 text-white/60 text-sm">
          <a href="tel:0731913367" className="flex items-center gap-2 hover:text-white/90 transition-colors">
            <Phone className="w-4 h-4" />
            (07) 3191 3367
          </a>
          <span className="hidden sm:inline text-white/20">|</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Suite 2/665 Brunswick St, New Farm QLD 4005
          </div>
        </div>
        <p className="text-white/40 text-sm">© {new Date().getFullYear()} NXTLVL Health. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <a href="/privacy-policy" className="text-white/40 hover:text-white/70 text-sm transition-colors">Privacy Policy</a>
          <span className="text-white/20">|</span>
          <a href="/website-disclaimer" className="text-white/40 hover:text-white/70 text-sm transition-colors">Disclaimer</a>
        </div>
      </footer>
    </div>
  );
};

export default NaturopathyBrisbane;
