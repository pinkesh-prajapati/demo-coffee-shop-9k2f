import Hero from './components/Hero.jsx';
import MenuSection from './components/MenuSection.jsx';
import HoursSection from './components/HoursSection.jsx';
import GallerySection from './components/GallerySection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-amber-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Hero />
      <main id="main-content">
        <MenuSection />
        <HoursSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
