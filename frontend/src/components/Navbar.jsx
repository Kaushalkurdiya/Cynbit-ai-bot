import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/#services" },
  { label: "Products", to: "/#products" },
  { label: "BitElevate", to: "/bitelevate" },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-brand">Cynbit</Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) =>
            l.to.includes("#") ? (
              <Link key={l.label} to={l.to} className="text-slate-600 hover:text-brand">{l.label}</Link>
            ) : (
              <NavLink key={l.label} to={l.to}
                className={({ isActive }) => (isActive ? "text-brand font-medium" : "text-slate-600 hover:text-brand")}>
                {l.label}
              </NavLink>
            )
          )}
          <Link to="/bitelevate#enroll" className="bg-brand text-white px-4 py-2 rounded-md hover:bg-brand-dark">
            Get started
          </Link>
        </nav>

        <button className="md:hidden border border-slate-300 rounded px-3 py-1 text-sm" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 px-4 py-3 flex flex-col gap-3 text-sm">
          {links.map((l) => (
            <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="text-slate-700">{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
