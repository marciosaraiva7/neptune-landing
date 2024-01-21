export default function Contact() {
  return (
    <>
      <div className="w-full bg-[#101010] px-[1rem]">
        <div className="bg-white w-full rounded-[40px] p-[1rem] mb-[2rem] z-20">
          <p className="text-[#1D4D9D] font-bold text-center text-[1.6rem] mb-[1rem]">
            Deixe-nos saber como podemos ajudar
          </p>
          <p className="text-[#1D4D9D] text-center text-[1.4rem] leading-8 mb-[3rem]">
            Preencha o formulário abaixo para uma consulta gratuita{" "}
          </p>
          <form
            action="/api/sendEmail"
            method="POST"
            className="flex flex-col gap-[3rem]"
          >
            <div className="flex flex-col gap-[1.6rem] mb-[3rem]">
              <input
                placeholder="Nome"
                name="nome"
                className="text-black placeholder:text-[#FF465D] focus-visible:outline-none"
              />
              <input
                placeholder="Email"
                type="email"
                name="email"
                className="text-black placeholder:text-[#FF465D] focus-visible:outline-none"
              />
              <input
                placeholder="Telefone"
                type="tel"
                name="tel"
                className="text-black placeholder:text-[#FF465D] focus-visible:outline-none"
              />
              <textarea
                placeholder="Mensagem"
                name="message"
                className="text-black placeholder:text-[#FF465D] focus-visible:outline-none"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full h-[2.625rem] bg-[#FF465D] bg-no-repeat rounded-[1.3125rem] flex justify-center items-center relative text-white transition-all hover:bg-red-900 text-[1.25rem] leading-[1.625rem]"
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="z-[5] mt-[-10rem] bg-[#08205E] w-full h-[278px]"></div>
    </>
  );
}
