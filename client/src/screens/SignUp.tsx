import Background from "../components/signup/Background";
import Body from "../components/signup/Body";
import Footer from "../components/signup/Footer";
import Header from "../components/signup/Header";

const SignUp = () => {
  return (
    <div className="relative min-h-full m-0 bg-black z-0">
      <Background />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default SignUp;
