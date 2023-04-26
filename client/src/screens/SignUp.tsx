import Background from "../components/signup/Background";
import Body from "../components/signup/Body";
import Header from "../components/signup/Header";

const SignUp = () => {
  return (
    <div className="relative min-h-full m-0 bg-black z-0">
      <Background />
      <Header />
      <Body />
    </div>
  );
};

export default SignUp;
