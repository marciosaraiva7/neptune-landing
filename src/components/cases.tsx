import Link from "next/link";

export default function Cases() {
  return (
    <div className="w-full bg-[#ECF0F2]">
      <div className=" flex w-full flex-col-reverse gap-[2.5rem] pb-[2.563rem] pl-[1.25rem] pt-[4.75rem] md:grid md:grid-cols-2 md:gap-4  md:pl-[8.688rem]">
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="flex w-[80%] flex-col gap-[0.563rem] border-b border-black">
            <p className="text-[1.563rem] font-bold leading-[1.875rem] tracking-[-0.016rem]">
              Salute
            </p>
            <p className="mb-[1.25rem] text-[1.125rem] font-light leading-[1.375rem] tracking-[-0.011rem] text-[#2B2B2B]">
              Um brinde à equipe da Neptune! Vocês arrasaram no desenvolvimento
              da nossa nova ferramenta interna. Agora tudo flui melhor e mais
              rápido, como nossa kombucha nas garrafas. Obrigado, galera, por
              turbinar nossos processos!
            </p>
          </div>
          <div className="flex w-[80%] flex-col gap-[0.563rem] border-b border-black">
            <p className="text-[1.563rem] font-bold leading-[1.875rem] tracking-[-0.016rem]">
              Dinamica
            </p>
            <p className="mb-[1.25rem] text-[1.125rem] font-light leading-[1.375rem] tracking-[-0.011rem] text-[#2B2B2B]">
              Queremos agradecer à equipe incrível da Neptune pelo trabalho
              excepcional no desenvolvimento do nosso aplicativo de contagem de
              estoque e patrimônios. A solução personalizada que vocês criaram
              não só simplificou nossa operação, mas também elevou nossa
              eficiência a um novo patamar. Parceria top com resultados ainda
              melhores!
            </p>
          </div>
          {/* <div className="flex w-[80%] flex-col gap-[0.563rem] border-b border-black">
            <p className="text-[1.563rem] font-bold leading-[1.875rem] tracking-[-0.016rem]">
              Protifin
            </p>
            <p className="mb-[1.25rem] text-[1.125rem] font-light leading-[1.375rem] tracking-[-0.011rem] text-[#2B2B2B]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
            </p>
          </div> */}
        </div>
        <div className="flex flex-col items-start justify-end gap-[1.25rem]">
          <p className="w-[80%] text-[3.75rem] font-black leading-[3.563rem] tracking-[-0.038rem] text-black">
            Veja casos de sucesso com outras empresas
          </p>
          <Link href="#contact">
            <button className="flex gap-1 rounded-full bg-black px-6 py-4 text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-2xl md:mb-[5.25rem]">
              Fale com um especialista
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
