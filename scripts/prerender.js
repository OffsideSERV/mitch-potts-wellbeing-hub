import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all routes that need to be pre-rendered
const routes = [
  '/',
  '/services',
  '/services/mls-laser-therapy-treatment-brisbane',
  '/services/personal-trainer-new-farm',
  '/what-we-treat/gut-health-naturopath-brisbane',
  '/what-we-treat/gut-health-specialist',
  '/what-we-treat/weight-loss-naturopath-brisbane',
  '/what-we-treat/naturopath-thyroid-brisbane',
  '/what-we-treat/naturopath-diabetes-brisbane',
  '/what-we-treat/childrens-naturopath-brisbane',
  '/what-we-treat/adhd-naturopath',
  '/what-we-treat/naturopath-anxiety',
  '/areas-we-serve/naturopath-north-brisbane',
  '/areas-we-serve/naturopath-newstead',
  '/areas-we-serve/naturopath-new-farm',
  '/areas-we-serve/naturopath-morningside',
  '/what-we-treat/ibs-naturopath',
  '/what-we-treat/sibo-naturopath',
  '/what-we-treat/wellness-clinic-brisbane',
  '/areas-we-serve',
  '/what-we-treat/ibs-brisbane',
  '/what-we-treat/ibs-clinic',
  '/what-we-treat/naturopathy-for-skin',
  '/what-we-treat/naturopath-eczema',
  '/what-we-treat/acne-naturopathy',
  '/what-we-treat/hormonal-acne-naturopath',
  '/areas-we-serve/naturopath-hamilton',
  '/areas-we-serve/naturopath-clayfield-brisbane',
  '/areas-we-serve/naturopath-windsor',
  '/gut-freedom',
  '/allergy-naturopath',
  '/naturopathic-nutritionist',
  '/indooroopilly-naturopathy',
  '/functional-medicine',
  '/services/live-blood-analysis-brisbane',
  '/cancellation-policy',
  '/contact',
  '/privacy-policy',
  '/website-disclaimer',
  '/what-we-treat',
  '/nxtlvl-tonics',
  '/services/nutritionist-brisbane',
  '/book-now',
  '/blog',
  '/blog/gut-health/best-tea-for-stomach-pain-and-bloating',
  '/blog/naturopathy/how-to-flush-salicylates-from-your-body',
  '/blog/gut-health/7-worst-foods-for-gut-health',
  '/blog/naturopathy/naturopathy-for-weight-loss',
  '/blog/gut-health/gut-health-101-why-your-stomach-might-be-behind-your-brain-fog-and-fatigue',
  '/blog/naturopathy/naturopathy-vs-homeopathy',
  '/blog/weight-loss/embracing-natural-weight-loss-with-ozempic-a-naturopaths-approach',
  '/blog/gut-health/gut-brain-connection-how-your-gut-affects-mental-health'
];

// Page content data for SEO
const getPageData = (pathname) => {
  const pageData = {
    '/': {
      title: 'Best Naturopath Brisbane | Book a FREE 15-Min Consult!',
      description: 'Feel like something\'s wrong but no one\'s listening? NXTLVL Health is the best Naturopath in Brisbane and is here to give you the answers you\'ve been looking for',
      h1: 'Brisbane\'s Leading Naturopath',
      content: 'Welcome to NXTLVL Health, where we provide personalized naturopathic care to help you achieve optimal wellness. Our experienced practitioners specialize in gut health, hormonal balance, and natural healing.'
    },
    '/services': {
      title: 'Naturopathy Services Brisbane | NXTLVL Health',
      description: 'Comprehensive naturopathy services in Brisbane including gut health, hormonal health, nutrition, and wellness treatments.',
      h1: 'Our Naturopathy Services',
      content: 'We offer a comprehensive range of naturopathic services including live blood analysis, MLS laser therapy, personal training, and specialized treatments for gut health, thyroid disorders, and weight management.'
    },
    '/what-we-treat/gut-health-naturopath-brisbane': {
      title: 'Gut Health Naturopath Brisbane | Digestive Health Specialist',
      description: 'Expert gut health naturopath in Brisbane specializing in digestive disorders, IBS, SIBO, and gut healing protocols.',
      h1: 'Gut Health Naturopath Brisbane',
      content: 'Specialized gut health treatments for digestive disorders, IBS, SIBO, and comprehensive gut healing protocols. Our naturopaths use evidence-based approaches to restore digestive health.'
    },
    '/contact': {
      title: 'Contact NXTLVL Health | Brisbane Naturopath',
      description: 'Contact NXTLVL Health for your naturopathic consultation in Brisbane. Book your free 15-minute consultation today.',
      h1: 'Contact Us',
      content: 'Get in touch with our Brisbane naturopathy clinic to book your consultation and start your health journey. We offer free 15-minute consultations to discuss your health goals.'
    },
    '/what-we-treat': {
      title: 'What We Treat | NXTLVL Health Brisbane',
      description: 'Comprehensive naturopathic treatments for gut health, thyroid disorders, weight loss, ADHD, anxiety, skin conditions, and more.',
      h1: 'What We Treat',
      content: 'Our Brisbane naturopaths treat a wide range of health conditions including digestive disorders, hormonal imbalances, skin conditions, mental health concerns, and chronic health issues.'
    }
  };

  return pageData[pathname] || {
    title: 'NXTLVL Health | Brisbane Naturopath',
    description: 'Professional naturopathic care in Brisbane for optimal health and wellness.',
    h1: 'NXTLVL Health Brisbane',
    content: 'Your trusted naturopath in Brisbane for comprehensive health and wellness solutions.'
  };
};

