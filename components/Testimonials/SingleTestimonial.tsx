import { Testimonial } from "@/types/testimonial";
import Image from "next/image";


const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const {  name, image } = testimonial;


  return (
    <div className="w-full mt-10 ">
      <div
        className="wow fadeInUp rounded-xl bg-black/70 border border-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] p-4 md:mx-0 mx-10 lg:px-5 xl:px-8 h-[400px] hover:-translate-y-4 transition-all duration-500 ease-in-out"
        data-wow-delay=".1s"
      >
         <div className="relative w-[250px] h-[250px] m-auto">
            <Image src={image} alt={name} fill />
          </div>
        
        
        <div className="flex items-center border-t-2 border-white">
          <div className="w-full mt-6">
            <h5 className="mb-1 text-lg font-semibold text-white lg:text-base xl:text-xl text-center ">
              {name}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
