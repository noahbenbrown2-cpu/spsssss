import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  ["Apartment Furnishing", "/apartment-furnishing"],
  ["Packages", "/#packages"],
  ["Owners", "/investor-property-owner"],
  ["Contact", "/contact"]
  // removed ["Portfolio", "/portfolio"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-black tracking-tight text-xl text-brand-black">Set Piece <span className="text-brand-red">Solutions</span></Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-neutral-700 lg:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-brand-red">{label}</Link>)}
        </nav>
        <a className="rounded-full bg-brand-red px-4 py-2 text-sm font-bold text-white shadow-sm hover:opacity-90" href={`tel:${site.phoneHref}`}>Call {site.phoneDisplay}</a>
      </div>
    </header>
  );
}
