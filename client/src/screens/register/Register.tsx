import Footer from "../../components/register/Footer";
import Header from "../../components/register/Header";
import Form from "../../components/register/step1/Form";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen pb-0">
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default Register;
