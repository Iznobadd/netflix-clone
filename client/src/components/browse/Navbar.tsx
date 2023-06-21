import { Link } from "react-router-dom";
import Search from "../svg/Search";
import Notifications from "../svg/Notifications";
import ProfilePicture from "../../assets/images/profilePicture.png";

function Navbar() {
  const navigation = [
    { name: "Accueil", href: "/browse", current: true },
    { name: "Séries", href: "/browse/genre/series", current: false },
    { name: "Films", href: "/browse/genre/films", current: false },
    {
      name: "Nouveautés les plus regardées",
      href: "/browse/latest",
      current: false,
    },
    { name: "Ma liste", href: "/browse/my-list", current: false },
    {
      name: "Explorer par langue",
      href: "/browse/original-audio",
      current: false,
    },
  ];
  return (
    <div className="top-0 sticky h-auto min-h-[70px] z-10">
      <div className="left-0 relative right-0 top-0 z-10 bg-transparent">
        <div className="bg-transparent h-[68px] z-20 text-[14px] px-[60px] items-center flex relative bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-90% to-transparent">
          <Link
            to="/browse"
            className="text-[25px] mr-6 text-primary cursor-pointer inline-block "
          >
            <svg
              viewBox="0 0 111 30"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="w-[92.5px] h-[31px] fill-primary block"
            >
              <g>
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
              </g>
            </svg>
          </Link>
          <ul className="flex items-center">
            {navigation.map((item, key) => (
              <li className="block ml-5" key={key}>
                <Link
                  to={item.href}
                  className={` items-center flex h-full relative ${
                    item.current ? "text-white" : "text-[#e5e5e5]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center h-full justify-end absolute right-[4%] top-0">
            <div className="mr-4">
              <div className="inline-block align-middle">
                <button className="bg-transparent border-none cursor-pointer inline-block">
                  <Search />
                </button>
              </div>
            </div>
            <div className="mr-4">
              <span className="relative whitespace-normal">
                <button className="bg-transparent border-none text-[1.5em] leading-none pt-[2px] pb-[3px] px-[6px] relative cursor-pointer">
                  <Notifications />
                </button>
              </span>
            </div>
            <div>
              <div className="block text-[12px] relative z-0">
                <div className="flex items-center cursor-pointer w-full">
                  <a
                    href="#"
                    className="block relative -z-10 text-white cursor-pointer"
                  >
                    <span className="flex items-center relative">
                      <img className="h-8 w-8 rounded" src={ProfilePicture} />
                    </span>
                  </a>
                  <span className="h-0 border-t-white border-transparent border-solid border-[5px] border-b-[0px] ml-3 w-0"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
