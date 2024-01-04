'use client'
import Dropdown from "./dropdown";

export default function Contact() {
  const items = ["Opção 1", "Opção 2", "Opção 3"];
  function submit(e: any) {
    e.preventDefault();
  }
  return (
    <div className="w-full bg-[#101010] px-[1rem]">
      <div className="bg-white w-full rounded-[40px] p-[1rem] mb-[2rem] z-10">
        <p className="text-[#1D4D9D] font-bold text-center text-[1.6rem] mb-[1rem]">
          Deixe-nos saber como podemos ajudar
        </p>
        <p className="text-[#1D4D9D] text-center text-[1.4rem] leading-8 mb-[3rem]">
          Preencha o formulário abaixo para uma consulta gratuita{" "}
        </p>
        <form className="flex flex-col gap-[3rem]" onSubmit={(e) => submit(e)}>
          <div className="flex flex-col gap-[1.6rem] mb-[3rem]">
            <input placeholder="Nome" className="text-black" />
            <input placeholder="Email" type="email" className="text-black" />
            <input placeholder="Telefone" type="tel" className="text-black" />
            <input placeholder="Mensagem" className="text-black" />
            <div className="container mx-auto mt-5">
              <Dropdown items={items} />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="w-full h-[2.625rem] bg-[#FF465D] bg-no-repeat rounded-[1.3125rem] flex justify-center items-center relative text-white transition-all hover:bg-red-900 text-[1.25rem] leading-[1.625rem]">
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
