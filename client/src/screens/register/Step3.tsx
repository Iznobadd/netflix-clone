import React from "react";
import Header from "../../components/register/Header";
import PaymentPicker from "../../components/register/step3/PaymentPicker";
import Footer from "../../components/register/Footer";

function Step3() {
  return (
    <div className="flex flex-col min-h-screen pb-0">
      <Header />
      <PaymentPicker />
      <Footer />
    </div>
  );
}

export default Step3;
