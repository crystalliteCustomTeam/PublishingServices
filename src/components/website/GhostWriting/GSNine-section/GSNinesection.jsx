import React from "react";
import { CTA } from "../..";
import Link from "next/link";
import GSCTA from "media/GSCTA.png";
import Image from "next/image";

export default function GSNinesection() {
  return (
    <section className="bg-primary">
      <div className="lg:py-[60px] py-[40px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8">
            <div className="flex flex-col justify-center">
              <h2 className="font-montserrat font-bold xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] text-white leading-tight">
                Make Your Story Shine With The Expertise Of A Ghostwriter
              </h2>
              <p className="font-comfortaa xl:text-[16px] md:text-[15px] text-sm text-white mt-4">
                Are you ready to write your book but need a little help? A ghostwriter can help you
                compose a professionally written book that stands out and gets noticed.
              </p>
              <div className="flex gap-3 mt-5">
                <Link
                  href="/"
                  className={`relative text-center items-center justify-start inline-blockoverflow-hidden transition-all bg-white  hover:bg-secondary  group w-[45dvw] sm:w-[130px] md:w-[150px] lg:w-[200px] xl:w-[240px] 2xl-w-[280px] h-[30px] sm:h-[30px] md:h-[30px] lg:h-[40px] xl:h-[50px] 2xl:h-[55px] content-center text-primary uppercase font-extrabold font-montserrat text-[2.5dvw] sm:text-[10px] md:text-[10px] lg:text-[13px] 2xl:text-[15px]`}
                >
                  <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-secondary "></span>
                  <span className="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-white">
                    Call Us Now
                  </span>
                </Link>
                <CTA Primary={false} Href={"#"} Text={"Click for a Free Quote"} />
              </div>
            </div>
            <div>
              <Image
                src={GSCTA}
                alt="BPS"
                width={418.84}
                height={470.4}
                className="mx-auto relative lg:mt-[-15%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
