# Solution Finder 🧮

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.2.5-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)

**An interactive e-learning platform for Class 8 CBSE Mathematics (DAV Public School Syllabus)**

*Originally built in 2020. Rebuilt in 2025 with modern web technologies.*

[Live Demo](#) · [Report a Bug](https://github.com/abhigyan24-ops/SolutionFinder/issues) · [Request a Feature](https://github.com/abhigyan24-ops/SolutionFinder/issues)

</div>

---

## 📖 The Story

In 2020, **Abhigyan** was a Class 8 student who noticed that many of his classmates struggled to find joy in learning mathematics. As a passion project, he built the first version of Solution Finder — a website with live chat support, YouTube explainer videos, and custom JavaScript calculators to help students verify their homework answers instantly, without having to wait for the next day's class.

Fast forward to 2024 — Abhigyan joined **BMS Institute of Technology** to pursue Computer Science Engineering. This repository is his effort to rebuild that childhood passion project using the modern tech stack he works with today, bringing the same helpful spirit to a far more polished product.

---

## ✨ Features

### 📚 16 Comprehensive Chapters
Covers the complete Class 8 Mathematics curriculum as per the CBSE / DAV Public School syllabus — from rational numbers and algebraic expressions to mensuration and data handling.

### 🧮 Interactive Answer Checkers
Dedicated instant calculators for complex topics, including:
- **Compound Interest Calculator** — Enter principal, rate, and time; get the answer instantly.
- **Polynomial Solver** — Quickly verify polynomial operations.
- **Algebraic Identities Checker** — Validate identity-based expansions on the fly.

Students can verify their final answers without waiting, building confidence and enabling self-paced learning.

### 📝 Client-Side Quizzes
Every chapter features a **10-question multiple-choice quiz** with:
- A strict **20-minute countdown timer**
- Instant scoring on submission
- Zero server dependency — fully client-side

### 🏆 Automated E-Certificates
Students scoring **80% or higher** on any chapter quiz automatically receive a **Certificate of Achievement**, generated in-browser and downloadable as a high-resolution PNG — powered by `html2canvas`.

### 🌟 Wall of Fame (Leaderboard)
A dynamic leaderboard that ranks top-performing students, gamifying the learning experience and motivating students to push their scores higher.

### 🎨 Beautiful UI/UX
A clean, Google-inspired interface styled with **Tailwind CSS v4**, featuring smooth animations and transitions powered by **Framer Motion** — designed to make math feel approachable and even enjoyable.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion 12](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Certificate Generation | [html2canvas](https://html2canvas.hertzen.com/) |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **[Node.js](https://nodejs.org/)** (v18 or higher recommended) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhigyan24-ops/SolutionFinder.git
   cd SolutionFinder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
solution-finder/
├── app/                   # Next.js App Router pages & layouts
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── chapters/          # Chapter pages & quizzes
├── components/            # Reusable UI components
│   ├── ui/                # Base components (buttons, cards, etc.)
│   ├── Calculator/        # Interactive answer checker components
│   ├── Quiz/              # Quiz engine & timer
│   ├── Certificate/       # Certificate generator (html2canvas)
│   └── Leaderboard/       # Wall of Fame component
├── lib/                   # Utilities, helpers, quiz data
├── public/                # Static assets
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🗺️ Chapters Covered

The platform covers all 16 chapters of the Class 8 DAV Mathematics syllabus:

1. Rational Numbers
2. Exponents and Powers
3. Squares and Square Roots
4. Cubes and Cube Roots
5. Playing with Numbers
6. Algebraic Expressions and Identities
7. Polynomials
8. Linear Equations in One Variable
9. Understanding Quadrilaterals
10. Practical Geometry
11. Mensuration
12. Data Handling
13. Introduction to Graphs
14. Direct and Inverse Proportions
15. Factorisation
16. Compound Interest

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/abhigyan24-ops/SolutionFinder/issues).

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

Built with ❤️ by **[Abhigyan](https://github.com/abhigyan24-ops)**

*Making Math Joyful, One Chapter at a Time.*

</div>
