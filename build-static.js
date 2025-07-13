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
        .hero { background: linear-gradient(135deg, rgba(0, 102, 204, 0.1), rgba(0, 82, 163, 0.1)); padding: 80px 0; }
        .section { padding: 60px 0; }
        .section-muted { background: rgba(0, 0, 0, 0.02); }
        .card { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
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

// Define all pages and their content
const pages = [
    {
        path: '/services',
        title: 'Naturopathy Services Brisbane | NXTLVL Health',
        description: 'Comprehensive naturopathy services in Brisbane including nutritional medicine, live blood analysis, MLS laser therapy, and personal training.',
        keywords: 'naturopathy services Brisbane, nutritional medicine, live blood analysis, MLS laser therapy, personal training Brisbane',
        h1: 'Natural Health Services in Brisbane',
        content: `
            <h2>Our Comprehensive Naturopathy Services</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin: 32px 0;">
                <div class="card">
                    <h3>🌿 Naturopathy</h3>
                    <p>Holistic health solutions addressing chronic fatigue, gut health, hormonal imbalances, and more using natural therapies.</p>
                </div>
                <div class="card">
                    <h3>🥗 Nutritional Medicine</h3>
                    <p>Personalized nutrition plans based on your unique needs and health goals. No fad diets, just evidence-based nutrition.</p>
                </div>
                <div class="card">
                    <h3>🔬 Live Blood Analysis</h3>
                    <p>Advanced diagnostic tool revealing inflammation, nutrient deficiencies, and gut health issues from a single drop of blood.</p>
                </div>
                <div class="card">
                    <h3>⚡ MLS Laser Therapy</h3>
                    <p>Drug-free pain relief and injury recovery using cutting-edge laser technology for chronic pain and mobility issues.</p>
                </div>
                <div class="card">
                    <h3>🎯 Personal Training</h3>
                    <p>Customized fitness programs designed to support your health goals and complement your naturopathic treatment.</p>
                </div>
                <div class="card">
                    <h3>🧪 Functional Testing</h3>
                    <p>Comprehensive testing to uncover the root causes of your health concerns including hormones, gut function, and immune markers.</p>
                </div>
            </div>
        `,
        breadcrumbs: [
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' }
        ]
    },
    {
        path: '/what-we-treat/gut-health-naturopath-brisbane',
        title: 'Gut Health Naturopath Brisbane | NXTLVL Health',
        description: 'Expert gut health naturopath in Brisbane specializing in IBS, SIBO, bloating, and digestive disorders. Natural solutions for lasting gut health.',
        keywords: 'gut health naturopath Brisbane, IBS treatment, SIBO naturopath, digestive health Brisbane, bloating treatment',
        h1: 'Gut Health Naturopath Brisbane',
        content: `
            <div style="max-width: 800px; margin: 0 auto;">
                <h2>Expert Gut Health Treatment in Brisbane</h2>
                <p style="font-size: 1.125rem; margin-bottom: 2rem;">
                    Are you struggling with bloating, gas, IBS, or other digestive issues? Our specialized gut health naturopathy approach gets to the root cause of your digestive problems.
                </p>
                
                <h3>Conditions We Treat</h3>
                <ul style="margin: 1.5rem 0; list-style-position: inside;">
                    <li><strong>IBS (Irritable Bowel Syndrome)</strong> - Comprehensive natural treatment protocols</li>
                    <li><strong>SIBO (Small Intestinal Bacterial Overgrowth)</strong> - Specialized testing and treatment</li>
                    <li><strong>Chronic Bloating</strong> - Identify and eliminate triggers</li>
                    <li><strong>Food Intolerances</strong> - Proper testing and dietary guidance</li>
                    <li><strong>Acid Reflux/GERD</strong> - Natural healing approaches</li>
                    <li><strong>Inflammatory Bowel Conditions</strong> - Supportive natural therapies</li>
                </ul>

                <h3>Our Approach</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 2rem 0;">
                    <div class="card">
                        <h4>1. Comprehensive Testing</h4>
                        <p>Live blood analysis and functional testing to identify gut imbalances, inflammation, and nutrient deficiencies.</p>
                    </div>
                    <div class="card">
                        <h4>2. Personalized Treatment</h4>
                        <p>Custom herbal medicine, nutritional supplements, and dietary protocols based on your specific condition.</p>
                    </div>
                    <div class="card">
                        <h4>3. Long-term Support</h4>
                        <p>Ongoing monitoring and adjustments to ensure lasting gut health improvements.</p>
                    </div>
                </div>

                <h3>Why Choose NXTLVL Health for Gut Health?</h3>
                <ul style="margin: 1.5rem 0; list-style-position: inside;">
                    <li>Specialized expertise in complex digestive disorders</li>
                    <li>Advanced diagnostic tools including live blood analysis</li>
                    <li>Evidence-based natural treatment protocols</li>
                    <li>Personalized care plans for lasting results</li>
                    <li>90% of patients see improvement within 6 weeks</li>
                </ul>
            </div>
        `,
        breadcrumbs: [
            { name: 'Home', href: '/' },
            { name: 'What We Treat', href: '/what-we-treat' },
            { name: 'Gut Health', href: '/what-we-treat/gut-health-naturopath-brisbane' }
        ]
    },
    {
        path: '/areas-we-serve/naturopath-north-brisbane',
        title: 'Naturopath North Brisbane | NXTLVL Health',
        description: 'Trusted naturopath serving North Brisbane areas. Expert natural health solutions for gut health, weight loss, hormonal balance, and more.',
        keywords: 'naturopath north brisbane, natural health north brisbane, holistic health, naturopathy services',
        h1: 'Naturopath North Brisbane',
        content: `
            <div style="max-width: 800px; margin: 0 auto;">
                <h2>Trusted Naturopath Serving North Brisbane</h2>
                <p style="font-size: 1.125rem; margin-bottom: 2rem;">
                    NXTLVL Health proudly serves the North Brisbane community with expert naturopathic care. Located in New Farm, we're easily accessible to residents across North Brisbane seeking natural health solutions.
                </p>
                
                <h3>Areas We Serve in North Brisbane</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 2rem 0;">
                    <div>• Newstead</div>
                    <div>• New Farm</div>
                    <div>• Fortitude Valley</div>
                    <div>• Bowen Hills</div>
                    <div>• Herston</div>
                    <div>• Kelvin Grove</div>
                    <div>• Red Hill</div>
                    <div>• Paddington</div>
                    <div>• Milton</div>
                    <div>• Auchenflower</div>
                </div>

                <h3>Why North Brisbane Residents Choose NXTLVL Health</h3>
                <ul style="margin: 1.5rem 0; list-style-position: inside;">
                    <li><strong>Convenient Location</strong> - Easy access from all North Brisbane suburbs</li>
                    <li><strong>Expert Care</strong> - Mitch Potts brings years of naturopathic expertise</li>
                    <li><strong>Comprehensive Services</strong> - From gut health to hormonal balance</li>
                    <li><strong>Real Results</strong> - 90% of patients see improvement in 6 weeks</li>
                    <li><strong>Personalized Approach</strong> - Every treatment plan is tailored to you</li>
                </ul>

                <h3>Popular Services for North Brisbane Residents</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 2rem 0;">
                    <div class="card">
                        <h4>Gut Health</h4>
                        <p>IBS, SIBO, bloating, and digestive disorder treatment</p>
                    </div>
                    <div class="card">
                        <h4>Weight Management</h4>
                        <p>Natural weight loss support and metabolic health</p>
                    </div>
                    <div class="card">
                        <h4>Hormonal Health</h4>
                        <p>Thyroid, PCOS, menopause, and hormonal balance</p>
                    </div>
                    <div class="card">
                        <h4>Mental Wellbeing</h4>
                        <p>Anxiety, stress management, and ADHD support</p>
                    </div>
                </div>

                <div class="card" style="background: #f8f9fa; margin: 2rem 0;">
                    <h3>Visit Our New Farm Clinic</h3>
                    <p><strong>Address:</strong> Suite 2/665 Brunswick St, New Farm QLD 4005</p>
                    <p><strong>Phone:</strong> (07) 3180 8853</p>
                    <p><strong>Parking:</strong> Street parking available on Brunswick Street</p>
                    <p><strong>Public Transport:</strong> Easy bus access along Brunswick Street</p>
                </div>
            </div>
        `,
        breadcrumbs: [
            { name: 'Home', href: '/' },
            { name: 'Areas We Serve', href: '/areas-we-serve' },
            { name: 'North Brisbane', href: '/areas-we-serve/naturopath-north-brisbane' }
        ]
    }
];

// Create static directory if it doesn't exist
const staticDir = path.join(__dirname, 'public', 'static');
if (!fs.existsSync(staticDir)) {
    fs.mkdirSync(staticDir, { recursive: true });
}

// Generate all static pages
pages.forEach(page => {
    const html = createStaticPage(
        page.title,
        page.description,
        page.path,
        page.keywords,
        page.h1,
        page.content,
        page.breadcrumbs
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

console.log('Static pages generated successfully!');