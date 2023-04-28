import backgroundImg from "../../assets/images/signup.jpg";

const BannerOne = () => {
  return (
    <div className="relative flex justify-center text-center text-white box-border h-full min-h-[30rem] md:min-h-[32rem] lg:min-h-[43.75rem] pt-[7.5rem] md:pt-[8.5rem] lg:pt-[9.875rem] pb-[2rem] md:pb-[3rem] lg:pb-[4rem]">
      <div className="h-full left-0 absolute top-0 w-full">
        <div className="relative overflow-hidden h-full w-full">
          <img
            src={backgroundImg}
            alt="Banner 1 Netflix Clone"
            className="w-auto transform-none h-full object-cover md:w-full md:scale-125 md:translate-y-[-10%]"
          />
          <div className="bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0)] via-60% to-[rgba(0,0,0,0.8)] absolute top-0 right-0 left-0 bottom-0 bg-[rgb(0,0,0,0.4)]"></div>
        </div>
      </div>
      <div className="flex flex-col max-w-[calc(100%-3rem)] m-auto items-center text-center md:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.33%-6rem)]">
        <div className="basis-1/2 p-0 z-[1] w-full">
          <h1 className="m-0 text-[2rem] font-bold lg:text-[3rem]">
            Films et séries en illimité, et bien plus
          </h1>
          <p className="mt-[1rem] text-[1.125rem] lg:text-[1.5rem]">
            Où que vous soyez. Annulez à tout moment.
          </p>
          <div className="mt-[1.5rem]">
            <div className="text-center box-border max-w-[61.5rem] mx-auto px-[1.5rem] md:px-[2rem]">
              <form className="flex flex-col">
                <h3 className="m-0 text-[1.125rem] leading-[1.6875rem] lg:text-[1.25rem] lg:leading-[1.875rem]">
                  Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour
                  vous abonner ou réactiver votre abonnement.
                </h3>
                <div className="text-left relative mx-auto mt-[1rem] w-full max-w-[36.625rem] flex flex-col items-center md:flex-row md:items-start">
                  <div className="w-full relative inline-flex flex-wrap md:w-auto md:flex-auto">
                    <label
                      htmlFor="email"
                      className="absolute z-[1] whitespace-nowrap overflow-hidden text-ellipsis pointer-events-none text-[1rem] text-[rgba(255,255,255,0.7)] left-[1rem] leading-[1.5rem] right-[1rem] top-[0.75rem] md:top-[1rem] block select-none"
                    >
                      Adresse e-mail
                    </label>
                    <div className="text-[1rem] min-w-[12.5rem] p-0 w-full text-white inline-flex items-center gap-[2px] leading-[100%] relative text-left z-[0]">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="w-full text-transparent leading-[1.5rem] px-[1rem] pt-[1.25rem] md:pt-[1.5rem] md:pb-[0.5rem] pb-[0.25rem] min-h-[16px] min-w-[16px] appearance-none bg-transparent border-0 m-0"
                      />
                      <div className="border rounded bg-[rgba(22,22,22,0.7)] border-[rgba(128,128,128,0.7)] text-transparent absolute flex justify-center left-0 top-0 right-0 bottom-0 z-[-1] select-none"></div>
                    </div>
                  </div>
                  <button className="mt-[1rem] appearance-none items-center inline-flex box-border justify-center select-none border-0 rounded cursor-pointer leading-none relative w-auto font-medium text-[1.125rem] min-h-[3rem] py-[0.5rem] px-[1rem] bg-primary text-white md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:mt-0 md:ml-[0.5rem] md:text-[1.5rem] md:min-h-[3.5rem] md:py-[0.75rem] md:px-[1.5rem]">
                    Commencer
                    <div className="inline-block h-[1.5rem]">
                      <span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-name="ChevronRight"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
