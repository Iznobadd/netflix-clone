import { NavLink } from "react-router-dom";
import { handleBlur, handleFocus } from "../../utils/functions";

const StepForm = () => {
  return (
    <div className="pb-[95px] flex-grow bg-white overflow-hidden w-full">
      <div className="px-[32px] pt-[20px] pb-[60px] block overflow-hidden box-border mx-auto mb-[15px] max-w-[978px]">
        <form action="">
          <div className="mx-auto max-w-[440px] text-left">
            <div>
              <div className="mt-[20px] inline-block">
                <span className="text-[13px] block leading-[19px]">
                  ÉTAPE <b>1</b> SUR <b>3</b>
                </span>
                <h1 className="text-[32px] inline-block font-medium mb-[0.4em]">
                  Créez un mot de passe pour activer votre abonnement
                </h1>
              </div>
            </div>
            <div>
              <div className="text-[18px] font-light">
                Plus que quelques étapes et c'est fini !
              </div>
              <div className="text-[18px] mt-[10px] font-light">
                Plus rien à remplir.
              </div>
              <ul className="mt-[16px] mb-[20px] p-0 box-border">
                <li className="mb-[10px]">
                  <div className="relative max-w-[500px]">
                    <div className="relative">
                      <label>
                        <input
                          type="email"
                          id="email"
                          className="h-[60px] pt-[10px] px-[10px] w-full border appearance-none border-[#5fa53f] rounded-sm box-border text-black block text-[16px]"
                          onFocus={(event) => handleFocus(event, "focused")}
                          onBlur={(event) => handleBlur(event, "focused")}
                        />
                        <label
                          htmlFor="email"
                          className="text-[14px] text-[#8c8c8c] left-2.5 absolute top-1/2 transform -translate-y-1/2"
                        >
                          E-mail
                        </label>
                      </label>
                    </div>
                  </div>
                </li>
                <li className="mb-[10px]">
                  <div className="relative max-w-[500px]">
                    <div className="relative">
                      <label>
                        <input
                          id="pwd"
                          type="password"
                          className="h-[60px] pt-[10px] px-[10px] w-full border appearance-none border-[#5fa53f] rounded-sm box-border text-black block text-[16px]"
                          onFocus={(event) => handleFocus(event, "focused")}
                          onBlur={(event) => handleBlur(event, "focused")}
                        />
                        <label
                          htmlFor="pwd"
                          className="text-[14px] text-[#8c8c8c] left-2.5 absolute top-1/2 transform -translate-y-1/2"
                        >
                          Ajouter un mot de passe
                        </label>
                      </label>
                    </div>
                  </div>
                </li>
                <li className="mb-[10px]">
                  <div className="box-border text-[16px] max-w-[500px] min-h-[32px] pl-[36px] relative select-none notif">
                    <input
                      type="checkbox"
                      className="absolute left-0 opacity-0 top-0 box-border"
                      id="notif"
                    />
                    <label
                      htmlFor="notif"
                      className="font-light my-[8px] block leading-[1.2] py-[6px] relative before:h-[25px] before:w-[25px] before:bg-white before:border before:block before:left-[-36px] before:absolute before:top-[2px]"
                    >
                      Oui, envoyez-moi les offres spéciales de Netflix par
                      e-mail.
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[440px] mt-[24px] mx-auto text-center">
            <NavLink
              to="/regform"
              className="rounded text-[24px] min-h-[64px] min-w-[110px] py-[20.5px] px-[2em] w-full bg-primary text-white relative border-none box-border cursor-pointer inline-block text-center select-none align-middle"
            >
              Suivant
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepForm;
