import { Rocket, Calendar, Clock } from "lucide-react";

function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-16 h-64 w-64 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 bg-purple-200/40 rounded-full blur-3xl" />
      </div>
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm text-slate-600 ring-1 ring-slate-200">
          <Calendar className="h-4 w-4 text-blue-600" />
          12-week roadmap
        </div>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Full‑Stack Developer Learning Schedule
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600 md:text-lg">
          A structured, practical plan to go from zero to deploying full‑stack apps.
          Follow the weekly milestones, practice daily, and track progress.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#timeline"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 transition"
          >
            <Rocket className="h-4 w-4" />
            Start the roadmap
          </a>
          <div className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-slate-700 ring-1 ring-slate-200 shadow-sm">
            <Clock className="h-4 w-4 text-slate-500" />
            8–12 hrs/week
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
