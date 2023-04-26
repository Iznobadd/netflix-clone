import backgroundImage from "../../assets/images/signup.jpg";
const Background = () => {
  return (
    <div className="w-full h-full min-h-screen absolute bg-cover md:block hidden overflow-hidden opacity-50 z-[-1]">
      <img
        className="min-h-full min-w-full max-w-none"
        src={backgroundImage}
        alt="SignUp Background"
      />
    </div>
  );
};

export default Background;
