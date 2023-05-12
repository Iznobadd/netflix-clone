import Popcorn from "../svg/Popcorn";

const BannerTwo = () => {
  return (
    <div className="lg:absolute lg:-translate-y-1/2 lg:w-full">
      <div className="mt-[16px] radial-hero relative shadow-[0px_-8px_25px_rgba(0,0,0,0.5)] rounded text-white block mx-[24px] p-[30px] md:mt-0 md:p-[22px] md:flex md:justify-center md:radial-hero-md md:mx-[74px]">
        <div className="mt-[-80px] scale-[0.8] ml-[-40px] md:mt-0 md:scale-100 md:ml-0">
          <Popcorn />
        </div>
        <div className="md:pl-[32px]">
          <p className="text-[20px] font-medium leading-[30px] m-0">
            Le Netflix que vous aimez pour juste 5,99 €.
          </p>
          <p className="text-[16px] leading-[24px] mt-[4px] mb-[8px]">
            Choisissez l'offre Standard avec pub.
          </p>
          <button className="cursor-pointer text-[#448ef4] flex items-center gap-2 w-fit font-medium bg-transparent border-0 underline p-0">
            En savoir plus
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-name="ChevronRight"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
