/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useState, useRef } from "react";
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
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const telInputRef = useRef(null);
  const messageInputRef = useRef(null);

  return (
    <>
      <div
        id="contact"
        className="flex w-full justify-center px-[0.5rem] md:px-[4.938rem]"
      >
        <div className="relative z-20 mb-[1rem] flex w-full flex-col items-center rounded-[40px] bg-white p-[2rem] md:max-w-[80rem]">
          {!check && (
            <p className="mb-[1rem] text-center text-[1.6rem] font-bold text-[#1D4D9D] md:text-[1.75rem]">
              Fale com um especialista!
            </p>
          )}
          {!check && (
            <p className="mb-[3rem] text-center text-[1.4rem] leading-8 text-[#1D4D9D] md:w-[65%] md:text-[1.30rem]">
              Entre em contato conosco para saber mais sobre como podemos
              ajudá-lo a desenvolver aplicações digitais de sucesso para o seu
              negócio.
            </p>
          )}
          {!check && (
            <form
              onSubmit={onSubmit}
              className="flex w-full flex-col items-center gap-[3rem]"
            >
              <div className="mb-[3rem] flex flex-col gap-[1.6rem] md:w-[50%]">
                <div
                  className="flex gap-2 rounded-[5px] bg-[#DDDDDD80] px-[0.625rem] py-[0.5rem]"
                  onClick={() => {
                    if (nameInputRef.current) {
                      (nameInputRef.current as HTMLInputElement).focus();
                    }
                  }}
                >
                  <p className="text-[#FF465D] md:text-[1.125rem]">Nome</p>
                  <input
                    ref={nameInputRef}
                    className="left-0 bg-transparent text-black focus-visible:outline-none md:text-[1.125rem]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div
                  className="flex gap-2 rounded-[5px] bg-[#DDDDDD80] px-[0.625rem] py-[0.5rem]"
                  onClick={() => {
                    if (emailInputRef.current) {
                      (emailInputRef.current as HTMLInputElement).focus();
                    }
                  }}
                >
                  <p className="text-[#FF465D] md:text-[1.125rem]">Email</p>
                  <input
                    ref={emailInputRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent text-black focus-visible:outline-none md:text-[1.125rem]"
                  />
                </div>
                <div
                  className="flex gap-2 rounded-[5px] bg-[#DDDDDD80] px-[0.625rem] py-[0.5rem]"
                  onClick={() => {
                    if (telInputRef.current) {
                      (telInputRef.current as HTMLInputElement).focus();
                    }
                  }}
                >
                  <p className="text-[#FF465D] md:text-[1.125rem]">Telefone</p>
                  <InputMask
                    ref={telInputRef}
                    mask="99 9 9999-9999"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    className="bg-transparent text-black focus-visible:outline-none md:text-[1.125rem]"
                  />
                </div>
                <div
                  className="flex gap-2 rounded-[5px] bg-[#DDDDDD80] px-[0.625rem] py-[0.5rem]"
                  onClick={() => {
                    if (messageInputRef.current) {
                      (messageInputRef.current as HTMLInputElement).focus();
                    }
                  }}
                >
                  <p className="text-[#FF465D] md:text-[1.125rem]">Mensagem</p>
                  <textarea
                    ref={messageInputRef}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-transparent text-black focus-visible:outline-none md:text-[1.125rem]"
                  />
                </div>
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
      <>
        <div className=" mt-[-15rem] h-[25rem]"></div>
        <div className="relative z-[5] mt-[-10rem] h-[165px] w-full ">
          <div className="absolute bottom-[5rem] left-[20px] md:left-[80px]">
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
    </>
  );
}
