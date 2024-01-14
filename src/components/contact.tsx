"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = {
      // preencha com os dados do seu formulário
      name,
      email,
      tel,
      message,
    };

    // Enviar os dados do formulário para a API
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Formulário enviado com sucesso!");
        // Tratar sucesso aqui
      } else {
        console.error("Erro ao enviar o formulário");
        // Tratar erro aqui
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário", error);
      // Tratar erro de rede aqui
    }
  };

  return (
    <div className="w-full bg-[#101010] px-[1rem]">
      <div className="bg-white w-full rounded-[40px] p-[1rem] mb-[2rem] z-10">
        <p className="text-[#1D4D9D] font-bold text-center text-[1.6rem] mb-[1rem]">
          Deixe-nos saber como podemos ajudar
        </p>
        <p className="text-[#1D4D9D] text-center text-[1.4rem] leading-8 mb-[3rem]">
          Preencha o formulário abaixo para uma consulta gratuita{" "}
        </p>
        <form className="flex flex-col gap-[3rem]" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[1.6rem] mb-[3rem]">
            <input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-black placeholder:text-[#FF465D] focus-visible:outline-none"
            />
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black placeholder:text-[#FF465D] focus-visible:outline-none"
            />
            <input
              placeholder="Telefone"
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="text-black placeholder:text-[#FF465D] focus-visible:outline-none"
            />
            <textarea
              placeholder="Mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
  );
}
