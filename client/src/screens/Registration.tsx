import Footer from "../components/register/Footer";
import Header from "../components/register/Header";
import Step1 from "../components/register/Step1";

const Registration = () => {
  return (
    <div className="flex flex-col min-h-screen pb-0">
      <Header />
      <Step1 />
      <Footer />
    </div>
  );
};

export default Registration;
