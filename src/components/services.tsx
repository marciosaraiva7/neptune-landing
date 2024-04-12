/* eslint-disable jsx-a11y/alt-text */
"use client";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

/* eslint-disable @next/next/no-img-element */
export default function Services() {
  return (
    <div id="services">
      {/* <div className="header-gradient mt-[-2rem] h-[3.5rem] rotate-180"></div> */}
      <div className=" bg-[#F5F5F5] ">
        <div className=" flex flex-col items-center justify-center pt-[7rem]">
          <p className=" mb-[2.375rem] w-[85%] text-center  text-[2.375rem] leading-[2.688rem] text-[#000000] md:w-[45rem] md:text-center md:text-[3.75rem]  md:leading-[3.688rem] ">
            Nós desenvolvemos o <strong>produto ideal</strong> para o seu
            negócio
          </p>
          <p className="mb-[3.25rem] text-center text-[1.25rem] leading-[1.438rem] text-[#0D0D0D] opacity-[0.6] md:w-[35rem] md:text-[1.25rem] md:font-normal md:leading-[1.438rem] md:tracking-[-0.013rem]">
            Na Neptune Lab, entregamos vantagens essenciais para o
            desenvolvimento de suas aplicações digitais.
          </p>
          <Link href="#contact">
            <button className="mb-[5.25rem] flex gap-1 rounded-full bg-black px-6 py-4 text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-2xl">
              Fale com um especialista
            </button>
          </Link>
        </div>

        <div className="mb-[-1rem] flex flex-col items-center ">
          <img
            className="w-[90%] md:w-[70%]"
            src="/images/produto-exemplo.png"
            alt="exemplo de sistema desenvolvido pela neptune"
          />
        </div>
      </div>
    </div>
  );
}
