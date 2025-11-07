import { Book, Github, Globe } from "lucide-react";

const resources = [
  {
    title: "Frontend Essentials",
    links: [
      { label: "MDN Web Docs", href: "https://developer.mozilla.org/" },
      { label: "Flexbox Froggy", href: "https://flexboxfroggy.com/" },
      { label: "Tailwind Docs", href: "https://tailwindcss.com/docs" },
    ],
  },
  {
    title: "Backend & APIs",
    links: [
      { label: "FastAPI", href: "https://fastapi.tiangolo.com/" },
      { label: "HTTP Status Codes", href: "https://http.cat/" },
      { label: "JSON Schema", href: "https://json-schema.org/" },
    ],
  },
  {
    title: "Databases",
    links: [
      { label: "MongoDB Manual", href: "https://www.mongodb.com/docs/" },
      { label: "Mongoose Patterns", href: "https://mongoosejs.com/docs/guide.html" },
      { label: "Indexes 101", href: "https://www.mongodb.com/docs/manual/indexes/" },
    ],
  },
];

function Resources() {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-slate-900">Curated Resources</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        {resources.map((r, i) => (
          <div key={i} className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <Book className="h-4 w-4 text-purple-600" />
              <h3 className="font-medium">{r.title}</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {r.links.map((l, idx) => (
                <li key={idx}>
                  <a
                    className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Globe className="h-4 w-4" /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 text-sm text-slate-600">
        <div className="inline-flex items-center gap-2 rounded-md bg-slate-50 px-3 py-2 ring-1 ring-slate-200">
          <Github className="h-4 w-4" /> Tip: Read source code and open issues of libraries you use.
        </div>
      </div>
    </section>
  );
}

export default Resources;
