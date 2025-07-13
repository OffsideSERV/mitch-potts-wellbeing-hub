import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting build with pre-rendering...\n');

try {
  // Step 1: Run the regular Vite build
  console.log('📦 Building application with Vite...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Step 2: Run the pre-rendering script
  console.log('\n🎨 Pre-rendering pages for SEO...');
  execSync('node scripts/prerender.js', { stdio: 'inherit' });
  
  console.log('\n✅ Build complete with pre-rendered pages!');
  console.log('🌟 Your site is now SEO-friendly and ready for deployment!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}