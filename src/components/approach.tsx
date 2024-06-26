/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "./ui/button";
import { Meteors } from "./ui/meteors";

export default function Approuch() {
  return (
    <div
      id="approach"
      className="z-[2] flex w-full flex-col bg-black pb-[3.125rem] md:items-center md:justify-center"
    >
      <div className="flex w-full pb-[3.688rem] pt-[5rem] md:mr-[8.688rem] md:justify-center">
        <p className="mb-[2rem] w-[90%] text-center text-[2.375rem] font-bold leading-[3.313rem] text-white md:w-[45rem] md:text-right md:text-[3.75rem] md:leading-[3.313rem]">
          Nossos serviços
        </p>
      </div>
      <div className="flex flex-col items-start justify-center gap-[5.25rem] pb-[5.125rem] pl-[1.438rem] md:flex-row md:items-start md:gap-[7.625rem] md:pl-0">
        <div className="flex w-full flex-col md:max-w-[14.938rem] md:items-center ">
          <p className="mb-[0.813rem] text-left text-[1.5rem] leading-[1.625rem] text-white md:text-[1.625rem] md:leading-[1.688rem] md:tracking-[-0.016rem]">
            Aplicativos e <strong>Sistemas</strong>
          </p>
          <img
            src="/images/apps.png"
            alt="servico de apps"
            className="mb-[1.438rem] w-[20rem] md:w-[17.063rem]"
          />
          <p className="mb-[1.313rem]  w-[16rem] text-left text-[1.125rem] font-normal leading-[1.25rem] text-[#bdbebd] md:mb-[0.75rem] md:h-[5.5rem] md:text-[1.125rem] md:leading-[1.25rem] md:tracking-[-0.011rem]">
            Um aplicativo coloca serviços e informações essenciais na ponta dos
            dedos do usuário.
          </p>
          <a className="text-[#08205E] underline"> </a>
        </div>
        <div className="flex flex-col md:max-w-[14.938rem] md:items-center">
          <p className="mb-[0.813rem]  text-left text-[1.5rem] leading-[1.625rem] text-white md:text-[1.625rem] md:leading-[1.688rem] md:tracking-[-0.016rem]">
            Sites e <strong>E-commerces</strong>
          </p>
          <img
            src="/images/sites.png"
            alt="servicos de sites"
            className="mb-[1.438rem] w-[20rem] md:w-[17.063rem]"
          />
          <p className="mb-[1.313rem] w-[16rem] text-left text-[1.125rem] font-normal leading-[1.25rem] text-[#bdbebd] md:mb-[0.75rem] md:h-[5.5rem] md:text-[1.125rem] md:leading-[1.25rem] md:tracking-[-0.011rem]">
            Um site é a vitrine virtual da sua marca, disponível para o público
            24 horas por dia.
          </p>
          <a className="text-[#08205E] underline"> </a>
        </div>
        <div className="flex flex-col md:max-w-[14.938rem] md:items-center">
          <p className="mb-[0.813rem] w-[70%] text-left text-[1.5rem] leading-[1.625rem] text-white md:text-[1.625rem] md:leading-[1.688rem] md:tracking-[-0.016rem]">
            Mídia e <strong>Design</strong>
          </p>
          <img
            src="/images/midia.png"
            alt="servicos de midia"
            className="mb-[1.438rem] w-[20rem] md:w-[17.063rem]"
          />
          <p className="mb-[1.313rem] w-[16rem] text-left text-[1.125rem] font-normal leading-[1.25rem] text-[#bdbebd] md:mb-[0.75rem] md:h-[5.5rem] md:w-[15.938rem] md:text-[1.125rem] md:leading-[1.25rem] md:tracking-[-0.011rem]">
            Uma comunicação estratégica é a chave para o desenvolvimento digital
            de um negócio.
          </p>
          <a className="text-[#08205E] underline"> </a>
        </div>
      </div>
    </div>
  );
}
