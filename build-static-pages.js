const fs = require('fs');
const path = require('path');

// All routes from the React application
const routes = [
  { path: '/', title: 'NXTLVL Health - Brisbane Naturopath | Gut Health Specialist' },
  { path: '/services', title: 'Services - NXTLVL Health' },
  { path: '/services/mls-laser-therapy-treatment-brisbane', title: 'MLS Laser Therapy Brisbane - NXTLVL Health' },
  { path: '/services/personal-trainer-new-farm', title: 'Personal Trainer New Farm - NXTLVL Health' },
  { path: '/what-we-treat/gut-health-naturopath-brisbane', title: 'Gut Health Naturopath Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/gut-health-specialist', title: 'Gut Health Specialist Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/weight-loss-naturopath-brisbane', title: 'Weight Loss Naturopath Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/naturopath-thyroid-brisbane', title: 'Thyroid Naturopath Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/naturopath-diabetes-brisbane', title: 'Diabetes Naturopath Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/childrens-naturopath-brisbane', title: 'Children\'s Naturopath Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/adhd-naturopath', title: 'ADHD Naturopath Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/naturopath-anxiety', title: 'Anxiety Naturopath Brisbane - NXTLVL Health' },
  { path: '/areas-we-serve/naturopath-north-brisbane', title: 'Naturopath North Brisbane - NXTLVL Health' },
  { path: '/areas-we-serve/naturopath-newstead', title: 'Naturopath Newstead - NXTLVL Health' },
  { path: '/areas-we-serve/naturopath-new-farm', title: 'Naturopath New Farm - NXTLVL Health' },
  { path: '/areas-we-serve/naturopath-morningside', title: 'Naturopath Morningside - NXTLVL Health' },
  { path: '/what-we-treat/ibs-naturopath', title: 'IBS Naturopath Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/sibo-naturopath', title: 'SIBO Naturopath Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/wellness-clinic-brisbane', title: 'Wellness Clinic Brisbane - NXTLVL Health' },
  { path: '/areas-we-serve', title: 'Areas We Serve - NXTLVL Health' },
  { path: '/what-we-treat/ibs-brisbane', title: 'IBS Treatment Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/ibs-clinic', title: 'IBS Clinic Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/naturopathy-for-skin', title: 'Skin Naturopathy Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/naturopath-eczema', title: 'Eczema Naturopath Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/acne-naturopathy', title: 'Acne Naturopathy Brisbane - NXTLVL Health' },
  { path: '/what-we-treat/hormonal-acne-naturopath', title: 'Hormonal Acne Naturopath Brisbane - NXTLVL Health' },
  { path: '/areas-we-serve/naturopath-hamilton', title: 'Naturopath Hamilton Brisbane - NXTLVL Health' },
  { path: '/areas-we-serve/naturopath-clayfield-brisbane', title: 'Naturopath Clayfield Brisbane - NXTLVL Health' },
  { path: '/areas-we-serve/naturopath-windsor', title: 'Naturopath Windsor Brisbane - NXTLVL Health' },
  { path: '/gut-freedom', title: 'Gut Freedom Program - NXTLVL Health' },
  { path: '/allergy-naturopath', title: 'Allergy Naturopath Brisbane - NXTLVL Health' },
  { path: '/naturopathic-nutritionist', title: 'Naturopathic Nutritionist Brisbane - NXTLVL Health' },
  { path: '/indooroopilly-naturopathy', title: 'Indooroopilly Naturopathy - NXTLVL Health' },
  { path: '/functional-medicine', title: 'Functional Medicine Brisbane - NXTLVL Health' },
  { path: '/services/live-blood-analysis-brisbane', title: 'Live Blood Analysis Brisbane - NXTLVL Health' },
  { path: '/cancellation-policy', title: 'Cancellation Policy - NXTLVL Health' },
  { path: '/contact', title: 'Contact Us - NXTLVL Health' },
  { path: '/privacy-policy', title: 'Privacy Policy - NXTLVL Health' },
  { path: '/website-disclaimer', title: 'Website Disclaimer - NXTLVL Health' },
  { path: '/what-we-treat', title: 'What We Treat - NXTLVL Health' },
  { path: '/nxtlvl-tonics', title: 'NXTLVL Tonics - Natural Health Products' },
  { path: '/services/nutritionist-brisbane', title: 'Nutritionist Brisbane - NXTLVL Health' },
  { path: '/book-now', title: 'Book Appointment - NXTLVL Health' },
  { path: '/blog', title: 'Health Blog - NXTLVL Health' },
  { path: '/blog/gut-health/best-tea-for-stomach-pain-and-bloating', title: 'Best Tea for Stomach Pain and Bloating - NXTLVL Health' },
  { path: '/blog/naturopathy/how-to-flush-salicylates-from-your-body', title: 'How to Flush Salicylates from Your Body - NXTLVL Health' },
  { path: '/blog/gut-health/7-worst-foods-for-gut-health', title: '7 Worst Foods for Gut Health - NXTLVL Health' },
  { path: '/blog/naturopathy/naturopathy-for-weight-loss', title: 'Naturopathy for Weight Loss - NXTLVL Health' },
  { path: '/blog/gut-health/gut-health-101-why-your-stomach-might-be-behind-your-brain-fog-and-fatigue', title: 'Gut Health 101: Brain Fog and Fatigue - NXTLVL Health' },
  { path: '/blog/naturopathy/naturopathy-vs-homeopathy', title: 'Naturopathy vs Homeopathy - NXTLVL Health' },
  { path: '/blog/weight-loss/embracing-natural-weight-loss-with-ozempic-a-naturopaths-approach', title: 'Natural Weight Loss with Ozempic - NXTLVL Health' },
  { path: '/blog/gut-health/gut-brain-connection-how-your-gut-affects-mental-health', title: 'Gut-Brain Connection and Mental Health - NXTLVL Health' }
];

