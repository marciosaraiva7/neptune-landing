/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Services() {
  return (
    <div>
      <div className="h-[3.5rem] header-gradient rotate-180 mt-[-2rem]"></div>
      <div className="bg-[#101010] md:bg-black">
        <div className="flex justify-center items-center mb-[5.375rem] pt-[2rem]">
          <p className="text-[1.8rem] leading-[2.2rem] text-center md:text-left font-bold md:font-normal text-[#86B3FF] md:text-[2.5rem] md:leading-[3rem] w-[85%]  md:w-[45rem] ">
            Desperte o potencial digital do seu negócio com soluções sob medida
          </p>
        </div>
        <div className="flex justify-center items-center md:items-start flex-col md:flex-row gap-[7.625rem] pb-[5.125rem]">
          <div className="max-w-[14.938rem] flex flex-col items-center ">
            <img src="/images/sites.svg" className="mb-[1.813rem]" />
            <p className="text-white text-center font-bold md:font-normal text-[1.5rem] leading-[1.625rem] md:text-[1.438rem] md:leading-[1.563rem] mb-[0.813rem]">
              Sites
            </p>
            <p className="text-white text-center text-[0.938rem] leading-[1.188rem] md:text-[1.125rem] md:leading-[1.375rem] md:h-[5.5rem] mb-[1.313rem] md:mb-[0.75rem]">
              Um site é a vitrine virtual da sua marca, aberta 24 horas por dia,
              7 dias por semana.
            </p>
            <a className="text-white underline">Saiba mais</a>
          </div>
          <div className="max-w-[14.938rem] flex flex-col items-center">
            <img src="/images/aplicativos.svg" className="mb-[1.813rem]" />
            <p className="text-white text-center font-bold md:font-normal text-[1.5rem] leading-[1.625rem] md:text-[1.438rem] md:leading-[1.563rem] mb-[0.813rem]">
              Aplicativos
            </p>
            <p className="text-white text-center text-[0.938rem] leading-[1.188rem] md:text-[1.125rem] md:leading-[1.375rem] md:h-[5.5rem] mb-[1.313rem] md:mb-[0.75rem]">
              Um aplicativo coloca serviços e informações essenciais
              literalmente na ponta dos dedos do usuário
            </p>
            <a className="text-white underline">Saiba mais</a>
          </div>
          <div className="max-w-[14.938rem] flex flex-col items-center">
            <img src="/images/sistemas.svg" className="mb-[1.813rem]" />
            <p className="text-white text-center font-bold md:font-normal text-[1.5rem] leading-[1.625rem] md:text-[1.438rem] md:leading-[1.563rem] mb-[0.813rem]">
              Sistemas
            </p>
            <p className="text-white text-center text-[0.938rem] leading-[1.188rem] md:text-[1.125rem] md:leading-[1.375rem] md:h-[5.5rem] mb-[1.313rem] md:mb-[0.75rem]">
              Um sistema é a espinha dorsal que sustenta a eficiência e o
              crescimento em qualquer organização.
            </p>
            <a className="text-white underline">Saiba mais</a>
          </div>
        </div>
      </div>
    </div>
  );
}
