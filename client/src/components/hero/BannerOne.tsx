import backgroundImg from "../../assets/images/signup.jpg";
import FormEmail from "./FormEmail";

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
              <FormEmail index="1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
