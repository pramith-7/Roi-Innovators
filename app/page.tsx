import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Inter } from "@next/font/google";
import Pagination from "@/components/pagination";
import Roadmap from "@/components/Roadmap/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Roadmap />
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Brands />
      <Pagination />
      {/* <Features /> */}
      {/* <Video />   */}
      <Pricing />
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
