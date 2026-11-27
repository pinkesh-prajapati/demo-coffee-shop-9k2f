import { siteInfo } from '../data/site.js';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[70vh] items-center justify-center bg-stone-900 text-stone-50"
    >
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {siteInfo.name}
        </h1>
        <p className="mt-4 text-xl text-stone-300 sm:text-2xl">
          {siteInfo.tagline}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="w-full rounded-full bg-amber-600 px-6 py-3 font-medium text-white transition hover:bg-amber-500 sm:w-auto"
          >
            View our menu
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border border-stone-500 px-6 py-3 font-medium text-stone-100 transition hover:bg-stone-800 sm:w-auto"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
