# Pendo Connect Kenya

Location-based online dating platform for people in Kenya. Connect with nearby users using GPS, county filters, profiles, swipe matching, and chat.

## Core Idea
Users create profiles with photos, bio, interests, age, tribe, religion, etc. The app uses GPS to find people nearby. Mutual likes create matches. Chat in real-time. Localized for Kenya (counties, M-Pesa ready, Sheng vibes).

## Features
1. User registration / login (Netlify Identity or Supabase Auth)
2. Profile setup (photos, bio, interests, location, preferences)
3. GPS / location tracking & nearby matching
4. Matching algorithm (mutual likes + distance + filters)
5. Real-time chat
6. Photo uploads
7. Notifications
8. Safety / report system
9. Premium / M-Pesa (optional)

## Tech Stack
- **Frontend**: Next.js (App Router) + Tailwind CSS
- **Auth**: Supabase Auth (recommended) or Netlify Identity
- **Database**: Supabase (Postgres + Realtime + Storage) or Netlify Database
- **Hosting**: Netlify + GitHub
- **Location**: Browser Geolocation API + Haversine

## Localization for Kenya
- Counties: Nairobi, Mombasa, Kisumu, Kiambu, Nakuru, Eldoret, etc.
- M-Pesa payments for premium
- Sheng language support
- Modes: Student, Professional, Church / Faith-based

## Getting Started
1. Clone this repo
2. `npm install`
3. Create a Supabase project and add env vars
4. `netlify dev` or deploy to Netlify

## Deployment
Connect this GitHub repo to a new Netlify site. Set environment variables for Supabase.

Built for Kenyans looking to connect locally.
