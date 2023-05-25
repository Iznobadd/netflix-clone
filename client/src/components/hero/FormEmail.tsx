import { NavLink } from "react-router-dom";
import { handleBlur, handleFocus } from "../../utils/functions";
const FormEmail = ({ index }: any) => {
  return (
    <form className="flex flex-col">
      <h3 className="m-0 text-[1.125rem] leading-[1.6875rem] lg:text-[1.25rem] lg:leading-[1.875rem]">
        Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
        abonner ou réactiver votre abonnement.
      </h3>
      <div className="text-left relative mx-auto mt-[1rem] w-full max-w-[36.625rem] flex flex-col items-center md:flex-row md:items-start">
        <div className="w-full relative inline-flex flex-wrap md:w-auto md:flex-auto">
          <label
            htmlFor={`email${index}`}
            className="absolute z-[1] whitespace-nowrap overflow-hidden text-ellipsis pointer-events-none text-[1rem] text-[rgba(255,255,255,0.7)] left-[1rem] leading-[1.5rem] right-[1rem] top-[0.75rem] md:top-[1rem] block select-none"
          >
            Adresse e-mail
          </label>
          <div className="text-[1rem] min-w-[12.5rem] p-0 w-full text-white inline-flex items-center gap-[2px] leading-[100%] relative text-left z-[0]">
            <input
              type="text"
              name="email"
              id={`email${index}`}
              className="w-full text-transparent text-white leading-[1.5rem] px-[1rem] pt-[1.25rem] md:pt-[1.5rem] md:pb-[0.5rem] pb-[0.25rem] min-h-[16px] min-w-[16px] appearance-none bg-transparent border-0 m-0"
              onFocus={(event) => handleFocus(event, "focused-hero")}
              onBlur={(event) => handleBlur(event, "focused-hero")}
            />
            <div className="border rounded bg-[rgba(22,22,22,0.7)] border-[rgba(128,128,128,0.7)] text-transparent absolute flex justify-center left-0 top-0 right-0 bottom-0 z-[-1] select-none"></div>
          </div>
        </div>
        <NavLink
          to={"/registration"}
          className="mt-[1rem] appearance-none items-center inline-flex box-border justify-center select-none border-0 rounded cursor-pointer leading-none relative w-auto font-medium text-[1.125rem] min-h-[3rem] py-[0.5rem] px-[1rem] bg-primary text-white md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:mt-0 md:ml-[0.5rem] md:text-[1.5rem] md:min-h-[3.5rem] md:py-[0.75rem] md:px-[1.5rem]"
        >
          Commencer
          <div className="inline-block h-[1.5rem]">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-name="ChevronRight"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
        </NavLink>
      </div>
    </form>
  );
};

export default FormEmail;
