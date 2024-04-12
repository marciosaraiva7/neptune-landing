/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "./ui/button";
import { Meteors } from "./ui/meteors";

export default function Approuch() {
  return (
    <div
      id="approach"
      className="z-[2] flex w-full flex-col items-center justify-center bg-black pb-[3.125rem]"
    >
      <div className="flex w-full justify-end pb-[3.688rem] pt-[3rem] md:mr-[8.688rem]">
        <p className="w-[90%] text-right   text-[1.8rem] font-bold leading-[2.2rem] text-white md:w-[45rem] md:text-[3.75rem]  md:leading-[3.313rem]">
          Nossos serviços
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-[7.625rem] pb-[5.125rem] md:flex-row md:items-start">
        <div className="flex max-w-[14.938rem] flex-col items-center ">
          <p className="mb-[0.813rem] text-left text-[1.5rem] leading-[1.625rem] text-white md:text-[1.625rem] md:leading-[1.688rem] md:tracking-[-0.016rem]">
            Aplicativos e <strong>Sistemas</strong>
          </p>
          <img
            src="/images/apps.png"
            alt="servico de apps"
            className="mb-[1.438rem]  w-[17.063rem]"
          />
          <p className="mb-[1.313rem] text-left text-[0.938rem] font-normal leading-[1.188rem] text-[#bdbebd] md:mb-[0.75rem] md:h-[5.5rem] md:text-[1.125rem] md:leading-[1.25rem] md:tracking-[-0.011rem]">
            Um aplicativo coloca serviços e informações essenciais na ponta dos
            dedos do usuário.
          </p>
          <a className="text-[#08205E] underline"> </a>
        </div>
        <div className="flex max-w-[14.938rem] flex-col items-center">
          <p className="mb-[0.813rem]  text-left text-[1.5rem] leading-[1.625rem] text-white md:text-[1.625rem] md:leading-[1.688rem] md:tracking-[-0.016rem]">
            Sites e <strong>E-commerces</strong>
          </p>
          <img
            src="/images/sites.png"
            alt="servicos de sites"
            className="mb-[1.438rem] w-[17.063rem]"
          />
          <p className="mb-[1.313rem] text-left text-[0.938rem] font-normal leading-[1.188rem] text-[#bdbebd] md:mb-[0.75rem] md:h-[5.5rem] md:text-[1.125rem] md:leading-[1.25rem] md:tracking-[-0.011rem]">
            Um site é a vitrine virtual da sua marca, disponível para o público
            24 horas por dia.
          </p>
          <a className="text-[#08205E] underline"> </a>
        </div>
        <div className="flex max-w-[14.938rem] flex-col items-center">
          <p className="mb-[0.813rem] w-[70%] text-left text-[1.5rem] leading-[1.625rem] text-white md:text-[1.625rem] md:leading-[1.688rem] md:tracking-[-0.016rem]">
            Mídia e <strong>Design</strong>
          </p>
          <img
            src="/images/midia.png"
            alt="servicos de midia"
            className="mb-[1.438rem]  w-[17.063rem]"
          />
          <p className="mb-[1.313rem] w-[15.938rem] text-left text-[0.938rem] font-normal leading-[1.188rem] text-[#bdbebd] md:mb-[0.75rem] md:h-[5.5rem] md:text-[1.125rem] md:leading-[1.25rem] md:tracking-[-0.011rem]">
            Uma comunicação estratégica é a chave para o desenvolvimento digital
            de um negócio.
          </p>
          <a className="text-[#08205E] underline"> </a>
        </div>
      </div>
    </div>
  );
}
