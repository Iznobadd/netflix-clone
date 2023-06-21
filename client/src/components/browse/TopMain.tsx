import MainPicture from "../../assets/images/mainPicture.jpg";
import TitleMainTop from "../../assets/images/titleMainTop.png";
import Info from "../svg/Info";
import Play from "../svg/Play";
function TopMain() {
  return (
    <span className="block relative z-10">
      <div className="relative left-0 top-0 right-0 bg-black mb-5 pb-[40%] select-none">
        <div>
          <div className="bg-black h-[56.25vw] absolute w-full z-0">
            <div className="absolute bottom-0 top-0 right-0 left-0">
              <div className="z-2 absolute bottom-0 right-0 left-0 top-0">
                <div className="absolute bottom-0 right-0 left-0 top-0">
                  <img
                    src={MainPicture}
                    alt="Little Women"
                    className="absolute top-0 right-0 left-0 bottom-0 bg-cover bg-[50%] w-full"
                  />
                  <div className="bg-gradient-to-r from-[rgba(0,0,0,0.6)] via-15% to-transparent absolute bottom-0 left-0 top-0 right-[26.09%] z-50"></div>
                  <div className="radial-topmain absolute left-0 right-0 bottom-[-1px] h-[14.7vw] opacity-100 top-auto w-full"></div>
                </div>
                <div className="flex absolute right-0 z-10 items-center justify-end flex-row bottom-[35%]">
                  <span className="h-[2.4vw] mr-[1.1vw] relative w-[2.4vw] flex items-end flex-col text-[1.35rem]"></span>
                  <span className="flex items-center box-border border-l-[3px] border-[#dcdcdc] py-[0.5vw] pr-[3.5vw] pl-[0.8vw] h-[2.4vw] text-[1.1vw] bg-[rgba(51,51,51,0.6)]">
                    <span className="overflow-hidden text-ellipsis uppercase whitespace-nowrap text-white">
                      16+
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="bottom-0 left-0 right-0 top-0 absolute h-full w-full z-10">
              <div className="absolute bottom-[35%] flex flex-col justify-end left-[4%] top-0 w-[36%] z-10">
                <div className="w-full">
                  <div>
                    <div className="mb-[1.2vw] min-h-[13.2vw] relative">
                      <img
                        src={TitleMainTop}
                        alt="Little Women title"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-[0.5vw] text-white text-[1.2vw] font-normal leading-normal shadow-sm w-full">
                      Trois sœurs sans argent, n'ayant toujours pu compter que
                      sur elles-mêmes, se retrouvent aux prises avec la plus
                      puissante famille du pays.
                    </div>
                  </div>
                  <div className="flex leading-[88%] mt-[1.5vw] whitespace-nowrap relative z-10">
                    <a
                      href="#"
                      className="flex shrink-0 items-center justify-center text-white cursor-pointer"
                    >
                      <button className="px-[1.5rem] ml-0 bg-white text-black mb-4 mr-4 appearance-none rounded cursor-pointer flex justify-center p-[0.8rem] relative select-none whitespace-nowrap">
                        <div className="leading-[0px]">
                          <div className="w-5 h-5 flex items-center justify-center overflow-hidden">
                            <Play />
                          </div>
                        </div>
                        <div className="w-4"></div>
                        <span className="block text-[1rem] font-medium leading-[1.4rem]">
                          Lecture
                        </span>
                      </button>
                    </a>
                    <button className="px-[1.5rem] ml-0 bg-[rgba(109,109,110,0.7)] text-white mb-4 mr-4 appearance-none rounded cursor-pointer flex justify-center py-[0.8rem] relative select-none whitespace-nowrap">
                      <div className="leading-[0px]">
                        <div className="w-5 h-5 flex items-center justify-center overflow-hidden">
                          <Info />
                        </div>
                      </div>
                      <div className="w-4"></div>
                      <span className="block text-[1rem] font-medium leading-[1.4rem]">
                        Plus d'infos
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default TopMain;
