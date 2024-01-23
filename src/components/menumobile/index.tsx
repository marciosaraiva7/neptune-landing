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
      <button onClick={toggleMenu} className="pr-[10px] pt-[10px]">
        <img
          src={isOpen ? "images/close.svg" : "images/hamburger.svg"}
          alt="Menu"
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-0 z-[8] h-[70vh] w-full rounded-b-[40px] bg-white">
          <div className="flex w-full justify-between p-[20px]">
            <img src="images/logo-color.svg" />
            <button
              onClick={toggleMenu}
              className="flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-[#FF465D]"
            >
              <img src="images/close.svg" />
            </button>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center">
            <Link
              onClick={toggleMenu}
              href={"#services"}
              className="mb-[40px] text-[1.6rem] text-[#1D4D9D]"
            >
              Serviços
            </Link>
            <Link
              onClick={toggleMenu}
              href={"#approach"}
              className="mb-[40px] text-[1.6rem] text-[#1D4D9D]"
            >
              Abordagem
            </Link>
            <Link
              onClick={toggleMenu}
              href={"#about"}
              className="mb-[142px] text-[1.6rem] text-[#1D4D9D]"
            >
              Sobre nós
            </Link>
            <Link href={"#contact"}>
              <Button className="relative mb-[8rem] flex h-[2.625rem] w-[14.25rem]  items-center justify-center rounded-3xl bg-[#FF465D] bg-no-repeat text-[1.25rem] leading-[1.625rem] transition-all hover:bg-red-900">
                Entre em contato
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
