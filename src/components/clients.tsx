import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Clients() {
  return (
    <div className="w-full bg-white ">
      <div className="flex w-full flex-col items-center justify-center gap-8 pt-[9.563rem]">
        <div className="flex gap-8">
          <Link href={"https://dinamicainventarios.com.br/"}>
            <img
              src="/images/logo-dinamica.webp"
              alt="dinamica inventarios logo"
              className="w-[15rem] cursor-pointer"
            />
          </Link>
          <img
            src="/images/logo-dinamica.webp"
            alt="dinamica inventarios logo"
            className="w-[15rem]"
          />
          <img
            src="/images/logo-dinamica.webp"
            alt="dinamica inventarios logo"
            className="w-[15rem]"
          />
        </div>
        <div className="flex gap-8">
          <img
            src="/images/logo-dinamica.webp"
            alt="dinamica inventarios logo"
            className="w-[15rem]"
          />
          <img
            src="/images/logo-dinamica.webp"
            alt="dinamica inventarios logo"
            className="w-[15rem]"
          />
        </div>
        <div className="mb-[5.563rem] flex w-full justify-end pr-[7.563rem]">
          <p className="text-right text-[2.25rem] font-bold leading-[3.313rem] tracking-[-0.023rem] text-black">
            Empresas parceiras
          </p>
        </div>
      </div>
    </div>
  );
}
