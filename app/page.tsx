
import Hero from "@/components/Hero";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Video from "@/components/Video";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Pagination from "@/components/Pagination";

export default function Home() {

  return (
    <>
      <Hero />
      <AboutSectionOne />
      <Video />
      <Brands />
      <Pagination />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
}
