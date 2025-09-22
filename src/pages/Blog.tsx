import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const blogPosts = [
  {
    title: "Does Gum Make You Bloated? | Let's Take a Look",
    description: "Patients ask me all the time: 'Mitch, does gum make you bloated?' The short answer is yes - chewing gum can cause gas and bloating in some people. Let's break it down.",
    category: "Gut Health",
    readTime: "8 min read",
    date: "September 22, 2025",
    slug: "/blog/gut-health/does-gum-make-you-bloated",
    image: "/lovable-uploads/gum-bloating-cover.png"
  },
  {
    title: "#1 Homemade Remedy for Bloated Stomach",
    description: "Discover the best homemade remedies for bloated stomach relief. Learn natural, safe, and effective ways to reduce bloating fast with expert naturopathic advice.",
    category: "Gut Health",
    readTime: "8 min read",
    date: "September 21, 2025",
    slug: "/blog/gut-health/homemade-remedy-for-bloated-stomach",
    image: "/lovable-uploads/warm-soup-digestion.png"
  },
  {
    title: "Best Tea for Stomach Pain and Bloating",
    description: "Discover the most effective herbal teas that can naturally soothe stomach discomfort and reduce bloating symptoms.",
    category: "Gut Health",
    readTime: "5 min read",
    date: "March 15, 2024",
    slug: "/blog/gut-health/best-tea-for-stomach-pain-and-bloating",
    image: "/lovable-uploads/6c9b0437-0b15-4a4d-a56a-27d817b40733.png"
  },
  {
    title: "How to Flush Salicylates from Your Body",
    description: "Learn effective natural methods to help your body process and eliminate salicylates for better health outcomes.",
    category: "Naturopathy",
    readTime: "7 min read", 
    date: "March 10, 2024",
    slug: "/blog/naturopathy/how-to-flush-salicylates-from-your-body",
    image: "/lovable-uploads/70ff227f-2b16-40e8-8faa-1347ff2a11bf.png"
  },
  {
    title: "7 Worst Foods for Gut Health",
    description: "Identify the foods that can harm your digestive system and learn what to avoid for optimal gut health.",
    category: "Gut Health",
    readTime: "6 min read",
    date: "March 5, 2024",
    slug: "/blog/gut-health/7-worst-foods-for-gut-health",
    image: "/lovable-uploads/af976508-85da-4ffb-964a-08965755b33f.png"
  },
  {
    title: "Naturopathy for Weight Loss",
    description: "Explore how naturopathic approaches can support sustainable and healthy weight loss goals.",
    category: "Weight Loss",
    readTime: "8 min read",
    date: "February 28, 2024", 
    slug: "/blog/naturopathy/naturopathy-for-weight-loss",
    image: "/lovable-uploads/6e297df5-ddda-4561-bd5a-b77a997a6f3b.jpg"
  },
  {
    title: "Gut Health 101: Why Your Stomach Might Be Behind Your Brain Fog and Fatigue",
    description: "Understanding the gut-brain connection and how digestive health impacts mental clarity and energy levels.",
    category: "Gut Health",
    readTime: "10 min read",
    date: "February 20, 2024",
    slug: "/blog/gut-health/gut-health-101-why-your-stomach-might-be-behind-your-brain-fog-and-fatigue",
    image: "/lovable-uploads/42aef2a5-2c1a-47fd-ad93-e2b0b669ebdc.jpg"
  },
  {
    title: "Naturopathy vs Homeopathy",
    description: "Learn the key differences between naturopathy and homeopathy to understand which approach suits you best.",
    category: "Naturopathy",
    readTime: "6 min read",
    date: "February 15, 2024",
    slug: "/blog/naturopathy/naturopathy-vs-homeopathy",
    image: "/lovable-uploads/e99143e9-961b-428c-aa3a-4035c693dea6.png"
  },
  {
    title: "Embracing Natural Weight Loss with Ozempic: A Naturopath's Approach",
    description: "A comprehensive look at combining natural methods with modern treatments for effective weight management.",
    category: "Weight Loss",
    readTime: "9 min read",
    date: "February 10, 2024",
    slug: "/blog/weight-loss/embracing-natural-weight-loss-with-ozempic-a-naturopaths-approach",
    image: "/lovable-uploads/9865d605-57bd-4a95-b996-8e08b4b5ca73.png"
  },
  {
    title: "Gut-Brain Connection: How Your Gut Affects Mental Health",
    description: "Explore the fascinating relationship between gut health and mental wellbeing, and how to optimise both.",
    category: "Gut Health",
    readTime: "8 min read",
    date: "February 5, 2024",
    slug: "/blog/gut-health/gut-brain-connection-how-your-gut-affects-mental-health",
    image: "/lovable-uploads/c6f989c7-da21-4d1f-a1e1-bd15ddab89eb.png"
  },
  {
    title: "Am I Fat Or Bloated?",
    description: "Confused about whether your belly is fat or bloating? Learn the key differences and what to do about each one.",
    category: "Gut Health",
    readTime: "8 min read",
    date: "September 2025",
    slug: "/am-i-fat-or-bloated",
    image: "/lovable-uploads/629b9330-8bcf-44db-8889-18509024f856.png"
  }
];

const Blog = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Gut Health':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Naturopathy':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'Weight Loss':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <>
      <SEO 
        title="Health & Wellness Blog | NXTLVL Health"
        description="Discover expert insights on gut health, naturopathy, weight loss, and wellness. Read our latest articles on natural health solutions and holistic healing approaches."
        canonical="/blog"
        keywords="health blog, naturopathy articles, gut health tips, weight loss advice, wellness blog, holistic health, natural remedies"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Health & Wellness Blog
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert insights, natural health tips, and holistic wellness guidance from our experienced practitioners
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    
                    <CardDescription className="text-muted-foreground">
                      {post.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      
                      <Link 
                        to={post.slug}
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a consultation with our experienced practitioners to get personalised health advice and treatment plans.
            </p>
            <Link 
              to="/book-now"
              className="inline-flex items-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Book Free Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
