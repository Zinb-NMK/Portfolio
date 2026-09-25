# 🚀 Nagaram Manoj Kumar — 3D Interactive Portfolio

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.168-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

An interactive 3D portfolio website showcasing projects, skills, and background as an **Entry-Level SAP ABAP Developer**. Built with modern web technologies, smooth scrolling animations, and real-time 3D physics.

---

## 🌟 Key Features

- **3D Interactive Visuals**:
  - Interactive 3D Character Model powered by Three.js & `@react-three/fiber`.
  - Dynamic 3D Physics Tech Stack with bouncing interactive skill spheres powered by `@react-three/rapier`.
- **Cinematic Scroll Animations**:
  - Smooth page inertia and inertia-driven physics with GSAP `ScrollSmoother`.
  - Pinned horizontal scrolling for featured SAP ABAP projects using GSAP `ScrollTrigger`.
  - Character & line-level text stagger animations using GSAP `SplitText`.
- **Custom Design & Responsive UI**:
  - Dark mode aesthetic with custom cursor effects, fluid typography, and glassmorphism elements.
  - Fully responsive layout for desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

### **Frontend & 3D Web**
- **Core**: React 18, TypeScript, HTML5, CSS3, JavaScript (ESNext)
- **3D & Physics**: Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier`
- **Animations**: GSAP (ScrollSmoother, ScrollTrigger, SplitText), `@gsap/react`
- **Icons & UI**: `react-icons` (Fa6, Md, Tb), `react-fast-marquee`
- **Build Tool**: Vite 5

### **SAP ABAP & Technical Domain**
- **SAP Technologies**: ABAP, ABAP Objects (OO ALV), CDS Views, Open SQL, ABAP on HANA
- **Data Transfer & Integration**: BDC (Session Method, Call Transaction), BAPI
- **Customizations**: SAP Enhancement Framework, User Exits, Customer Exits, BAdIs
- **Data Dictionary**: Tables, Views, Domains, Data Elements, Lock Objects, Search Helps, TMG
- **Programming Languages & DB**: Python, Java, SQL, Django, Git

---

## 📂 Project Structure

```text
Portfolio-Website/
├── public/
│   ├── images/              # Skill icons & project thumbnails
│   ├── models/              # 3D models and environment maps (.hdr, .glb)
│   └── resume.pdf           # Professional resume PDF
├── src/
│   ├── components/
│   │   ├── styles/          # Section-specific CSS styling
│   │   ├── utils/           # Animation helpers (initialFX, splitText)
│   │   ├── About.tsx        # Profile & educational background
│   │   ├── Career.tsx       # Timeline of education and experience
│   │   ├── Character.tsx    # 3D model canvas & character animation
│   │   ├── Contact.tsx      # Contact details & social links
│   │   ├── Cursor.tsx       # Interactive custom cursor
│   │   ├── HoverLinks.tsx   # Link hover effects
│   │   ├── Landing.tsx      # Hero section with animated typography
│   │   ├── Loading.tsx      # Initial loading screen animation
│   │   ├── MainContainer.tsx# Wrapper for smooth scroll and layout
│   │   ├── Navbar.tsx       # Navigation bar & ScrollSmoother init
│   │   ├── SocialIcons.tsx  # Quick social & contact floating icons
│   │   ├── TechStack.tsx    # 3D physics balls skill showcase
│   │   ├── WhatIDo.tsx      # Specialized expertise breakdown
│   │   ├── Work.tsx         # Horizontal pinned project showcase
│   │   └── WorkImage.tsx    # Project preview media container
│   ├── App.tsx              # Root application component
│   ├── index.css            # Global design tokens & CSS variables
│   └── main.tsx             # React DOM entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 💼 Featured SAP ABAP Projects

1. **Sales Order Lifecycle Report**  
   - Layered ABAP CDS Views (base, aggregation, composite, consumption) with OO ALV (`CL_SALV_TABLE`) tracking Open Quantity, Delivery %, and Billing %.
2. **Warehouse Material Backlog**  
   - Interactive OO ALV Grid with editable fields, backlog calculations, and double-click navigation across Sales Order, Stock, Schedule Line, and Delivery.
3. **Material Master Upload**  
   - Automated mass creation via BDC (`MM01`) using Session Method / Call Transaction, alongside `BAPI_MATERIAL_SAVEDATA`.
4. **SAP Enhancement Framework**  
   - Custom business logic implementation using User Exits, Customer Exits, BAdIs, and Implicit/Explicit Enhancements.
5. **DDIC Object Management**  
   - Custom Domains, Data Elements, Tables, Views, Search Helps, Lock Objects, and Table Maintenance Generators (TMG).
6. **ALV Report Suite**  
   - Classic & interactive ABAP reports featuring custom Selection Screens, Parameters, Select-Options, and Internal Table processing.

---

## 🚀 Getting Started

### **Prerequisites**
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/Zinb-NMK/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 📬 Contact & Connect

- **Name**: Nagaram Manoj Kumar
- **Email**: [nagarammanojkumar3@gmail.com](mailto:nagarammanojkumar3@gmail.com)
- **LinkedIn**: [linkedin.com/in/manojkumar-nagaram](https://linkedin.com/in/manojkumar-nagaram)
- **GitHub**: [github.com/Zinb-NMK](https://github.com/Zinb-NMK)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
