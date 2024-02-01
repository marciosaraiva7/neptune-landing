/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export const Journey = () => {
  return (
    <div className="flex flex-col px-[2rem] md:flex-row">
      <div className="flex max-w-[9.625rem] flex-col items-center justify-between gap-[1.875rem]">
        <img src="images/client-contact.svg" className="" />
        <p className="text-balance text-center text-[1.125rem] leading-[1.375rem] text-white">
          Contato com cliente
        </p>
      </div>
      <div className="flex flex-col items-center justify-end pb-[1.875rem]">
        <img src="images/arrow-bottom.svg" className="w-[4.125rem]" />
      </div>
      <div className="flex max-w-[9.625rem] flex-col items-center justify-between gap-[1.875rem]">
        <img src="images/consultory.svg" className="" />
        <p className="text-balance text-center text-[1.125rem] leading-[1.375rem] text-white">
          Consultoria e entendimento
        </p>
      </div>
      <div className="flex flex-col items-center justify-start ">
        <img src="images/arrow-top.svg" className="w-[4.125rem]" />
      </div>
      <div className="flex max-w-[9.625rem] flex-col items-center justify-between gap-[1.875rem]">
        <img src="images/solution.svg" className="" />
        <p className="text-balance text-center text-[1.125rem] leading-[1.375rem] text-white">
          Proposta de solução
        </p>
      </div>
      <div className="flex flex-col items-center justify-end pb-[1.875rem]">
        <img src="images/arrow-bottom.svg" className="w-[4.125rem]" />
      </div>
      <div className="flex max-w-[9.625rem] flex-col items-center justify-between gap-[1.875rem]">
        <img src="images/onboarding.svg" className="" />
        <p className="text-balance text-center text-[1.125rem] leading-[1.375rem] text-white">
          Onboarding de processos
        </p>
      </div>
      <div className="flex flex-col items-center justify-start ">
        <img src="images/arrow-top.svg" className="w-[4.125rem]" />
      </div>
      <div className="flex max-w-[9.625rem] flex-col items-center justify-between gap-[1.875rem]">
        <img src="images/production.svg" className="" />
        <p className="text-balance text-center text-[1.125rem] leading-[1.375rem] text-white">
          Produção e desenvolvimento
        </p>
      </div>
    </div>
  );
};
