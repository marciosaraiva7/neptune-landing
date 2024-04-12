import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Clients() {
  return (
    <div className="w-full bg-white ">
      <div className="flex w-full flex-col items-center justify-center gap-16 pt-[9.563rem]">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <Link href={"https://dinamicainventarios.com.br/"}>
            <img
              src="/images/logo-dinamica.webp"
              alt="dinamica inventarios logo"
              className="w-[15rem] cursor-pointer"
            />
          </Link>
          <Link href={"https://wa.me/message/OBMPRF6ENY7LE1"}>
            <img
              src="/images/salute-logo.png"
              alt="Salute Probiotica logo"
              className="w-[10rem]"
            />
          </Link>

          <img
            src="/images/farm-logo.png"
            alt="FarmLog logo"
            className="w-[15rem]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
          <Link href={"https://www.1sti.com.br/"}>
            <img
              src="/images/1sti-logo.svg"
              alt="1sti logo"
              className="w-[5rem]"
            />
          </Link>
          <img
            src="/images/luhmin-logo.png"
            alt="Luhmin logo"
            className="w-[12rem]"
          />
        </div>
        <div className="mb-[5.563rem] flex w-full justify-end pr-[7.563rem]">
          <p className="text-right text-[1.25rem] font-bold leading-[1.813rem] tracking-[-0.023rem] text-black md:text-[2.25rem] md:leading-[3.313rem]">
            Empresas parceiras
          </p>
        </div>
      </div>
    </div>
  );
}