// Base HTML template that includes essential meta tags and content placeholders
function generateStaticHTML(route) {
  const baseDescription = "NXTLVL Health is Brisbane's leading naturopathic clinic specializing in gut health, weight loss, and holistic wellness. Book your consultation today.";
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${route.title}</title>
    <meta name="description" content="${baseDescription}">
    <meta name="keywords" content="naturopath brisbane, gut health specialist, weight loss naturopath, holistic health, functional medicine">
    <meta name="author" content="NXTLVL Health">
    <link rel="canonical" href="https://nxtlvlhealth.com.au${route.path}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${route.title}">
    <meta property="og:description" content="${baseDescription}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://nxtlvlhealth.com.au${route.path}">
    <meta property="og:site_name" content="NXTLVL Health">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${route.title}">
    <meta name="twitter:description" content="${baseDescription}">
    
    <!-- Schema.org -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "name": "NXTLVL Health",
      "description": "${baseDescription}",
      "url": "https://nxtlvlhealth.com.au${route.path}",
      "telephone": "+61 7 3857 8887",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Health Street",
        "addressLocality": "Brisbane",
        "addressRegion": "QLD",
        "postalCode": "4000",
        "addressCountry": "AU"
      }
    }
    </script>
    
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; line-height: 1.6; }
        .container { max-width: 1200px; margin: 0 auto; }
        h1 { color: #2c5282; margin-bottom: 20px; }
        h2 { color: #3182ce; margin-top: 30px; }
        .cta-button { background: #3182ce; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 10px 10px 10px 0; }
        .contact-info { background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0; }
        .service-card { background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; }
    </style>
</head>
<body>
    <div class="container">
        ${getPageContent(route)}
        
        <div class="contact-info">
            <h2>Contact NXTLVL Health</h2>
            <p><strong>Phone:</strong> <a href="tel:+61738578887">(07) 3857 8887</a></p>
            <p><strong>Address:</strong> New Farm, Brisbane, QLD</p>
            <p><strong>Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM</p>
            <a href="/book-now" class="cta-button">Book Your Consultation</a>
            <a href="/contact" class="cta-button">Contact Us</a>
        </div>
    </div>
</body>
</html>`;
}

// Generate specific content for each page type
function getPageContent(route) {
  if (route.path === '/') {
    return `
        <h1>NXTLVL Health - Brisbane's Premier Naturopathic Clinic</h1>
        <p>Welcome to NXTLVL Health, Brisbane's leading naturopathic clinic. We specialize in gut health, weight loss, and holistic wellness solutions.</p>
        
        <h2>Our Services</h2>
        <div class="services-grid">
            <div class="service-card">
                <h3>Gut Health</h3>
                <p>Comprehensive gut health treatments for IBS, SIBO, and digestive disorders.</p>
            </div>
            <div class="service-card">
                <h3>Weight Loss</h3>
                <p>Natural, sustainable weight loss programs tailored to your needs.</p>
            </div>
            <div class="service-card">
                <h3>Thyroid Health</h3>
                <p>Expert thyroid support using natural medicine approaches.</p>
            </div>
            <div class="service-card">
                <h3>Women's Health</h3>
                <p>Specialized care for hormonal balance and women's wellness.</p>
            </div>
        </div>
        
        <h2>Why Choose NXTLVL Health?</h2>
        <ul>
            <li>✓ Expert naturopathic practitioners</li>
            <li>✓ Evidence-based natural treatments</li>
            <li>✓ Personalized treatment plans</li>
            <li>✓ Comprehensive health assessments</li>
            <li>✓ Modern clinic facilities</li>
        </ul>`;
  }
  
  if (route.path.includes('/gut-health')) {
    return `
        <h1>Gut Health Specialist Brisbane - NXTLVL Health</h1>
        <p>Transform your digestive health with our comprehensive gut health programs. We treat IBS, SIBO, bloating, and other digestive disorders using evidence-based natural medicine.</p>
        
        <h2>Conditions We Treat</h2>
        <ul>
            <li>Irritable Bowel Syndrome (IBS)</li>
            <li>Small Intestinal Bacterial Overgrowth (SIBO)</li>
            <li>Inflammatory Bowel Disease</li>
            <li>Food intolerances and allergies</li>
            <li>Chronic bloating and gas</li>
            <li>Leaky gut syndrome</li>
        </ul>
        
        <h2>Our Approach</h2>
        <p>We use comprehensive testing and personalized treatment plans to address the root cause of your digestive issues.</p>`;
  }
  
  if (route.path.includes('/weight-loss')) {
    return `
        <h1>Weight Loss Naturopath Brisbane - NXTLVL Health</h1>
        <p>Achieve sustainable weight loss with our holistic approach. We address metabolic health, hormonal balance, and lifestyle factors for lasting results.</p>
        
        <h2>Our Weight Loss Programs Include:</h2>
        <ul>
            <li>Metabolic testing and analysis</li>
            <li>Hormonal assessment</li>
            <li>Personalized nutrition plans</li>
            <li>Natural appetite support</li>
            <li>Stress management strategies</li>
            <li>Ongoing support and monitoring</li>
        </ul>`;
  }
  
  if (route.path.includes('/thyroid')) {
    return `
        <h1>Thyroid Naturopath Brisbane - NXTLVL Health</h1>
        <p>Expert thyroid support using natural medicine. We treat hypothyroidism, hyperthyroidism, and autoimmune thyroid conditions.</p>
        
        <h2>Thyroid Conditions We Treat:</h2>
        <ul>
            <li>Hypothyroidism (underactive thyroid)</li>
            <li>Hyperthyroidism (overactive thyroid)</li>
            <li>Hashimoto's thyroiditis</li>
            <li>Graves' disease</li>
            <li>Thyroid nodules</li>
        </ul>`;
  }
  
  if (route.path.includes('/blog/')) {
    return `
        <h1>${route.title}</h1>
        <p>Read our latest insights on natural health, nutrition, and wellness. Our expert practitioners share valuable information to help you achieve optimal health.</p>
        
        <h2>Health Topics</h2>
        <ul>
            <li>Gut health and digestion</li>
            <li>Natural weight loss strategies</li>
            <li>Hormonal balance</li>
            <li>Stress management</li>
            <li>Nutritional medicine</li>
        </ul>`;
  }
  
  // Default content for other pages
  return `
        <h1>${route.title}</h1>
        <p>Welcome to NXTLVL Health. We provide expert naturopathic care and holistic health solutions in Brisbane.</p>
        
        <h2>Expert Naturopathic Care</h2>
        <p>Our experienced practitioners offer comprehensive natural health solutions tailored to your individual needs.</p>
        
        <h2>Services Available</h2>
        <ul>
            <li>Comprehensive health assessments</li>
            <li>Natural treatment protocols</li>
            <li>Nutritional medicine</li>
            <li>Herbal medicine</li>
            <li>Lifestyle counseling</li>
        </ul>`;
}

// Create static directory
const staticDir = path.join(__dirname, 'public', 'static');
if (!fs.existsSync(staticDir)) {
    fs.mkdirSync(staticDir, { recursive: true });
}

// Generate HTML files for all routes
routes.forEach(route => {
    const html = generateStaticHTML(route);
    let fileName;
    
    if (route.path === '/') {
        fileName = 'index.html';
    } else {
        // Create directory structure for nested paths
        const pathParts = route.path.split('/').filter(Boolean);
        const dirPath = path.join(staticDir, ...pathParts.slice(0, -1));
        
        if (pathParts.length > 1 && !fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        
        if (pathParts.length === 1) {
            fileName = `${pathParts[0]}.html`;
        } else {
            fileName = path.join(...pathParts.slice(0, -1), `${pathParts[pathParts.length - 1]}.html`);
        }
    }
    
    const filePath = path.join(staticDir, fileName);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Generated: ${filePath}`);
});

console.log(`\nGenerated ${routes.length} static HTML pages successfully!`);