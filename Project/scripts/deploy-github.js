// Simple script to deploy to GitHub Pages

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Check if the dist directory exists
if (!fs.existsSync(path.join(__dirname, '../dist'))) {
  console.log('Building the project first...');
  execSync('npm run build', { stdio: 'inherit' });
}

console.log('Deploying to GitHub Pages...');

try {
  // Create or ensure .nojekyll file exists (prevents GitHub from ignoring files that begin with an underscore)
  fs.writeFileSync(path.join(__dirname, '../dist/.nojekyll'), '');
  
  // Deploy using gh-pages
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });
  
  console.log('Successfully deployed to GitHub Pages!');
} catch (error) {
  console.error('Deployment failed:', error);
  process.exit(1);
}