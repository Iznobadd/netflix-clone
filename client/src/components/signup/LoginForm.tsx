const LoginForm = () => {
  return (
    <form action="">
      <div className="pb-[16px] max-w-full relative">
        <div className="relative">
          <div className="relative border-0 rounded">
            <label>
              <input
                type="text"
                className="bg-[#333] border-0 rounded text-white h-[50px] leading-[50px] px-[20px] pt-[16px] w-full box-border block text-[16px]"
                id="email"
              />
              <label
                htmlFor="email"
                className="text-[#8c8c8c] absolute text-[14px] top-1/2 -translate-y-1/2 left-[20px]"
              >
                E-mail ou numéro de téléphone
              </label>
            </label>
          </div>
        </div>
      </div>

      <div className="pb-[16px] max-w-full relative">
        <div className="relative">
          <div className="relative border-0 rounded">
            <label>
              <input
                type="text"
                className="bg-[#333] border-0 rounded text-white h-[50px] leading-[50px] px-[20px] pt-[16px] w-full box-border block text-[16px]"
                id="pwd"
              />
              <label
                htmlFor="pwd"
                className="text-[#8c8c8c] absolute text-[14px] top-1/2 -translate-y-1/2 left-[20px]"
              >
                Mot de passe
              </label>
            </label>
          </div>
        </div>
      </div>

      <button className="rounded text-[16px] font-medium mt-[24px] mb-[12px] max-w-full w-full p-[16px] bg-primary inline-block min-h-[37px] min-w-[98px] relative text-white text-center align-middle">
        S'identifier
      </button>
    </form>
  );
};

export default LoginForm;
