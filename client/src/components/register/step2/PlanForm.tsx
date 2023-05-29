import { BlackCheck, NoCheck, RedCheck } from "../../svg/Check";

const PlanForm = () => {
  const list = [
    "Regardez autant que vous voulez.",
    "Recommandations personnalisées.",
    "Changez ou annulez votre offre à tout moment.",
  ];

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
                <li className="items-start flex flex-row justify-start m-0 mt-[6px]">
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
                  className="box-border p-0 absolute opacity-0 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-[75px] w-full md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] appearance-none bg-none border-0 m-0 -z-10"
                />
                <span className="bg-primary rounded-sm text-white text-[17px] font-medium mx-auto opacity-60 p-[13px] text-center h-[75px] w-full md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] md:p-[18px] items-center flex box-border justify-center relative select-none">
                  Standard avec pub
                </span>
              </label>
              <label className="py-[8px] px-[4px] w-1/3 box-border flex-auto relative md:px-0 md:py-[12px] ">
                <input
                  type="radio"
                  className="box-border p-0 absolute opacity-0 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-[75px] w-full md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] appearance-none bg-none border-0 m-0 -z-10"
                />
                <span className="bg-primary rounded-sm text-white text-[17px] font-medium mx-auto opacity-60 p-[13px] text-center h-[75px] w-full md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] md:p-[18px] items-center flex box-border justify-center relative select-none">
                  Standard
                </span>
              </label>
              <label className="py-[8px] px-[4px] w-1/3 box-border flex-auto relative md:px-0 md:py-[12px] ">
                <input
                  type="radio"
                  className="box-border p-0 absolute opacity-0 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-[75px] w-full md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] appearance-none bg-none border-0 m-0 -z-10"
                />
                <span className="bg-primary rounded-sm text-white text-[17px] font-medium mx-auto opacity-60 p-[13px] text-center h-[75px] w-full md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] md:p-[18px] items-center flex box-border justify-center relative select-none">
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
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  5.99 €
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  13.49 €
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  17.99 €
                </td>
              </tr>
              <tr className="items-center flex-wrap flex md:min-h-[60px] md:border-b md:border-b-[#ccc] md:flex-nowrap">
                <td className="w-full text-[13px] pt-[16px] px-[8px] pb-[4px] text-center fill-[#333] text-[#333] flex-shrink-0 flex-grow-0 basis-auto min-h-[37px] relative box-border block md:w-[40%] md:text-left md:px-[16px] md:py-[12px] md:text-[16px] md:before:hidden before:bg-[#ccc] before:h-[1px] before:content-[''] before:block before:left-1 before:right-1 before:absolute before:top-[3px]">
                  Qualité vidéo
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  Excellente
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  Excellente
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  Optimale
                </td>
              </tr>
              <tr className="items-center flex-wrap flex md:min-h-[60px] md:border-b md:border-b-[#ccc] md:flex-nowrap">
                <td className="w-full text-[13px] pt-[16px] px-[8px] pb-[4px] text-center fill-[#333] text-[#333] flex-shrink-0 flex-grow-0 basis-auto min-h-[37px] relative box-border block md:w-[40%] md:text-left md:px-[16px] md:py-[12px] md:text-[16px] md:before:hidden before:bg-[#ccc] before:h-[1px] before:content-[''] before:block before:left-1 before:right-1 before:absolute before:top-[3px]">
                  Résolution
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  1080p
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  1080p
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  4K+HDR
                </td>
              </tr>
              <tr className="items-center flex-wrap flex md:min-h-[60px] md:border-b md:border-b-[#ccc] md:flex-nowrap">
                <td className="w-full text-[13px] pt-[16px] px-[8px] pb-[4px] text-center fill-[#333] text-[#333] flex-shrink-0 flex-grow-0 basis-auto min-h-[37px] relative box-border block md:w-[40%] md:text-left md:px-[16px] md:py-[12px] md:text-[16px] md:before:hidden before:bg-[#ccc] before:h-[1px] before:content-[''] before:block before:left-1 before:right-1 before:absolute before:top-[3px]">
                  Accédez à Netflix sur votre TV, ordinateur, smartphone et
                  tablette
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  <span className="inline-block h-[26px] w-[26px]">
                    <BlackCheck />
                  </span>
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  <span className="inline-block h-[26px] w-[26px]">
                    <BlackCheck />
                  </span>
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  <span className="inline-block h-[26px] w-[26px]">
                    <BlackCheck />
                  </span>
                </td>
              </tr>
              <tr className="items-center flex-wrap flex md:min-h-[60px] md:border-b md:border-b-[#ccc] md:flex-nowrap">
                <td className="w-full text-[13px] pt-[16px] px-[8px] pb-[4px] text-center fill-[#333] text-[#333] flex-shrink-0 flex-grow-0 basis-auto min-h-[37px] relative box-border block md:w-[40%] md:text-left md:px-[16px] md:py-[12px] md:text-[16px] md:before:hidden before:bg-[#ccc] before:h-[1px] before:content-[''] before:block before:left-1 before:right-1 before:absolute before:top-[3px]">
                  Téléchargements
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  <span className="inline-block h-[26px] w-[26px]">
                    <NoCheck />
                  </span>
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  <span className="inline-block h-[26px] w-[26px]">
                    <BlackCheck />
                  </span>
                </td>
                <td className="w-1/3 fill-[#737373] text-[#737373] font-medium min-h-[37px] p-2 relative box-border block flex-auto text-center md:w-1/5 md:px-[16px] md:py-[12px]">
                  <span className="inline-block h-[26px] w-[26px]">
                    <BlackCheck />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlanForm;
