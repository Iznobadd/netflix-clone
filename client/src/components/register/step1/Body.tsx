import { NavLink } from "react-router-dom";
import bgDevice from "../../../assets/images/register-devices.png";
const Body = () => {
  return (
    <div className="pb-[95px] flex-grow bg-white overflow-hidden w-full">
      <div className="pt-[20px] px-[32px] pb-[60px] block overflow-hidden box-border mx-auto mb-[15px] max-w-[978px]">
        <div className="text-left max-w-[340px] mx-auto md:text-center">
          <div className="mt-[30%] inline-block md:mt-0">
            <span
              className="w-[260px] mb-[20px] block h-[90px] md:mt-[100px] bg-[length:260px] bg-no-repeat bg-[50%_50%]"
              style={{ backgroundImage: `url(${bgDevice})` }}
            ></span>
          </div>
          <div>
            <div className="text-left md:text-center">
              <span className="text-[13px] block leading-[19px]">
                ÉTAPE <b>1</b> SUR <b>3</b>
              </span>
              <h1 className="text-[32px] inline-block font-medium mb-[0.4em]">
                Complétez la configuration de votre compte.
              </h1>
            </div>
          </div>
          <div className="text-[18px] inline-block max-w-[300px] font-light">
            Netflix est personnalisé selon vos goûts. Créez un mot de passe pour
            regarder Netflix quand vous voulez, où vous voulez.
          </div>
        </div>
        <div className="max-w-[340px] mt-[24px] mx-auto text-center">
          <NavLink
            to="/register/regform"
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
