# 🚀 Arsheel Patel | 3D Portfolio

Welcome to my personal 3D interactive developer portfolio! This portfolio is built with modern web technologies and features buttery smooth animations, a 3D interactive keyboard for skills, and a cosmic space-themed aesthetic.

## ✨ Features

- **Interactive 3D Keyboard** — Custom Spline keyboard where each keycap represents a skill, revealing titles and descriptions on hover/press.
- **My Journey Timeline** — A horizontal scrolling timeline showcasing memorable hackathons and events.
- **Achievements Section** — Highlighted wins and certificates.
- **Buttery Animations** — GSAP + Framer Motion powered scroll, hover, and reveal animations.
- **Light & Dark Mode** — Full theme support with seamless transitions.
- **Responsive** — Perfectly optimized for all devices and screen sizes.
- **Contact Form** — Built-in email delivery.

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14, React 18, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI, Aceternity UI |
| **Animation** | GSAP, Framer Motion |
| **3D Engine** | Spline Runtime |
| **Misc** | Lenis (smooth scroll), Zod, next-themes |

---

## 🌍 How to Deploy to Vercel (and Fix GitHub Pages Domain Hijacking)

If you are seeing your `README.md` file rendering on your custom domain instead of your actual website, it means **GitHub Pages is currently intercepting your domain**. 

To deploy your site properly using Vercel and your custom domain (`arsheelpatel.me`), follow these exact steps:

### Step 1: Turn off GitHub Pages
1. Go to your repository on GitHub (`ArsheelPatel06/ArsheelPatel_Portfolio`).
2. Click on **Settings** (the gear icon at the top right of the repo).
3. In the left sidebar, click on **Pages**.
4. Look for the "Build and deployment" source. Ensure it is turned **Off** or set to something that isn't active.
5. Alternatively, just **delete the `CNAME` file** from your repository on GitHub. (This file tells GitHub to hijack the domain).

### Step 2: Deploy on Vercel
1. Go to [Vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New...** -> **Project**.
3. Find your `ArsheelPatel_Portfolio` repository and click **Import**.
4. Leave all build settings as default (Framework Preset: Next.js).
5. Click **Deploy**. Vercel will now build your Next.js application.

### Step 3: Add your Custom Domain
1. Once the Vercel deployment finishes, click on **Continue to Dashboard**.
2. Go to the **Settings** tab of your project in Vercel.
3. Click on **Domains** in the left sidebar.
4. Enter your custom domain: `arsheelpatel.me` and click **Add**.
5. Vercel will give you the DNS records (usually an A Record and a CNAME). 
6. Log into your domain registrar (where you bought `arsheelpatel.me`) and update your DNS settings to match exactly what Vercel provides.

Once the DNS propagates (usually takes a few minutes), your beautifully animated 3D portfolio will be live at `arsheelpatel.me`!

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v18+)
- npm / pnpm / yarn

### Installation

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Run the development server:**
    ```bash
    npm run dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📄 License
This project is open source and based on the 3D portfolio template by [Naresh Khatri](https://github.com/Naresh-Khatri/3d-portfolio).
