import { siteInfo } from '../data/site.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold text-stone-100">{siteInfo.name}</p>
          <p className="text-sm text-stone-400">{siteInfo.tagline}</p>
        </div>
        <p className="text-sm text-stone-400">&copy; {year} {siteInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
