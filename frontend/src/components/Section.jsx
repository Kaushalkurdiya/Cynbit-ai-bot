export default function Section({ id, title, subtitle, children, tinted = false }) {
  return (
    <section id={id} className={tinted ? "bg-slate-50" : "bg-white"}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {title && (
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
            {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
