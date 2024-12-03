# Safety Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase safety consulting expertise and professional certifications.

## Features

- 🏠 Modern Hero Section
- 👨‍💼 Professional About Section
- 🛠️ Comprehensive Services Overview
- 📜 Certifications Showcase
- 📁 Projects Portfolio
- 📞 Contact Form with EmailJS
- 📊 Statistics Section
- 📱 Fully Responsive Design
- ⚡ Fast Loading with Lazy Components
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- EmailJS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/safety-portfolio.git
cd safety-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

### Deploying to Netlify

1. Create a new site on Netlify
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` directory to your web host

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
project/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   └── certifications/
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Stats.tsx
│   ├── pages/
│   │   ├── ServicesPage.tsx
│   │   └── CertificationsPage.tsx
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

## Customization

1. Update content in component files
2. Modify styles in `index.css`
3. Replace images in `public/images/`
4. Update contact information in `Contact.tsx`

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Toqeer Shafique
- Email: iamtoqeer74@gmail.com
- WhatsApp: +92 344 0106404
