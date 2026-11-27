// Centralized editable content for the Bean & Brew landing page.
// Update values here; components read from this file.

export const site = {
  name: 'Bean & Brew',
  tagline: 'Slow coffee, warm mornings',
  blurb: 'Small-batch roasts poured with care. Stop by for a quiet cup or catch up with friends.',
};

export const menu = [
  { name: 'Espresso', description: 'Double shot, rich and smooth', price: 3.0 },
  { name: 'Latte', description: 'Steamed milk over a double shot', price: 4.5 },
  { name: 'Cold Brew', description: 'Slow-steeped for 18 hours, served over ice', price: 4.75 },
];

export const hours = [
  { day: 'Monday', open: '7:00 AM', close: '5:00 PM' },
  { day: 'Tuesday', open: '7:00 AM', close: '5:00 PM' },
  { day: 'Wednesday', open: '7:00 AM', close: '5:00 PM' },
  { day: 'Thursday', open: '7:00 AM', close: '5:00 PM' },
  { day: 'Friday', open: '7:00 AM', close: '6:00 PM' },
  { day: 'Saturday', open: '8:00 AM', close: '6:00 PM' },
  { day: 'Sunday', open: null, close: null },
];

export const gallery = [
  { caption: 'Espresso pull', alt: 'Barista pulling an espresso shot', tone: 'bg-amber-200' },
  { caption: 'Latte art', alt: 'Latte with rosetta foam art', tone: 'bg-stone-200' },
  { caption: 'Cold brew pour', alt: 'Cold brew poured over ice', tone: 'bg-sky-200' },
  { caption: 'Cozy corner seating', alt: 'Corner table with armchairs', tone: 'bg-emerald-200' },
  { caption: 'Fresh pastries', alt: 'Tray of fresh-baked pastries', tone: 'bg-orange-200' },
  { caption: 'Beans roasting', alt: 'Coffee beans cooling after a roast', tone: 'bg-rose-200' },
];

export const contact = {
  address: '123 Main Street, Springfield',
  phone: '(555) 010-2233',
  email: 'hello@beanandbrew.example',
};
