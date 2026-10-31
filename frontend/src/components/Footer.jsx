import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <p className="text-xl font-bold text-white mb-3">Cynbit</p>
          <p>Software, AI automation and training from Jaipur.</p>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Explore</p>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bitelevate">BitElevate</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#products">Products</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Company</p>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Blog</li>
            <li>Privacy policy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Contact</p>
          <p>opportunities@cynbit.in</p>
          <p className="mt-2">Pratap Nagar, Jaipur, Rajasthan</p>
        </div>
      </div>
      <p className="border-t border-slate-700 text-center text-xs py-4">
        © 2026 Cynbit replica. Practice project, not the official site.
      </p>
    </footer>
  );
}
