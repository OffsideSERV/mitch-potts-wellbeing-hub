import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes that need to be pre-rendered
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
  '/blog/gut-health/gut-brain-connection-how-your-gut-affects-mental-health',
  '/sitemap.xml',
  '/robots.txt'
];

const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

// Read the main index.html file
const indexContent = fs.readFileSync(indexPath, 'utf-8');

// Generate HTML files for each route
routes.forEach(route => {
  if (route === '/') return; // Skip root as it's already index.html
  
  const routePath = path.join(distDir, route);
  const htmlPath = path.join(routePath, 'index.html');
  
  // Create directory if it doesn't exist
  fs.mkdirSync(routePath, { recursive: true });
  
  // Copy index.html to each route
  fs.writeFileSync(htmlPath, indexContent);
  
  console.log(`Generated: ${htmlPath}`);
});

// Copy robots.txt and sitemap.xml to root
const publicDir = path.resolve(__dirname, '../public');
const robotsPath = path.join(publicDir, 'robots.txt');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

if (fs.existsSync(robotsPath)) {
  fs.copyFileSync(robotsPath, path.join(distDir, 'robots.txt'));
  console.log('Copied robots.txt');
}

if (fs.existsSync(sitemapPath)) {
  fs.copyFileSync(sitemapPath, path.join(distDir, 'sitemap.xml'));
  console.log('Copied sitemap.xml');
}

console.log('Static site generation complete!');