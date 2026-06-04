import { site } from "@/lib/site";

export default function sitemap() {
  const routes = [
    "",
    "/apartment-furnishing",
    "/furnished-rental-program",
    "/investor-property-owner",
    "/portfolio",
    "/contact",
    "/furniture-delivery",
    "/moving-services",
    "/junk-removal",
    "/apartment-staging",
    "/seo/apartment-furnishing-chicago",
    "/seo/furnished-apartments-chicago",
    "/seo/airbnb-furnishing-chicago",
    "/seo/furnished-finder-setup-chicago",
    "/seo/corporate-housing-furnishing-chicago",
    "/seo/travel-nurse-housing-furnishing-chicago",
    "/seo/rental-property-furnishing-chicago"
  ];
  return routes.map((route) => ({ url: `${site.domain}${route}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: route === "" ? 1 : 0.8 }));
}
