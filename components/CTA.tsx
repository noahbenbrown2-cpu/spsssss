import Link from "next/link";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="bg-brand-red py-14 text-white">
      <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div><p className="text-3xl font-black tracking-tight">Ready to make your apartment move-in ready?</p><p className="mt-2 text-white/85">Get a quote for furnishing, delivery, setup, or cleanout support.</p></div>
        <div className="flex flex-wrap gap-3"><Link href="/contact" className="rounded-full bg-white px-6 py-3 font-black text-brand-red">Get a Quote</Link><a href={`tel:${site.phoneHref}`} className="rounded-full border border-white px-6 py-3 font-black text-white">Call Now</a></div>
      </div>
    </section>
  );
}
