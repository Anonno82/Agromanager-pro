# 🌿 AgroManager Pro

> **Farm Smarter. Grow Better.**  
> A complete Agritourism & Specialized Agriculture Management System for USA-based farm businesses.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- A free [Supabase](https://supabase.com) account

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Supabase
1. Create a new project at https://supabase.com (free tier)
2. In **SQL Editor**, run `supabase/schema.sql`
3. Then run `supabase/seed.sql`
4. In **Authentication → Settings**, disable email confirmation for local dev

### 3. Set up environment variables
```bash
cp .env.example .env
```
Fill in your Supabase URL and anon key from **Project Settings → API**.

### 4. Start the dev server
```bash
npm run dev
```

Open http://localhost:5173

---

## 🔑 Demo Credentials

| Role  | Email                      | Password    | Access         |
|-------|----------------------------|-------------|----------------|
| Admin | admin@agromanager.demo     | Admin@2025  | Full access    |
| Staff | staff@agromanager.demo     | Staff@2025  | Restricted     |

---

## 📁 Project Structure

```
agromanager-pro/
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx                    ← React entry point
│   ├── App.jsx                     ← Root router
│   ├── index.css                   ← Global styles + Tailwind
│   ├── lib/
│   │   ├── supabase.js             ← Supabase client
│   │   ├── constants.js            ← App constants & enums
│   │   └── utils.js                ← Utility functions
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useRealtime.js
│   │   └── useToast.js
│   ├── context/
│   │   └── AuthContext.jsx         ← Auth provider
│   ├── components/
│   │   ├── ui/                     ← Reusable UI primitives
│   │   ├── layout/                 ← Sidebar, Topbar, AppLayout
│   │   └── shared/                 ← KPICard, ActivityFeed, etc.
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── bookings/
│   │   ├── crops/
│   │   ├── inventory/
│   │   ├── finance/
│   │   ├── analytics/
│   │   └── settings/
│   └── supabase/
│       ├── schema.sql              ← DB schema + RLS
│       ├── seed.sql                ← Demo data
│       └── realtime.js             ← Realtime configs
├── supabase/
│   ├── schema.sql
│   └── seed.sql
├── .env.example
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🛠 Tech Stack

| Layer       | Technology                              |
|-------------|-----------------------------------------|
| Frontend    | React 18 + Vite + Tailwind CSS          |
| Database    | Supabase (PostgreSQL)                   |
| Auth        | Supabase Auth + Row Level Security      |
| Realtime    | Supabase Realtime                       |
| Charts      | Recharts                                |
| Tables      | TanStack Table v8                       |
| Forms       | React Hook Form + Zod                   |
| Icons       | Lucide React                            |
| Toasts      | React Hot Toast                         |
| Export      | jsPDF + xlsx                            |
| Hosting     | Vercel (free)                           |

---

## 📦 Modules

| Module         | Description                                              | Admin | Staff |
|----------------|----------------------------------------------------------|-------|-------|
| Dashboard      | KPIs, charts, alerts, activity feed, realtime updates    | ✅    | ✅    |
| Bookings       | List + calendar view, full CRUD, CSV export              | ✅    | 👁️    |
| Crops & Plots  | Plot grid, crop table, Gantt timeline                    | ✅    | ✏️    |
| Inventory      | Category tabs, stock bars, movement modal, log           | ✅    | ➕    |
| Finance        | P&L charts, income/expense tables, PDF export            | ✅    | ❌    |
| Analytics      | Charts for all modules, date range filter                | ✅    | ✅    |
| Settings       | Profile, team management, tour types, notifications      | ✅    | ❌    |

---

## 🔐 Role Permissions

**Admin**: Full access to all modules, create/edit/delete everything, finance, settings, exports.

**Staff**:
- Bookings: view only
- Crops: update status + yield on assigned crops only
- Inventory: log stock movements (add/remove/adjust)
- Analytics: crops + inventory sections only
- Finance: blocked (redirects to /unauthorized)
- Settings: blocked

RLS policies enforce these restrictions at the **database level** — not just the UI.

---

## 🚀 Deploy to Vercel

```bash
npm run build
vercel deploy
```

Add environment variables in Vercel Dashboard:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

---

## 📝 License

Built for USA farm businesses. All rights reserved.
