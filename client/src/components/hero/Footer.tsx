const Footer = () => {
  const footerMenu = [
    {
      name: "FAQ",
      link: "#",
    },
    {
      name: "Centre d'aide",
      link: "#",
    },
    {
      name: "Compte",
      link: "#",
    },
    {
      name: "Presse",
      link: "#",
    },
    {
      name: "Relations Investisseurs",
      link: "#",
    },
    {
      name: "Recrutement",
      link: "#",
    },
    {
      name: "Boutique Netflix",
      link: "#",
    },
    {
      name: "Utiliser des cartes cadeaux",
      link: "#",
    },
    {
      name: "Acheter des cartes cadeaux",
      link: "#",
    },
    {
      name: "Modes de lecture",
      link: "#",
    },
    {
      name: "Conditions d'utilisation",
      link: "#",
    },
    {
      name: "Confidentialité",
      link: "#",
    },
    {
      name: "Préférences de cookies",
      link: "#",
    },
    {
      name: "Mentions légales",
      link: "#",
    },
    {
      name: "Nous contacter",
      link: "#",
    },
    {
      name: "Test de vitesse",
      link: "#",
    },
    {
      name: "Garantie légale",
      link: "#",
    },
    {
      name: "Informations légales",
      link: "#",
    },
    {
      name: "Seulement sur Netflix",
      link: "#",
    },
  ];
  return (
    <footer className="bg-transparent text-white/70 block">
      <div className="m-auto max-w-[calc(100%-3rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.33%-6rem)] 2xl:max-w-[calc(66.66%-6rem)] py-[1.25rem] lg:py-[3.75rem]">
        <div className="py-[0.75rem]">
          Des questions ? Appelez le
          <a href="tel:(+33) 0805-543-063" className="underline">
            {" "}
            (+33) 0805-543-063
          </a>
        </div>
        <div className="py-[0.75rem]">
          <div className="grid box-border grid-rows-[auto] min-w-[10.875rem] lg:min-w-[18.375rem] gap-y-3">
            <ul className="py-[0.75rem] leading-[1.3125rem] grid-hero">
              {footerMenu.map((item, key) => (
                <li
                  className="text-white/70 box-border w-full underline text-[0.875rem] min-w-[174px] lg:min-w-[294px]"
                  key={key}
                >
                  <a
                    href={item.link}
                    className="appearance-none text-white/70 underline select-text"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-[0.75rem]">
          <div className="relative inline-flex flex-wrap align-text-top">
            <label
              htmlFor="language"
              className="absolute right-10 z-[1] whitespace-nowrap overflow-hidden text-ellipsis pointer-events-none text-[0.75rem] text-white/70 left-9 leading-[0.875rem] top-0 block select-none h-[1px] w-[1px]"
            >
              Choisir la langue
            </label>
            <div className="min-w-[auto] w-auto text-[1rem] text-white items-center inline-flex gap-[2px] leading-[100%] relative text-left z-[0]">
              <div className="absolute pointer-events-none w-[1rem] h-[1rem] left-3 right-auto">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Globe"
                  className="w-full h-full block overflow-hidden"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 14.5C8.23033 14.5 8.84266 14.2743 9.48679 12.986C9.76293 12.4337 9.99973 11.7621 10.1748 11H5.8252C6.00027 11.7621 6.23707 12.4337 6.51321 12.986C7.15734 14.2743 7.76967 14.5 8 14.5ZM5.57762 9.5C5.52716 9.02077 5.5 8.51911 5.5 8C5.5 7.48089 5.52716 6.97923 5.57762 6.5H10.4224C10.4728 6.97923 10.5 7.48089 10.5 8C10.5 8.51911 10.4728 9.02077 10.4224 9.5H5.57762ZM11.7092 11C11.4822 12.1217 11.1317 13.117 10.6914 13.9184C12.0137 13.3161 13.0987 12.2837 13.7678 11H11.7092ZM14.3261 9.5H11.9298C11.9759 9.01412 12 8.51269 12 8C12 7.48731 11.9759 6.98588 11.9298 6.5H14.3261C14.4398 6.98152 14.5 7.48373 14.5 8C14.5 8.51627 14.4398 9.01848 14.3261 9.5ZM4.0702 9.5H1.67393C1.56019 9.01848 1.5 8.51627 1.5 8C1.5 7.48373 1.56019 6.98152 1.67393 6.5H4.0702C4.02411 6.98588 4 7.48731 4 8C4 8.51269 4.02411 9.01412 4.0702 9.5ZM2.23221 11H4.29076C4.51779 12.1217 4.86832 13.117 5.30864 13.9184C3.98635 13.3161 2.90128 12.2837 2.23221 11ZM5.8252 5H10.1748C9.99973 4.23793 9.76293 3.56626 9.48679 3.01397C8.84266 1.72571 8.23033 1.5 8 1.5C7.76967 1.5 7.15734 1.72571 6.51321 3.01397C6.23707 3.56626 6.00027 4.23793 5.8252 5ZM11.7092 5H13.7678C13.0987 3.71627 12.0137 2.68389 10.6914 2.08162C11.1317 2.88302 11.4822 3.8783 11.7092 5ZM5.30864 2.08162C4.86832 2.88302 4.51779 3.8783 4.29076 5H2.23221C2.90128 3.71628 3.98635 2.68389 5.30864 2.08162ZM8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <select className="min-w-[auto] w-auto px-9 leading-5 py-[0.375rem] min-h-[16px] appearance-none bg-transparent">
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
              <div className="pr-[0.75rem] border rounded bg-[rgba(22,22,22,0.7)] border-[rgba(128,128,128,0.7)] absolute flex justify-end items-center left-0 top-0 right-0 bottom-0 z-[-1] select-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="CaretDown"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5225 5.99902C12.6801 5.99902 12.7497 6.19745 12.6266 6.29589L8.20687 9.83168C8.08511 9.92909 7.9121 9.92909 7.79034 9.83168L3.37059 6.29589C3.24755 6.19745 3.31715 5.99902 3.47473 5.99902H12.5225Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[0.875rem] text-white/70 py-3">
          Netflix Clone France
        </p>
      </div>
    </footer>
  );
};

export default Footer;
