import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";

const pillars = [
  { title: "Custom IT infrastructure", text: "Software architecture and cloud setups built to grow with your business.", items: ["AI automation", "Web & mobile apps", "Cloud systems", "Technical SEO"] },
  { title: "Product suite", text: "Ready-to-use tools built for specific business problems.", items: ["Career intelligence tool", "AI review assistant", "Property management app"] },
  { title: "Community impact", text: "We support IT teaching in rural areas and government schools through a trust partnership.", items: ["Computer classes", "School outreach"] },
];

const edge = [
  { title: "Startup speed", text: "Fast delivery with little red tape." },
  { title: "AI-first thinking", text: "Automation is considered from day one." },
  { title: "End-to-end dev", text: "One team from design to deployment." },
  { title: "ROI focus", text: "We build for measurable business results." },
];

const domains = [
  { title: "Software engineering", text: "Full-stack development and cloud migration." },
  { title: "Digital marketing & SEO", text: "Technical SEO combined with creative campaigns." },
  { title: "AI automation", text: "Custom LLM apps and autonomous agents." },
  { title: "Cloud infrastructure", text: "Secure deployments on AWS and Azure." },
];

const process = [
  ["Discovery & audit", "We study your workflows and find the bottlenecks."],
  ["Strategy & blueprint", "A roadmap covering architecture, AI use and scaling."],
  ["Design", "Clear, user-focused interfaces for complex logic."],
  ["Implementation", "Clean, maintainable code built for production."],
  ["Quality check", "Testing and security review before launch."],
  ["Deployment & growth", "Launch, then keep improving based on results."],
];

const stats = [["98%", "Retention"], ["24/7", "Support"], ["3x", "ROI uplift"], ["6+", "Countries served"]];

const testimonials = [
  { name: "Client A", tag: "Marketing agency", result: "+40% leads", quote: "Their technical work noticeably improved our organic lead flow." },
  { name: "Client B", tag: "SaaS company", result: "50k+ users", quote: "The automation handled heavy traffic without slowing down." },
  { name: "Client C", tag: "Retail brand", result: "99.9% uptime", quote: "The cloud setup gave us the stability we needed to expand." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-soft">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Building the future with AI automation.
            </h1>
            <p className="mt-5 text-slate-600">
              We are a Jaipur-based team building AI agents, custom software and scalable
              business platforms for companies that want to grow.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="bg-brand text-white px-5 py-3 rounded-md hover:bg-brand-dark">Start discovery</a>
              <a href="#services" className="border border-brand text-brand px-5 py-3 rounded-md">View services</a>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <div className="flex justify-between text-sm"><span>Automation efficiency</span><span className="font-semibold">95%</span></div>
            <div className="h-2 bg-slate-100 rounded"><div className="h-2 bg-brand rounded w-[95%]" /></div>
            <div className="flex justify-between text-sm"><span>Runtime status</span><span className="font-semibold text-green-600">Active</span></div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <Section id="services" title="Our foundations" subtitle="Technology, software products and social responsibility under one roof.">
        <div id="products" className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.text}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-700 list-disc list-inside">
                {p.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* BitElevate promo */}
      <Section tinted>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">BitElevate</h2>
            <p className="mt-3 text-slate-600">
              A training program that connects classroom learning with real industry work.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              <li><b>Certification:</b> a verifiable certificate on completion.</li>
              <li><b>Mentorship:</b> feedback from experienced engineers.</li>
              <li><b>Projects:</b> build real systems, not toy apps.</li>
              <li><b>Placement support:</b> interview and career guidance.</li>
            </ul>
            <Link to="/bitelevate" className="inline-block mt-6 bg-brand text-white px-5 py-3 rounded-md hover:bg-brand-dark">
              Join the program
            </Link>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-8 text-center">
            <p className="text-5xl font-bold text-brand">1000+</p>
            <p className="mt-2 text-slate-600">Interns trained</p>
          </div>
        </div>
      </Section>

      {/* Edge */}
      <Section title="Startup speed, enterprise discipline" subtitle="Agile delivery with structured execution.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {edge.map((e) => (
            <div key={e.title} className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold">{e.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{e.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Domains + stats */}
      <Section tinted title="Domain expertise">
        <div className="grid sm:grid-cols-2 gap-6">
          {domains.map((d) => (
            <div key={d.title} className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold">{d.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{d.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(([n, l]) => (
            <div key={l}>
              <p className="text-3xl font-bold text-brand">{n}</p>
              <p className="text-sm text-slate-600">{l}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section title="How we work" subtitle="A six-step process from first call to launch.">
        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map(([t, d], i) => (
            <li key={t} className="border border-slate-200 rounded-lg p-5">
              <p className="text-sm text-brand font-semibold">Step {i + 1}</p>
              <h3 className="font-semibold mt-1">{t}</h3>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Testimonials */}
      <Section tinted title="What clients say">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-white border border-slate-200 rounded-lg p-6">
              <p className="text-brand font-semibold">{t.result}</p>
              <blockquote className="mt-2 text-sm text-slate-700">"{t.quote}"</blockquote>
              <figcaption className="mt-4 text-sm font-medium">{t.name} <span className="text-slate-500 font-normal">· {t.tag}</span></figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-brand text-white">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold">Ready to build your next product?</h2>
          <p className="mt-3 text-indigo-100">Tell us about your idea and we will suggest a plan.</p>
          <a href="mailto:opportunities@cynbit.in" className="inline-block mt-6 bg-white text-brand px-5 py-3 rounded-md font-medium">
            Email us
          </a>
        </div>
      </section>
    </>
  );
}
