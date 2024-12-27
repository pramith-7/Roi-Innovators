
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Video from "@/components/Video";
import Testimonials from "@/components/Testimonials";
import Pagination from "@/components/Paginations";
import ScrollTop from "@/components/ScrollToTop";
import Services from "@/components/Services";

export default function Home() {

  return (
    <>
      <ScrollTop />
      <Hero />
      <Video />
      <About />
      <Services />
      <Brands />
      <Pagination />
      <Testimonials />
      <Contact />
    </>
  );
}
