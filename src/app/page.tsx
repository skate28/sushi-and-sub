import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { MenuSection } from "@/components/menu-section";
import { Testimonials } from "@/components/testimonials";
import { Visit } from "@/components/visit";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Testimonials />
      <Faq />
      <Visit />
    </main>
  );
}
