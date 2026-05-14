import { Providers } from "./Providers";
import { SiteNav, SiteFooter, FAQ } from "@/features/site";
import { Hero, MaterialMarquee, Material, Gallery, SizeFit } from "@/features/product";
import { BuyBlock } from "@/features/cart";

export default function Home() {
  return (
    <Providers>
      <SiteNav />
      <main id="top-main">
        <Hero />
        <MaterialMarquee />
        <Material />
        <Gallery />
        <SizeFit />
        <BuyBlock />
        <FAQ />
      </main>
      <SiteFooter />
    </Providers>
  );
}
