# سقفینو (Saghfinoo)

A modern Persian real-estate web application for browsing, filtering, and listing properties for **buy** and **rent** in Tehran. Built as a fully **frontend-only** React app with static data, interactive maps, and a multi-step ad submission flow.

**Live demo:** [saghfinoo.vercel.app](https://saghfinoo.vercel.app/)

---

## Overview

Saghfinoo (سقفینو — *a roof for everyone*) helps users discover homes for sale or rent, explore listings on a Leaflet map, view full property details, save favorites, download listing info, and submit new ads — all without a backend server.

The UI is **RTL (right-to-left)** and fully localized in **Persian (Farsi)**.

---

## Features

### Property listings
- **Buy** (`/buy-house`) and **Rent** (`/rent-house`) pages with shared filter system
- Client-side filtering by rooms, parking, bathroom, elevator, floor, HVAC, floor material, and city
- Sort by newest / oldest
- Infinite scroll pagination (6 items per page)
- Property cards with price, city, image, and link to details

### Interactive maps
- **Leaflet + OpenStreetMap** tiles with real Tehran coordinates per listing
- Buy/rent pages show filtered markers on a side map (desktop)
- Click a marker → navigate to property details
- Popup with image, price, and quick link
- Property detail page includes a location map
- Standalone full-screen map at `/map`

### Property details
- Full specs: rooms, floor, parking, bathroom, warehouse, elevator, heating/cooling, floor material
- Download property info as a `.txt` file
- Save to favorites (stored in `sessionStorage`)
- Related listings swiper

### Home page
- Hero search box (buy / rent + city filter)
- Live stats from property data
- Featured listings with buy/rent tabs
- Property type cards with real counts
- Counseling, news, and footer sections

### Ad submission (3-step wizard)
1. **`/ad-region`** — Title, description, type, price, city, and **map location picker**
2. **`/ad-price`** — Rooms and floor
3. **`/ad-filter`** — Parking, bathroom, elevator, HVAC, materials → submit

Submitted ads are saved to `localStorage` and appear in listings immediately. After submit, user is redirected to the home page.

### Auth & favorites (simulated)
- Login modal with phone/password (mock — no real API)
- Favorites toggled via `sessionStorage` (cleared when tab closes)
- User-submitted ads persisted in `localStorage`

### Responsive design
- Mobile hamburger sidebar with navigation
- Mobile logo links to home
- Scrollable ad forms on small screens
- Full-page background on ad steps (mobile)

---

## Tech stack

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS |
| Routing | React Router v6 |
| State | Redux Toolkit |
| Forms | React Hook Form |
| Maps | Leaflet + React Leaflet |
| Carousel | Swiper |
| Notifications | React Hot Toast |
| Icons | React Icons |

---

## Getting started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone <repository-url>
cd Saghfinoo-front
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Production build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

> **Note:** No `.env` file or backend server is required. All property data is served from static files and browser storage.

---

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing page with search, stats, featured listings |
| `/buy-house` | Buy | Properties for sale + map |
| `/rent-house` | Rent | Properties for rent + map |
| `/house-details/:id` | Details | Full property information |
| `/map` | Map | Standalone full-screen map |
| `/ad-region` | Ad step 1 | Basic info + location picker |
| `/ad-price` | Ad step 2 | Rooms and floor |
| `/ad-filter` | Ad step 3 | Features + final submit |

---

## Project structure

```
src/
├── components/
│   ├── AdFirst/          # Ad wizard step 1 + location picker
│   ├── AdSecond/         # Ad wizard step 2
│   ├── AdThird/          # Ad wizard step 3
│   ├── advertising/      # Shared AdPageLayout
│   ├── Footer/
│   ├── Home/             # Landing page sections
│   ├── HouseById/        # Property detail views
│   ├── Houses/           # Listings, filters, map
│   └── Navbar/           # Nav, sidebar, auth modal
├── context/              # Query filters, ad form state, user
├── data/
│   ├── properties.ts     # Static property listings (16 items)
│   ├── FilterData.ts     # Filter option values
│   ├── AdData.ts         # Ad form select options
│   └── HomeData.ts       # Marketing / news content
├── pages/                # Route-level page components
├── redux/feachers/       # Slices + thunks (local data layer)
├── services/
│   └── propertyService.ts  # Filter, sort, paginate, favorites, add
├── types/
│   └── property.ts       # Property & filter TypeScript types
└── utils/                # Number formatting, download helper
```

---

## Data layer

All listings live in `src/data/properties.ts` (8 buy + 8 rent properties with real Tehran `lat`/`lng`).

`src/services/propertyService.ts` handles:

| Operation | Storage |
|-----------|---------|
| List / filter / sort / paginate | In-memory from static + user data |
| Get by ID | In-memory lookup |
| Favorites | `sessionStorage` → `saghfinoo_favorites` |
| User-submitted ads | `localStorage` → `saghfinoo_user_products` |

Redux thunks (`houseActions`, `productByIdAction`, `userActions`, etc.) call `propertyService` instead of a REST API.

### Add a new static property

Edit `src/data/properties.ts` and append an object matching the `Property` interface in `src/types/property.ts`:

```typescript
{
  _id: "buy-009",
  title: "آپارتمان ۸۰ متری",
  description: "...",
  city: "تهران - ونک",
  price: 10000000000,
  imageLink: "https://...",
  houseGroup: { title: "خرید" },  // or "اجاره"
  rooms: 2,
  floor: 3,
  parking: 1,
  WC: 1,
  WCType: "فرنگی",
  warHouse: 1,
  elevator: 1,
  collingSystem: "اسپلیت",
  floorMaterial: "سرامیک",
  heatingSystem: "شوفاژ",
  lat: 35.7575,
  lng: 51.4083,
  createdAt: "2026-01-01",
  propertyType: "آپارتمان",
}
```

---

## Key scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check + production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## Design notes

- **Font:** Shabnam (Persian)
- **Primary color:** `#cb1b1b`
- **Direction:** RTL (`dir="rtl"` in `index.html`)
- **Map tiles:** [OpenStreetMap](https://www.openstreetmap.org/)
- **Images:** Unsplash URLs for property photos; place local assets in `public/photos/`

---

## Deployment

The app is a static SPA. Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

**Vercel example:**

```bash
npm run build
# Deploy dist/ or connect repo to Vercel with build command: npm run build
```

---

## Contact

For questions or feedback: [seyedalirafazi80@gmail.com](mailto:seyedalirafazi80@gmail.com)

---

## License

Private project. All rights reserved.
