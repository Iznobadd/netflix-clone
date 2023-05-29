import Footer from "../../components/register/Footer";
import Header from "../../components/register/Header";
import PlanForm from "../../components/register/step2/PlanForm";

const Plan = () => {
  return (
    <div className="flex flex-col min-h-screen pb-0">
      <Header />
      <PlanForm />
      <Footer />
    </div>
  );
};

export default Plan;
