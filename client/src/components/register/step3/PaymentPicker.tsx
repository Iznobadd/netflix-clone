import Lock from "../../../assets/images/lock.png";
import { YellowCadenas } from "../../svg/Cadenas";
import Cb from "../../../assets/images/cb.png";
import Visa from "../../../assets/images/visa.png";
import Mastercard from "../../../assets/images/mastercard.png";
import Amex from "../../../assets/images/amex.png";
import Paypal from "../../../assets/images/paypal.png";
import Orange from "../../../assets/images/orange.png";
import NetflixGift from "../../../assets/images/netflix-gift.png";
import { RightArrow } from "../../svg/Arrow";

function PaymentPicker() {
  return (
    <div className="pb-[95px] grow bg-white overflow-hidden w-full">
      <div className="block pt-5 pb-[60px] px-8 overflow-hidden mx-auto mb-4 max-w-[978px]">
        <div className="text-left mx-auto max-w-[500px] md:text-center">
          <div className="mb-5">
            <div className="inline-block">
              <span
                className="h-[50px] w-[50px] block bg-[length:50px] bg-no-repeat bg-[50%_50%] my-5"
                style={{ backgroundImage: `url(${Lock})` }}
              ></span>
            </div>
            <div>
              <div className="mt-5 inline-block">
                <span className="text-[13px] block leading-5">
                  ÉTAPE <b>3</b> SUR <b>3</b>
                </span>
                <h1 className="text-[32px] inline-block font-medium mb-[0.4em]">
                  Choisissez comment payer
                </h1>
              </div>
            </div>
            <div className="max-w-[440px] md:mx-auto ">
              <div className="text-[18px] font-light">
                Votre paiement est sécurisé et vous pouvez modifier votre mode
                de paiement à tout moment.
              </div>
              <div className="text-[18px] mt-3 font-medium">
                Sécurité et tranquillité d'esprit. <br />
                Facilement annulable en ligne.
              </div>
            </div>
          </div>
          <div className="flex items-end flex-row-reverse justify-start">
            <YellowCadenas />
            <div className="text-[13px] h-4 font-light">
              Chiffré de bout en bout
            </div>
          </div>
          <form action="">
            <div className="min-h-[50px] relative">
              <div>
                <button className="flex items-center h-auto min-h-[60px] appearance-none bg-white border-2 border-[#ccc] rounded-md text-[#333] cursor-pointer justify-between my-1 w-full leading-[60px]">
                  <div className="flex items-center flex-wrap h-auto justify-start py-4">
                    <div className="float-none my-1 max-w-none leading-5 min-h-[20px] mx-4">
                      <span className="block leading-5 min-h-[20px]">
                        Carte de crédit ou de débit
                      </span>
                    </div>
                    <div className="leading-5 min-h-[20px] mx-4 overflow-hidden">
                      <span className="float-none -mt-1 whitespace-nowrap leading-normal max-h-[60px] inline-block overflow-auto align-middle relative">
                        <img
                          src={Visa}
                          alt="Visa"
                          className="mr-2 mt-1 w-auto float-left h-6 max-w-[39px] max-h-[25px]"
                        />
                        <img
                          src={Mastercard}
                          alt="MasterCard"
                          className="mr-2 mt-1 w-auto float-left h-6 max-w-[39px] max-h-[25px]"
                        />
                        <img
                          src={Amex}
                          alt="Amex"
                          className="mr-2 mt-1 w-auto float-left h-6 max-w-[39px] max-h-[25px]"
                        />
                        <img
                          src={Cb}
                          alt="Cartes bancaire"
                          className="mr-2 mt-1 w-auto float-left h-6 max-w-[39px] max-h-[25px]"
                        />
                      </span>
                    </div>
                  </div>
                  <span className="pr-2 h-6 leading-6 shrink-0">
                    <span>
                      <RightArrow />
                    </span>
                  </span>
                </button>
                <button className="flex items-center h-auto min-h-[60px] appearance-none bg-white border-2 border-[#ccc] rounded-md text-[#333] cursor-pointer justify-between my-1 w-full leading-[60px]">
                  <div className="flex items-center flex-wrap h-auto justify-start py-4">
                    <div className="float-none my-1 max-w-none leading-5 min-h-[20px] mx-4">
                      <span className="block leading-5 min-h-[20px]">
                        Ajouter à la facture mobile
                      </span>
                    </div>
                    <div className="leading-5 min-h-[20px] mx-4 overflow-hidden">
                      <span className="float-none -mt-1 whitespace-nowrap leading-normal max-h-[60px] inline-block overflow-auto align-middle relative">
                        <img
                          src={Orange}
                          alt="Visa"
                          className="mr-2 mt-1 w-auto float-left h-6 max-w-[39px] max-h-[25px]"
                        />
                      </span>
                    </div>
                  </div>
                  <span className="pr-2 h-6 leading-6 shrink-0">
                    <span>
                      <RightArrow />
                    </span>
                  </span>
                </button>
                <button className="flex items-center h-auto min-h-[60px] appearance-none bg-white border-2 border-[#ccc] rounded-md text-[#333] cursor-pointer justify-between my-1 w-full leading-[60px]">
                  <div className="flex items-center flex-wrap h-auto justify-start py-4">
                    <div className="float-none my-1 max-w-none leading-5 min-h-[20px] mx-4">
                      <span className="block leading-5 min-h-[20px]">
                        PayPal
                      </span>
                    </div>
                    <div className="leading-5 min-h-[20px] mx-4 overflow-hidden">
                      <span className="float-none -mt-1 whitespace-nowrap leading-normal max-h-[60px] inline-block overflow-auto align-middle relative">
                        <img
                          src={Paypal}
                          alt="Visa"
                          className="mr-2 mt-1 w-auto float-left h-6 max-w-[39px] max-h-[25px]"
                        />
                      </span>
                    </div>
                  </div>
                  <span className="pr-2 h-6 leading-6 shrink-0">
                    <span>
                      <RightArrow />
                    </span>
                  </span>
                </button>
                <button className="flex items-center h-auto min-h-[60px] appearance-none bg-white border-2 border-[#ccc] rounded-md text-[#333] cursor-pointer justify-between my-1 w-full leading-[60px]">
                  <div className="flex items-center flex-wrap h-auto justify-start py-4">
                    <div className="float-none my-1 max-w-none leading-5 min-h-[20px] mx-4">
                      <span className="block leading-5 min-h-[20px]">
                        Code cadeau
                      </span>
                    </div>
                    <div className="leading-5 min-h-[20px] mx-4 overflow-hidden">
                      <span className="float-none -mt-1 whitespace-nowrap leading-normal max-h-[60px] inline-block overflow-auto align-middle relative">
                        <img
                          src={NetflixGift}
                          alt="Visa"
                          className="mr-2 mt-1 w-auto float-left h-6 max-w-[39px] max-h-[25px]"
                        />
                      </span>
                    </div>
                  </div>
                  <span className="pr-2 h-6 leading-6 shrink-0">
                    <span>
                      <RightArrow />
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentPicker;
