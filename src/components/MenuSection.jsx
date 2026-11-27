import { menuItems } from '../data/site.js';

export default function MenuSection() {
  return (
    <section id="menu" className="bg-stone-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-2">Menu</h2>
        <p className="text-stone-600 mb-8">Simple drinks, made slowly.</p>
        {Array.isArray(menuItems) && menuItems.length > 0 ? (
          <ul className="divide-y divide-stone-200">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between py-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-stone-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-stone-600">{item.description}</p>
                </div>
                <span className="text-lg font-medium text-amber-700">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-stone-600">Menu coming soon</p>
        )}
      </div>
    </section>
  );
}
