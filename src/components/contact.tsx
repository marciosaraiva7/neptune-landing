/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useState, useRef } from "react";
import { FormEvent } from "react";
import InputMask from "react-input-mask";
import { ButtonLoading } from "./ui/button-loading";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

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

  function newMessage() {
    setName("");
    setEmail("");
    setTel("");
    setMessage("");
    setCheck(false);
  }
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const telInputRef = useRef(null);
  const messageInputRef = useRef(null);
  const isFormFilled = name && email && tel && message;

  return (
    <>
      <div
        id="contact"
        className="relative flex w-full justify-center md:flex-col  "
      >
        <div className="absolute w-full items-center justify-between text-sm md:flex  md:h-auto">
          <video
            src={"/videos/contact-video.mp4"}
            autoPlay
            loop
            muted
            playsInline
            className="hidden h-[770px] w-full object-cover md:block"
          />
          <img
            src="/images/abstract.jpeg"
            className="block h-[770px] w-full object-cover md:hidden"
          />
        </div>
        <div className="pt-[1.5rem] md:mx-[4.938rem] md:pt-0">
          <div className="relative z-20 mb-[1rem] flex w-full flex-col items-center rounded-[40px] bg-transparent p-[1rem] backdrop-blur-[50px] md:max-w-[80rem]  md:p-8">
            {!check && (
              <p className="mb-[1rem] text-center text-[1.6rem] font-bold text-[#FFFFFF] md:text-[1.75rem]">
                Fale com um especialista!
              </p>
            )}
            {!check && (
              <p className="mb-[3rem] text-center text-[1.4rem] leading-8 text-[#FFFFFF] md:w-[65%] md:text-[1.30rem]">
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
                    className="flex gap-2 rounded-[5px] bg-[#FFFFFF] px-[0.625rem] py-[0.5rem]"
                    onClick={() => {
                      if (nameInputRef.current) {
                        (nameInputRef.current as HTMLInputElement).focus();
                      }
                    }}
                  >
                    <p className="text-[#2B2B2B] md:text-[1.125rem]">Nome</p>
                    <input
                      ref={nameInputRef}
                      className="left-0 bg-transparent text-black focus-visible:outline-none md:text-[1.125rem]"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                  <div
                    className="flex gap-2 rounded-[5px] bg-[#FFFFFF] px-[0.625rem] py-[0.5rem]"
                    onClick={() => {
                      if (emailInputRef.current) {
                        (emailInputRef.current as HTMLInputElement).focus();
                      }
                    }}
                  >
                    <p className="text-[#2B2B2B] md:text-[1.125rem]">Email</p>
                    <input
                      ref={emailInputRef}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent text-black focus-visible:outline-none md:text-[1.125rem]"
                      disabled={loading}
                    />
                  </div>
                  <div
                    className="flex gap-2 rounded-[5px] bg-[#FFFFFF] px-[0.625rem] py-[0.5rem]"
                    onClick={() => {
                      if (telInputRef.current) {
                        (telInputRef.current as HTMLInputElement).focus();
                      }
                    }}
                  >
                    <p className="text-[#2B2B2B] md:text-[1.125rem]">
                      Telefone
                    </p>
                    <InputMask
                      ref={telInputRef}
                      mask="99 9 9999-9999"
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                      className="bg-transparent text-black focus-visible:outline-none md:text-[1.125rem]"
                      disabled={loading}
                    />
                  </div>
                  <div
                    className="flex gap-2 rounded-[5px] bg-[#FFFFFF] px-[0.625rem] py-[0.5rem]"
                    onClick={() => {
                      if (messageInputRef.current) {
                        (messageInputRef.current as HTMLInputElement).focus();
                      }
                    }}
                  >
                    <p className="text-[#2B2B2B] md:text-[1.125rem]">
                      Mensagem
                    </p>
                    <textarea
                      ref={messageInputRef}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-transparent text-black focus-visible:outline-none md:text-[1.125rem]"
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="flex justify-center ">
                  <ButtonLoading
                    type="submit"
                    isLoading={loading}
                    isFormFilled={isFormFilled}// Desabilita o botão se os campos não estiverem preenchidos ou se estiver carregando
                    className={`relative  flex h-[2.625rem] w-full items-center justify-center rounded-[1.3125rem] border bg-transparent bg-no-repeat text-[1.25rem] leading-[1.625rem] text-white transition-all duration-500 ease-in-out ${
                      isFormFilled && !loading
                        ? "hover:bg-white hover:text-black"
                        : "opacity-50"
                    }`}
                  >
                    {!loading ? "Enviar mensagem" : "Enviando..."}
                  </ButtonLoading>
                </div>
              </form>
            )}
            {check && (
              <div className="flex flex-col items-center justify-center gap-[2rem] py-[1rem]">
                <img src="images/check.png" className="h-[rem] w-[5rem]" />
                <p className="text-center text-[1.25rem] leading-[1.625rem] text-green-200">
                  Obrigado! O contato foi enviado, em breve retornaremos o
                  contato 🎉
                </p>
                <Button
                  onClick={newMessage}
                  style={{
                    boxShadow:
                      "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                  }}
                  className="relative flex h-[2.625rem] items-center justify-center rounded-[1.3125rem] border bg-transparent bg-no-repeat text-[1.25rem] leading-[1.625rem] text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black"
                >
                  <PlusIcon className="mr-2 h-4 w-4" /> Enviar nova mensagem
                </Button>
              </div>
            )}
          </div>
          <div className="sticky z-[20] mt-[-1rem] w-fit md:mt-[-7rem] md:h-[165px]">
            <div className="relative bottom-0 left-[20px] md:left-[80px]">
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
        </div>
      </div>
      <></>
    </>
  );
}
