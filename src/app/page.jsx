import Link from "next/link";
const features = [
  {
    number: "01",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-6 w-6"
      >
        <path
          d="M13 2 3 14h8l-1 8 11-13h-8l1-7Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Lightning fast",
    description:
      "Enjoy a smooth, responsive experience built with modern web technologies and performance in mind.",
    color: "from-violet-500 to-indigo-500",
  },
  {
    number: "02",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-6 w-6"
      >
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" strokeLinecap="round" />
        <path d="m10 15 1.5 1.5L14.5 13" strokeLinecap="round" />
      </svg>
    ),
    title: "Secure by default",
    description:
      "A security-minded experience designed to help keep your information and workflow protected.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    number: "03",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-6 w-6"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M3 9h18M9 21V9" strokeLinecap="round" />
      </svg>
    ),
    title: "Beautiful experience",
    description:
      "A thoughtfully designed interface that keeps everything organized, intuitive, and easy to use.",
    color: "from-cyan-400 to-blue-500",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070812] text-white selection:bg-violet-500/30">
      {/* Page-specific motion styles: kept inside page.jsx */}
      <style>{`
        /* 01 - Aurora Drift */
        @keyframes auroraDrift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(20px, -26px, 0) scale(1.08); }
        }

        .animate-aurora-drift {
          animation: auroraDrift 17s ease-in-out infinite;
          will-change: transform;
        }

        .animate-aurora-drift-delayed {
          animation: auroraDrift 21s ease-in-out -9s infinite;
          will-change: transform;
        }

        /* 02 - Gradient Flow */
        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradientFlow 7s ease-in-out infinite;
        }

        /* 03 - Content Reveal */
        @keyframes contentReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 28px, 0) rotateX(4deg);
            filter: blur(7px);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotateX(0);
            filter: blur(0);
          }
        }

        .animate-content-reveal {
          animation: contentReveal 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* 04 - Dashboard Float */
        @keyframes dashboardFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg);
          }
          50% {
            transform: translate3d(0, -10px, 0) rotateX(1deg) rotateY(-0.7deg);
          }
        }

        .animate-dashboard-float {
          perspective: 1200px;
          transform-style: preserve-3d;
          animation: dashboardFloat 8s ease-in-out infinite;
          will-change: transform;
        }

        /* 05 - Dashboard Entrance */
        @keyframes dashboardReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 38px, 0) scale(0.94);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }

        .animate-dashboard-reveal {
          animation: dashboardReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* 06 - Feature Reveal */
        @keyframes featureReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        .animate-feature-reveal {
          animation: featureReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .feature-grid > article:nth-child(1) { animation-delay: 100ms; }
        .feature-grid > article:nth-child(2) { animation-delay: 250ms; }
        .feature-grid > article:nth-child(3) { animation-delay: 400ms; }

        /* 07 - Chart Grow */
        @keyframes chartGrow {
          from { opacity: 0.2; transform: scaleY(0.05); }
          to { opacity: 1; transform: scaleY(1); }
        }

        .chart-bar {
          transform-origin: bottom;
          animation: chartGrow 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .dashboard-chart-bars > div:nth-child(1) .chart-bar { animation-delay: 50ms; }
        .dashboard-chart-bars > div:nth-child(2) .chart-bar { animation-delay: 100ms; }
        .dashboard-chart-bars > div:nth-child(3) .chart-bar { animation-delay: 150ms; }
        .dashboard-chart-bars > div:nth-child(4) .chart-bar { animation-delay: 200ms; }
        .dashboard-chart-bars > div:nth-child(5) .chart-bar { animation-delay: 250ms; }
        .dashboard-chart-bars > div:nth-child(6) .chart-bar { animation-delay: 300ms; }
        .dashboard-chart-bars > div:nth-child(7) .chart-bar { animation-delay: 350ms; }
        .dashboard-chart-bars > div:nth-child(8) .chart-bar { animation-delay: 400ms; }
        .dashboard-chart-bars > div:nth-child(9) .chart-bar { animation-delay: 450ms; }
        .dashboard-chart-bars > div:nth-child(10) .chart-bar { animation-delay: 500ms; }
        .dashboard-chart-bars > div:nth-child(11) .chart-bar { animation-delay: 550ms; }
        .dashboard-chart-bars > div:nth-child(12) .chart-bar { animation-delay: 600ms; }

        /* 08 - Border Glow */
        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 0 rgba(139, 92, 246, 0),
              inset 0 0 0 rgba(139, 92, 246, 0);
          }
          50% {
            box-shadow: 0 0 24px rgba(139, 92, 246, 0.16),
              inset 0 0 14px rgba(139, 92, 246, 0.06);
          }
        }

        .animate-border-glow {
          animation: borderGlow 4s ease-in-out infinite;
        }

        /* 09 - Grid Pan */
        @keyframes gridPan {
          from { background-position: 0 0; }
          to { background-position: 64px 64px; }
        }

        .animate-grid-pan {
          animation: gridPan 35s linear infinite;
        }

        /* 10 - Floating Chips */
        @keyframes floatingChip {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(0, -8px, 0) rotate(-1deg); }
        }

        .animate-floating-chip {
          animation: floatingChip 7s ease-in-out infinite;
        }

        .animate-floating-chip-delayed {
          animation: floatingChip 8s ease-in-out -3s infinite;
        }

        /* 11 - Button Glow */
        @keyframes buttonGlow {
          0%, 100% { box-shadow: 0 8px 28px rgba(124, 58, 237, 0.20); }
          50% { box-shadow: 0 12px 42px rgba(124, 58, 237, 0.42); }
        }

        .animate-button-glow {
          animation: buttonGlow 3.5s ease-in-out infinite;
        }

        /* 12 - Feature Icon Motion */
        .feature-card-motion .feature-icon-motion {
          transition:
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.5s ease;
        }

        .feature-card-motion:hover .feature-icon-motion {
          transform: rotate(-8deg) scale(1.12) translateY(-2px);
          filter: drop-shadow(0 0 12px rgba(167, 139, 250, 0.35));
        }

        /* Accessibility: respect reduced-motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-aurora-drift,
          .animate-aurora-drift-delayed,
          .animate-gradient-flow,
          .animate-content-reveal,
          .animate-dashboard-float,
          .animate-dashboard-reveal,
          .animate-feature-reveal,
          .chart-bar,
          .animate-border-glow,
          .animate-grid-pan,
          .animate-floating-chip,
          .animate-floating-chip-delayed,
          .animate-button-glow {
            animation: none !important;
          }

          .animate-content-reveal,
          .animate-dashboard-reveal,
          .animate-feature-reveal {
            opacity: 1;
            filter: none;
            transform: none;
          }

          .feature-card-motion .feature-icon-motion {
            transition: none !important;
          }

          .feature-card-motion:hover .feature-icon-motion {
            transform: none;
            filter: none;
          }
        }
      `}</style>

      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-350px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[140px]" />
        <div className="absolute -left-52 top-[650px] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[130px] animate-aurora-drift" />
        <div className="absolute -right-52 top-[350px] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[130px] animate-aurora-drift-delayed" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,#070812_100%)]" />
        <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)] animate-grid-pan" />
      </div>

      {/* Navbar */}
      <header className="relative z-20 border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Brand home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-indigo-500/10 shadow-lg shadow-violet-500/10 transition duration-300 group-hover:scale-105 group-hover:border-violet-400/40">
              <span className="text-xl font-black text-violet-300">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Brand<span className="text-violet-400">.</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-9 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              Experience
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              About
            </Link>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/signup"
              className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.05] hover:text-white sm:inline-flex"
            >
              Sign up
            </Link>
            <Link
              href="/signup"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-white/5 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-100"
            >
              Get started
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section
        id="about"
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-32 lg:pt-28"
      >
        {/* Hero content */}
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left animate-content-reveal">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 shadow-lg shadow-violet-500/[0.05] backdrop-blur-xl animate-border-glow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-violet-200">
              THE NEXT GENERATION EXPERIENCE
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-3.5 w-3.5 text-violet-300"
            >
              <path
                d="m9 18 6-6-6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-[1.12] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
            Build your
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent animate-gradient-flow">
              next big idea.
            </span>
            <br />
            <span className="text-slate-100">Start right here.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
            Everything you need to turn your ideas into meaningful progress.
            Create your account, explore a better experience, and make your next
            move with confidence.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-violet-600/25 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-600/30 animate-button-glow"
            >
              Create your account
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-bold text-slate-200 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
            >
              Explore features
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path
                  d="M7 10 12 15l5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Supporting text */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500 lg:justify-start">
            <span className="inline-flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 text-emerald-400"
              >
                <path
                  d="m5 12 4 4L19 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Easy to get started
            </span>
            <span className="inline-flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 text-emerald-400"
              >
                <path
                  d="m5 12 4 4L19 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Modern experience
            </span>
          </div>
        </div>

        {/* Dashboard preview */}
        <div
          id="experience"
          className="relative mx-auto w-full max-w-[600px] lg:ml-auto animate-dashboard-reveal"
        >
          {/* Ambient glow */}
          <div className="absolute inset-10 rounded-full bg-violet-600/20 blur-[100px]" />

          {/* Floating top card */}
          <div className="absolute -right-2 -top-7 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#151526]/90 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:flex lg:-right-8 animate-floating-chip">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path
                  d="m5 12 4 4L19 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-white">All systems ready</p>
              <p className="mt-1 text-[10px] text-slate-500">
                Your workspace is ready
              </p>
            </div>
          </div>

          {/* Main dashboard */}
          <div className="relative rounded-[28px] border border-white/10 bg-white/[0.045] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-3 animate-dashboard-float">
            <div className="overflow-hidden rounded-[21px] border border-white/[0.07] bg-[#0c0d18]">
              {/* Browser top bar */}
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="hidden rounded-lg border border-white/[0.06] bg-white/[0.03] px-7 py-1.5 text-[10px] text-slate-500 sm:block">
                  app.brand.com/dashboard
                </div>
                <div className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
              </div>

              {/* Dashboard body */}
              <div className="grid grid-cols-[58px_1fr] sm:grid-cols-[75px_1fr]">
                {/* Sidebar */}
                <aside className="flex min-h-[390px] flex-col items-center gap-5 border-r border-white/[0.06] bg-white/[0.015] py-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-black shadow-lg shadow-violet-500/20">
                    B
                  </div>
                  <div className="mt-4 flex flex-col gap-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/15 text-violet-300">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-4 w-4"
                      >
                        <rect x="3" y="3" width="7" height="7" rx="1.5" />
                        <rect x="14" y="3" width="7" height="7" rx="1.5" />
                        <rect x="14" y="14" width="7" height="7" rx="1.5" />
                        <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      </svg>
                    </div>
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-600 transition hover:bg-white/5 hover:text-slate-300"
                      >
                        <div className="h-4 w-4 rounded-md border border-current" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-indigo-400 to-fuchsia-500 text-xs font-bold">
                    U
                  </div>
                </aside>

                {/* Dashboard content */}
                <div className="min-w-0 p-4 sm:p-6">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-[10px]">
                        Overview
                      </p>
                      <h2 className="mt-1 text-lg font-bold tracking-tight text-white sm:text-2xl">
                        Welcome back!
                      </h2>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-4 w-4"
                      >
                        <path
                          d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-slate-500 sm:text-[10px]">
                          Projects
                        </span>
                        <span className="text-violet-300">✦</span>
                      </div>
                      <p className="mt-3 text-xl font-bold text-white sm:text-2xl">
                        08
                      </p>
                      <p className="mt-1 text-[9px] text-emerald-400">
                        Workspace projects
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-slate-500 sm:text-[10px]">
                          Completed
                        </span>
                        <span className="text-cyan-300">↗</span>
                      </div>
                      <p className="mt-3 text-xl font-bold text-white sm:text-2xl">
                        24
                      </p>
                      <p className="mt-1 text-[9px] text-emerald-400">
                        Tasks finished
                      </p>
                    </div>
                    <div className="col-span-2 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 sm:col-span-1 sm:p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-slate-500 sm:text-[10px]">
                          Productivity
                        </span>
                        <span className="text-fuchsia-300">↗</span>
                      </div>
                      <p className="mt-3 text-xl font-bold text-white sm:text-2xl">
                        92%
                      </p>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" />
                      </div>
                    </div>
                  </div>

                  {/* Activity chart */}
                  <div className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-white">
                          Activity overview
                        </p>
                        <p className="mt-1 text-[9px] text-slate-500">
                          Your workspace activity
                        </p>
                      </div>
                      <span className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-2.5 py-1.5 text-[9px] text-slate-400">
                        This week
                      </span>
                    </div>
                    <div className="mt-7 flex h-28 items-end justify-between gap-2 dashboard-chart-bars">
                      {[38, 58, 45, 78, 55, 90, 68, 100, 73, 85, 60, 94].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="group relative flex h-full flex-1 items-end"
                          >
                            <div
                              style={{ height: `${height}%` }}
                              className={`chart-bar w-full rounded-t-md transition duration-300 group-hover:brightness-125 ${
                                index === 7
                                  ? "bg-gradient-to-t from-violet-700 to-fuchsia-400 shadow-[0_0_18px_rgba(139,92,246,0.3)]"
                                  : "bg-gradient-to-t from-indigo-900 to-violet-500/70"
                              }`}
                            />
                          </div>
                        ),
                      )}
                    </div>
                    <div className="mt-3 flex justify-between text-[9px] text-slate-600">
                      <span>MON</span>
                      <span>TUE</span>
                      <span>WED</span>
                      <span>THU</span>
                      <span>FRI</span>
                      <span>SAT</span>
                      <span>SUN</span>
                    </div>
                  </div>

                  {/* Bottom activity */}
                  <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3 sm:p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-5 w-5"
                        >
                          <path
                            d="m5 12 4 4L19 6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-white sm:text-xs">
                          Workspace is looking good
                        </p>
                        <p className="mt-1 text-[9px] text-slate-500">
                          Everything is organized
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[9px] font-semibold text-emerald-400">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating bottom card */}
          <div className="absolute -bottom-7 -left-2 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#151526]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:flex lg:-left-8 animate-floating-chip-delayed">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-xl">
              ✨
            </div>
            <div>
              <p className="text-xs font-bold text-white">
                Made for productivity
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                A better way to work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Features section */}
      <section
        id="features"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
            WHY CHOOSE BRAND
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Everything you need.
            <br />
            <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Nothing you don&apos;t.
            </span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            Powerful capabilities, thoughtful design, and a seamless experience
            come together in one place.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3 feature-grid">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-violet-950/20 feature-card-motion animate-feature-reveal"
            >
              {/* Card glow */}
              <div
                className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${feature.color} opacity-[0.07] blur-3xl transition duration-500 group-hover:opacity-20`}
              />
              <div className="relative flex items-center justify-between">
                <div
                  className={`feature-icon-motion flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br ${feature.color} bg-opacity-10 text-white shadow-lg shadow-black/10`}
                >
                  {feature.icon}
                </div>
                <span className="text-sm font-semibold tracking-widest text-slate-700">
                  {feature.number}
                </span>
              </div>
              <h3 className="relative mt-8 text-xl font-bold text-white transition group-hover:text-violet-200">
                {feature.title}
              </h3>
              <p className="relative mt-3 text-sm leading-7 text-slate-400">
                {feature.description}
              </p>
              <div className="relative mt-7 flex items-center gap-2 text-xs font-bold text-violet-300 opacity-70 transition group-hover:gap-3 group-hover:opacity-100">
                Discover more
                <span>→</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-violet-400/20 bg-gradient-to-br from-[#17132e] via-[#111326] to-[#10101d] px-6 py-16 text-center shadow-2xl shadow-violet-950/20 sm:px-12 sm:py-20">
          {/* CTA background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-32 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -right-10 h-80 w-80 rounded-full bg-fuchsia-600/15 blur-[100px]"
          />
          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-2xl shadow-lg shadow-violet-500/10">
              ✦
            </div>
            <h2 className="mt-7 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready to start
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                something amazing?
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              Your next chapter starts with one simple step. Create your account
              and discover what you can accomplish.
            </p>
            <Link
              href="/signup"
              className="group mt-9 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-violet-100 animate-button-glow"
            >
              Get started for free
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row lg:px-8">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-white"
          >
            Brand<span className="text-violet-400">.</span>
          </Link>
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Brand. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="text-xs font-medium text-slate-400 transition hover:text-white"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-xs font-medium text-slate-400 transition hover:text-white"
            >
              Sign up
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
