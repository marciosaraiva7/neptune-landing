/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { Button } from "./ui/button";
import { Journey } from "./journey";

/* eslint-disable @next/next/no-img-element */
export default function Transformation() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center pt-[6.625rem]">
        <p className="mb-[4.813rem] text-[2.188rem] font-bold leading-[2.625rem] text-white">
          Nossa abordagem
        </p>
      </div>
      <div className="flex items-center justify-center  pb-[9.188rem]">
        <Journey />
      </div>
      <div id="about" className="flex flex-col items-center  md:flex md:px-16">
        <div className="flex flex-col justify-center md:max-w-[80rem] md:flex-row">
          <div className=" flex w-[62%] flex-col items-center pt-[3.813rem] md:mb-[5rem] md:w-full">
            <p className="mb-[2.2rem] w-[80%] text-left text-[1.6rem] font-bold leading-[2rem] text-[#08205E] md:text-[2.188rem]  md:leading-[2.625rem]">
              Por que escolher a Neptune para desenvolver aplicações digitais
              para o seu negócio?
            </p>
            <p className="mb-[2rem] w-[80%] text-left text-[1.038rem] leading-[1.288rem] text-white md:mb-[0.5rem]  md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
              Na Neptune Lab, oferecemos uma série de vantagens que a tornam a
              escolha certa para o desenvolvimento de aplicações digitais para o
              seu negócio.
            </p>
            <p className="mb-[2rem] w-[80%]  text-pretty text-[1.038rem] leading-[1.288rem] text-white md:mb-[0.5rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
              <span className="mr-2 inline-block h-[10px] w-[10px] rounded-full bg-[#1D4D9D]"></span>
              <strong>Profissionais qualificados: </strong>
              Nossos profissionais são altamente qualificados e experientes, e
              trabalham com as melhores tecnologias do mercado.
            </p>
            <p className="mb-[2rem] w-[80%]  text-pretty text-[1.038rem] leading-[1.288rem] text-white md:mb-[0.5rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
              <span className="mr-2 inline-block h-[10px] w-[10px] rounded-full bg-[#1D4D9D]"></span>
              <strong>Abordagem personalizada: </strong>
              Trabalhamos com os nossos clientes para entender suas necessidades
              específicas e desenvolver aplicações que atendam às suas
              expectativas.
            </p>
            <p className="mb-[2rem] w-[80%]  text-pretty text-[1.038rem] leading-[1.288rem] text-white md:mb-[0.5rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
              <span className="mr-2 inline-block h-[10px] w-[10px] rounded-full bg-[#1D4D9D]"></span>
              <strong>Prazos e orçamentos ajustados: </strong>
              Trabalhamos com prazos e orçamentos ajustados para garantir que
              você receba a aplicação que precisa, dentro do seu orçamento.
            </p>
          </div>

          <div className="mb-[3.25rem] flex items-center justify-center pt-[2rem] md:justify-start ">
            <img
              className="h-[60%] w-[60%] md:h-auto md:w-auto"
              src={"images/office.svg"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
