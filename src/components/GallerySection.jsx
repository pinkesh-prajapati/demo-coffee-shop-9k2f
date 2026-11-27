import { galleryItems } from '../data/site.js';

export default function GallerySection() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-16 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="gallery-heading" className="text-3xl font-bold text-stone-800 mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              role="img"
              aria-label={item.alt}
              className={`aspect-[4/3] rounded-lg ${item.tone} flex items-center justify-center`}
            >
              <span className="text-stone-500 text-sm text-center px-2">{item.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
