
import Hero from "@/components/Hero";
import AboutSectionOne from "@/components/About";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Video from "@/components/Video";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Pagination from "@/components/Paginations";
import ScrollTop from "@/components/ScrollToTop";
import Services from "@/components/Services";

export default function Home() {

  return (
    <>
      <ScrollTop />
      <Hero />
      <AboutSectionOne />
      <Video />
      <Services />
      <Brands />
      <Pagination />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
}
