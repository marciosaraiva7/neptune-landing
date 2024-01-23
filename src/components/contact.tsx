/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useState } from "react";
import { FormEvent } from "react";
import InputMask from "react-input-mask";
import { ButtonLoading } from "./ui/button-loading";

/* eslint-disable @next/next/no-img-element */
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();
    const body = {
      nome: name,
      email: email,
      telefone: tel,
      mensagem: message,
    };
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    // Handle response if necessary
    const data = await response.json();
    setLoading(false);
    if (data.message === "E-mail enviado com sucesso!") {
      setCheck(true);
    }
    // ...
  }
  return (
    <>
      <div
        id="contact"
        className="w-full bg-[#101010] px-[0.5rem] md:px-[4.938rem]"
      >
        <div className="relative z-20 mb-[1rem] flex w-full flex-col items-center rounded-[40px] bg-white p-[1rem]">
          {!check && (
            <p className="mb-[1rem] text-center text-[1.6rem] font-bold text-[#1D4D9D] md:text-[1.75rem]">
              Deixe-nos saber como podemos ajudar
            </p>
          )}
          {!check && (
            <p className="mb-[3rem] text-center text-[1.4rem] leading-8 text-[#1D4D9D] md:w-[30rem] md:text-[1.75rem]">
              Preencha o formulário abaixo para uma consulta gratuita{" "}
            </p>
          )}
          {!check && (
            <form onSubmit={onSubmit} className="flex flex-col gap-[3rem]">
              <div className="mb-[3rem] flex flex-col gap-[1.6rem]">
                <input
                  placeholder="Nome"
                  className="text-black placeholder:text-[#FF465D] focus-visible:outline-none md:text-[1.125rem]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-black placeholder:text-[#FF465D] focus-visible:outline-none md:text-[1.125rem]"
                />
                <InputMask
                  placeholder="Telefone"
                  mask="99 9 9999-9999"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  className="text-black placeholder:text-[#FF465D] focus-visible:outline-none md:text-[1.125rem]"
                />
                {/* <input
                  placeholder="Telefone"
                  type="tel"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  className="text-black placeholder:text-[#FF465D] focus-visible:outline-none md:text-[1.125rem]"
                /> */}
                <textarea
                  placeholder="Mensagem"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-black placeholder:text-[#FF465D] focus-visible:outline-none md:text-[1.125rem]"
                />
              </div>
              <div className="flex justify-center">
                <ButtonLoading
                  isLoading={loading}
                  className="relative flex h-[2.625rem] w-full items-center justify-center rounded-[1.3125rem] bg-[#FF465D] bg-no-repeat text-[1.25rem] leading-[1.625rem] text-white transition-all hover:bg-red-900"
                >
                  {!loading ? "Enviar mensagem" : "Enviando..."}
                </ButtonLoading>
              </div>
            </form>
          )}
          {check && (
            <img src="images/check.png" className="h-[5rem] w-[5rem]" />
          )}
        </div>
      </div>
      <div
        className="relative z-[5] mt-[-10rem] h-[278px] w-full "
        style={{
          backgroundImage: "linear-gradient(to left, #08205E, #1D4D9D)",
        }}
      >
        <div className="absolute bottom-[2rem] left-11">
          <img
            src="images/logo.svg"
            alt="logo"
            className="mb-[0.8rem] w-[6.375rem]"
          />
          <span className="text-[0.8rem] font-normal text-white">
            Cnpj: 52.163.042/0001-47
          </span>
        </div>
      </div>
    </>
  );
}
