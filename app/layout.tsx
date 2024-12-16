"use client";
import Footer from "@/components/Footer";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { useEffect } from "react";
import Lenis from "lenis";

export default function RootLayout({

  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time:any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-gradient-black-blue">
        <Providers> 
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
