/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function FloatButton() {
  return (
    <div className="fixed bottom-4 right-8 z-30">
      <Link href={"https://wa.me/message/KJNCO7ZNQG5BG1"}>
        <button className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-500 ease-in-out md:hover:scale-125">
          <img
            src="/images/whatsapp-icon.png"
            alt="botao de contato whatsapp"
            className="h-16 w-16"
          />
        </button>
      </Link>
    </div>
  );
}
