/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { Button } from "./ui/button";
import { Journey } from "./journey";

/* eslint-disable @next/next/no-img-element */
export default function Transformation() {
  return (
    <>
      <div className="px-[8.688rem] pt-[7.125rem]">
        <p className="mb-[2.2rem] w-[80%] text-left text-[1.6rem] font-bold leading-[2rem] text-[#0D0D0D] md:text-[2.188rem]  md:leading-[2.625rem]">
          Por que a Neptune?
        </p>
        <p className="mb-[2rem] w-[80%] text-left text-[1.038rem] leading-[1.288rem] text-[#0D0D0D] md:mb-[0.5rem] md:h-[5.5rem] md:w-[27.25rem] md:text-[2.5rem] md:leading-[2.625rem]">
          A Neptune desenvolve aplicações digitais para o seu negócio
        </p>
      </div>
      <div className="relative flex flex-col items-end justify-center pt-[6.625rem] md:px-[8.688rem]">
        <p className="mb-[4.813rem] text-[2.188rem]  font-bold leading-[2.625rem] text-black">
          Nossa abordagem
        </p>
      </div>
      <div className="flex items-center justify-end  pb-[4.188rem] md:px-[8.688rem] ">
        <Journey />
      </div>
      <div id="about" className="flex flex-col items-center  md:flex">
        <div className="flex flex-col justify-center md:w-full md:flex-col">
          <div className=" flex items-start justify-between border-b border-black pt-[3.813rem] md:mb-[2.5rem] md:ml-[19.188rem] md:mr-[8.688rem]">
            <p className="font-bold">Profissionais qualificados </p>
            <p className="mb-[2rem] w-[40%]  text-pretty text-[1.038rem] leading-[1.288rem] text-[#0D0D0D] md:mb-[0.5rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
              Nossos profissionais são altamente qualificados e experientes, e
              trabalham com as melhores tecnologias do mercado.
            </p>
          </div>
          <div className=" flex items-start justify-between border-b border-black pt-[3.813rem] md:mb-[2.5rem] md:ml-[19.188rem] md:mr-[8.688rem]">
            <p className="font-bold">Abordagem personalizada</p>
            <p className="mb-[2rem] w-[40%]  text-pretty text-[1.038rem] leading-[1.288rem] text-[#0D0D0D] md:mb-[0.5rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
              Trabalhamos com os nossos clientes para entender suas necessidades
              específicas e desenvolver aplicações que atendam às suas
              expectativas.
            </p>
          </div>
          <div className=" flex items-start justify-between border-b border-black pt-[3.813rem] md:mb-[10rem] md:ml-[19.188rem] md:mr-[8.688rem]">
            <p className="font-bold">Prazos e orçamentos ajustados</p>
            <p className="mb-[2rem] w-[40%]  text-pretty text-[1.038rem] leading-[1.288rem] text-[#0D0D0D] md:mb-[0.5rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
              Trabalhamos com prazos e orçamentos ajustados para garantir que
              você receba a aplicação que precisa, dentro do seu orçamento.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
