import { useState } from "react";
import Section from "../components/Section.jsx";
import { API } from "../config.js";



const steps = [
  ["Pick a lab", "Choose one of six tracks, from Full Stack to UI/UX."],
  ["Get your repo", "Your portal account is created and you clone your lab repository."],
  ["Ship a PR a day", "Build, test and open a pull request every day."],
  ["Get reviewed and certified", "Mentors review your work. Finish the roadmap to earn a certificate."],
];

const tracks = [
  { name: "Full Stack SaaS Lab", project: "Project management app", stack: ["Next.js", "FastAPI", "PostgreSQL", "Docker"], text: "Build a Kanban-style app with auth, real-time updates and migrations." },
  { name: "Python Backend Lab", project: "REST API service", stack: ["Python", "FastAPI", "Redis", "Celery"], text: "Design APIs, add caching and handle background jobs." },
  { name: "AI & Vector Lab", project: "Support assistant", stack: ["Python", "Vector DB", "LLM APIs"], text: "Work with chunking, embeddings and retrieval for a support bot." },
  { name: "Frontend Ops Lab", project: "Ops dashboard", stack: ["React", "Next.js", "Tailwind"], text: "Build a performant dashboard and learn about rendering and caching." },
  { name: "QA & Automation Lab", project: "E-commerce test suite", stack: ["Playwright", "Pytest", "CI"], text: "Write end-to-end tests and plug them into a CI pipeline." },
  { name: "UI/UX Lab", project: "Design system", stack: ["Figma", "Tokens", "Accessibility"], text: "Build reusable components with dark mode and keyboard support." },
];

const roadmap = [
  ["Week 1", "Environment & setup", "Fork the repo, set up tools and send your first pull request."],
  ["Week 2", "Bug hunting & tests", "Reproduce bugs from logs and write tests that cover them."],
  ["Weeks 3-4", "Core architecture", "Authentication, roles, database schemas and clean APIs."],
  ["Weeks 5-6", "Speed & concurrency", "Caching, query tuning and background queues."],
  ["Weeks 7-8", "Docker & capstone", "Containers, CI/CD workflows and a final release."],
];

const faqs = [
  ["Is it fully remote?", "Yes. You work asynchronously from your own machine and submit pull requests through the portal."],
  ["How much time do I need daily?", "About 1.5 to 2 hours a day."],
  ["What if I have exams?", "You can request a pause (exam freeze) and resume afterwards."],
  ["Will my college accept it?", "A training letter and a verifiable certificate are provided."],
  ["Do I own the code I write?", "Yes, your work lives in your own GitHub account."],
  ["Can beginners join?", "Basic programming knowledge is recommended; the roadmap starts with setup and git."],
];

