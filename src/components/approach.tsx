export default function Approuch() {
  return (
    <div
      className="flex w-full flex-col items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(to right, #141b26, #233149)",
      }}
    >
      <div className="flex w-full justify-center pb-[3.688rem] pt-[3rem]">
        <p className="w-[90%] text-center text-[1.8rem] font-bold leading-[2.2rem] text-white md:w-[45rem]  md:max-w-[37.063rem]  md:text-[2.188rem]  md:leading-[2.625rem]">
          Transformamos ideias em experiências digitais memoráveis
        </p>
      </div>
      <div className="flex flex-col items-center gap-[1.875rem] md:flex-row ">
        <div
          className="flex w-[90%] flex-col items-center gap-[0.8rem] rounded-[10px] pb-[2rem] pt-[0.5rem] md:max-w-[30rem]"
          style={{
            backgroundImage: "linear-gradient(to right, #2b3354, #31486e)",
          }}
        >
          <p className="w-[90%] text-center text-[1.6rem] font-bold leading-[2.2rem] text-[#FF465D]  md:text-[1.563rem] md:leading-[2.625rem]">
            Desenvolvimento Sob Medida
          </p>
          <p className="mb-[1.313rem] w-[80%] text-center text-[0.938rem] leading-[1.188rem] text-white md:mb-[0.75rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
            Cada negócio é único, e acreditamos que seus sites devem refletir
            essa singularidade. Nosso processo de desenvolvimento sob medida
            garante que cada aspecto do seu site seja adaptado às necessidades
            específicas da sua empresa.
          </p>
        </div>
        <div
          className="flex w-[90%] flex-col items-center gap-[0.8rem] rounded-[10px]  pb-[2rem] pt-[0.5rem] md:max-w-[30rem]"
          style={{
            backgroundImage: "linear-gradient(to right, #2b3354, #31486e)",
          }}
        >
          <p className="w-[90%] text-center text-[1.6rem] font-bold leading-[2.2rem] text-[#FF465D]  md:text-[1.563rem] md:leading-[2.625rem]">
            Pensamento Estratégico
          </p>
          <p className="mb-[1.313rem] w-[80%] text-center text-[0.938rem] leading-[1.188rem] text-white md:mb-[0.75rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
            Nossa consultoria estratégica orienta cada fase do desenvolvimento,
            desde a concepção até a implementação, garantindo que seu site não
            seja apenas bonito, mas também uma ferramenta eficaz para atingir
            seus objetivos de negócios.
          </p>
        </div>
        <div
          className="mb-[2.625rem] flex w-[90%] flex-col items-center gap-[0.8rem] rounded-[10px]  pb-[2rem] pt-[0.5rem] md:hidden "
          style={{
            backgroundImage: "linear-gradient(to right, #2b3354, #31486e)",
          }}
        >
          <p className="w-[90%] text-center text-[1.6rem] font-bold leading-[2.2rem] text-[#FF465D]  md:text-[1.563rem] md:leading-[2.625rem]">
            Design Intuitivo
          </p>
          <p className="mb-[1.313rem] w-[80%] text-center text-[0.938rem] leading-[1.188rem] text-white md:mb-[0.75rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
            Não é apenas sobre como o site parece, mas como ele funciona.
            Focamos em criar designs intuitivos que oferecem uma experiência de
            usuário excepcional, garantindo que seus visitantes se envolvam.
          </p>
        </div>
      </div>
      <div
        className="mb-[2.625rem] hidden w-[90%] flex-col items-center gap-[0.8rem] rounded-[10px] pb-[2rem] pt-[0.5rem] md:mt-[1.875rem] md:flex md:max-w-[30rem]"
        style={{
          backgroundImage: "linear-gradient(to right, #2b3354, #31486e)",
        }}
      >
        <p className="w-[90%] text-center text-[1.6rem] font-bold leading-[2.2rem] text-[#FF465D]  md:text-[1.563rem] md:leading-[2.625rem]">
          Design Intuitivo
        </p>
        <p className="mb-[1.313rem] w-[80%] text-center text-[0.938rem] leading-[1.188rem] text-white md:mb-[0.75rem] md:h-[5.5rem] md:text-[1rem] md:leading-[1.375rem]">
          Não é apenas sobre como o site parece, mas como ele funciona. Focamos
          em criar designs intuitivos que oferecem uma experiência de usuário
          excepcional, garantindo que seus visitantes se envolvam.
        </p>
      </div>
    </div>
  );
}
