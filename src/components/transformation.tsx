/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Transformation() {
  return (
    <div id="about" className=":flex-row bg-[#101010] md:flex">
      <div className="flex flex-col items-center pt-[3.813rem]">
        <p className="mb-[2.2rem] w-[80%] text-left text-[1.6rem] font-bold leading-[2rem] text-[#64C6FF] md:text-[2.188rem]  md:leading-[2.625rem]">
          Somos mais que uma equipe, somos criadores apaixonados por uma missão
        </p>
        <p className="mb-[1.313rem] w-[80%] text-left text-[1.038rem] leading-[1.288rem] text-white md:mb-[0.75rem] md:h-[5.5rem] md:text-[1.125rem] md:leading-[1.375rem]">
          Na Neptune Lab, nossa missão é ser a ponte entre suas ideias e o
          sucesso digital. Somos mais do que uma equipe; somos uma comunidade
          multidisciplinar de designers e desenvolvedores, cada um trazendo uma
          expertise única para impulsionar o crescimento do seu negócio de
          maneira eficiente.
        </p>
        <p className="mb-[1.313rem] w-[80%] text-left text-[1.038rem] leading-[1.288rem] text-white md:mb-[0.75rem] md:h-[5.5rem] md:text-[1.125rem] md:leading-[1.375rem]">
          Na Neptune Lab, não apenas criamos digitalmente; co-criamos o futuro
          do seu negócio. Junte-se a nós enquanto exploramos novas fronteiras
          digitais e transformamos visões em realidade.
        </p>
      </div>
      <div className="mb-[3.25rem] flex justify-center pt-[2rem] md:w-full">
        <img
          className="z-10 w-[12rem] md:h-[20rem] md:w-[20rem]"
          src={"images/foto1.png"}
        />
        <img
          className="w-[12rem] md:ml-[-2rem] md:h-[20rem] md:w-[20rem]"
          src={"images/foto2.png"}
        />
      </div>
    </div>
  );
}