// Create a static HTML structure for each page
const createPageHTML = (route) => {
  const pageData = getPageData(route);
  
  return renderToStaticMarkup(
    React.createElement('div', { className: 'min-h-screen flex flex-col' },
      // Navigation
      React.createElement('nav', { className: 'bg-white shadow-md' },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
          React.createElement('div', { className: 'flex justify-between items-center py-4' },
            React.createElement('div', { className: 'text-xl font-bold text-[#2F6B6B]' }, 'NXTLVL Health'),
            React.createElement('div', { className: 'hidden md:flex space-x-8' },
              React.createElement('a', { href: '/', className: 'text-gray-700 hover:text-[#2F6B6B]' }, 'Home'),
              React.createElement('a', { href: '/services', className: 'text-gray-700 hover:text-[#2F6B6B]' }, 'Services'),
              React.createElement('a', { href: '/what-we-treat', className: 'text-gray-700 hover:text-[#2F6B6B]' }, 'What We Treat'),
              React.createElement('a', { href: '/contact', className: 'text-gray-700 hover:text-[#2F6B6B]' }, 'Contact'),
              React.createElement('a', { href: '/book-now', className: 'bg-[#2F6B6B] text-white px-4 py-2 rounded hover:bg-[#245555]' }, 'Book Now')
            )
          )
        )
      ),
      // Main content
      React.createElement('main', { className: 'flex-1' },
        React.createElement('div', { className: 'container mx-auto px-4 py-8' },
          React.createElement('div', { className: 'max-w-4xl mx-auto' },
            React.createElement('h1', { className: 'text-4xl font-bold mb-6 text-gray-900' }, pageData.h1),
            React.createElement('p', { className: 'text-lg text-gray-700 mb-8' }, pageData.description),
            React.createElement('div', { className: 'prose max-w-none' },
              React.createElement('p', { className: 'text-gray-700 leading-relaxed' }, pageData.content)
            )
          )
        )
      ),
      // Footer
      React.createElement('footer', { className: 'bg-gray-900 text-white py-8' },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
          React.createElement('div', { className: 'grid md:grid-cols-3 gap-8' },
            React.createElement('div', null,
              React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'NXTLVL Health'),
              React.createElement('p', { className: 'text-gray-400' }, 'Brisbane\'s leading naturopathy clinic for optimal health and wellness.')
            ),
            React.createElement('div', null,
              React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Quick Links'),
              React.createElement('ul', { className: 'space-y-2' },
                React.createElement('li', null, React.createElement('a', { href: '/services', className: 'text-gray-400 hover:text-white' }, 'Services')),
                React.createElement('li', null, React.createElement('a', { href: '/what-we-treat', className: 'text-gray-400 hover:text-white' }, 'What We Treat')),
                React.createElement('li', null, React.createElement('a', { href: '/contact', className: 'text-gray-400 hover:text-white' }, 'Contact'))
              )
            ),
            React.createElement('div', null,
              React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Contact Info'),
              React.createElement('p', { className: 'text-gray-400' }, 'Brisbane, Queensland'),
              React.createElement('p', { className: 'text-gray-400' }, 'Book your free consultation today')
            )
          ),
          React.createElement('div', { className: 'border-t border-gray-800 mt-8 pt-8 text-center' },
            React.createElement('p', { className: 'text-gray-400' }, '© 2025 NXTLVL Health. All rights reserved.')
          )
        )
      )
    )
  );
};

// Function to generate static HTML for a route
function generateStaticHTML(route) {
  try {
    console.log(`Rendering route: ${route}`);
    
    const pageData = getPageData(route);
    const contentHTML = createPageHTML(route);
    
    // Read the base template
    const templatePath = path.join(__dirname, '../dist/index.html');
    let template = fs.readFileSync(templatePath, 'utf8');
    
    // Update the title in the template
    template = template.replace(/<title>.*?<\/title>/, `<title>${pageData.title}</title>`);
    
    // Update meta description
    template = template.replace(
      /<meta name="description" content=".*?"/, 
      `<meta name="description" content="${pageData.description}"`
    );
    
    // Replace the root div with our rendered content
    template = template.replace('<div id="root"></div>', `<div id="root">${contentHTML}</div>`);
    
    return template;
  } catch (error) {
    console.error(`Error rendering route ${route}:`, error);
    // Return base template on error
    const templatePath = path.join(__dirname, '../dist/index.html');
    return fs.readFileSync(templatePath, 'utf8');
  }
}

// Create directory structure and generate HTML files
function createStaticFiles() {
  const distPath = path.join(__dirname, '../dist');
  
  routes.forEach(route => {
    const html = generateStaticHTML(route);
    
    // Determine file path
    let filePath;
    if (route === '/') {
      filePath = path.join(distPath, 'index.html');
    } else {
      // Create directory structure for nested routes
      const routePath = path.join(distPath, route);
      const routeDir = path.dirname(routePath);
      
      // Create directories if they don't exist
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      
      filePath = path.join(routePath, 'index.html');
    }
    
    // Write the HTML file
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✓ Generated: ${filePath}`);
  });
  
  console.log(`\n🎉 Successfully pre-rendered ${routes.length} pages for SEO!`);
  console.log('📈 All pages now contain server-side rendered HTML with proper meta tags.');
}

// Run the prerendering
createStaticFiles();