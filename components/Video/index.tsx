"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
    {/* 1. Web Design */}
    <section className="relative z-10 pb-20">
      <div className="container">
        <SectionTitle
          title="Short Video About Each Service"
          paragraph=""
          center
          
        />
        <p className="text-center text-3xl mb-5 text-iceblue"> Web Design </p>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.jpg" alt="video image" fill />
                <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
    </section>




{/* 2.Content Creation */}
<section className="relative z-10 pb-20">
<div className="container">
<SectionTitle
          title=""
          paragraph=""
          center
        
        />
<p className="text-center text-3xl mb-5 text-iceblue"> Content Creation </p>
  <div className="-mx-4 flex flex-wrap">
    <div className="w-full px-4">
      <div
        className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
        data-wow-delay=".15s"
      >
        <div className="relative aspect-[77/40] items-center justify-center">
          <Image src="/images/video/video.jpg" alt="video image" fill />
          <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
            <button
              onClick={() => setOpen(true)}
              className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
            >
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                className="fill-current"
              >
                <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<ModalVideo
  channel="youtube"
  autoplay={true}
  start={true}
  isOpen={isOpen}
  videoId="L61p2uyiMSo"
  onClose={() => setOpen(false)}
/>
</section>




{/* 3.Social Meida Management*/}
<section className="relative z-10 pb-20">
<div className="container">
<SectionTitle
    title=""
    paragraph=""
    center
   
  />
<p className="text-center text-3xl mb-5 text-iceblue"> Social Media Management </p>

  <div className="-mx-4 flex flex-wrap">
    <div className="w-full px-4">
      <div
        className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
        data-wow-delay=".15s"
      >
        <div className="relative aspect-[77/40] items-center justify-center">
          <Image src="/images/video/video.jpg" alt="video image" fill />
          <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
            <button
              onClick={() => setOpen(true)}
              className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
            >
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                className="fill-current"
              >
                <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<ModalVideo
  channel="youtube"
  autoplay={true}
  start={true}
  isOpen={isOpen}
  videoId="L61p2uyiMSo"
  onClose={() => setOpen(false)}
/>
</section>





{/* 3.Social Meida Management*/}
<section className="relative z-10 pb-20">
<div className="container">
<SectionTitle
    title=""
    paragraph=""
    center
  
  />
<p className="text-center text-3xl mb-5 text-iceblue"> Paid Advertising </p>

  <div className="-mx-4 flex flex-wrap">
    <div className="w-full px-4">
      <div
        className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
        data-wow-delay=".15s"
      >
        <div className="relative aspect-[77/40] items-center justify-center">
          <Image src="/images/video/video.jpg" alt="video image" fill />
          <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
            <button
              onClick={() => setOpen(true)}
              className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
            >
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                className="fill-current"
              >
                <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<ModalVideo
  channel="youtube"
  autoplay={true}
  start={true}
  isOpen={isOpen}
  videoId="L61p2uyiMSo"
  onClose={() => setOpen(false)}
/>
</section>

</>
  );
};

export default Video;
