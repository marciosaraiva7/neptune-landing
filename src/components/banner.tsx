/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Banner() {
  return (
    <div id="banner" className="scroll-smooth pt-[2.5rem] md:pt-0">
      <div className=" relative w-full items-center justify-between text-sm md:flex">
        <video
          src={"videos/banner.mp4"}
          autoPlay
          loop
          muted
          className="hidden h-[auto] w-full object-cover md:block"
          preload="true"
        />
        <video
          src={"videos/neptune-9-16.mp4"}
          autoPlay
          loop
          muted
          playsInline
          preload="true"
          className="h-[auto] w-full md:hidden"
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 md:justify-center md:pt-[5rem]">
          <p className="mb-16 text-center text-[3.2rem] font-bold  leading-[2.738rem] text-white md:mb-[1.25rem] md:w-[45rem] md:text-[3.438rem] md:leading-[3.438rem]">
            Transforme sua empresa com a gente!
          </p>
          <p className="mb-[4.375rem] w-[70%] text-center text-[1.3rem] leading-[1.5rem] text-white md:w-[36rem] md:text-[1.563rem] md:leading-[2.188rem]">
            Consultoria e desenvolvimento digital para sites e aplicativos sob
            medida para o seu negócio.
          </p>
          <Link href={"#contact"}>
            <Button className="relative mb-[8rem] flex h-[2.625rem] w-[14.25rem]  items-center justify-center rounded-full bg-[#FF465D] bg-no-repeat text-[1.25rem] leading-[1.625rem] transition-all hover:bg-red-900">
              Orçamento Grátis
            </Button>
          </Link>

          <span className=" z-20 mb-[0.438rem] text-white md:pt-[10rem]">
            Conheça nosso trabalho
          </span>
          <img className="z-20 md:mb-0" src="images/arrow-down.svg" />
        </div>
      </div>
    </div>
  );
}
