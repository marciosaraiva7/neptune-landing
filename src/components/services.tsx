export default function Services() {
  return (
    <div>
      <div className="h-[3.5rem] header-gradient rotate-180 mt-[-2rem]"></div>
      <div className="bg-black">
        <div className="flex justify-center items-center mb-[4.375rem]">
          <p className="text-[#86B3FF] ">
            Desperte o potencial digital do seu negócio com soluções sob medida
          </p>
        </div>
        <div className="flex justify-center gap-[6.625rem]">
          <div className="max-w-[14.938rem] flex flex-col items-center ">
            <img />
            <p className="text-center text-[1.438rem] leading-[1.563rem] mb-[0.813rem]">
              Sites
            </p>
            <p className="text-center text-[1.125rem] leading-[1.375rem] h-[5.5rem] mb-[0.75rem]">
              Um site é a vitrine virtual da sua marca, aberta 24 horas por dia,
              7 dias por semana.
            </p>
            <a className="underline">Saiba mais</a>
          </div>
          <div className="max-w-[14.938rem] flex flex-col items-center">
            <img />
            <p className="text-center text-[1.438rem] leading-[1.563rem] mb-[0.813rem]">
              Aplicativos
            </p>
            <p className="text-center text-[1.125rem] leading-[1.375rem] h-[5.5rem] mb-[0.75rem]">
              Um aplicativo coloca serviços e informações essenciais
              literalmente na ponta dos dedos do usuário
            </p>
            <a className="underline">Saiba mais</a>
          </div>
          <div className="max-w-[14.938rem] flex flex-col items-center">
            <img />
            <p className="text-center text-[1.438rem] leading-[1.563rem] mb-[0.813rem]">
              Sistemas
            </p>
            <p className="text-center text-[1.125rem] leading-[1.375rem] h-[5.5rem] mb-[0.75rem]">
              Um sistema é a espinha dorsal que sustenta a eficiência e o
              crescimento em qualquer organização.
            </p>
            <a className="underline">Saiba mais</a>
          </div>
        </div>
      </div>
    </div>
  );
}
