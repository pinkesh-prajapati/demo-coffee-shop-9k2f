import { site } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        <p className="text-lg font-semibold text-amber-200">{site.name}</p>
        <p className="mt-1 text-sm text-stone-400">{site.tagline}</p>
        <p className="mt-4 text-xs text-stone-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
