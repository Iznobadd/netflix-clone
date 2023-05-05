import DownloadHero from "../../assets/images/download-hero.jpg";
import BoxShot from "../../assets/images/boxshot-hero.png";
const BannerSix = () => {
  return (
    <div className="min-h-[auto] py-[3.5rem] md:py-[4.5rem] relative flex justify-center text-white text-center h-full box-border">
      <div className="m-auto max-w-[calc(100%-3rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.33%-6rem)] 2xl:max-w-[calc(66.666%-6rem)] flex items-center flex-col lg:flex-row-reverse text-center">
        <div className="w-full basis-1/2 p-0 z-[1] lg:text-left pr-[0.375rem]">
          <h2 className="text-[2rem] lg:text-[3rem] font-bold lg:font-extrabold">
            Téléchargez vos séries pour les regarder hors connexion
          </h2>
          <p className="mt-[1rem] text-[1.125rem] lg:text-[1.5rem]">
            Uniquement disponible dans les offres sans pub.
          </p>
          <div className="mt-[1.5rem]"></div>
        </div>
        <div className="basis-1/2 p-0 z-[1] lg:pl-[0.375rem]">
          <div className="relative">
            <img
              src={DownloadHero}
              alt="Support Netflix Clone"
              className="w-full"
            />
            <div className="overflow-hidden absolute left-1/2 bottom-[8%] -translate-x-1/2 mx-auto bg-black flex items-center w-[60%] xl:w-1/2 min-w-[15rem] py-[0.25rem] md:py-[0.35rem] md:px-[0.75rem] lg:py-[0.5rem] px-[0.65rem] border-2 border-[rgba(255,255,255,0.2)] rounded-xl z-[1] shadow-[0_0_2em_0_rgba(0,0,0,0.1)]">
              <div className="mr-[1rem] flex-grow-0 flex-shrink-0">
                <img
                  src={BoxShot}
                  alt="BoxShot"
                  className="h-[3rem] md:h-[4rem] lg:h-[4.5rem] 2xl:h-[5rem]"
                />
              </div>
              <div className="text-left flex-grow flex-shrink my-[0.3rem]">
                <div className="text-white font-medium text-[0.875rem] md:text-[1rem]">
                  Stranger Things
                </div>
                <div className="text-[0.75rem] md:text-[0.875rem] text-[#0071eb] font-normal">
                  Téléchargement en cours...
                </div>
              </div>
              <div className="w-[3rem] h-[3rem] block flex-grow-0 flex-shrink-0 lg:h-[3.75rem] download-bg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5rem] absolute bottom-[-0.5rem] bg-[rgb(35,35,35)] "></div>
    </div>
  );
};

export default BannerSix;
