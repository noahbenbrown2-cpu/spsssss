import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-black py-12 text-white">
      <div className="container grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-2xl font-black">Set Piece <span className="text-brand-red">Solutions</span></p>
          <p className="mt-3 max-w-md text-neutral-300">Chicago apartment furnishing, furnished rental setup, delivery, staging, moving support, and cleanout services. One partner. One delivery. One solution.</p>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <a className="mt-3 block text-neutral-300 hover:text-white" href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
          <a className="mt-2 block text-neutral-300 hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div>
          <p className="font-bold">Pages</p>
          <div className="mt-3 flex flex-col gap-2 text-neutral-300">
            <Link href="/apartment-furnishing">Apartment Furnishing</Link>
            <Link href="/furnished-rental-program">Furnished Rental Program</Link>
            <Link href="/investor-property-owner">Owners & Investors</Link>
            <Link href="/contact">Get a Quote</Link>
          </div>
        </div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-6 text-sm text-neutral-400">© {new Date().getFullYear()} Set Piece Solutions. Chicago, IL.</div>
    </footer>
  );
}
