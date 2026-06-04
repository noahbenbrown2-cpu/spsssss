import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Set Piece Solutions | Apartment Furnishing Chicago",
    template: "%s | Set Piece Solutions"
  },
  description: "Chicago apartment furnishing, furnished rental setup, Airbnb furnishing, furniture delivery, staging, moving support, and junk removal.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Set Piece Solutions",
    description: "From empty apartment to move-in ready in Chicago.",
    url: site.domain,
    siteName: site.name,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 md:hidden">
          <a href={`tel:${site.phoneHref}`} className="rounded-full bg-brand-red px-5 py-3 text-center font-black text-white shadow-soft">Call</a>
          <a href="/contact" className="rounded-full bg-brand-black px-5 py-3 text-center font-black text-white shadow-soft">Quote</a>
        </div>
        <Footer />
      </body>
    </html>
  );
}
