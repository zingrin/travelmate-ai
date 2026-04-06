# TravelMate AI — Full-Featured Travel Booking App

## Phase 1: Foundation & Landing Page

### Design System

- 3 primary colors: Deep Blue (primary), Coral/Orange (accent), Teal (secondary)
- Dark/Light mode with smooth toggle
- Consistent card radius, spacing, typography

### Sticky Navbar

- Logo + routes: Home, Explore, About, Blog, Contact
- Auth state toggles routes to: Dashboard, My Trips, Wishlist, Profile
- Profile dropdown menu, mobile hamburger menu

### Home Page (10 sections)

1. **Hero** (60-70vh): Background image slider, search bar (destination), CTA "Explore Now"
2. **Popular Destinations**: Grid of destination cards with images
3. **Travel Categories**: Beach, Mountain, City, Adventure, Cultural, etc.
4. **Featured Packages**: Horizontal scroll of trip cards
5. **Why Choose Us**: Icon features grid
6. **Statistics**: Animated counters (10K+ trips, 50K+ users, etc.)
7. **Testimonials**: Carousel with user reviews
8. **Travel Blog**: Latest blog post cards
9. **FAQ**: Accordion component
10. **Newsletter + CTA Section**: Email signup + final call-to-action

### Footer

- Links, social icons, contact info

---

## Phase 2: Explore & Trip Details

### Explore/Listings Page

- Search bar for destinations
- Filters sidebar: Price range, location, rating
- Sort: Price (low/high), Rating, Newest
- Pagination with skeleton loaders
- Trip cards: Image, title, description, price, rating, location, "View Details"

### Trip Details Page

- Hero image gallery
- Full description, price, duration, location
- Reviews & ratings section
- "Book Now" button
- Related trips grid

---

## Phase 3: Authentication & User System (Lovable Cloud)

### Auth Pages

- Login & Register with form validation
- Demo login button (user@example.com / 123456, admin@example.com / 123456)
- Google social login

### Database Schema

- Users (via Lovable Cloud auth)
- Trips table (title, description, price, location, rating, duration, images, category)
- Bookings table (user_id, trip_id, status, date)
- Reviews table (user_id, trip_id, rating, comment)
- Wishlists table (user_id, trip_id)
- User roles table (admin/user)

---

## Phase 4: Dashboards

### User Dashboard

- My Profile (editable)
- My Bookings (with status)
- My Reviews
- My Wishlist

### Admin Dashboard

- Manage Users (data table with filters)
- Manage Trips (CRUD)
- Manage Bookings (approve/reject)
- Analytics: Charts (bar, line, pie) for bookings, revenue, users
- Settings

---

## Phase 5: AI Chatbot

### AI Travel Assistant

- Floating chat widget (bottom-right)
- Powered by Lovable AI (Gemini)
- Users ask travel questions: "Suggest budget trips in Asia", "Best winter destinations in Bangladesh"
- Streaming responses with markdown rendering
- Conversation history within session
- Edge function backend for AI calls

---

## Phase 6: Additional Pages & Polish

### Static Pages

- About page with team info
- Contact page with form
- Blog page with article listings + individual post pages
- Privacy Policy

### Bonus Features

- Wishlist toggle (heart icon on cards)
- Booking confirmation modal
- Map integration with React Leaflet on trip details
- Fully responsive across mobile, tablet, desktop

---

## Data

All trip/destination data will be realistic (not lorem ipsum) — real destination names, descriptions, and placeholder travel images.