export default function BitElevate() {
  const [active, setActive] = useState(0);
  const [form, setForm] = useState({ name: "", college: "", email: "", phone: "", lab: tracks[0].name, goals: "" });
  const [status, setStatus] = useState("");
  const track = tracks[active];

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus("Sending...");
    try {


const res = await fetch(`${API}/api/enroll`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "Thanks! We received your request." : "Something went wrong.");
    } catch {
      setStatus("Could not reach the server.");
    }
  }

  const input = "w-full border border-slate-300 rounded-md px-3 py-2 text-sm";

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-soft">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <p className="text-sm text-brand font-medium">Remote engineering internship</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900">Stop watching tutorials. Start building.</h1>
          <p className="mt-5 text-slate-600">
            Learn by working in real repositories: fix bugs, write tests and ship code through a professional workflow.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-slate-700">
            {["100% remote", "Real GitHub repos", "Daily PR reviews", "Flexible hours", "College credit support"].map((t) => (
              <span key={t} className="bg-white border border-slate-200 rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
          <a href="#enroll" className="inline-block mt-8 bg-brand text-white px-6 py-3 rounded-md hover:bg-brand-dark">Reserve your spot</a>
          <div className="mt-10 flex justify-center gap-10 text-center">
            <div><p className="text-2xl font-bold text-brand">1,000+</p><p className="text-sm text-slate-600">Interns graduated</p></div>
            <div><p className="text-2xl font-bold text-brand">88%</p><p className="text-sm text-slate-600">Placement advancement</p></div>
          </div>
        </div>
      </section>

      {/* Why different */}
      <Section title="Why it is different" subtitle="Tutorials teach you to follow. Jobs ask you to ship.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="font-semibold">Recorded courses</h3>
            <p className="mt-2 text-sm text-slate-600">You watch someone else build. There is no repo of yours and no review.</p>
          </div>
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="font-semibold">Certificate-only internships</h3>
            <p className="mt-2 text-sm text-slate-600">You get a letter, but the work behind it is hard to see or verify.</p>
          </div>
          <div className="border-2 border-brand rounded-lg p-6 bg-brand-soft">
            <h3 className="font-semibold text-brand">BitElevate</h3>
            <p className="mt-2 text-sm text-slate-700">A real repo, a pull request every day, mentor feedback and a certificate with a QR code.</p>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section tinted title="How it works" subtitle="Four steps from sign-up to certificate.">
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(([t, d], i) => (
            <li key={t} className="bg-white border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-brand font-semibold">Step {i + 1}</p>
              <h3 className="font-semibold mt-1">{t}</h3>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Tracks */}
      <Section title="Internship tracks" subtitle="Pick a lab to see the project and stack.">
        <div className="flex flex-wrap gap-2 mb-6">
          {tracks.map((t, i) => (
            <button key={t.name} onClick={() => { setActive(i); setForm({ ...form, lab: t.name }); }}
              className={"px-4 py-2 rounded-md text-sm border " + (i === active ? "bg-brand text-white border-brand" : "bg-white text-slate-700 border-slate-300")}>
              {t.name}
            </button>
          ))}
        </div>
        <div className="border border-slate-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold">{track.project}</h3>
          <p className="mt-2 text-slate-600">{track.text}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {track.stack.map((s) => <span key={s} className="bg-slate-100 text-sm px-3 py-1 rounded">{s}</span>)}
          </div>
          <a href="#enroll" className="inline-block mt-6 text-brand font-medium underline">Apply for this track</a>
        </div>
      </Section>

      {/* Roadmap */}
      <Section tinted title="60-day roadmap">
        <div className="space-y-4">
          {roadmap.map(([w, t, d]) => (
            <div key={w} className="bg-white border border-slate-200 rounded-lg p-5 flex gap-4">
              <p className="w-24 shrink-0 text-sm font-semibold text-brand">{w}</p>
              <div><h3 className="font-semibold">{t}</h3><p className="text-sm text-slate-600">{d}</p></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Portal */}
      <Section title="The intern portal" subtitle="One dashboard for everything.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["Daily sprint tasks", "A clear spec, test steps and branch rules each day."],
            ["PR review loop", "Submit a link and get inline mentor feedback."],
            ["War room challenges", "Practice debugging production-style incidents."],
            ["Exam freeze", "Pause your streak during college exams."],
          ].map(([t, d]) => (
            <div key={t} className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing + form */}
      <Section tinted id="enroll" title="One fee, instant enrollment" subtitle="All-inclusive for the full 60 days.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <p className="text-4xl font-bold text-brand">₹3,999</p>
            <p className="text-sm text-slate-500">One-time, fully remote</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>Assigned GitHub lab repository</li>
              <li>60 daily tasks with test suites</li>
              <li>Mentor review on every pull request</li>
              <li>Training letter and QR-verified certificate</li>
              <li>14-day exam freeze</li>
            </ul>
          </div>

          <form onSubmit={submit} className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
            <input required className={input} placeholder="Full name" value={form.name} onChange={update("name")} />
            <input required className={input} placeholder="College / university" value={form.college} onChange={update("college")} />
            <input required type="email" className={input} placeholder="Email" value={form.email} onChange={update("email")} />
            <input required className={input} placeholder="Phone / WhatsApp" value={form.phone} onChange={update("phone")} />
            <select className={input} value={form.lab} onChange={update("lab")}>
              {tracks.map((t) => <option key={t.name}>{t.name}</option>)}
            </select>
            <textarea rows="3" className={input} placeholder="Your career goals" value={form.goals} onChange={update("goals")} />
            <button type="submit" className="w-full bg-brand text-white py-3 rounded-md hover:bg-brand-dark">Request enrollment</button>
            {status && <p className="text-sm text-slate-600">{status}</p>}
          </form>
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Frequently asked questions">
        <div className="max-w-3xl space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="border border-slate-200 rounded-lg p-4">
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-2 text-sm text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
