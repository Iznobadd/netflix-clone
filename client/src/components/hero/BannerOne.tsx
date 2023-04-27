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
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
