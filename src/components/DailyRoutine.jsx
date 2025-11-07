function DailyRoutine() {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-slate-900">Daily Study Routine (2 hours)</h2>
      <div className="mt-4 grid md:grid-cols-4 gap-4">
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-500">10 min</p>
          <h3 className="font-medium">Warm‑up</h3>
          <p className="text-slate-600 text-sm">Review notes, skim yesterday’s code, set today’s goal.</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-500">60 min</p>
          <h3 className="font-medium">Focused Build</h3>
          <p className="text-slate-600 text-sm">Implement one feature end‑to‑end. No distractions.</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-500">30 min</p>
          <h3 className="font-medium">Deliberate Practice</h3>
          <p className="text-slate-600 text-sm">Katas: array methods, async, forms, DB queries.</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-500">20 min</p>
          <h3 className="font-medium">Reflect & Share</h3>
          <p className="text-slate-600 text-sm">Write a quick log of what you learned and blockers.</p>
        </div>
      </div>
    </section>
  );
}

export default DailyRoutine;
