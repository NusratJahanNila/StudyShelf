StudyShelf - A Curated Digital Study Resources Platform
📚 Project Description
StudyShelf is a modern, responsive web application built with Next.js 15 (App Router) that serves as a curated digital library of study resources for students and developers. The platform showcases various learning materials such as interview question packs, cheat sheets, roadmaps, notes, and mini guides in a clean, professional interface.

Live Demo: https://study-shelf-chi.vercel.app/

🚀 Setup & Installation Instructions
Prerequisites
Node.js 18.x or higher

npm or yarn package manager

Installation Steps
Clone the repository

bash
git clone [your-repository-url]
cd studyshelf
Install dependencies

bash
npm install
# or
yarn install
# or
pnpm install
Set up environment variables (Optional)
Create a .env.local file in the root directory:

env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
Run the development server

bash
npm run dev
# or
yarn dev
# or
pnpm dev
Open your browser
Navigate to http://localhost:3000

Build for Production
bash
npm run build
npm start
🗺️ Route Summary
Public Routes (No Authentication Required)
/ - Home/Landing page with 7 sections

/resources - Browse all study resources

/resources/[id] - View detailed resource information

/login - User authentication page

Protected Routes (Requires Authentication)
/dashboard - Admin dashboard

/dashboard/add-resource - Form to add new resources (Admin only)

Authentication
Mock authentication using cookies

Hardcoded credentials (for demo):

Email: admin@studyshelf.com

Password: 123456

✅ Implemented Features
1. Landing Page Components
✅ Modern Navbar with logo, navigation links, and auth status

✅ Hero section with call-to-action buttons

✅ Categories showcase with interactive carousel (9 categories)

✅ "How It Works" section with step-by-step guide

✅ "Who It's For" section targeting different user personas

✅ Benefits section with visual cards

✅ Featured Resources showcase

✅ Call-to-Action section with statistics

✅ Professional Footer with links and newsletter

2. Authentication System
✅ Mock login with hardcoded credentials

✅ Cookie-based session management

✅ Protected route handling

✅ Dynamic login/logout button in Navbar

✅ Real-time auth state updates without page reload

3. Resource Management
✅ Resource listing page with grid layout

✅ Individual resource detail pages

✅ Modern Resource Card components

✅ Featured Resources section

✅ Responsive image handling with Next.js Image

✅ Loading states with skeleton loaders

✅ 404 page for missing resources

4. Admin Dashboard
✅ Protected dashboard layout

✅ Collapsible sidebar navigation

✅ Add Resource form with validation

✅ Form submission with success feedback

✅ Image upload preview functionality

✅ Tags management system

5. UI/UX Features
✅ Fully responsive design (mobile, tablet, desktop)

✅ Consistent color scheme:

Primary: #0A5C36 (Green)

Accent: #ff7400 (Orange)

Background: White with gray accents

✅ Smooth animations and hover effects

✅ Loading spinners and skeleton loaders

✅ Toast notifications for user actions

✅ Interactive carousels with auto-play

✅ Professional typography and spacing

6. Technical Implementation
✅ Next.js 15 with App Router

✅ Client/Server component architecture

✅ Static data fetching from JSON files

✅ Image optimization with Next.js Image

✅ Tailwind CSS for styling

✅ Lucide React icons

✅ Custom hook-free state management

✅ Error boundaries and loading states

📋 Feature Explanations
Mock Authentication
The app uses a simple cookie-based authentication system for demonstration purposes. On successful login, a cookie is set and all protected routes check for this cookie. The auth state is synchronized across components using a custom event system.

Resource Display System
Resources are loaded from a static JSON file (/public/data/resources.json) and displayed using reusable card components. Each resource shows essential information with consistent sizing, and detailed pages show comprehensive information.

Responsive Design
The application uses Tailwind CSS utility classes to ensure perfect responsiveness across all devices. Mobile navigation is handled through a bottom navigation bar, while desktop uses a sidebar.

Interactive Components
Carousel: Shows categories in an auto-rotating, swipeable carousel

Hover Effects: All cards and buttons have smooth hover transitions

Form Validation: Add resource form includes client-side validation

Loading States: Skeleton loaders prevent layout shift during data fetching

Performance Optimizations
Next.js Image component for optimized images

Static generation for resource pages

Code splitting via Next.js App Router

Minimal dependencies for faster loading

Developer Experience
Clean, organized component structure

Type-safe development (though using JSX)

Consistent coding patterns

Comprehensive error handling

Easy to extend and modify

Technologies Used
----
Framework: Next.js 15 (App Router)

Styling: Tailwind CSS

Icons: Lucide React

Images: Next.js Image Optimization

Carousel: react-responsive-carousel

Notifications: SweetAlert2

Deployment: Vercel (optimized)

🔮 Future Enhancements
User registration system

Search and filter functionality

Resource ratings and reviews

User profiles and bookmarks

Real database integration

Payment integration for premium resources

Dark mode support

PWA capabilities