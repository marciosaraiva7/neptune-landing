
export default function Banner() {

  return (
    <div id="banner" className="pt-[2.5rem] md:pt-0 scroll-smooth">
      <div className=" w-full items-center justify-between relative text-sm md:flex">
        <video
          src={require("videos/banner.mp4")}
          autoPlay
          loop
          muted
          
          className="w-full h-[auto] hidden md:block object-cover"
          preload="true"
        />
        <video
          src={require("videos/neptune-9-16.mp4")}
          autoPlay
          loop
          muted
          playsInline
          preload="true"

          className="w-full h-[auto] md:hidden"
        />
        {/* <img src="images/star.jpg" className="w-full h-[auto] md:hidden" /> */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center md:justify-center">
          <p className="mb-16 text-white text-[3.2rem] leading-[2.738rem]  md:text-[3.438rem] font-bold md:w-[50rem] md:leading-[3.438rem] text-center md:mb-[1.25rem]">
            Transforme sua empresa com a gente!
          </p>
          <p className="w-[70%] text-center text-[1.3rem] leading-[1.5rem] md:text-[1.875rem] md:leading-[2.188rem] md:w-[33rem] mb-[4.375rem]">
            Consultoria e desenvolvimento digital para sites e aplicativos sob
            medida para o seu negócio.
          </p>
          <a
            href="#contact"
            className="w-[14.25rem] h-[2.625rem] bg-[#FF465D] bg-no-repeat rounded-[1.3125rem] flex justify-center items-center relative text-white transition-all hover:bg-red-900 text-[1.25rem] leading-[1.625rem] mb-[8rem]"
          >
            Orçamento Grátis
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform ease-out duration-300"></span>
          </a>
          <span className="z-20 mb-[0.438rem]">Conheça nosso trabalho</span>
          <img className="z-20 md:mb-0" src="images/arrow-down.svg" />
        </div>
      </div>
    </div>
  );
}
