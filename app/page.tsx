import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { CTA } from "@/components/CTA";
import { packages, services, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="gradient-hero py-20 text-white md:py-28">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white/85">Chicago apartment furnishing • rental setup • delivery</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-tight md:text-7xl">Turn an empty apartment into a move-in-ready rental in days.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Set Piece Solutions sources, delivers, assembles, arranges, and removes furniture so landlords, hosts, and renters do not have to coordinate five different vendors.</p>
            <div className="mt-8 flex flex-wrap gap-4"><Link href="/contact" className="rounded-full bg-brand-red px-7 py-4 font-black text-white">Get a Quote</Link><a href={`tel:${site.phoneHref}`} className="rounded-full border border-white/30 px-7 py-4 font-black text-white">Call {site.phoneDisplay}</a></div>
          </div>
          <div className="rounded-[2rem] bg-white/10 p-3 shadow-soft ring-1 ring-white/15"><div className="rounded-[1.5rem] bg-white p-6 text-brand-black"><p className="text-sm font-black uppercase tracking-widest text-brand-red">Turnkey setup</p><p className="mt-3 text-3xl font-black">One quote. One delivery. One finished space.</p><div className="mt-6 grid gap-3 text-sm text-neutral-700"><p>✓ Furniture sourcing</p><p>✓ Delivery and upstairs carry</p><p>✓ Assembly and placement</p><p>✓ Old furniture removal option</p><p>✓ Furnished rental packages</p></div></div></div>
        </div>
      </section>

      <section id="packages" className="py-20">
        <div className="container">
          <div className="max-w-3xl"><p className="font-black uppercase tracking-widest text-brand-red">Move-In Ready Packages</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Studio to 4-bedroom furnishing packages.</h2><p className="mt-4 text-lg text-neutral-600">Built to feel like a SaaS-style turnkey service: pick the unit size, tell us the timeline, and we handle the rest.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => <div key={p.name} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"><h3 className="text-2xl font-black">{p.name}</h3><p className="mt-2 font-bold text-brand-red">{p.price}</p><p className="mt-3 text-neutral-600">{p.description}</p><ul className="mt-5 grid gap-2 text-sm text-neutral-700">{p.items.map((item) => <li key={item}>✓ {item}</li>)}</ul><Link href="/contact" className="mt-6 inline-flex rounded-full bg-brand-black px-5 py-3 font-bold text-white">Request Quote</Link></div>)}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-20">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div><p className="font-black uppercase tracking-widest text-brand-red">For owners and hosts</p><h2 className="mt-3 text-4xl font-black tracking-tight">Create furnished rental income without building an operations team.</h2><p className="mt-5 text-lg leading-8 text-neutral-700">We help landlords, multifamily owners, Furnished Finder hosts, travel nurse housing providers, corporate housing operators, and Airbnb owners convert empty units into polished furnished rentals.</p><Link href="/investor-property-owner" className="mt-7 inline-flex rounded-full bg-brand-red px-6 py-4 font-black text-white">View Owner Program</Link></div>
          <div className="grid gap-4 sm:grid-cols-2"><div className="rounded-3xl bg-white p-6 shadow-sm"><p className="text-3xl font-black">Revenue</p><p className="mt-2 text-neutral-600">A furnished unit can support different rental strategies and higher convenience value.</p></div><div className="rounded-3xl bg-white p-6 shadow-sm"><p className="text-3xl font-black">Speed</p><p className="mt-2 text-neutral-600">One coordinated setup instead of scattered pickups and vendors.</p></div><div className="rounded-3xl bg-white p-6 shadow-sm"><p className="text-3xl font-black">Occupancy</p><p className="mt-2 text-neutral-600">Better photos and move-in readiness can make units easier to market.</p></div><div className="rounded-3xl bg-white p-6 shadow-sm"><p className="text-3xl font-black">Ease</p><p className="mt-2 text-neutral-600">We handle sourcing, hauling, assembly, placement, and old item removal.</p></div></div>
        </div>
      </section>

      <section className="py-20"><div className="container"><p className="font-black uppercase tracking-widest text-brand-red">Services</p><h2 className="mt-3 text-4xl font-black tracking-tight">Furnishing first. Logistics when you need them.</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((s)=><Link key={s.href} href={s.href} className="rounded-3xl border border-neutral-200 p-6 hover:border-brand-red"><h3 className="text-xl font-black">{s.title}</h3><p className="mt-3 text-neutral-600">{s.text}</p></Link>)}</div></div></section>

      <section className="bg-neutral-950 py-20 text-white"><div className="container grid gap-10 lg:grid-cols-2"><div><p className="font-black uppercase tracking-widest text-brand-red">Get started</p><h2 className="mt-3 text-4xl font-black tracking-tight">Tell us what you need furnished.</h2><p className="mt-4 text-neutral-300">Use this form for apartment furnishing, furnished rental setup, Airbnb setup, delivery, staging, moving support, or cleanout requests.</p></div><QuoteForm compact /></div></section>
      <CTA />
    </>
  );
}
