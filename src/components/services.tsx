/* eslint-disable jsx-a11y/alt-text */
"use client";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

/* eslint-disable @next/next/no-img-element */
export default function Services() {
  return (
    <div id="services">
      {/* <div className="header-gradient mt-[-2rem] h-[3.5rem] rotate-180"></div> */}
      <div className=" bg-[#F5F5F5]">
        <div className=" flex flex-col items-center justify-center pt-[7rem]">
          <p className="mb-[0.5rem] w-[85%] text-center text-[1.8rem]  leading-[2.2rem] text-[#000000] md:mb-[2.375rem] md:w-[45rem] md:text-center md:text-[3.75rem]  md:leading-[3.688rem] ">
            Nós desenvolvemos o <strong>produto ideal</strong> para o seu
            negócio
          </p>
          <p className="text-center text-[#0D0D0D] opacity-[0.6] md:mb-[3.25rem] md:w-[35rem] md:text-[1.25rem] md:font-normal md:leading-[1.438rem] md:tracking-[-0.013rem]">
            Na Neptune Lab, entregamos vantagens essenciais para o
            desenvolvimento de suas aplicações digitais.
          </p>
          <Link href="#contact">
            <button className="flex gap-1 rounded-full bg-black px-6 py-4 text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-2xl md:mb-[5.25rem]">
              Fale com um especialista
            </button>
          </Link>
        </div>
        {/* <div className="flex flex-col items-center justify-center gap-[7.625rem] pb-[5.125rem] md:flex-row md:items-start">
          <div className="flex max-w-[14.938rem] flex-col items-center ">
            <img src="/images/sites.svg" className="mb-[1.813rem] h-[5rem]" />
            <p className="mb-[0.813rem] text-center text-[1.5rem]  font-bold leading-[1.625rem] text-[#08205E] md:text-[1.438rem] md:leading-[1.563rem]">
              Sites
            </p>
            <p className="mb-[1.313rem] text-center  text-[0.938rem] leading-[1.188rem] text-[#08205E] md:mb-[0.75rem] md:h-[5.5rem] md:text-[1.125rem] md:leading-[1.375rem]">
              Um site é a vitrine virtual da sua marca, aberta 24 horas por dia,
              7 dias por semana.
            </p>
            <a className="text-[#08205E] underline"> </a>
          </div>
          <div className="flex max-w-[14.938rem] flex-col items-center">
            <img
              src="/images/aplicativos.svg"
              className="mb-[1.813rem] h-[5rem]"
            />
            <p className="mb-[0.813rem] text-center text-[1.5rem]  font-bold leading-[1.625rem] text-[#08205E] md:text-[1.438rem] md:leading-[1.563rem]">
              Aplicativos
            </p>
            <p className="mb-[1.313rem] text-center  text-[0.938rem] leading-[1.188rem] text-[#08205E] md:mb-[0.75rem] md:h-[5.5rem] md:text-[1.125rem] md:leading-[1.375rem]">
              Um aplicativo coloca serviços e informações essenciais
              literalmente na ponta dos dedos do usuário
            </p>
            <a className="text-[#08205E] underline"> </a>
          </div>
          <div className="flex max-w-[14.938rem] flex-col items-center">
            <img
              src="/images/sistemas.svg"
              className="mb-[1.813rem] h-[5rem]"
            />
            <p className="mb-[0.813rem] text-center text-[1.5rem]  font-bold leading-[1.625rem] text-[#08205E] md:text-[1.438rem] md:leading-[1.563rem]">
              Sistemas
            </p>
            <p className="mb-[1.313rem] text-center  text-[0.938rem] leading-[1.188rem] text-[#08205E] md:mb-[0.75rem] md:h-[5.5rem] md:text-[1.125rem] md:leading-[1.375rem]">
              Um sistema é a espinha dorsal que sustenta a eficiência e o
              crescimento em qualquer organização.
            </p>
            <a className="text-[#08205E] underline"> </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
