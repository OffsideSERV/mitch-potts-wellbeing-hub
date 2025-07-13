
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Simple implementation to render React components to static HTML
function renderPageToHTML(pageComponent, title, description, canonical, keywords = '') {
  // Basic HTML template with all the content
  const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="https://nxtlvlhealth.com.au${canonical}">
    <meta name="keywords" content="${keywords}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="https://nxtlvlhealth.com.au${canonical}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://nxtlvlhealth.com.au/og-image.jpg">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="https://nxtlvlhealth.com.au/og-image.jpg">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'primary': 'hsl(142 76% 36%)',
                        'secondary': 'hsl(142 30% 85%)',
                        'accent': 'hsl(142 30% 70%)',
                        'background': 'hsl(0 0% 100%)',
                        'foreground': 'hsl(222 84% 5%)',
                        'muted': 'hsl(210 40% 96%)',
                        'muted-foreground': 'hsl(215 16% 47%)',
                        'border': 'hsl(214 32% 91%)',
                        'destructive': 'hsl(0 84% 60%)',
                    }
                }
            }
        }
    </script>
</head>
<body class="min-h-screen bg-background text-foreground">
    ${pageComponent}
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NXTLVL Health",
        "url": "https://nxtlvlhealth.com.au",
        "logo": "https://nxtlvlhealth.com.au/logo.png",
        "description": "Brisbane naturopath specializing in gut health, functional medicine, and holistic wellness. Book your consultation today.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "New Farm",
            "addressLocality": "Brisbane",
            "addressRegion": "QLD",
            "addressCountry": "AU"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+61731808853",
            "contactType": "customer service"
        }
    }
    </script>
