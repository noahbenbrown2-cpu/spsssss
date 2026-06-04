import { site } from "@/lib/site";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  return (
    <form action={site.formAction} method="POST" className="grid gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
      <input type="hidden" name="_subject" value="New Set Piece Solutions Quote Request" />
      <input type="hidden" name="_next" value={`${site.domain}/thank-you`} />
      <input type="hidden" name="_captcha" value="false" />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1 text-sm font-semibold">Name<input required name="name" className="rounded-xl border border-neutral-300 px-4 py-3 font-normal" /></label>
        <label className="grid gap-1 text-sm font-semibold">Phone<input required name="phone" className="rounded-xl border border-neutral-300 px-4 py-3 font-normal" /></label>
        <label className="grid gap-1 text-sm font-semibold">Email<input required type="email" name="email" className="rounded-xl border border-neutral-300 px-4 py-3 font-normal" /></label>
        <label className="grid gap-1 text-sm font-semibold">Service<select name="service" className="rounded-xl border border-neutral-300 px-4 py-3 font-normal"><option>Apartment Furnishing</option><option>Furnished Rental Setup</option><option>Airbnb Furnishing</option><option>Furniture Delivery</option><option>Moving</option><option>Junk Removal</option><option>Apartment Staging</option></select></label>
      </div>
      {!compact && <div className="grid gap-4 md:grid-cols-2"><label className="grid gap-1 text-sm font-semibold">Unit Type<select name="unit_type" className="rounded-xl border border-neutral-300 px-4 py-3 font-normal"><option>Studio</option><option>1 Bedroom</option><option>2 Bedroom</option><option>3 Bedroom</option><option>4 Bedroom</option><option>Other</option></select></label><label className="grid gap-1 text-sm font-semibold">Neighborhood / City<input name="location" className="rounded-xl border border-neutral-300 px-4 py-3 font-normal" placeholder="Chicago, Lincoln Park, etc." /></label></div>}
      <label className="grid gap-1 text-sm font-semibold">Project Details<textarea name="message" rows={compact ? 3 : 5} className="rounded-xl border border-neutral-300 px-4 py-3 font-normal" placeholder="Tell us what you need furnished, delivered, removed, or staged." /></label>
      <button className="rounded-full bg-brand-red px-6 py-4 font-black text-white hover:opacity-90" type="submit">Request My Quote</button>
      <p className="text-xs text-neutral-500">Your request will be sent to {site.email}. First submission may require FormSubmit email confirmation.</p>
    </form>
  );
}
