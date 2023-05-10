import Footer from "../components/register/Footer";
import Header from "../components/register/Header";
import StepForm from "../components/register/StepForm";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen pb-0">
      <Header />
      <StepForm />
      <Footer />
    </div>
  );
};

export default Register;
