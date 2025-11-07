import Header from "./components/Header";
import WeeklyPlan from "./components/WeeklyPlan";
import DailyRoutine from "./components/DailyRoutine";
import Resources from "./components/Resources";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Header />
        <WeeklyPlan />
        <DailyRoutine />
        <Resources />
        <footer className="mt-16 text-center text-sm text-slate-500">
          Built for your full‑stack journey — stay consistent and ship weekly.
        </footer>
      </div>
    </div>
  );
}

export default App;
