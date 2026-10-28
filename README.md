# Sai Darshan Tour & Travel — Shirdi, Maharashtra, India

A high-performance, responsive taxi booking and pilgrimage tour website built for **Sai Darshan Tour & Travel, Shirdi, Maharashtra, India**.

- **Live URL:** [https://gautamkadam-01.github.io/Sai-darshan-tour-travel/](https://gautamkadam-01.github.io/Sai-darshan-tour-travel/)
- **Direct Phone:** [+91 74985 10536](tel:+917498510536)
- **WhatsApp Desk:** [https://wa.me/917498510536](https://wa.me/917498510536)
- **Base City:** Shirdi, Maharashtra (Serving Shirdi local, Maharashtra intercity, and pan-India journeys)

---

## 🌟 Key Features

1. **Conversion-Optimized Hero & WhatsApp Enquiry Generator**
   - Instant quotation enquiry form validating customer name, 10-digit mobile number, pickup, destination, journey type, date, passenger count, vehicle choice, and special requirements.
   - Generates neatly formatted, URL-encoded WhatsApp messages opening directly in `https://wa.me/917498510536`.
   - On-screen confirmation modal with clear travel advisory: *enquiry does not constitute an instant confirmed booking until accepted by our travel desk.*

2. **Fleet with Verified Seating & Authentic Model Photography**
   - **Toyota Innova Crysta** (6-7 Seats + Chauffeur, Dual AC, Captain Seats)
   - **Maruti Suzuki Swift Dzire** (4 Seats + Chauffeur, Chilled AC, City Agility)
   - **Hyundai Verna** (4 Seats + Chauffeur, Executive Comfort, Premium Sedan)
   - **Maruti Suzuki Ciaz** (4 Seats + Chauffeur, Class-leading Rear Legroom)
   - **Maruti Suzuki Ertiga** (6 Seats + Chauffeur, Roof-mounted AC, Value MUV)
   - **Tempo Traveller — 17 Seater** (17 Seats + Chauffeur, Reclining Pushback Seats, Heavy-duty AC)
   - **Tempo Traveller — 20 Seater** (20 Seats + Chauffeur, Large Group Pilgrimage Coach)
   - Each card features verified seating capacity, luggage capability, AC specifications, and an *“Enquire for This Vehicle”* action.

3. **11 Specialized Taxi Services**
   - Shirdi Local Cab Service
   - Sai Baba Darshan Travel Assistance (Kakad Aarti 3:30 AM pickups & gate drops)
   - One-Way Taxi (Pay one-side only to Mumbai, Pune, Nashik)
   - Round-Trip Taxi
   - Airport Pickup & Drop (Shirdi SAG Kakadi Airport, Pune PNQ, Mumbai BOM)
   - Railway Station Pickup & Drop (Sainagar Shirdi, Kopargaon KPG, Manmad MMR)
   - Outstation Travel & All-India Pilgrimage Circuits
   - Family & Group Journeys
   - Senior-Citizen Assistance (Gentle driving, step-in assistance, close gate drops)
   - Wheelchair & Mobility-Related Arrangements (Folding wheelchair trunk capacity)
   - Hotel Assistance (Impartial navigation & direct transfers)

4. **10 Dedicated Pages & Working Navigation**
   - **Home** (`/`)
   - **Taxi Services** (`/services`)
   - **Our Fleet** (`/fleet`)
   - **Popular Routes** (`/routes`)
   - **Tour Packages** (`/packages`)
   - **Sai Baba Darshan Guide** (`/darshan-guide`)
   - **Hotel Assistance** (`/hotel-assistance`)
   - **About Us** (`/about`)
   - **Contact Us** (`/contact`)
   - **Privacy Policy** (`/privacy-policy`)

5. **Darshan & Sansthan Integrity**
   - Direct links to official Trust portals: [sai.org.in](https://www.sai.org.in/) and [online.sai.org.in](https://online.sai.org.in/).
   - Clear legal disclaimers distinguishing independent travel assistance from Trust services.
   - Daily Aarti schedule (Kakad, Mangal Snan, Madhyan, Dhoop, Shej Aarti).
   - Guidance on dress codes, mobile prohibitions, and free wheelchair facilities.

6. **SEO & Structured Data**
   - OpenGraph and Twitter card meta tags.
   - Dynamic page titles and meta descriptions.
   - `sitemap.xml` and `robots.txt` in `public/`.
   - `Schema.org` TaxiService JSON-LD structured data.

---

## 🛠️ Tech Stack

- **React 18**
- **Vite 5** (Base path set to `/Sai-darshan-tour-travel/`)
- **React Router (HashRouter)** (Zero 404 errors on GitHub Pages refreshes)
- **Tailwind CSS 3**
- **Lucide React** (Modern, accessible icons)

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/Sai-darshan-tour-travel/` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🚢 GitHub Pages Deployment

The project is pre-configured with:
- Vite base path: `'/Sai-darshan-tour-travel/'`
- GitHub Actions workflow in `.github/workflows/deploy.yml`
- Deployment script via `gh-pages`

### Method A: Automated Deployment via GitHub Actions (Recommended)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Sai Darshan Tour & Travel website"
   git branch -M main
   git remote add origin https://github.com/gautamkadam-01/Sai-darshan-tour-travel.git
   git push -u origin main
   ```
2. In your GitHub repository settings, navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish the website to:
   `https://gautamkadam-01.github.io/Sai-darshan-tour-travel/`

### Method B: Manual Deployment via `gh-pages`
```bash
npm run deploy
```
This builds the site and pushes the contents of `dist` directly to the `gh-pages` branch.
