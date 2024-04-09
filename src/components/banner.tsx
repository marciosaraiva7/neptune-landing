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
        className="font-graphik mt-[-2rem] scroll-smooth md:mt-[-5rem] md:pt-[2.5rem]"
      >
        {isVideoLoaded && isVideoLoadedMobile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white"></div>
        )}
        <div className=" relative w-full items-center justify-between text-sm md:flex md:h-auto">
          <video
            src={"https://neuralink.com/assets/static/home.2e4b0118.webm"}
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
          <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-20 md:py-[5rem]  md:pt-[5rem]">
            {/* <p className="font-graphik mb-16 px-[0.5rem] text-left text-[2.9rem] font-semibold  leading-[2.738rem] tracking-tight text-white md:mb-[1.25rem] md:w-[45rem] md:text-[4.6rem] md:leading-[4.4rem]">
              Transforme seu negócio com aplicações digitais
            </p> */}
          </div>
          <button className="absolute bottom-8 left-1/2 flex h-[4rem] w-[4rem] -translate-x-1/2 transform cursor-pointer items-center justify-center rounded-full bg-transparent backdrop-blur-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
              fill="#D3D3D3"
            >
              <path d="M480-97q-8 0-15-2.5t-13-8.5L228-332q-11-11-11-28t11-28q12-12 28.5-11.5T284-388l156 155v-607q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v607l155-155q12-12 28.5-12t28.5 12q11 12 11 28.5T732-332L508-108q-6 6-13 8.5T480-97Z" />
            </svg>
          </button>
        </div>
      </div>
      {/* <div
        className="z-0 mt-[-5rem] h-[5rem]"
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent,#ffffff4D)",
        }}
      ></div> */}
    </>
  );
}