</body>
</html>`;
  
  return htmlTemplate;
}

// Page definitions with all content
const pages = [
  {
    path: '/index.html',
    title: 'Brisbane Naturopath | NXTLVL Health | Gut Health & Functional Medicine',
    description: 'Leading Brisbane naturopath specializing in gut health, functional medicine & holistic wellness. Expert naturopathic care in New Farm. Book your consultation today.',
    canonical: '/',
    keywords: 'Brisbane naturopath, gut health Brisbane, functional medicine Brisbane, naturopathic doctor Brisbane, holistic health Brisbane',
    content: `
      <nav class="bg-background border-b border-border">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between h-16">
            <a href="/" class="text-2xl font-bold text-primary">NXTLVL Health</a>
            <div class="hidden md:flex space-x-8">
              <a href="/services" class="text-foreground hover:text-primary">Services</a>
              <a href="/what-we-treat" class="text-foreground hover:text-primary">What We Treat</a>
              <a href="/areas-we-serve" class="text-foreground hover:text-primary">Areas</a>
              <a href="/blog" class="text-foreground hover:text-primary">Blog</a>
              <a href="/contact" class="text-foreground hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        <section class="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
          <div class="container mx-auto max-w-6xl">
            <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div class="space-y-8">
                <h1 class="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Brisbane <span class="text-primary">Naturopath</span> & Functional Medicine
                </h1>
                <h2 class="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  Specialising in Gut Health & Holistic Wellness
                </h2>
                <p class="text-lg text-muted-foreground">
                  Expert naturopathic care combining traditional wisdom with modern science. Transform your health with personalised treatment plans designed for lasting results.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <a href="https://nxtlvlhealth.com.au/book-now/" class="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90">
                    Book Consultation
                  </a>
                  <a href="tel:0731808853" class="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10">
                    Call (07) 3180 8853
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="py-20 px-4">
          <div class="container mx-auto max-w-6xl text-center">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8">Why Choose NXTLVL Health?</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="p-6 bg-muted/30 rounded-lg">
                <h3 class="text-xl font-semibold mb-4">Expert Naturopathic Care</h3>
                <p class="text-muted-foreground">Qualified naturopath with years of experience in gut health and functional medicine.</p>
              </div>
              <div class="p-6 bg-muted/30 rounded-lg">
                <h3 class="text-xl font-semibold mb-4">Personalised Treatment</h3>
                <p class="text-muted-foreground">Tailored treatment plans based on your unique health needs and goals.</p>
              </div>
              <div class="p-6 bg-muted/30 rounded-lg">
                <h3 class="text-xl font-semibold mb-4">Holistic Approach</h3>
                <p class="text-muted-foreground">Addressing root causes, not just symptoms, for lasting health improvements.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer class="bg-muted py-12">
        <div class="container mx-auto px-4 text-center">
          <p class="text-muted-foreground">&copy; 2024 NXTLVL Health. All rights reserved.</p>
          <p class="text-muted-foreground mt-2">ABN: 34 377 382 272</p>
        </div>
      </footer>
    `
  },
  {
    path: '/services/index.html',
    title: 'Naturopathic Services Brisbane | NXTLVL Health',
    description: 'Comprehensive naturopathic services including functional medicine, nutrition, laser therapy, and personal training. Tailored health plans for your well-being in Brisbane.',
    canonical: '/services',
    keywords: 'naturopathic services Brisbane, functional medicine Brisbane, nutrition Brisbane, laser therapy Brisbane, personal training Brisbane',
    content: `
      <nav class="bg-background border-b border-border">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between h-16">
            <a href="/" class="text-2xl font-bold text-primary">NXTLVL Health</a>
            <div class="hidden md:flex space-x-8">
              <a href="/services" class="text-primary font-medium">Services</a>
              <a href="/what-we-treat" class="text-foreground hover:text-primary">What We Treat</a>
              <a href="/areas-we-serve" class="text-foreground hover:text-primary">Areas</a>
              <a href="/blog" class="text-foreground hover:text-primary">Blog</a>
              <a href="/contact" class="text-foreground hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        <section class="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4">
          <div class="container mx-auto max-w-6xl">
            <div class="text-center">
              <h1 class="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Our <span class="text-primary">Naturopathic Services</span>
              </h1>
              <h2 class="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-8">
                Tailored for Your Health Journey
              </h2>
              <p class="text-lg text-muted-foreground mb-8">
                Naturopath, PT & functional medicine services for holistic wellness
              </p>
            </div>
          </div>
        </section>
        
        <section class="py-20 px-4">
          <div class="container mx-auto max-w-6xl">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="text-center p-6 bg-muted/30 rounded-lg">
                <h3 class="text-xl font-bold mb-4">NATUROPATHY</h3>
                <p class="text-muted-foreground">Evidence-based natural medicine combining traditional wisdom with modern science.</p>
              </div>
              <div class="text-center p-6 bg-muted/30 rounded-lg">
                <h3 class="text-xl font-bold mb-4">FUNCTIONAL MEDICINE</h3>
                <p class="text-muted-foreground">Advanced testing and personalized protocols to address root causes of health issues.</p>
              </div>
              <div class="text-center p-6 bg-muted/30 rounded-lg">
                <h3 class="text-xl font-bold mb-4">NUTRITION</h3>
                <p class="text-muted-foreground">Personalized nutrition plans designed to optimize your health and energy levels.</p>
              </div>
              <div class="text-center p-6 bg-muted/30 rounded-lg">
                <h3 class="text-xl font-bold mb-4">LASER THERAPY</h3>
                <p class="text-muted-foreground">MLS laser therapy for pain relief, inflammation reduction, and tissue healing.</p>
              </div>
              <div class="text-center p-6 bg-muted/30 rounded-lg">
                <h3 class="text-xl font-bold mb-4">PERSONAL TRAINING</h3>
                <p class="text-muted-foreground">Customized fitness programs integrated with your health and wellness goals.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section class="py-20 px-4 bg-muted/20">
          <div class="container mx-auto max-w-6xl text-center">
            <h2 class="text-3xl lg:text-4xl font-bold mb-6">WHY CHOOSE NXTLVL?</h2>
            <p class="text-xl text-muted-foreground mb-12">Personalised health plans for your well-being</p>
            <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              <div class="p-6 bg-background rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-4">PERSONALISED PLANS</h3>
                <p class="text-muted-foreground">We develop tailored plans integrating a range of options including genetic and blood analysis, naturopathic consultations, and comprehensive assessments to understand your body's systems synergistically.</p>
              </div>
              <div class="p-6 bg-background rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-4">HOLISTIC APPROACH</h3>
                <p class="text-muted-foreground">Our approach includes nutrition, herbal medicine, targeted supplementation, and customised training programs to boost both mental and physical performance, prevent issues, and promote overall well-being.</p>
              </div>
              <div class="p-6 bg-background rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-4">UNLOCK YOUR FULL POTENTIAL</h3>
                <p class="text-muted-foreground">Elevate your fitness, transform your lifestyle, and embrace a future filled with vitality. Experience NXTLVL Health's tailored health plans to unlock your full potential and reach your goals.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer class="bg-muted py-12">
        <div class="container mx-auto px-4 text-center">
          <p class="text-muted-foreground">&copy; 2024 NXTLVL Health. All rights reserved.</p>
          <p class="text-muted-foreground mt-2">ABN: 34 377 382 272</p>
        </div>
      </footer>
    `
  },
  {
    path: '/what-we-treat/index.html',
    title: 'What We Treat | Conditions & Health Issues | NXTLVL Health',
    description: 'Discover the wide range of health conditions we treat at NXTLVL Health. From gut health and fatigue to thyroid issues and weight management - we can help you feel your best.',
    canonical: '/what-we-treat',
    keywords: 'naturopath conditions Brisbane, health conditions treated, naturopathic medicine Brisbane, holistic health treatment',
    content: `
      <nav class="bg-background border-b border-border">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between h-16">
            <a href="/" class="text-2xl font-bold text-primary">NXTLVL Health</a>
            <div class="hidden md:flex space-x-8">
              <a href="/services" class="text-foreground hover:text-primary">Services</a>
              <a href="/what-we-treat" class="text-primary font-medium">What We Treat</a>
              <a href="/areas-we-serve" class="text-foreground hover:text-primary">Areas</a>
              <a href="/blog" class="text-foreground hover:text-primary">Blog</a>
              <a href="/contact" class="text-foreground hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        <section class="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
              <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Conditions We Treat at NXTLVL Health
              </h1>
              <p class="text-xl text-muted-foreground mb-8">
                Looking to boost your energy, shed excess weight, manage a health condition, or uncover the root cause of your discomfort? We're here to help.
              </p>
            </div>
          </div>
        </section>
        
        <section class="py-16">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
              <div class="bg-muted/30 rounded-lg p-8 mb-12">
                <h2 class="text-2xl font-semibold text-foreground mb-4">What is Naturopathy?</h2>
                <p class="text-muted-foreground leading-relaxed">
                  Naturopathy combines cutting-edge scientific research with time-tested traditional medicine to deliver optimal health outcomes. Think of a Naturopath as your dedicated health coach – they work to identify the underlying cause of your health concerns, design a personalised treatment plan, and provide ongoing support to ensure you're achieving the best possible results.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section class="py-16 bg-muted/20">
          <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
              <h2 class="text-3xl font-bold text-foreground mb-12 text-center">
                Complete List of Conditions We Treat
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span class="text-muted-foreground">Allergies & Food Sensitivities</span>
                </div>
                <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span class="text-muted-foreground">Asthma</span>
                </div>
                <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span class="text-muted-foreground">Children's Health</span>
                </div>
                <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span class="text-muted-foreground">Cardiovascular Health</span>
                </div>
                <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span class="text-muted-foreground">Chronic Inflammation & Pain</span>
                </div>
                <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span class="text-muted-foreground">Diabetes</span>
                </div>
                <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span class="text-muted-foreground">Fatigue</span>
                </div>
                <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span class="text-muted-foreground">Gut Health (IBS, IBD, Bloating)</span>
                </div>
                <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span class="text-muted-foreground">Mental Health (Stress, Anxiety & Depression)</span>
                </div>
                <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span class="text-muted-foreground">Thyroid Issues</span>
                </div>
                <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span class="text-muted-foreground">Weight Management</span>
                </div>
                <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span class="text-muted-foreground">And Many More...</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer class="bg-muted py-12">
        <div class="container mx-auto px-4 text-center">
          <p class="text-muted-foreground">&copy; 2024 NXTLVL Health. All rights reserved.</p>
          <p class="text-muted-foreground mt-2">ABN: 34 377 382 272</p>
        </div>
      </footer>
    `
  },
  {
    path: '/contact/index.html',
    title: 'Contact NXTLVL Health | Brisbane Naturopath | Book Consultation',
    description: 'Contact NXTLVL Health in New Farm, Brisbane. Book your naturopathic consultation today. Call (07) 3180 8853 or book online.',
    canonical: '/contact',
    keywords: 'contact Brisbane naturopath, book consultation Brisbane, NXTLVL Health contact, naturopath New Farm',
    content: `
      <nav class="bg-background border-b border-border">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between h-16">
            <a href="/" class="text-2xl font-bold text-primary">NXTLVL Health</a>
            <div class="hidden md:flex space-x-8">
              <a href="/services" class="text-foreground hover:text-primary">Services</a>
              <a href="/what-we-treat" class="text-foreground hover:text-primary">What We Treat</a>
              <a href="/areas-we-serve" class="text-foreground hover:text-primary">Areas</a>
              <a href="/blog" class="text-foreground hover:text-primary">Blog</a>
              <a href="/contact" class="text-primary font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        <section class="py-20 px-4">
          <div class="container mx-auto max-w-4xl">
            <div class="text-center mb-12">
              <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contact NXTLVL Health
              </h1>
              <p class="text-xl text-muted-foreground">
                Ready to start your health journey? Get in touch with our Brisbane naturopath today.
              </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-12">
              <div>
                <h2 class="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                <div class="space-y-6">
                  <div>
                    <h3 class="font-semibold text-foreground mb-2">Phone</h3>
                    <p class="text-muted-foreground">(07) 3180 8853</p>
                  </div>
                  <div>
                    <h3 class="font-semibold text-foreground mb-2">Email</h3>
                    <p class="text-muted-foreground">office@nxtlvlhealth.com.au</p>
                  </div>
                  <div>
                    <h3 class="font-semibold text-foreground mb-2">Location</h3>
                    <p class="text-muted-foreground">New Farm, Brisbane QLD</p>
                  </div>
                  <div>
                    <h3 class="font-semibold text-foreground mb-2">ABN</h3>
                    <p class="text-muted-foreground">34 377 382 272</p>
                  </div>
                </div>
                
                <div class="mt-8">
                  <a href="https://nxtlvlhealth.com.au/book-now/" class="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90">
                    Book Your Consultation
                  </a>
                </div>
              </div>
              
              <div>
                <h2 class="text-2xl font-bold text-foreground mb-6">Free 15-Minute Consultation</h2>
                <p class="text-muted-foreground mb-6">
                  Not sure if naturopathy is right for you? Book a free 15-minute phone consultation to discuss your health concerns and see how we can help.
                </p>
                <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" class="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10">
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer class="bg-muted py-12">
        <div class="container mx-auto px-4 text-center">
          <p class="text-muted-foreground">&copy; 2024 NXTLVL Health. All rights reserved.</p>
          <p class="text-muted-foreground mt-2">ABN: 34 377 382 272</p>
        </div>
      </footer>
    `
  }
];

// Create static directory if it doesn't exist
const staticDir = path.join(__dirname, 'static');
if (!fs.existsSync(staticDir)) {
  fs.mkdirSync(staticDir, { recursive: true });
}

// Generate all static pages
pages.forEach(page => {
  const html = renderPageToHTML(page.content, page.title, page.description, page.canonical, page.keywords);
  
  // Create directory structure if needed
  const filePath = path.join(staticDir, page.path);
  const dir = path.dirname(filePath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write the HTML file
  fs.writeFileSync(filePath, html);
  console.log(`Generated: ${page.path}`);
});

console.log('Static site generation complete!');
