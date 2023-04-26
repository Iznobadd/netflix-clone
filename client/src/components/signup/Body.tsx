import LoginForm from "./LoginForm";

const Body = () => {
  return (
    <div className="mx-auto px-[5%] bg-transparent md:mb-[-236px] md:max-w-[586px] md:min-h-screen md:before:block md:before:h-[91px]">
      <div className="min-h-[550px] bg-black/75 rounded box-border flex flex-col m-0 pt-[20px] pb-[30px] w-full min-w-[380px] md:min-h-[660px] md:mb-[90px] md:px-[68px] md:pt-[60px] md:pb-[40px]">
        <div className="grow">
          <h1 className="text-white text-h1 font-medium mb-[28px]">
            S'identifier
          </h1>
          <LoginForm />
        </div>

        <div className="flex">
          <div className="grow pl-[20px] box-border text-[16px] relative select-none inline-block mb-[-5px] remember">
            <input
              type="checkbox"
              className="left-0 opacity-0 absolute top-0 mr-[10px] box-border p-0 leading-normal"
              id="remember"
            />
            <label htmlFor="remember" className="">
              Se souvenir de moi
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
