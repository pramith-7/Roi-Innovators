import Hero from "@/components/Hero";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Video from "@/components/Video";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Inter } from "@next/font/google";
import Pagination from "@/components/Pagination";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Roadmap /> */}
      <Hero />
      <ScrollUp />
      <AboutSectionOne />
      <Video />
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
