import { useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!EMAIL_RE.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim()) next.message = 'Please enter a message.';
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (status === 'submitting') return;
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setStatus('submitting');
    // No backend available: simulate a short submit then show a success stub.
    setTimeout(() => {
      setStatus('success');
      setValues({ name: '', email: '', message: '' });
    }, 600);
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-stone-100 py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 id="contact-heading" className="text-2xl font-bold text-stone-900 sm:text-3xl">
          Contact us
        </h2>
        <p className="mt-2 text-stone-600">
          Questions, catering, or just saying hi? Drop us a message.
        </p>

n        {status === 'success' ? (
          <div
            role="status"
            aria-live="polite"
            className="mt-8 rounded-lg bg-green-100 p-4 text-green-800"
          >
            Thanks for reaching out! We'll get back to you soon.
          </div>
        ) : (
          <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-stone-700">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 focus:border-amber-600 focus:outline-none"
              />
              {errors.name && (
                <p id="contact-name-error" className="mt-1 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-stone-700">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 focus:border-amber-600 focus:outline-none"
              />
              {errors.email && (
                <p id="contact-email-error" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-stone-700">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                required
                value={values.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 focus:border-amber-600 focus:outline-none"
              />
              {errors.message && (
                <p id="contact-message-error" className="mt-1 text-sm text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-md bg-amber-700 px-5 py-2 font-medium text-white hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
