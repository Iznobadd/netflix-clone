import ChildrenPic from "../../assets/images/enfant.png";
const BannerFive = () => {
  return (
    <div className="min-h-[auto] py-[3.5rem] md:py-[4.5rem] relative flex justify-center text-white text-center h-full box-border">
      <div className="m-auto max-w-[calc(100%-3rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.33%-6rem)] 2xl:max-w-[calc(66.666%-6rem)] flex items-center flex-col lg:flex-row text-center">
        <div className="w-full basis-1/2 p-0 z-[1] lg:text-left pr-[0.375rem]">
          <h2 className="text-[2rem] lg:text-[3rem] font-bold lg:font-extrabold">
            Créez des profils pour les enfants
          </h2>
          <p className="mt-[1rem] text-[1.125rem] lg:text-[1.5rem]">
            Les enfants découvrent de nouvelles aventures et retrouvent leurs
            personnages préférés dans un espace bien à eux, déjà inclus dans
            votre abonnement.
          </p>
          <div className="mt-[1.5rem]"></div>
        </div>
        <div className="basis-1/2 p-0 z-[1] lg:pl-[0.375rem]">
          <div className="relative">
            <img
              src={ChildrenPic}
              alt="Support Netflix Clone"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5rem] absolute bottom-[-0.5rem] bg-[rgb(35,35,35)]"></div>
    </div>
  );
};

export default BannerFive;
