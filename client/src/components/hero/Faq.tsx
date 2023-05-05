import { useState } from "react";
import Plus from "../svg/Plus";

const Faq = () => {
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse((prevCollapse) => !prevCollapse);
  };
  return (
    <div className="min-h-[auto] relative flex justify-center text-white h-full box-border text-center py-[3.5rem] md:py-[4.5rem]">
      <div className="m-auto max-w-[calc(100%-3rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.33%-6rem)] 2xl:max-w-[calc(66.66%-6rem)] flex items-center flex-col text-center w-full">
        <div className="basis-1/2 z-[1] w-full">
          <h2 className="text-[2rem] lg:text-[3rem] lg:font-extrabold font-bold">
            Foire aux questions
          </h2>
          <div className="mt-[1.5rem]">
            <ul className="text-[1.125rem] lg:text-[1.5rem]">
              <li className="mb-[0.5rem]">
                <h3 className="flex mb-[0.0.625rem] relative bg-[rgba(45,45,45,1)] text-white ">
                  <button
                    className="p-[1.5rem] appearance-none bg-none rounded-none w-full cursor-pointer flex justify-between items-center text-left"
                    onClick={toggleCollapse}
                  >
                    <span>Netflix, qu'est-ce que c'est ?</span>
                    <Plus />
                  </button>
                </h3>
                <div
                  className={
                    "overflow-hidden collapse max-h-0 px-[1.5rem] text-left bg-[rgba(45,45,45,1)] text-white " +
                    (collapse ? "max-h-[75rem] !visible py-[1.5rem] " : "")
                  }
                >
                  <span
                    className={
                      "collapse text-left text-white " +
                      (collapse ? "!visible" : "")
                    }
                  >
                    Netflix est un service de streaming qui propose une vaste
                    sélection de séries, films, animes, documentaires et autres
                    programmes sur des milliers d'appareils connectés à
                    Internet.
                    <br />
                    <br />
                    Regardez tout ce que vous voulez, quand vous voulez, à un
                    prix mensuel très attractif. Découvrez de nouveaux films et
                    séries chaque semaine, il y en a pour tous les goûts !
                  </span>
                </div>
              </li>
              <li className="mb-[0.5rem]">
                <h3 className="flex mb-[0.0.625rem] relative bg-[rgba(45,45,45,1)] text-white ">
                  <button
                    className="p-[1.5rem] appearance-none bg-none rounded-none w-full cursor-pointer flex justify-between items-center text-left"
                    onClick={toggleCollapse}
                  >
                    <span>Combien coûte Netflix ?</span>
                    <Plus />
                  </button>
                </h3>
                <div
                  className={
                    "overflow-hidden collapse max-h-0 px-[1.5rem] text-left bg-[rgba(45,45,45,1)] text-white " +
                    (collapse ? "max-h-[75rem] !visible py-[1.5rem] " : "")
                  }
                >
                  <span
                    className={
                      "collapse text-left text-white " +
                      (collapse ? "!visible" : "")
                    }
                  >
                    Regardez Netflix sur votre smartphone, tablette, Smart TV,
                    ordinateur ou appareil de streaming, le tout pour un tarif
                    mensuel fixe. Les offres vont de 5,99 € à 17,99 € par mois.
                    Pas de contrat ni de frais supplémentaires.
                  </span>
                </div>
              </li>
              <li className="mb-[0.5rem]">
                <h3 className="flex mb-[0.0.625rem] relative bg-[rgba(45,45,45,1)] text-white ">
                  <button
                    className="p-[1.5rem] appearance-none bg-none rounded-none w-full cursor-pointer flex justify-between items-center text-left"
                    onClick={toggleCollapse}
                  >
                    <span>Où puis-je regarder Netflix ?</span>
                    <Plus />
                  </button>
                </h3>
                <div
                  className={
                    "overflow-hidden collapse max-h-0 px-[1.5rem] text-left bg-[rgba(45,45,45,1)] text-white " +
                    (collapse ? "max-h-[75rem] !visible py-[1.5rem] " : "")
                  }
                >
                  <span
                    className={
                      "collapse text-left text-white " +
                      (collapse ? "!visible" : "")
                    }
                  >
                    Netflix, c'est où vous voulez, quand vous voulez.
                    Connectez-vous à votre compte pour regarder Netflix en ligne
                    sur netflix.com depuis votre ordinateur ou tout appareil
                    connecté à Internet avec l'application Netflix, comme les
                    Smart TV, smartphones, tablettes, lecteurs de streaming et
                    consoles de jeu.
                    <br />
                    <br />
                    Vous pouvez aussi télécharger vos séries préférées avec
                    l'application iOS, Android ou Windows 10. Téléchargez des
                    titres pour les regarder sur votre appareil mobile, même
                    sans connexion Internet. Emportez Netflix partout avec vous.
                  </span>
                </div>
              </li>
              <li className="mb-[0.5rem]">
                <h3 className="flex mb-[0.0.625rem] relative bg-[rgba(45,45,45,1)] text-white ">
                  <button
                    className="p-[1.5rem] appearance-none bg-none rounded-none w-full cursor-pointer flex justify-between items-center text-left"
                    onClick={toggleCollapse}
                  >
                    <span>Comment puis-je annuler mon offre ?</span>
                    <Plus />
                  </button>
                </h3>
                <div
                  className={
                    "overflow-hidden collapse max-h-0 px-[1.5rem] text-left bg-[rgba(45,45,45,1)] text-white " +
                    (collapse ? "max-h-[75rem] !visible py-[1.5rem] " : "")
                  }
                >
                  <span
                    className={
                      "collapse text-left text-white " +
                      (collapse ? "!visible" : "")
                    }
                  >
                    Netflix offre une grande souplesse. Pas de contrat
                    compliqué. Sans engagement. Deux clics suffisent pour
                    annuler votre compte en ligne. Pas de frais d'annulation :
                    ouvrez ou fermez votre compte à tout moment.
                  </span>
                </div>
              </li>
              <li className="mb-[0.5rem]">
                <h3 className="flex mb-[0.0.625rem] relative bg-[rgba(45,45,45,1)] text-white ">
                  <button
                    className="p-[1.5rem] appearance-none bg-none rounded-none w-full cursor-pointer flex justify-between items-center text-left"
                    onClick={toggleCollapse}
                  >
                    <span>Que puis-je regarder sur Netflix ?</span>
                    <Plus />
                  </button>
                </h3>
                <div
                  className={
                    "overflow-hidden collapse max-h-0 px-[1.5rem] text-left bg-[rgba(45,45,45,1)] text-white " +
                    (collapse ? "max-h-[75rem] !visible py-[1.5rem] " : "")
                  }
                >
                  <span
                    className={
                      "collapse text-left text-white " +
                      (collapse ? "!visible" : "")
                    }
                  >
                    Netflix propose un vaste catalogue comprenant notamment des
                    longs-métrages, des documentaires, des séries, des animes et
                    des programmes originaux Netflix primés. Regardez Netflix à
                    volonté, quand vous le voulez.
                  </span>
                </div>
              </li>
              <li className="mb-[0.5rem]">
                <h3 className="flex mb-[0.0.625rem] relative bg-[rgba(45,45,45,1)] text-white ">
                  <button
                    className="p-[1.5rem] appearance-none bg-none rounded-none w-full cursor-pointer flex justify-between items-center text-left"
                    onClick={toggleCollapse}
                  >
                    <span>Est-ce que Netflix est adapté aux enfants ?</span>
                    <Plus />
                  </button>
                </h3>
                <div
                  className={
                    "overflow-hidden collapse max-h-0 px-[1.5rem] text-left bg-[rgba(45,45,45,1)] text-white " +
                    (collapse ? "max-h-[75rem] !visible py-[1.5rem] " : "")
                  }
                >
                  <span
                    className={
                      "collapse text-left text-white " +
                      (collapse ? "!visible" : "")
                    }
                  >
                    Netflix Jeunesse est inclus dans votre abonnement et offre
                    un meilleur contrôle aux parents, ainsi qu'un espace dédié
                    aux enfants, avec des films et des séries destinés à toute
                    la famille.
                    <br />
                    <br />
                    Les profils Jeunesse comportent des fonctionnalités de
                    contrôle parental avec code PIN permettant de modifier la
                    catégorie d'âge des contenus que vos enfants peuvent
                    regarder et de bloquer des titres spécifiques.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
