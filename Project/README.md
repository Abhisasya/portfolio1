# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark/light mode toggle
- Separate sections for showcasing different aspects of your resume
- Smooth scrolling and animations
- Contact form
- Project showcase with details
- Skills visualization

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Deployment

### Deploying to GitHub Pages

1. Update the `vite.config.ts` file to include your repository name:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
  // ...
})
```

2. Create a GitHub repository and push your code.

3. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

4. Add these scripts to your package.json:
```json
"scripts": {
  // ...other scripts
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

5. Deploy your website:
```bash
npm run deploy
```

6. Configure GitHub Pages in your repository settings to use the `gh-pages` branch.

## Customization

- Replace placeholder content in the components with your own information
- Update the profile image in `Hero.tsx`
- Add your actual resume PDF in the public folder
- Customize colors in the Tailwind configuration
- Update social media links

## License

This project is licensed under the MIT License - see the LICENSE file for details.