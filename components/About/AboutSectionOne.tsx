import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container px-10">
        <div className="pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">

              <div className="absolute opacity-55 justify-center z-[-1] transition -translate-x-96">
                <div className="w-[400px] h-[800px] rounded-full blur-[100px] bg-gradientbg2 "> </div>
              </div>
          

              <h1 className="mb-3 mbtext-3xl font-bold !leading-tight text-black dark:text-white text-3xl md:text-[45px]">
                About Our Company
              </h1>
              <p className="text-justify !leading-relaxed text-body-color md:text-lg text-sm">
                We were just four boys when we hit rock bottom, our lowest point. It dawned on us that inevitably, a day would come when
                we would have to take care of our families and provide for them. It was at this juncture that one of our friends had an
                ingenious idea to offer a service tailored for average business owners, a means to enhance their business sales.
              </p>

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >

              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">

            <div className="absolute opacity-55 right-0 justify-center z-[-1] transition translate-x-96">
                <div className="w-[400px] h-[800px] rounded-full blur-[100px] bg-gradientbg "> </div>
              </div>

              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-5 border-2 border-iceblue hover:scale-105 transition-all duration-300"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
