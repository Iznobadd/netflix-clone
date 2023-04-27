import LoginForm from "./LoginForm";

const Body = () => {
  return (
    <>
      <div className="mx-auto px-[5%] bg-transparent md:mb-[-236px] md:max-w-[586px] md:min-h-screen md:before:block md:before:h-[91px] md:after:block md:after:h-[236px]">
        <div>
          <div className="min-h-[550px] bg-black/75 rounded box-border flex flex-col m-0 pt-[20px] pb-[30px] w-full md:min-h-[660px] md:w-[450px] md:mb-[90px] md:px-[68px] md:pt-[60px] md:pb-[40px]">
            <div className="grow max-h-[350px]">
              <h1 className="text-white text-h1 font-medium mb-[28px]">
                S'identifier
              </h1>
              <LoginForm />
            </div>
            <div>
              <div className="text-[#737373] text-[15px] mt-[16px]">
                Première visite sur Netflix ? &nbsp;
                <a
                  href="#"
                  target="_self"
                  className="text-white hover:underline"
                >
                  Inscrivez-vous.
                </a>
              </div>
              <div className="text-gray text-[13px] mt-[11px] relative text-left">
                <p>
                  <span>
                    Cette page est protégée par Google reCAPTCHA pour nous
                    assurer que vous n'êtes pas un robot.
                  </span>
                  <button className="bg-transparent border-0 text-[#0071eb] cursor-pointer inline p-0">
                    En savoir plus.
                  </button>
                </p>
                <div className="opacity-0 invisible"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/75 mt-0 text-[#757575] text-[15px] min-w-[190px] relative w-full pb-[20px]">
        <div className="md:hidden border-[#737373] border-t h-0 w-full"></div>
        <div className="text-[#737373] py-[30px] mx-auto w-[90%] max-w-[1000px]">
          <p className="text-[#737373] mb-[30px] p-0 ">
            Des questions ? Appelez le{" "}
            <a href="tel:(+33) 0805-543-063" className="text-[#737373]">
              (+33) 0805-543-063
            </a>
          </p>
          <ul className="m-0 p-0 box-border text-[13px] max-w-[1000px]">
            <li className="inline-block mb-[16px] min-w-[100px] pr-[12px] sm:w-[33%] w-[50%] md:w-[25%] align-top">
              <a href="#" className="text-[#737373]">
                <span>FAQ</span>
              </a>
            </li>
            <li className="inline-block mb-[16px] min-w-[100px] pr-[12px] sm:w-[33%] w-[50%] md:w-[25%] align-top">
              <a href="#" className="text-[#737373]">
                <span>Centre d'aide</span>
              </a>
            </li>
            <li className="inline-block mb-[16px] min-w-[100px] pr-[12px] sm:w-[33%] w-[50%] md:w-[25%] align-top">
              <a href="#" className="text-[#737373]">
                <span>Boutique Netflix</span>
              </a>
            </li>
            <li className="inline-block mb-[16px] min-w-[100px] pr-[12px] sm:w-[33%] w-[50%] md:w-[25%] align-top">
              <a href="#" className="text-[#737373]">
                <span>Conditions d'utilisation</span>
              </a>
            </li>
            <li className="inline-block mb-[16px] min-w-[100px] pr-[12px] sm:w-[33%] w-[50%] md:w-[25%] align-top">
              <a href="#" className="text-[#737373]">
                <span>Confidentialité</span>
              </a>
            </li>
            <li className="inline-block mb-[16px] min-w-[100px] pr-[12px] sm:w-[33%] w-[50%] md:w-[25%] align-top">
              <a href="#" className="text-[#737373]">
                <span>Préférences de cookies</span>
              </a>
            </li>
            <li className="inline-block mb-[16px] min-w-[100px] pr-[12px] sm:w-[33%] w-[50%] md:w-[25%] align-top">
              <a href="#" className="text-[#737373]">
                <span>Mentions légales</span>
              </a>
            </li>
          </ul>
          <div className="mt-[20px]">
            <div className="border-0 w-auto inline-block relative md:max-w-[600px] cursor-pointer m-0 p-0">
              <label
                htmlFor="langswitch"
                className="border-0 block h-[1px] m-[-1px] overflow-hidden absolute whitespace-nowrap w-[1px]"
              >
                <span className="text-input">Choisir la langue</span>
              </label>
              <div className="inline-block relative w-full before:text-[#999] before:top-[3px] before:content-['⊕'] before:text-[27px] before:pointer-events-none before:absolute before:left-[8px] after:content-['▼'] after:text-[#999] after:text-[19px] after:pointer-events-none after:absolute after:right-[10px] after:top-[11px]">
                <select
                  id="select-langswitcher"
                  className="pr-[26px] leading-[1.7] pl-[50px] bg-black border border-[#333] text-[13px] p-[12px] appearance-none rounded-sm w-full"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
