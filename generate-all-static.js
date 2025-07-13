const fs = require('fs');
const path = require('path');

// Template for static pages
const createStaticPage = (title, description, canonical, keywords, h1, content, breadcrumbs = []) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    
    <!-- SEO Meta Tags -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="https://nxtlvlhealth.com.au${canonical}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://nxtlvlhealth.com.au${canonical}">
    <meta property="og:image" content="https://nxtlvlhealth.com.au/lovable-uploads/f459679d-99b6-4b58-affb-e2cedb040e6e.png">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    
    <!-- Favicon -->
    <link rel="icon" href="/lovable-uploads/e8ea191a-3d17-45b6-b926-fa1ce97867a9.png" type="image/png">
    
    <!-- Basic CSS for styling -->
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        header { background: #fff; border-bottom: 1px solid #e5e5e5; padding: 16px 0; position: sticky; top: 0; z-index: 50; }
        .nav { display: flex; justify-content: space-between; align-items: center; }
        .logo img { height: 56px; width: 56px; }
        .btn { background: #0066cc; color: white; padding: 12px 24px; border: none; border-radius: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-weight: 500; }
        .btn:hover { background: #0052a3; }
        .btn-outline { background: transparent; color: #0066cc; border: 1px solid #0066cc; }
        .btn-outline:hover { background: #0066cc; color: white; }
        h1 { font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; line-height: 1.2; }
        h2 { font-size: 2rem; font-weight: bold; margin-bottom: 1.5rem; }
        h3 { font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; }
        h4 { font-size: 1.25rem; font-weight: bold; margin-bottom: 0.75rem; }
        .hero { background: linear-gradient(135deg, rgba(0, 102, 204, 0.1), rgba(0, 82, 163, 0.1)); padding: 80px 0; }
        .section { padding: 60px 0; }
        .section-muted { background: rgba(0, 0, 0, 0.02); }
        .card { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-bottom: 20px; }
        .text-primary { color: #0066cc; }
        .text-center { text-align: center; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .breadcrumbs { padding: 20px 0; background: #f8f9fa; font-size: 0.875rem; }
        .breadcrumbs a { color: #0066cc; text-decoration: none; }
        .breadcrumbs a:hover { text-decoration: underline; }
        footer { background: rgba(0, 0, 0, 0.02); border-top: 1px solid #e5e5e5; padding: 48px 0; }
        .footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
        .footer-links a { color: #666; text-decoration: none; font-size: 0.875rem; }
        .footer-links a:hover { color: #0066cc; }
        ul { margin: 1rem 0; padding-left: 20px; }
        p { margin: 1rem 0; }
        @media (max-width: 768px) {
            .footer-grid { grid-template-columns: repeat(2, 1fr); }
            h1 { font-size: 1.75rem; }
            h2 { font-size: 1.5rem; }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <nav class="nav">
                <a href="/" class="logo">
                    <img src="/lovable-uploads/0aadec6a-7f1f-4a21-854c-39d8c3a218d0.png" alt="NXTLVL Health">
                </a>
                <div>
                    <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" class="btn" target="_blank">Book Free Consult</a>
                </div>
            </nav>
        </div>
    </header>

    ${breadcrumbs.length > 0 ? `
    <!-- Breadcrumbs -->
    <div class="breadcrumbs">
        <div class="container">
            ${breadcrumbs.map((crumb, i) => 
                i === breadcrumbs.length - 1 
                    ? crumb.name 
                    : `<a href="${crumb.href}">${crumb.name}</a> > `
            ).join('')}
        </div>
    </div>
    ` : ''}

    <!-- Main Content -->
    <main>
        <section class="hero">
            <div class="container text-center">
                <h1>${h1}</h1>
                <div style="margin: 32px 0;">
                    <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" class="btn" target="_blank" style="margin-right: 16px;">Book a Free 15-Min Consult</a>
                    <a href="tel:0731808853" class="btn btn-outline">Call Mitch Now</a>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                ${content}
            </div>
        </section>

        <!-- CTA Section -->
        <section class="section section-muted">
            <div class="container text-center">
                <h2>Ready to Get Your Health Back on Track?</h2>
                <p style="font-size: 1.125rem; margin-bottom: 2rem;">
                    Book your free 15-minute consultation with Mitch today and discover how naturopathy can help you feel your best.
                </p>
                <div>
                    <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" class="btn" target="_blank" style="margin-right: 16px;">Book Free Consult</a>
                    <a href="tel:0731808853" class="btn btn-outline">Call Now</a>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h3 class="text-primary">NXTLVL Health - Naturopath</h3>
                    <p style="font-size: 0.875rem; color: #666; margin: 16px 0;">Natural health solutions with personalised care. Expert naturopathy services across Brisbane.</p>
                    <div>
                        <div style="font-size: 0.875rem; color: #666; margin: 8px 0;">📞 <a href="tel:0731808853" style="color: inherit;">(07) 3180 8853</a></div>
                        <div style="font-size: 0.875rem; color: #666; margin: 8px 0;">✉️ <a href="mailto:info@nxtlvlhealth.com.au" style="color: inherit;">info@nxtlvlhealth.com.au</a></div>
                        <div style="font-size: 0.875rem; color: #666; margin: 8px 0;">📍 Suite 2/665 Brunswick St, New Farm QLD 4005</div>
                    </div>
                </div>
                <div>
                    <h4>Services</h4>
                    <div class="footer-links" style="margin-top: 16px;">
                        <div style="margin: 8px 0;"><a href="/what-we-treat/gut-health-naturopath-brisbane">Gut Health</a></div>
                        <div style="margin: 8px 0;"><a href="/what-we-treat/weight-loss-naturopath-brisbane">Weight Loss</a></div>
                        <div style="margin: 8px 0;"><a href="/what-we-treat/naturopath-thyroid-brisbane">Thyroid</a></div>
                        <div style="margin: 8px 0;"><a href="/services/live-blood-analysis-brisbane">Live Blood Analysis</a></div>
                    </div>
                </div>
                <div>
                    <h4>Areas We Serve</h4>
                    <div class="footer-links" style="margin-top: 16px;">
                        <div style="margin: 8px 0;"><a href="/areas-we-serve/naturopath-north-brisbane">North Brisbane</a></div>
                        <div style="margin: 8px 0;"><a href="/areas-we-serve/naturopath-newstead">Newstead</a></div>
                        <div style="margin: 8px 0;"><a href="/areas-we-serve/naturopath-new-farm">New Farm</a></div>
                        <div style="margin: 8px 0;"><a href="/areas-we-serve/naturopath-clayfield-brisbane">Clayfield</a></div>
                    </div>
                </div>
                <div>
                    <h4>Get Started</h4>
                    <div style="margin-top: 16px;">
                        <a href="https://calendly.com/nxtlvlhealth-info/15-min-consult" class="btn" style="width: 100%; margin-bottom: 12px; text-align: center;" target="_blank">Book Free Consult</a>
                        <div style="font-size: 0.875rem; color: #666; margin-top: 16px;">
                            <div>Monday - Friday: 9:00 AM - 7:00 PM</div>
                            <div>Saturday: 8:00 AM - 12:00 PM</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="border-top: 1px solid #e5e5e5; margin-top: 32px; padding-top: 32px; text-align: center;">
                <p style="font-size: 0.875rem; color: #666;">© 2025 NXTLVL Health - Mitchell Potts Naturopathy. All rights reserved. | Brisbane, Queensland, Australia</p>
            </div>
        </div>
    </footer>
</body>
</html>`;

// Define ALL pages from the routing
const allPages = [
    // Main pages
    { 
        path: '/services', 
        title: 'Naturopathy Services Brisbane | NXTLVL Health',
        description: 'Comprehensive naturopathy services in Brisbane including nutritional medicine, live blood analysis, MLS laser therapy, and personal training.',
        keywords: 'naturopathy services Brisbane, nutritional medicine, live blood analysis, MLS laser therapy',
        h1: 'Natural Health Services in Brisbane',
        content: `<h2>Our Comprehensive Naturopathy Services</h2><p>We offer a full range of natural health services designed to support your wellness journey.</p>`
    },
    
    // Treatment pages  
    { 
        path: '/what-we-treat/gut-health-naturopath-brisbane',
        title: 'Gut Health Naturopath Brisbane | IBS & SIBO Treatment | NXTLVL Health',
        description: 'Expert gut health naturopath in Brisbane specializing in IBS, SIBO, bloating, and digestive disorders. Natural solutions for lasting gut health.',
        keywords: 'gut health naturopath Brisbane, IBS treatment, SIBO naturopath, digestive health Brisbane',
        h1: 'Gut Health Naturopath Brisbane',
        content: `<h2>Expert Gut Health Treatment</h2><p>Specialized treatment for IBS, SIBO, bloating, and other digestive issues using natural approaches.</p>`
    },
    
    { 
        path: '/what-we-treat/weight-loss-naturopath-brisbane',
        title: 'Weight Loss Naturopath Brisbane | Natural Weight Management | NXTLVL Health',
        description: 'Achieve sustainable weight loss with our natural approach. Expert naturopath in Brisbane specializing in metabolic health and weight management.',
        keywords: 'weight loss naturopath Brisbane, natural weight loss, metabolic health Brisbane',
        h1: 'Weight Loss Naturopath Brisbane', 
        content: `<h2>Natural Weight Loss Solutions</h2><p>Sustainable weight management through naturopathic principles and metabolic support.</p>`
    },
    
    { 
        path: '/what-we-treat/naturopath-thyroid-brisbane',
        title: 'Thyroid Naturopath Brisbane | Hypothyroid & Hyperthyroid Treatment',
        description: 'Expert thyroid naturopath in Brisbane. Natural treatment for hypothyroid, hyperthyroid, and thyroid imbalances.',
        keywords: 'thyroid naturopath Brisbane, hypothyroid treatment, hyperthyroid treatment, thyroid health',
        h1: 'Thyroid Naturopath Brisbane',
        content: `<h2>Thyroid Health Specialist</h2><p>Natural treatment for thyroid disorders including hypothyroid, hyperthyroid, and Hashimoto's.</p>`
    },
    
    // Area pages
    { 
        path: '/areas-we-serve/naturopath-north-brisbane',
        title: 'Naturopath North Brisbane | Natural Health Services | NXTLVL Health',
        description: 'Trusted naturopath serving North Brisbane areas. Expert natural health solutions for gut health, weight loss, hormonal balance.',
        keywords: 'naturopath north brisbane, natural health north brisbane, holistic health',
        h1: 'Naturopath North Brisbane',
        content: `<h2>Serving North Brisbane Communities</h2><p>Expert naturopathic care for residents across North Brisbane suburbs.</p>`
    },
    
    { 
        path: '/areas-we-serve/naturopath-newstead',
        title: 'Naturopath Newstead | Local Natural Health Services | NXTLVL Health',
        description: 'Professional naturopath serving Newstead. Convenient location, expert care for gut health, hormones, and wellness.',
        keywords: 'naturopath newstead, natural health newstead, holistic health newstead',
        h1: 'Naturopath Newstead',
        content: `<h2>Natural Health Services in Newstead</h2><p>Conveniently located to serve Newstead residents with expert naturopathic care.</p>`
    },
    
    // Service-specific pages
    { 
        path: '/services/live-blood-analysis-brisbane',
        title: 'Live Blood Analysis Brisbane | Advanced Health Screening | NXTLVL Health', 
        description: 'Professional live blood analysis in Brisbane. See your health in real-time and identify issues before they become problems.',
        keywords: 'live blood analysis Brisbane, blood testing Brisbane, health screening Brisbane',
        h1: 'Live Blood Analysis Brisbane',
        content: `<h2>Advanced Health Screening</h2><p>Real-time analysis of your blood to identify health imbalances and nutritional deficiencies.</p>`
    },
    
    { 
        path: '/services/mls-laser-therapy-treatment-brisbane',
        title: 'MLS Laser Therapy Brisbane | Pain Relief & Injury Recovery | NXTLVL Health',
        description: 'Advanced MLS laser therapy in Brisbane for pain relief, injury recovery, and chronic pain management. Drug-free treatment.',
        keywords: 'MLS laser therapy Brisbane, laser pain relief Brisbane, injury recovery Brisbane',
        h1: 'MLS Laser Therapy Brisbane',
        content: `<h2>Advanced Pain Relief Technology</h2><p>Drug-free pain relief and accelerated healing using cutting-edge MLS laser technology.</p>`
    },
    
    // Condition-specific pages
    { 
        path: '/what-we-treat/ibs-naturopath',
        title: 'IBS Naturopath Brisbane | Natural IBS Treatment | NXTLVL Health',
        description: 'Expert IBS naturopath in Brisbane. Natural treatment for irritable bowel syndrome using proven protocols.',
        keywords: 'IBS naturopath Brisbane, IBS treatment Brisbane, irritable bowel syndrome treatment',
        h1: 'IBS Naturopath Brisbane',
        content: `<h2>Natural IBS Treatment</h2><p>Comprehensive naturopathic approach to managing and treating irritable bowel syndrome.</p>`
    },
    
    { 
        path: '/what-we-treat/sibo-naturopath',
        title: 'SIBO Naturopath Brisbane | SIBO Treatment & Testing | NXTLVL Health',
        description: 'Specialized SIBO naturopath in Brisbane. Expert testing and treatment for Small Intestinal Bacterial Overgrowth.',
        keywords: 'SIBO naturopath Brisbane, SIBO treatment Brisbane, small intestinal bacterial overgrowth',
        h1: 'SIBO Naturopath Brisbane',
        content: `<h2>SIBO Testing & Treatment</h2><p>Specialized protocols for diagnosing and treating Small Intestinal Bacterial Overgrowth.</p>`
    },
    
    { 
        path: '/what-we-treat/adhd-naturopath',
        title: 'ADHD Naturopath Brisbane | Natural ADHD Support | NXTLVL Health',
        description: 'Natural ADHD support for children and adults. Expert naturopath in Brisbane specializing in ADHD management.',
        keywords: 'ADHD naturopath Brisbane, natural ADHD treatment, ADHD support Brisbane',
        h1: 'ADHD Naturopath Brisbane',
        content: `<h2>Natural ADHD Support</h2><p>Comprehensive naturopathic support for ADHD in children and adults using natural approaches.</p>`
    },
    
    { 
        path: '/what-we-treat/naturopath-anxiety',
        title: 'Anxiety Naturopath Brisbane | Natural Anxiety Treatment | NXTLVL Health',
        description: 'Expert anxiety naturopath in Brisbane. Natural treatment for anxiety, stress, and mental health support.',
        keywords: 'anxiety naturopath Brisbane, natural anxiety treatment, stress management Brisbane',
        h1: 'Anxiety Naturopath Brisbane',
        content: `<h2>Natural Anxiety Treatment</h2><p>Holistic approach to managing anxiety and stress using natural therapies and lifestyle support.</p>`
    },
    
    // Additional area pages
    { 
        path: '/areas-we-serve/naturopath-new-farm',
        title: 'Naturopath New Farm | Local Natural Health Clinic | NXTLVL Health',
        description: 'Professional naturopath in New Farm. Convenient local clinic offering comprehensive natural health services.',
        keywords: 'naturopath new farm, natural health new farm, naturopathy clinic new farm',
        h1: 'Naturopath New Farm',
        content: `<h2>New Farm Natural Health Clinic</h2><p>Your local naturopath in New Farm providing expert natural health care.</p>`
    },
    
    // Contact and info pages
    { 
        path: '/contact',
        title: 'Contact NXTLVL Health | Book Naturopath Consultation Brisbane',
        description: 'Contact NXTLVL Health to book your naturopath consultation in Brisbane. Phone, email, and online booking available.',
        keywords: 'contact naturopath Brisbane, book naturopath consultation, NXTLVL Health contact',
        h1: 'Contact NXTLVL Health',
        content: `<h2>Get In Touch</h2><p>Ready to start your health journey? Contact us to book your consultation.</p><p><strong>Phone:</strong> (07) 3180 8853</p><p><strong>Email:</strong> info@nxtlvlhealth.com.au</p><p><strong>Address:</strong> Suite 2/665 Brunswick St, New Farm QLD 4005</p>`
    },
    
    { 
        path: '/book-now',
        title: 'Book Naturopath Appointment Brisbane | NXTLVL Health',
        description: 'Book your naturopath appointment in Brisbane. Easy online booking for consultations with expert naturopath Mitch Potts.',
        keywords: 'book naturopath Brisbane, naturopath appointment Brisbane, book consultation',
        h1: 'Book Your Naturopath Appointment',
        content: `<h2>Book Your Consultation</h2><p>Ready to take the next step in your health journey? Book your consultation with Mitch today.</p>`
    },
    
    // Blog pages
    { 
        path: '/blog',
        title: 'Naturopathy Blog | Health Tips & Natural Wellness | NXTLVL Health',
        description: 'Expert naturopathy blog with health tips, natural wellness advice, and insights from Brisbane naturopath Mitch Potts.',
        keywords: 'naturopathy blog, health tips Brisbane, natural wellness blog, gut health blog',
        h1: 'Health & Wellness Blog',
        content: `<h2>Latest Health Insights</h2><p>Stay informed with our latest articles on natural health, wellness tips, and naturopathic insights.</p>`
    }
];

// Create static directory if it doesn't exist
const staticDir = path.join(__dirname, 'public', 'static');
if (!fs.existsSync(staticDir)) {
    fs.mkdirSync(staticDir, { recursive: true });
}

// Generate all static pages
allPages.forEach(page => {
    const html = createStaticPage(
        page.title,
        page.description,
        page.path,
        page.keywords,
        page.h1,
        page.content,
        []
    );
    
    // Create directory structure if needed
    const pagePath = page.path.slice(1); // Remove leading slash
    const fullPath = path.join(staticDir, pagePath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write HTML file
    fs.writeFileSync(path.join(fullPath, 'index.html'), html);
    console.log(`Generated static page: ${page.path}`);
});

console.log(`Generated ${allPages.length} static pages successfully!`);