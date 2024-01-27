/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/ui/button";
import Link from "next/link";
import ImageBanner from "./image-banner";

export default function Banner() {
  return (
    <>
      <div
        id="banner"
        className="mt-[-2rem] scroll-smooth md:mt-[-5rem] md:pt-[2.5rem]"
      >
        <div className=" relative w-full items-center justify-between bg-[#08205E] text-sm md:flex md:h-auto">
          <ImageBanner
            image={"images/banner.png"}
            imageStyleClass="hidden h-[auto] w-full object-cover md:block"
            preview={undefined}
            alt={""}
            divStyleClass={"hidden md:max-h-[770px] w-full md:block"}
            bgColor={""}
          />
          <video
            src={"videos/neptune-9-16.mp4"}
            autoPlay
            loop
            muted
            playsInline
            preload="true"
            className="h-auto w-full md:hidden"
          />
          <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-end bg-black bg-opacity-20 md:py-[5rem]  md:pt-[5rem]">
            <p className="mb-16 text-center text-[2.9rem] font-bold  leading-[2.738rem] text-white md:mb-[1.25rem] md:w-[45rem] md:text-[3.438rem] md:leading-[3.438rem]">
              Transforme seu negócio com aplicações digitais
            </p>
            <p className="mb-[4.375rem] w-[70%] text-center text-[1.1rem] leading-[1.5rem] text-white md:w-[36rem] md:text-[1.563rem] md:leading-[2.188rem]">
              A transformação digital é uma realidade que está transformando a
              maneira como as empresas operam.
            </p>
            <Link href={"#contact"}>
              <Button className="relative mb-[8rem] flex h-[2.625rem] w-[14.25rem]  items-center justify-center rounded-full bg-[#FF465D] bg-no-repeat text-[1.25rem] leading-[1.625rem] transition-all hover:bg-red-900 md:mb-[5rem]">
                Orçamento Grátis
              </Button>
            </Link>

            <span className=" z-20 mb-[0.438rem] text-white ">
              Conheça nosso trabalho
            </span>
            <img className="z-20 " src="images/arrow-down.svg" />
          </div>
        </div>
      </div>
      <div
        className="z-0 mt-[-5rem] h-[5rem]"
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent,#ffffff4D)",
        }}
      ></div>
    </>
  );
}
