const weeks = [
  {
    title: "Week 1: Web Foundations",
    items: [
      "HTML semantics, forms, accessibility basics",
      "CSS layout: Flexbox, Grid; responsive design",
      "Modern JS essentials (ES6+, modules)"
    ],
    outcome: "Build a responsive landing page",
  },
  {
    title: "Week 2: JavaScript Deep Dive",
    items: [
      "DOM APIs, events, fetch, async/await",
      "State and data patterns",
      "Debugging with DevTools"
    ],
    outcome: "Interactive UI with API call",
  },
  {
    title: "Week 3: React Basics",
    items: [
      "Components, props, state, hooks",
      "Project structure with Vite",
      "Styling with Tailwind"
    ],
    outcome: "Small React app (search/filter)",
  },
  {
    title: "Week 4: React Advanced",
    items: [
      "Routing, forms, validation",
      "Data fetching patterns, SWR/React Query",
      "Component composition & accessibility"
    ],
    outcome: "Multi‑page app with forms",
  },
  {
    title: "Week 5: Backend with FastAPI",
    items: [
      "APIs, Pydantic models, routers",
      "Auth concepts, CORS, testing",
      "Structuring services & dependencies"
    ],
    outcome: "CRUD API with docs",
  },
  {
    title: "Week 6: Databases & Persistence",
    items: [
      "MongoDB data modeling",
      "Queries, indexing, validation",
      "Seeding and migrations basics"
    ],
    outcome: "API + DB integration",
  },
  {
    title: "Week 7: Full‑Stack Integration",
    items: [
      "Connecting React to FastAPI",
      "Environment configs, error handling",
      "Deploy‑ready build process"
    ],
    outcome: "End‑to‑end feature working",
  },
  {
    title: "Week 8: Auth & Security",
    items: [
      "JWT, sessions, password hashing",
      "Role‑based access control",
      "Secure storage & secrets"
    ],
    outcome: "Protected routes & APIs",
  },
  {
    title: "Week 9: Testing & Quality",
    items: [
      "Unit/integration tests",
      "Linters, formatters, CI",
      "Accessibility checks"
    ],
    outcome: "Tested, stable codebase",
  },
  {
    title: "Week 10: Performance & DX",
    items: [
      "Bundle optimization, code‑split",
      "API performance, caching",
      "Developer tooling automation"
    ],
    outcome: "Fast, smooth app",
  },
  {
    title: "Week 11: Deployment",
    items: [
      "Docker basics",
      "Cloud deploy (Vercel/Render/Fly)",
      "Monitoring and logs"
    ],
    outcome: "Live app online",
  },
  {
    title: "Week 12: Capstone & Portfolio",
    items: [
      "Plan, build, and ship a capstone",
      "Write case study & README",
      "Polish portfolio & resume"
    ],
    outcome: "Showcase‑ready project",
  },
];

function WeeklyPlan() {
  return (
    <section id="timeline" className="mt-10">
      <div className="grid md:grid-cols-2 gap-6">
        {weeks.map((w, i) => (
          <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
            <h3 className="font-semibold text-slate-900">{w.title}</h3>
            <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-1">
              {w.items.map((it, idx) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>
            <div className="mt-3 inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-sm text-blue-700 ring-1 ring-blue-200">
              Outcome: {w.outcome}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeeklyPlan;
