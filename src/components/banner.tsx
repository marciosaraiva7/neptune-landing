/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Banner() {
  const [isVideoLoaded, setVideoLoaded] = useState(false);
  const [isVideoLoadedMobile, setVideoLoadedMobile] = useState(false);
  return (
    <>
      <div
        id="banner"
        className="mt-[-2rem] scroll-smooth md:mt-[-5rem] md:pt-[2.5rem]"
      >
        {!(isVideoLoaded && isVideoLoadedMobile) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white"></div>
        )}
        <div className=" relative w-full items-center justify-between text-sm md:flex md:h-auto">
          <video
            src={"videos/banner.mp4"}
            autoPlay
            loop
            muted
            playsInline
            className="hidden h-[770px] w-full object-cover md:block"
            onLoadedData={() => setVideoLoaded(true)}
          />
          <video
            src={"videos/neptune-9-16.mp4"}
            autoPlay
            loop
            muted
            playsInline
            className="min-h-[735px] w-full object-cover md:hidden"
            onLoadedData={() => setVideoLoadedMobile(true)}
          />
          <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-end bg-black bg-opacity-20 md:py-[5rem]  md:pt-[5rem]">
            <p className="mb-16 px-[0.5rem] text-center  text-[2.9rem] font-bold  leading-[2.738rem] text-white md:mb-[1.25rem] md:w-[45rem] md:text-[3.438rem] md:leading-[3.438rem]">
              Transforme seu negócio com aplicações digitais
            </p>
            <p className="mb-[4.375rem] w-[70%] text-center text-[1.1rem] leading-[1.5rem] text-white md:w-[40%] md:text-[1.563rem] md:leading-[2.188rem]">
              A transformação digital é uma realidade que está transformando a
              maneira como as empresas operam.
            </p>
            <Link href={"#contact"}>
              <Button
                style={{
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                }}
                className="rounded- relative mb-[8rem] flex min-h-[2.625rem] items-center justify-center bg-[#FF465D] bg-no-repeat px-[2rem]  text-[1rem]  text-[#FFFFFF] transition-all hover:bg-[#a33d3d] hover:text-[#ffffff] md:mb-[5rem]"
              >
                Solicitar orçamento
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
