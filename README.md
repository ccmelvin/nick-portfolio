# Modern Portfolio Website with Next.js, TypeScript, and Tailwind CSS

A responsive and animated portfolio website built with Next.js 13+, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a modern design system for showcasing creative work and services.

This project combines modern web technologies to create a performant and visually appealing portfolio website. It features smooth scroll animations powered by Framer Motion, a responsive design system using Tailwind CSS, and type-safe development with TypeScript. The website includes sections for showcasing work, services, testimonials, and a contact form, all built with reusable components.

## Repository Structure
```
.
├── src/                          # Source code directory
│   ├── app/                     # Next.js app directory containing routes and layouts
│   │   ├── globals.css         # Global styles and theme configuration
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx          # Main page component with sections
│   ├── components/            # Reusable React components
│   │   ├── ui/              # Base UI components (buttons, inputs, etc.)
│   │   └── [component].tsx  # Feature components (navbar, forms, cards)
│   └── lib/                  # Utility functions and shared code
├── public/                    # Static assets directory
├── components.json           # UI components configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## Usage Instructions
### Prerequisites
- Node.js 16.8.0 or later
- npm or yarn package manager
- Basic knowledge of React and TypeScript

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

1. Configure your portfolio content:
```typescript
// src/app/page.tsx
export default function Home() {
  return (
    <main>
      {/* Customize your sections here */}
      <section id="hero">
        <h1>Your Name</h1>
        <p>Your tagline</p>
      </section>
    </main>
  );
}
```

2. Add your own theme colors:
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: "your-color",
        // Add more custom colors
      }
    }
  }
}
```

### More Detailed Examples

1. Creating a new portfolio item:
```typescript
// src/components/portfolio-item.tsx
<PortfolioItem
  title="Project Name"
  category="Category"
  imageSrc="/path/to/image.jpg"
  delay={0.2}
/>
```

2. Adding a new service:
```typescript
// src/app/page.tsx
<ServiceCard
  title="Service Name"
  description="Service description"
  icon="IconName"
  delay={0.2}
/>
```

### Troubleshooting

Common issues and solutions:

1. Images not loading
- Ensure images are placed in the `public` directory
- Check image paths are relative to the public directory
- Verify image formats are supported (jpg, png, webp)

2. Animations not working
- Check if Framer Motion is properly installed
- Verify motion components are properly configured
- Enable JavaScript in the browser

3. Styling issues
- Run `npm run build` to verify Tailwind classes are generated
- Check for conflicting CSS classes
- Verify theme configuration in `tailwind.config.ts`

## Data Flow

The website follows a component-based architecture with data flowing from parent to child components through props.

```ascii
Layout (layout.tsx)
    │
    ├── Navbar
    │
    ├── Page Content (page.tsx)
    │   ├── Hero Section
    │   ├── About Section
    │   ├── Services Section
    │   ├── Portfolio Section
    │   ├── Testimonials Section
    │   └── Contact Section
    │
    └── Footer
```

Component interactions:
- Layout component provides the base structure and theme context
- Page components render section content and handle animations
- UI components handle user interactions and form submissions
- Theme provider manages light/dark mode transitions
- Utility functions handle class name merging and animations