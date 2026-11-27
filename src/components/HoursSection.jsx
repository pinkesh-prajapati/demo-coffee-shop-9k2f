import { hours } from '../data/site.js';

function formatHours(entry) {
  if (entry.open == null || entry.close == null) {
    return 'Closed';
  }
  return `${entry.open} – ${entry.close}`;
}

export default function HoursSection() {
  return (
    <section id="hours" className="bg-stone-100 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold text-stone-900">Opening Hours</h2>
        <p className="mt-2 text-stone-600">Come by for a slow cup — we'd love to see you.</p>
        <dl className="mt-8 divide-y divide-stone-200 rounded-lg bg-white shadow-sm">
          {hours.map((entry) => (
            <div key={entry.day} className="flex items-center justify-between px-4 py-3">
              <dt className="font-medium text-stone-800">{entry.day}</dt>
              <dd className="text-stone-600">{formatHours(entry)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
