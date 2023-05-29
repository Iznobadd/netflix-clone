import { NavLink } from "react-router-dom";
import checkmark from "../../../assets/images/checkmark.png";
import { RedCheck } from "../../svg/Check";
const Body = () => {
  const list = [
    "Sans engagement. Annulable à tout moment.",
    "Du divertissement à volonté pour un prix très attractif.",
    "Profitez de Netflix sur tous vos appareils.",
  ];
  return (
    <div className="pb-[95px] grow bg-white overflow-hidden w-full">
      <div className="block transform-none opacity-100 pt-[20px] px-[32px] pb-[60px] overflow-hidden box-border mx-auto mb-[15px] max-w-[978px]">
        <div className="text-left max-w-[340px] mx-auto md:text-center">
          <div className="mt-[30%] inline-block md:mt-0">
            <span
              className="mb-[20px] h-[50px] w-[50px] block md:mt-[100px] bg-[length:50px] bg-no-repeat bg-[50%_50%]"
              style={{ backgroundImage: `url(${checkmark})` }}
            ></span>
          </div>
          <div>
            <div className="inline-block">
              <span className="text-[13px] block leading-[19px]">
                ÉTAPE <b>2</b> SUR <b>3</b>
              </span>
              <h1 className="text-[32px] inline-block font-medium mb-[0.4em]">
                Choisissez votre offre.
              </h1>
            </div>
          </div>
          <div className="text-[18px] my-0 inline-block max-w-[300px]">
            <ul className="flex flex-col justify-between mb-[20px] mt-[15px] text-left">
              {list.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start flex-row justify-start m-0 font-light mb-[20px]"
                >
                  <RedCheck />
                  <span className="ml-[10px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-[4px] text-center mx-auto max-w-[340px]">
          <NavLink
            to="/register/planform"
            className="rounded text-[24px] min-h-[64px] min-w-[110px] py-[20.5px] px-[2em] w-full bg-primary text-white relative border-none box-border cursor-pointer inline-block text-center select-none align-middle"
          >
            Suivant
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Body;
