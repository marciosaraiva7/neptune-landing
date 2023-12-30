export default function Contact() {
  return (
    <div className="w-full bg-[#101010] px-[1rem]">
      <div className="bg-white w-full rounded-[40px] p-[1rem] mb-[2rem] z-10">
        <p className="text-[#1D4D9D] font-bold text-center text-[1.6rem] mb-[1rem]">
          Deixe-nos saber como podemos ajudar
        </p>
        <p className="text-[#1D4D9D] text-center text-[1.4rem] leading-8 mb-[1rem]">
          Preencha o formulário abaixo para uma consulta gratuita{" "}
        </p>
        <div className="flex flex-col gap-[1rem]">
          <input placeholder="Nome" />
          <input placeholder="Email" />
          <input placeholder="Mensagem" />
        </div>
      </div>
    </div>
  );
}
