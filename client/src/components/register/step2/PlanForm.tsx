import { NavLink } from "react-router-dom";
import Cadenas from "../../svg/Cadenas";
import { BlackCheck, NoCheck, RedCheck, RedNoCheck } from "../../svg/Check";
import { useState } from "react";

const PlanForm = () => {
  const list = [
    "Regardez autant que vous voulez.",
    "Recommandations personnalisées.",
    "Changez ou annulez votre offre à tout moment.",
  ];
  const [selected, setSelected] = useState("premium");

  const handleSelected = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <div className="pb-[95px] grow bg-white overflow-hidden w-full">
      <div className="block transform-none opacity-100 px-[16px] pb-[60px] pt-[20px] overflow-hidden mx-auto mb-[15px] max-w-[978px]">
        <div className="mx-auto max-w-[1024px] overflow-hidden">
          <div className="px-[16px]">
            <div className="inline-block">
              <span className="leading-[27px] block text-[13px]">
                ÉTAPE <b>2</b> SUR <b>3</b>
              </span>
              <h1 className="text-[32px] inline-block font-medium mb-[0.4em]">
                Sélectionnez l'offre qui vous convient
              </h1>
            </div>
          </div>
          <div className="px-[16px] mb-[20px]">
            <ul className="mt-[4px] flex flex-col justify-between mb-[20px] text-left font-light">
              {list.map((item, index) => (
                <li
                  className="items-start flex flex-row justify-start m-0 mt-[6px]"
                  key={index}
                >
                  <RedCheck />
                  <span className="text-[18px] my-0 ml-[10px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="items-end flex flex-col">
            <div className="w-full order-2 appearance-none border-0 box-border flex justify-center m-0 lg:order-1 lg:w-3/5">
              <label className="py-[8px] px-[4px] w-1/3 box-border flex-auto relative md:px-0 md:py-[12px] ">
                <input
                  type="radio"
                  name="plangrid_choice"
                  value="standard_pub"
                  checked={selected === "standard_pub"}
                  onChange={handleSelected}
                  className="box-border p-0 absolute opacity-0 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-[75px] w-full md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] appearance-none bg-none border-0 m-0 -z-10"
                />
                <span
                  className={`bg-primary rounded-sm text-white text-[17px] font-medium mx-auto p-[13px] text-center h-[75px] w-full md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] md:p-[18px] items-center flex box-border justify-center relative select-none ${
                    selected === "standard_pub"
                      ? "opacity-100 after:border-8 after:border-b-0 after:border-t-[#e50914] after:block after:absolute after:top-full after:-translate-x-1/2 after:left-1/2"
                      : "opacity-60"
                  }`}
                >
                  Standard avec pub
                </span>
              </label>
              <label className="py-[8px] px-[4px] w-1/3 box-border flex-auto relative md:px-0 md:py-[12px] ">
                <input
                  type="radio"
                  name="plangrid_choice"
                  value="standard"
                  checked={selected === "standard"}
                  onChange={handleSelected}
                  className="box-border p-0 absolute opacity-0 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-[75px] w-full md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] appearance-none bg-none border-0 m-0 -z-10"
                />
                <span
                  className={`bg-primary rounded-sm text-white text-[17px] font-medium mx-auto p-[13px] text-center h-[75px] w-full md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] md:p-[18px] items-center flex box-border justify-center relative select-none ${
                    selected === "standard"
                      ? "opacity-100 after:border-8 after:border-b-0 after:border-t-[#e50914] after:block after:absolute after:top-full after:-translate-x-1/2 after:left-1/2"
                      : "opacity-60"
                  }`}
                >
                  Standard
                </span>
              </label>
              <label className="py-[8px] px-[4px] w-1/3 box-border flex-auto relative md:px-0 md:py-[12px] ">
                <input
                  type="radio"
                  name="plangrid_choice"
                  value="premium"
                  checked={selected === "premium"}
                  onChange={handleSelected}
                  className="box-border p-0 absolute opacity-0 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-[75px] w-full md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] appearance-none bg-none border-0 m-0 -z-10"
                />
                <span
                  className={`bg-primary rounded-sm text-white text-[17px] font-medium mx-auto p-[13px] text-center h-[75px] w-full md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] md:p-[18px] items-center flex box-border justify-center relative select-none ${
                    selected === "premium"
                      ? "opacity-100 after:border-8 after:border-b-0 after:border-t-[#e50914] after:block after:absolute after:top-full after:-translate-x-1/2 after:left-1/2"
                      : "opacity-60"
                  }`}
                >
                  Premium
                </span>
              </label>
            </div>
          </div>
          <table className="flex flex-col border-collapse pb-2.5">
            <tbody className="flex flex-col">
              <tr className="items-center flex-wrap flex md:min-h-[60px] md:border-b md:border-b-[#ccc] md:flex-nowrap">
                <td className="w-full text-[13px] pt-[16px] px-[8px] pb-[4px] text-center fill-[#333] text-[#333] flex-shrink-0 flex-grow-0 basis-auto min-h-[37px] relative box-border block md:w-[40%] md:text-left md:px-[16px] md:py-[12px] md:text-[16px]">
                  Abonnement mensuel
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "standard_pub"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  5.99 €
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "standard"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  13.49 €
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "premium"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  17.99 €
                </td>
              </tr>
              <tr className="items-center flex-wrap flex md:min-h-[60px] md:border-b md:border-b-[#ccc] md:flex-nowrap">
                <td className="w-full text-[13px] pt-[16px] px-[8px] pb-[4px] text-center fill-[#333] text-[#333] flex-shrink-0 flex-grow-0 basis-auto min-h-[37px] relative box-border block md:w-[40%] md:text-left md:px-[16px] md:py-[12px] md:text-[16px] md:before:hidden before:bg-[#ccc] before:h-[1px] before:content-[''] before:block before:left-1 before:right-1 before:absolute before:top-[3px]">
                  Qualité vidéo
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "standard_pub"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  Excellente
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "standard"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  Excellente
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "premium"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  Optimale
                </td>
              </tr>
              <tr className="items-center flex-wrap flex md:min-h-[60px] md:border-b md:border-b-[#ccc] md:flex-nowrap">
                <td className="w-full text-[13px] pt-[16px] px-[8px] pb-[4px] text-center fill-[#333] text-[#333] flex-shrink-0 flex-grow-0 basis-auto min-h-[37px] relative box-border block md:w-[40%] md:text-left md:px-[16px] md:py-[12px] md:text-[16px] md:before:hidden before:bg-[#ccc] before:h-[1px] before:content-[''] before:block before:left-1 before:right-1 before:absolute before:top-[3px]">
                  Résolution
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "standard_pub"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  1080p
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "standard"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  1080p
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "premium"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  4K+HDR
                </td>
              </tr>
              <tr className="items-center flex-wrap flex md:min-h-[60px] md:border-b md:border-b-[#ccc] md:flex-nowrap">
                <td className="w-full text-[13px] pt-[16px] px-[8px] pb-[4px] text-center fill-[#333] text-[#333] flex-shrink-0 flex-grow-0 basis-auto min-h-[37px] relative box-border block md:w-[40%] md:text-left md:px-[16px] md:py-[12px] md:text-[16px] md:before:hidden before:bg-[#ccc] before:h-[1px] before:content-[''] before:block before:left-1 before:right-1 before:absolute before:top-[3px]">
                  Accédez à Netflix sur votre TV, ordinateur, smartphone et
                  tablette
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "standard_pub"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  <span className="inline-block h-[26px] w-[26px]">
                    {selected === "standard_pub" ? (
                      <RedCheck />
                    ) : (
                      <BlackCheck />
                    )}
                  </span>
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "standard"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  <span className="inline-block h-[26px] w-[26px]">
                    {selected === "standard" ? <RedCheck /> : <BlackCheck />}
                  </span>
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "premium"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  <span className="inline-block h-[26px] w-[26px]">
                    {selected === "premium" ? <RedCheck /> : <BlackCheck />}
                  </span>
                </td>
              </tr>
              <tr className="items-center flex-wrap flex md:min-h-[60px] md:border-0 md:flex-nowrap">
                <td className="w-full text-[13px] pt-[16px] px-[8px] pb-[4px] text-center fill-[#333] text-[#333] flex-shrink-0 flex-grow-0 basis-auto min-h-[37px] relative box-border block md:w-[40%] md:text-left md:px-[16px] md:py-[12px] md:text-[16px] md:before:hidden before:bg-[#ccc] before:h-[1px] before:content-[''] before:block before:left-1 before:right-1 before:absolute before:top-[3px]">
                  Téléchargements
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "standard_pub"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  <span className="inline-block h-[26px] w-[26px]">
                    {selected === "standard_pub" ? <RedNoCheck /> : <NoCheck />}
                  </span>
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "standard"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  <span className="inline-block h-[26px] w-[26px]">
                    {selected === "standard" ? <RedCheck /> : <BlackCheck />}
                  </span>
                </td>
                <td
                  className={`w-1/3 font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px] ${
                    selected === "premium"
                      ? "text-[#e50914] fill-[#e50914]"
                      : "text-[#737373] fill-[#737373]"
                  }`}
                >
                  <span className="inline-block h-[26px] w-[26px]">
                    {selected === "premium" ? <RedCheck /> : <BlackCheck />}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mb-[20px] text-center">
            <button className="appearance-none m-0 items-center box-border inline-flex justify-center select-none border-0 rounded cursor-pointer relative align-text-top w-auto font-medium text-black bg-[rgba(0,0,0,0.1)] min-h-[2rem] text-[0.875rem] py-[0.25rem] px-[1rem]">
              Voir toutes les offres
            </button>
          </div>
          <div>
            <div className="flex items-center bg-[#f3f3f3] text-[#6e6e6e] text-[13px] m-2.5 p-2">
              <span className="h-[18px] py-2 pr-4 pl-2 w-[18px] box-content">
                <Cadenas />
              </span>
              <span>
                Une offre avec pub comprend quelques différences.
                <a href="#" className="text-[#0071eb]">
                  {" "}
                  Savoir comment ça fonctionne.
                </a>
              </span>
            </div>
            <small className="text-[#737373] block text-[13px] px-4">
              <span>
                Si vous sélectionnez une offre avec pub, nous vous demanderons
                de fournir votre date de naissance pour personnaliser les
                publicités, ainsi qu'à d'autres fins conformes à la
                <a href="#" className="text-[#0071eb]">
                  {" "}
                  Déclaration de confidentialité{" "}
                </a>
                de Netflix
              </span>
            </small>
            <small className="mt-2.5 text-[#737373] block text-[13px] px-4">
              <span>
                La disponibilité de la HD (720p), de la Full HD (1080p), de
                l'Ultra HD (4K) et de la HDR dépend de votre connexion Internet
                et des capacités de l'appareil. Tous les contenus ne sont pas
                disponibles dans toutes les résolutions. Pour en savoir plus,
                veuillez consulter nos{" "}
                <a href="#" className="text-[#0071eb]">
                  Conditions d'utilisation
                </a>
                .
              </span>
            </small>
            <small className="mt-2.5 text-[#737373] block text-[13px] px-4">
              <span>
                Seules les personnes qui vivent avec vous peuvent utiliser votre
                compte. Ajoutez un abonné supplémentaire avec une offre Standard
                ou jusqu'à deux abonnés supplémentaires avec une offre Premium.{" "}
                <a href="#" className="text-[#0071eb]">
                  En savoir plus
                </a>
                . Regardez Netflix en simultané sur 4 appareils différents avec
                l'offre Premium, sur 2 avec les offres Standard ou Standard avec
                pub, et sur 1 avec l'offre Essentiel.
              </span>
            </small>
          </div>
        </div>
        <div className="mt-[24px] text-center mx-auto max-w-[340px] px-[16px]">
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

export default PlanForm;
