# RainFocus UI Assignment

A responsive single-page application built with **React**, **TypeScript**, **Vite**, and **SCSS (SASS)**.  
The UI is implemented based on a provided Figma design with full responsiveness from desktop down to 320px.

No UI frameworks (Tailwind, Bootstrap, etc.) were used. All styling is written from scratch using SCSS.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

---

## 📦 Install Dependencies

```bash
npm install


## 🧪 Run in Development Mode
npm run dev

App runs at:
http://localhost:5173


## 🏗️ Build for Production
npm run build

This generates a /dist folder containing the production-ready static build.


## 👀 Preview Production Build
Option 1 (Recommended - Vite Preview)
npm run preview

Then open:
http://localhost:4173



## 📁 Project Structure
src/
  components/      # UI components (Sidebar, Header, Cards, Navigation)
  hooks/           # Custom hooks (breakpoints, window width)
  constants/       # Shared constants (navigation, breakpoints)
  utils/           # Helper utilities (className merging, etc.)
  styles/          # SCSS stylesheets
  assets/          # Icons and images exported from Figma


## 📱 Responsive Behavior

The application is fully responsive:

Desktop (≥1024px) → Persistent sidebar navigation
Tablet (768–1023px) → Collapsible drawer navigation
Mobile (320-768px) → Bottom navigation + drawer menu

Breakpoints are shared between:

React hooks (useBreakpoints)
SCSS media queries


##  🧠 Key Implementation Details
Component-based architecture for scalability
SCSS used instead of UI frameworks (as required)
Navigation state managed at the App level
Responsive behavior handled via custom breakpoint hook
SVG icons used for crisp scaling
BEM-style SCSS naming convention for maintainability


##  ♿ Accessibility
Semantic HTML (header, main, nav, aside)
aria-label applied to navigation elements
aria-current used for active navigation state
Icon-only buttons marked with aria-hidden
Fully keyboard-accessible controls


##  📦 Production Output Requirement
After running:
npm run build

The /dist folder:
    Is fully static
    Requires no build step to run
    Can be opened or served directly
    Is ready for deployment


##  👤 Submission Notes
Source code included (src/)
Production build included (dist/)
node_modules excluded
Project runs without additional setup
Ready for unzip → open → review


## Summary
This project demonstrates:
    Pixel-accurate Figma implementation
    Responsive UI across all breakpoints
    Clean, scalable component architecture
    SCSS-based styling without frameworks
    Maintainable frontend structure suitable for production
