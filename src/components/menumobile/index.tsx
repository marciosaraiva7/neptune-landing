/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  // Tipando menuRef como HTMLDivElement
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    // Usar 'mousedown' em vez de 'click' pode oferecer uma resposta mais rápida
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div ref={menuRef}>
      <button onClick={toggleMenu} className="pt-[10px] pr-[10px]">
        <img
          src={isOpen ? "images/close.svg" : "images/hamburger.svg"}
          alt="Menu"
        />
      </button>
      {isOpen && (
        <div className="w-full top-0 left-0 absolute h-[70vh] bg-white z-[8] rounded-b-[40px]">
          <div className="w-full flex justify-between p-[20px]">
            <img src="images/logo-color.svg" />
            <button
              onClick={toggleMenu}
              className="rounded-full w-[2rem] h-[2rem] bg-[#FF465D] flex justify-center items-center"
            >
              <img src="images/close.svg" />
            </button>
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center">
            <Link
              onClick={toggleMenu}
              href={""}
              className="text-[#1D4D9D] mb-[40px] text-[1.6rem]"
            >
              Serviços
            </Link>
            <Link
              onClick={toggleMenu}
              href={""}
              className="text-[#1D4D9D] mb-[40px] text-[1.6rem]"
            >
              Abordagem
            </Link>
            <Link
              onClick={toggleMenu}
              href={""}
              className="text-[#1D4D9D] text-[1.6rem] mb-[142px]"
            >
              Sobre nós
            </Link>
            <Button className="rounded-3xl w-[14.25rem] h-[2.625rem] bg-[#FF465D] bg-no-repeat  flex justify-center items-center relative transition-all hover:bg-red-900 text-[1.25rem] leading-[1.625rem] mb-[8rem]">
              Entre em contato
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
