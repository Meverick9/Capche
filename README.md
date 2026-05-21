# Captivate Live 4.4 - Features Catalog & Training Guide

Interactive catalog of Captivate Live EDC system features with step-by-step training instructions for clinical research professionals.

## Features

- **Complete Feature Catalog** - All Captivate Live 4.4 features organized by category
- **Step-by-Step Guides** - Detailed instructions with prerequisites, steps, and pro tips
- **User Roles Reference** - Permissions and access levels for each role
- **Status Reference** - CRF and Event status indicators with descriptions
- **Quick Start Guide** - Role-based getting started instructions
- **Search & Filter** - Find features instantly
- **Responsive Design** - Works on desktop, tablet, and mobile

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Static Export (for Vercel deployment)

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to project directory**
   ```bash
   cd captivate-live-features
   ```

4. **Deploy**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Git Integration

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/captivate-live-features.git
   git push -u origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Framework preset: Next.js
   - Click "Deploy"

### Option 3: Manual Build & Deploy

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build static export**
   ```bash
   npm run build
   ```

3. **Deploy `dist` folder**
   - The `dist` folder contains static files ready for hosting
   - Upload to any static hosting service

## Project Structure

```
captivate-live-features/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page with all features
├── lib/
│   └── data.ts          # Feature catalog data
├── public/              # Static assets
├── package.json
├── next.config.js       # Static export config
├── tailwind.config.ts
└── tsconfig.json
```

## Data Structure

The feature catalog is defined in `lib/data.ts` with the following structure:

- **Platform Info** - Name, version, developer
- **Sections** - Feature categories (Getting Started, Subject Management, Data Entry, etc.)
- **Features** - Individual features with steps, tips, roles
- **User Roles** - Role definitions with permissions
- **CRF Statuses** - Status indicators and descriptions
- **Event Statuses** - Event status indicators

## Customization

To add new features or modify existing ones:

1. Open `lib/data.ts`
2. Add/modify sections in the `featuresCatalog` object
3. Rebuild and redeploy

## Browser Support

- Chrome 30+
- Firefox 65+
- Safari 6+
- Microsoft Edge

## License

Internal use for Captivate Live training purposes.
