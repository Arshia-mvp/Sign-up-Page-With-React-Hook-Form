"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

/* ---------- Icons ---------- */
const ICONS = {
  user: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0",
  calendar:
    "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
  phone:
    "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  id: "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z",
  mail: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  lock: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
  eye: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  eyeOff:
    "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88",
  check: "M4.5 12.75l6 6 9-13.5",
  alert:
    "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z",
  bolt: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  shield:
    "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  sparkles:
    "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
};

function Icon({ name, className = "h-5 w-5", strokeWidth = 1.6 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={ICONS[name]} />
    </svg>
  );
}

/* ---------- Animated counter ---------- */
function Counter({ to, decimals = 0, suffix = "", duration = 1800 }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setVal(to * (1 - Math.pow(1 - p, 3))); // ease-out cubic
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return (
    <>
      {val.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </>
  );
}

/* ---------- Confetti ---------- */
const CONFETTI_COLORS = [
  "#6366f1",
  "#d946ef",
  "#22d3ee",
  "#34d399",
  "#fbbf24",
  "#f472b6",
];

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 46 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 0.8,
        duration: 2.2 + Math.random() * 1.8,
        size: 6 + Math.random() * 6,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        round: i % 3 === 0,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="confetti"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.round ? p.size : p.size * 1.6,
            background: p.color,
            borderRadius: p.round ? "9999px" : "2px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Reusable Field ---------- */
function Field({
  label,
  icon,
  error,
  valid,
  registration,
  delay = 0,
  trailing,
  ...props
}) {
  const state = error
    ? "animate-shake border-red-400/60 focus:border-red-400 focus:ring-4 focus:ring-red-500/20"
    : valid
      ? "border-emerald-400/40 hover:border-emerald-400/60 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/15"
      : "border-white/10 hover:border-white/25 focus:border-indigo-400 focus:bg-white/10 focus:ring-4 focus:ring-indigo-500/20";

  return (
    <div className="animate-fade-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative">
        <input
          {...registration}
          {...props}
          placeholder=" "
          aria-invalid={error ? "true" : "false"}
          className={`peer h-14 w-full rounded-xl border bg-white/5 pb-1 pl-11 pt-5 text-sm text-white outline-none backdrop-blur transition-all duration-300 placeholder-transparent ${
            trailing ? "pr-12" : "pr-11"
          } ${state}`}
        />

        {/* Left icon */}
        <span
          className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
            error
              ? "text-red-400"
              : valid
                ? "text-emerald-400"
                : "text-slate-500 peer-focus:text-indigo-300"
          }`}
        >
          <Icon name={icon} />
        </span>

        {/* Floating label */}
        <label
          htmlFor={props.id}
          className={`pointer-events-none absolute left-11 top-2 text-[11px] font-medium transition-all duration-200
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal
            peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-medium
            ${error ? "text-red-300 peer-focus:text-red-300" : "text-slate-400 peer-focus:text-indigo-300"}`}
        >
          {label}
        </label>

        {/* Animated focus line */}
        <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 transition-all duration-500 peer-focus:w-[calc(100%-1.5rem)]" />

        {/* Valid check */}
        {valid && !error && !trailing ? (
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-400">
            <span className="animate-pop block">
              <Icon name="check" className="h-5 w-5" strokeWidth={2.5} />
            </span>
          </span>
        ) : null}

        {trailing}
      </div>

      {error ? (
        <p className="animate-err-in mt-1.5 flex items-start gap-1.5 px-1 text-xs text-red-400">
          <Icon name="alert" className="mt-px h-3.5 w-3.5 shrink-0" />
          {error.message}
        </p>
      ) : null}
    </div>
  );
}

/* ---------- Static data ---------- */
const FIELD_NAMES = [
  "userName",
  "userLastName",
  "userAge",
  "userPhoneNumber",
  "userNationalityCode",
  "userEmail",
  "userPassword",
];

const PASSWORD_RULES = [
  {
    id: "len",
    label: "6–50 characters",
    test: (p) => p.length >= 6 && p.length <= 50,
  },
  {
    id: "case",
    label: "Upper & lower case",
    test: (p) => /[a-z]/.test(p) && /[A-Z]/.test(p),
  },
  { id: "num", label: "A number", test: (p) => /\d/.test(p) },
  {
    id: "sym",
    label: "A special character",
    test: (p) => /[^A-Za-z0-9]/.test(p),
  },
];
const STRENGTH_LABEL = ["", "Weak", "Fair", "Good", "Strong"];
const STRENGTH_COLOR = [
  "",
  "bg-red-500",
  "bg-orange-400",
  "bg-yellow-400",
  "bg-emerald-400",
];

const FEATURES = [
  {
    icon: "bolt",
    title: "Lightning fast",
    desc: "Optimized performance from the very first click.",
  },
  {
    icon: "shield",
    title: "Secure by default",
    desc: "Your data is protected with modern security.",
  },
  {
    icon: "sparkles",
    title: "Beautiful experience",
    desc: "A clean, modern interface you'll love.",
  },
];

const WORD_CLASS =
  "bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent";

// ستاره‌ها deterministic هستن تا مشکل hydration پیش نیاد
const STARS = Array.from({ length: 36 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 100,
  delay: (i % 8) * 0.55,
  size: i % 5 === 0 ? 3 : 2,
}));

/* ---------- Page ---------- */
export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm({ mode: "onTouched" });

  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);
  const [success, setSuccess] = useState(false);
  const [createdName, setCreatedName] = useState("");
  const [ripples, setRipples] = useState([]);

  const values = watch();
  const password = values.userPassword || "";

  const isFilled = (name) => {
    const v = values[name];
    return (
      v !== undefined && v !== "" && !(typeof v === "number" && Number.isNaN(v))
    );
  };
  const isValid = (name) =>
    isFilled(name) && !errors[name] && !!touchedFields[name];

  const completed = FIELD_NAMES.filter((n) => isFilled(n) && !errors[n]).length;
  const progress = Math.round((completed / FIELD_NAMES.length) * 100);

  const strength = PASSWORD_RULES.filter((r) => r.test(password)).length;

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1800)); // simulate server request
    console.log(data);
    setCreatedName(data.userName);
    setSuccess(true);
  };

  const onError = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  /* Page-wide cursor glow */
  const handlePageMove = (e) => {
    e.currentTarget.style.setProperty("--px", `${e.clientX}px`);
    e.currentTarget.style.setProperty("--py", `${e.clientY}px`);
  };

  /* Card 3D tilt + spotlight */
  const handleTilt = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    const el = e.currentTarget;
    el.style.setProperty("--rx", `${(-y * 3.5).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 3.5).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const resetTilt = (e) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  /* Button ripple */
  const addRipple = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((p) => [
      ...p,
      { id, x: e.clientX - r.left, y: e.clientY - r.top },
    ]);
    setTimeout(() => setRipples((p) => p.filter((x) => x.id !== id)), 700);
  };

  return (
    <main
      onMouseMove={handlePageMove}
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* ===== Background ===== */}
      <div className="animate-blob pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-indigo-600/30 blur-[110px]" />
      <div
        className="animate-blob pointer-events-none absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-fuchsia-600/25 blur-[110px]"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="animate-blob pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] rounded-full bg-cyan-500/15 blur-[100px]"
        style={{ animationDelay: "-9s" }}
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Rotating rings */}
      <div className="animate-ring pointer-events-none absolute -left-40 top-[15%] hidden h-[560px] w-[560px] rounded-full border border-dashed border-white/10 lg:block" />
      <div
        className="animate-ring pointer-events-none absolute -left-20 top-[25%] hidden h-[380px] w-[380px] rounded-full border border-white/5 lg:block"
        style={{ animationDirection: "reverse", animationDuration: "40s" }}
      />

      {/* Twinkling stars */}
      {STARS.map((s, i) => (
        <span
          key={i}
          className="animate-twinkle pointer-events-none absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* Cursor glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--px, 50%) var(--py, 30%), rgba(99,102,241,0.12), transparent 60%)",
        }}
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-4 py-12 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        {/* ---------- Left branding panel ---------- */}
        <aside className="hidden lg:block">
          <Link
            href="/"
            className="animate-fade-left inline-block text-2xl font-bold tracking-tight"
          >
            Brand<span className="text-indigo-400">.</span>
          </Link>

          <h2
            className="animate-fade-left mt-10 text-5xl font-extrabold leading-tight tracking-tight"
            style={{ animationDelay: "100ms" }}
          >
            <span className="word-window">
              <span className="word-track">
                <span className={WORD_CLASS}>Build</span>
                <span className={WORD_CLASS}>Create</span>
                <span className={WORD_CLASS}>Launch</span>
                <span className={WORD_CLASS}>Build</span>
              </span>
            </span>
            <br />
            your next big thing.
          </h2>

          <p
            className="animate-fade-left mt-5 max-w-md text-lg text-slate-400"
            style={{ animationDelay: "200ms" }}
          >
            Join thousands of creators and start your journey in just a few
            seconds.
          </p>

          <ul className="mt-10 space-y-4">
            {FEATURES.map((f, i) => (
              <li
                key={f.title}
                className="animate-fade-left flex max-w-md items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-all duration-300 hover:translate-x-2 hover:border-indigo-400/40 hover:bg-white/10"
                style={{ animationDelay: `${300 + i * 120}ms` }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 text-indigo-300">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold">{f.title}</p>
                  <p className="text-sm text-slate-400">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div
            className="animate-fade-left mt-10 flex max-w-md items-center justify-between"
            style={{ animationDelay: "700ms" }}
          >
            <div>
              <p className="text-3xl font-extrabold">
                <Counter to={12480} />+
              </p>
              <p className="text-xs text-slate-400">Happy users</p>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <p className="text-3xl font-extrabold">
                <Counter to={99.9} decimals={1} suffix="%" />
              </p>
              <p className="text-xs text-slate-400">Uptime</p>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <p className="text-3xl font-extrabold">
                <Counter to={4.9} decimals={1} />
                <span className="text-yellow-400"> ★</span>
              </p>
              <p className="text-xs text-slate-400">Rating</p>
            </div>
          </div>

          {/* Floating card */}
          <div
            className="animate-fade-left mt-10"
            style={{ animationDelay: "850ms" }}
          >
            <div className="animate-float ml-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-xl shadow-indigo-500/10 backdrop-blur">
              <div className="flex -space-x-2">
                {[
                  "from-indigo-500 to-blue-500",
                  "from-fuchsia-500 to-pink-500",
                  "from-cyan-400 to-emerald-400",
                ].map((g, i) => (
                  <span
                    key={i}
                    className={`h-8 w-8 rounded-full border-2 border-slate-950 bg-gradient-to-br ${g}`}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">2,431 people</span>{" "}
                joined this week
              </p>
            </div>
          </div>
        </aside>

        {/* ---------- Right: form card ---------- */}
        <div
          className={`animate-fade-up w-full ${shake ? "animate-shake" : ""}`}
        >
          <div
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            className="group/card transition-transform duration-200 ease-out"
            style={{
              transform:
                "perspective(1400px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
            }}
          >
            {/* Rotating conic gradient border */}
            <div className="conic-border rounded-3xl p-px shadow-2xl shadow-indigo-500/20">
              <div className="relative overflow-hidden rounded-3xl bg-slate-950/90 p-6 backdrop-blur-xl sm:p-10">
                {/* Spotlight */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                  style={{
                    background:
                      "radial-gradient(450px circle at var(--mx, 50%) var(--my, 50%), rgba(129,140,248,0.14), transparent 45%)",
                  }}
                />

                {success ? (
                  /* ===== Success view ===== */
                  <div className="relative flex min-h-[460px] flex-col items-center justify-center text-center">
                    <Confetti />
                    <div className="animate-pop relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/15 ring-8 ring-emerald-500/10">
                      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/20" />
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="relative h-12 w-12"
                      >
                        <path className="animate-draw" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2
                      className="animate-fade-up text-3xl font-extrabold"
                      style={{ animationDelay: "300ms" }}
                    >
                      Welcome aboard,{" "}
                      <span className={WORD_CLASS}>{createdName}</span>!
                    </h2>
                    <p
                      className="animate-fade-up mt-3 max-w-sm text-slate-400"
                      style={{ animationDelay: "450ms" }}
                    >
                      Your account has been created successfully. You're all set
                      to get started.
                    </p>
                    <Link
                      href="/"
                      className="animate-fade-up mt-8 rounded-xl bg-white/10 px-8 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
                      style={{ animationDelay: "600ms" }}
                    >
                      Back to home
                    </Link>
                  </div>
                ) : (
                  <div className="relative">
                    {/* Header */}
                    <div className="mb-6 text-center">
                      <Link
                        href="/"
                        className="animate-fade-up inline-block text-2xl font-bold tracking-tight lg:hidden"
                      >
                        Brand<span className="text-indigo-400">.</span>
                      </Link>

                      <span
                        className="animate-fade-up mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-indigo-300"
                        style={{ animationDelay: "40ms" }}
                      >
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
                        Free forever · No credit card
                      </span>

                      <h1
                        className="animate-fade-up mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
                        style={{ animationDelay: "80ms" }}
                      >
                        Create your <span className={WORD_CLASS}>account</span>
                      </h1>
                      <p
                        className="animate-fade-up mt-2 text-sm text-slate-400"
                        style={{ animationDelay: "160ms" }}
                      >
                        Fill in your details and start your journey in seconds.
                      </p>
                    </div>

                    {/* Progress */}
                    <div
                      className="animate-fade-up mb-6"
                      style={{ animationDelay: "200ms" }}
                    >
                      <div className="mb-2 flex justify-between text-xs text-slate-400">
                        <span>Profile completion</span>
                        <span className="tabular-nums">
                          {completed}/{FIELD_NAMES.length}
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 transition-all duration-700 ease-out"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <form
                      noValidate
                      onSubmit={handleSubmit(onSubmit, onError)}
                      className="space-y-4"
                    >
                      <div className="grid gap-4 md:grid-cols-2">
                        <Field
                          id="userName"
                          label="Name"
                          icon="user"
                          type="text"
                          autoComplete="given-name"
                          delay={240}
                          error={errors.userName}
                          valid={isValid("userName")}
                          registration={register("userName", {
                            required: "Name is required",
                            minLength: {
                              value: 3,
                              message: "Name must be at least 3 characters",
                            },
                            maxLength: {
                              value: 13,
                              message: "Name can be at most 13 characters",
                            },
                          })}
                        />

                        <Field
                          id="userLastName"
                          label="Last name"
                          icon="user"
                          type="text"
                          autoComplete="family-name"
                          delay={300}
                          error={errors.userLastName}
                          valid={isValid("userLastName")}
                          registration={register("userLastName", {
                            required: "Last name is required",
                            minLength: {
                              value: 5,
                              message:
                                "Last name must be at least 5 characters",
                            },
                            maxLength: {
                              value: 15,
                              message: "Last name can be at most 15 characters",
                            },
                          })}
                        />

                        <Field
                          id="userAge"
                          label="Age"
                          icon="calendar"
                          type="number"
                          inputMode="numeric"
                          delay={360}
                          error={errors.userAge}
                          valid={isValid("userAge")}
                          registration={register("userAge", {
                            required: "Age is required",
                            valueAsNumber: true,
                            min: {
                              value: 14,
                              message: "You must be at least 14 years old",
                            },
                            max: {
                              value: 55,
                              message: "Age cannot be more than 55",
                            },
                          })}
                        />

                        <Field
                          id="userPhoneNumber"
                          label="Phone number"
                          icon="phone"
                          type="tel"
                          inputMode="numeric"
                          maxLength={11}
                          autoComplete="tel"
                          delay={420}
                          error={errors.userPhoneNumber}
                          valid={isValid("userPhoneNumber")}
                          registration={register("userPhoneNumber", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^09\d{9}$/,
                              message:
                                "Mobile number must start with 09 and be exactly 11 digits",
                            },
                          })}
                        />

                        <Field
                          id="userNationalityCode"
                          label="National code"
                          icon="id"
                          type="text"
                          inputMode="numeric"
                          maxLength={10}
                          delay={480}
                          error={errors.userNationalityCode}
                          valid={isValid("userNationalityCode")}
                          registration={register("userNationalityCode", {
                            required: "National code is required",
                            pattern: {
                              value: /^\d{10}$/,
                              message:
                                "National code must be exactly 10 digits",
                            },
                          })}
                        />

                        <Field
                          id="userEmail"
                          label="Email"
                          icon="mail"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          delay={540}
                          error={errors.userEmail}
                          valid={isValid("userEmail")}
                          registration={register("userEmail", {
                            required: "Email is required",
                            maxLength: {
                              value: 254,
                              message:
                                "Email can't be longer than 254 characters",
                            },
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                              message: "Please enter a valid email address",
                            },
                          })}
                        />
                      </div>

                      {/* Password + strength + checklist */}
                      <div>
                        <Field
                          id="userPassword"
                          label="Password"
                          icon="lock"
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-password"
                          delay={600}
                          error={errors.userPassword}
                          valid={isValid("userPassword")}
                          registration={register("userPassword", {
                            required: "Password is required",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,50}$/,
                              message:
                                "Password must be 6–50 characters and include uppercase, lowercase, a number and a special character",
                            },
                          })}
                          trailing={
                            <button
                              type="button"
                              onClick={() => setShowPassword((v) => !v)}
                              aria-label={
                                showPassword ? "Hide password" : "Show password"
                              }
                              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
                            >
                              <Icon name={showPassword ? "eyeOff" : "eye"} />
                            </button>
                          }
                        />

                        <div
                          className="animate-fade-up mt-3 space-y-3"
                          style={{ animationDelay: "660ms" }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex flex-1 gap-1.5">
                              {[1, 2, 3, 4].map((i) => (
                                <div
                                  key={i}
                                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                                    strength >= i
                                      ? STRENGTH_COLOR[strength]
                                      : "bg-white/10"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="w-14 text-right text-xs text-slate-400">
                              {STRENGTH_LABEL[strength]}
                            </span>
                          </div>

                          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                            {PASSWORD_RULES.map((r) => {
                              const ok = r.test(password);
                              return (
                                <li
                                  key={r.id}
                                  className={`flex items-center gap-2 text-xs transition-colors duration-300 ${
                                    ok ? "text-emerald-400" : "text-slate-500"
                                  }`}
                                >
                                  <span
                                    className={`flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-300 ${
                                      ok
                                        ? "scale-110 border-emerald-400 bg-emerald-400/20"
                                        : "border-slate-600"
                                    }`}
                                  >
                                    {ok ? (
                                      <Icon
                                        name="check"
                                        className="h-2.5 w-2.5"
                                        strokeWidth={3}
                                      />
                                    ) : null}
                                  </span>
                                  {r.label}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>

                      {/* Submit */}
                      <div
                        className="animate-fade-up pt-2"
                        style={{ animationDelay: "720ms" }}
                      >
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          onClick={addRipple}
                          className="btn-shine group/btn flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                        >
                          {ripples.map((r) => (
                            <span
                              key={r.id}
                              className="ripple"
                              style={{ left: r.x, top: r.y }}
                            />
                          ))}
                          {isSubmitting ? (
                            <>
                              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                              Creating account...
                            </>
                          ) : (
                            <>
                              Create account
                              <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">
                                →
                              </span>
                            </>
                          )}
                        </button>
                      </div>

                      <p
                        className="animate-fade-up flex items-center justify-center gap-1.5 pt-1 text-xs text-slate-500"
                        style={{ animationDelay: "780ms" }}
                      >
                        <Icon name="lock" className="h-3.5 w-3.5" />
                        Your data is encrypted and never shared.
                      </p>

                      <p
                        className="animate-fade-up text-center text-sm text-slate-400"
                        style={{ animationDelay: "840ms" }}
                      >
                        Already have an account?{" "}
                        <Link
                          href="/login"
                          className="font-medium text-indigo-400 transition hover:text-indigo-300"
                        >
                          Log in
                        </Link>
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
