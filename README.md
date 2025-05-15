# Interactive Design Portfolio with Next.js, TypeScript, and Tailwind CSS

A responsive and animated portfolio website that showcases professional work through an elegant, user-friendly interface. Built with Next.js 13+, TypeScript, and Tailwind CSS, featuring smooth animations and dark mode support.

![Portfolio Demo](/public/portfolio-demo.gif)

This project implements a modern web application architecture with server-side rendering capabilities and a component-based structure. It features a responsive design system with customizable themes, animated UI components using Framer Motion, and a comprehensive styling system powered by Tailwind CSS with custom configuration.

## Repository Structure

```bash
.
├── src/                          
│   ├── app/                      
│   │   ├── api/                 
│   │   ├── globals.css          
│   │   ├── layout.tsx           
│   │   └── page.tsx             
│   ├── components/              
│   │   ├── ui/                  
│   │   └── [component].tsx      
│   └── lib/                     
├── public/                      
├── components.json              
├── next.config.ts              
├── tailwind.config.ts          
└── tsconfig.json               
```

## Usage Instructions

### Prerequisites

- Node.js 16.x or later
- npm or yarn package manager
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd <repository-name>

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

### Quick Start

1. Configure your environment:

```bash
# Create a .env.local file
cp .env.example .env.local
```

1. Update content:
Edit `src/app/page.tsx` to modify the main content sections:

```typescript
// Example: Modifying the hero section
<section className="relative h-screen">
  <h1>Your Custom Title</h1>
  <p>Your custom description</p>
</section>
```

1. Customize theme:
Edit `src/app/globals.css` to modify theme variables:

```css
:root {
  --primary: your-color;
  --secondary: your-color;
}
```

### More Detailed Examples

1. Adding a new portfolio item:

```typescript
<PortfolioItem
  title="Project Name"
  category="Category"
  imageSrc="/images/project.jpg"
  delay={0.2}
/>
```

1. Creating a new service card:

```typescript
<ServiceCard
  title="Service Name"
  description="Service description"
  icon="IconName"
  delay={0.2}
/>
```

### Troubleshooting

1. Build Errors

- Issue: TypeScript compilation errors

  ```bash
  # Check TypeScript configuration
  npx tsc --noEmit
  ```

- Solution: Ensure all required types are properly imported and defined

1. Styling Issues

- Issue: Tailwind classes not applying

  ```bash
  # Rebuild Tailwind CSS
  npm run build:css
  ```

- Solution: Check Tailwind configuration and class names

## Data Flow

The application follows a component-based architecture with data flowing from parent to child components through props.

```ascii
[Page Component] → [Section Components] → [UI Components]
     ↓                    ↓                     ↓
[State/Props] → [Component Logic] → [Rendered Output]
```

Component Interactions:

- Page components manage the overall layout and section organization
- Section components handle specific content areas and animations
- UI components provide reusable interface elements
- Theme provider manages application-wide styling
- Framer Motion handles animations and transitions
- Tailwind CSS provides responsive styling and theme support
