export default function Banner() {
  return (
    <div>
      <div className="w-full items-center justify-between relative text-sm lg:flex">
        <video  src="videos/banner.mp4" autoPlay loop muted className="w-full h-[auto]" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <p className="text-white text-[3.438rem] font-bold w-[45rem] leading-[3.438rem] text-center mb-[1.25rem]">
            Transforme sua empresa com a gente!
          </p>
          <p className="text-center text-[1.875rem] leading-[2.188rem] w-[43rem] mb-[4.375rem]">
            Consultoria e desenvolvimento digital para sites e aplicativos sob
            medida para o seu negócio.
          </p>
          <a
            href="#contact"
            className="w-[14.25rem] h-[2.625rem] bg-[#FF465D] bg-no-repeat rounded-[1.3125rem] flex justify-center items-center relative text-white transition-all hover:bg-red-900 text-[1.25rem] leading-[1.625rem] mb-[7rem]"
          >
            Orçamento Grátis
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform ease-out duration-300"></span>
          </a>
          <span className="mb-[0.438rem]">Conheça nosso trabalho</span>
          <img src="images/arrow-down.svg" />
        </div>
      </div>
    </div>
  );
}
