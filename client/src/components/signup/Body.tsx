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
    </>
  );
};

export default Body;
