import Link from "next/link";
import { Button } from "./ui/button";
import { Meteors } from "./ui/meteors";

export default function Approuch() {
  return (
    <div
      id="approach"
      className="flex w-full flex-col items-center justify-center bg-[#1D4D9D33] pb-[3.125rem] "
      // style={{
      //   backgroundImage: "linear-gradient(to bottom, #6992E0, #6992E0)",
      // }}
    >
      <div className="flex w-full justify-center pb-[3.688rem] pt-[3rem]">
        <p className="w-[90%] text-center  text-[1.8rem] font-bold leading-[2.2rem] text-white md:w-[45rem] md:text-[2.188rem]  md:leading-[2.625rem]">
          Transformamos ideias em experiências digitais memoráveis
        </p>
      </div>
      <div className="flex flex-col items-center gap-[1.875rem] md:mb-[1.875rem]  md:flex-row ">
        <div
          className="flex w-[90%] flex-col items-center justify-center gap-[0.8rem] rounded-[10px] pt-[0.5rem]  md:max-w-[30rem]"
          style={{
            backgroundImage: "linear-gradient(to bottom, #1D4D9D, #08205E)",
          }}
        >
          <p className="w-[90%] text-center text-[1.6rem] font-bold leading-[2.2rem] text-[#86B3FF]  md:text-[1.563rem] md:leading-[2.625rem]">
            Automatização de processos
          </p>
          <p className="mb-[1.313rem] w-[80%] text-center text-[0.938rem] leading-[1.188rem] text-white md:mb-[0.75rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
            Automatizar tarefas repetitivas e manuais, libera tempo e recursos
            para que os colaboradores se concentrem em atividades mais
            estratégicas.
          </p>
          <Meteors number={20} />
        </div>
        <div
          className="flex w-[90%] cursor-pointer flex-col items-center justify-center gap-[0.8rem] rounded-[10px] pt-[0.5rem] transition-all duration-300 hover:scale-105 active:scale-90 md:max-w-[30rem]"
          style={{
            backgroundImage: "linear-gradient(to bottom, #1D4D9D, #08205E)",
          }}
        >
          <p className="w-[90%] text-center text-[1.6rem] font-bold leading-[2.2rem] text-[#86B3FF]  md:text-[1.563rem] md:leading-[2.625rem]">
            Aumento da produtividade
          </p>
          <p className="mb-[1.313rem] w-[80%] text-center  text-[0.938rem] leading-[1.188rem] text-white md:mb-[0.75rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
            As soluções digitais podem ajudar as empresas a aumentar a
            produtividade, reduzindo o tempo gasto em atividades operacionais.
          </p>
        </div>
        <div
          className="mb-[2.625rem] flex w-[90%] cursor-pointer flex-col items-center gap-[0.8rem] rounded-[10px] pb-[2rem] pt-[0.5rem] transition-all duration-300 hover:scale-105 active:scale-90 md:hidden"
          style={{
            backgroundImage: "linear-gradient(to bottom, #1D4D9D, #08205E)",
          }}
        >
          <p className="w-[90%] text-center text-[1.6rem] font-bold leading-[2.2rem] text-[#86B3FF]   md:text-[1.563rem] md:leading-[2.625rem]">
            Atração de novos clientes
          </p>
          <p className="mb-[1.313rem] w-[80%] text-center  text-[0.938rem] leading-[1.188rem] text-white md:mb-[0.75rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
            As soluções digitais podem ajudar as empresas a alcançar novos
            clientes, ampliando o alcance da marca e aumentando as oportunidades
            de vendas
          </p>
        </div>
      </div>
      <div
        className="mb-[2.625rem] flex w-[90%] cursor-pointer flex-col items-center gap-[0.8rem] rounded-[10px] pb-[2rem] pt-[0.5rem] transition-all duration-300 hover:scale-105 active:scale-90 md:mt-[1.875rem] md:hidden md:max-w-[30rem]"
        style={{
          backgroundImage: "linear-gradient(to bottom, #1D4D9D, #08205E)",
        }}
      >
        <p className="w-[90%] text-center text-[1.6rem] font-bold leading-[2.2rem] text-[#86B3FF]   md:text-[1.563rem] md:leading-[2.625rem]">
          Aprimoramento da comunicação
        </p>
        <p className="mb-[1.313rem] w-[80%] text-center  text-[0.938rem] leading-[1.188rem] text-white md:mb-[0.75rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
          Podemos melhorar a comunicação interna e externa da empresa,
          facilitando o compartilhamento de informações e a colaboração entre
          equipes.
        </p>
      </div>
      <div className="mb-[3.125rem] flex gap-[1.875rem]">
        <div
          className="hidden w-[90%] cursor-pointer flex-col items-center justify-center gap-[0.8rem] rounded-[10px] pt-[0.5rem] transition-all duration-300 hover:scale-105 active:scale-90 md:flex md:max-w-[30rem]"
          style={{
            backgroundImage: "linear-gradient(to bottom, #1D4D9D, #08205E)",
          }}
        >
          <p className="w-[90%] text-center text-[1.6rem] font-bold leading-[2.2rem] text-[#86B3FF]   md:text-[1.563rem] md:leading-[2.625rem]">
            Atração de novos clientes
          </p>
          <p className="mb-[1.313rem] w-[80%] text-center  text-[0.938rem] leading-[1.188rem] text-white md:mb-[0.75rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
            As soluções digitais podem ajudar as empresas a alcançar novos
            clientes, ampliando o alcance da marca e aumentando as oportunidades
            de vendas
          </p>
        </div>
        <div
          className="hidden w-[90%] cursor-pointer flex-col items-center justify-center gap-[0.8rem] rounded-[10px] pt-[0.5rem] transition-all duration-300 hover:scale-105 active:scale-90 md:flex md:max-w-[30rem]"
          style={{
            backgroundImage: "linear-gradient(to bottom, #1D4D9D, #08205E)",
          }}
        >
          <p className="w-[90%] text-center text-[1.6rem] font-bold leading-[2.2rem] text-[#86B3FF]   md:text-[1.563rem] md:leading-[2.625rem]">
            Aprimoramento da comunicação
          </p>
          <p className="mb-[1.313rem] w-[80%] text-center  text-[0.938rem] leading-[1.188rem] text-white md:mb-[0.75rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
            Podemos melhorar a comunicação interna e externa da empresa,
            facilitando o compartilhamento de informações e a colaboração entre
            equipes.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#6992E0]">
        <Link href={"#contact"}>
          <Button
            style={{
              boxShadow:
                "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
            }}
            className="rounded- relative flex min-h-[2.625rem] items-center justify-center bg-[#FF465D] bg-no-repeat px-[2rem]  text-[1rem]  text-[#FFFFFF] transition-all hover:bg-[#a33d3d] hover:text-[#ffffff] "
          >
            Fale com um especialista!
          </Button>
        </Link>
      </div>
    </div>
  );
}
