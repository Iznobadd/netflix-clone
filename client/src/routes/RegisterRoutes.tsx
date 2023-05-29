import { Route, Routes } from "react-router-dom";
import Step1 from "../screens/register/Step1";
import Register from "../screens/register/Register";
import Step2 from "../screens/register/Step2";
import Plan from "../screens/register/Plan";

const RegisterRoutes = () => {
  return (
    <Routes>
      <Route path="/registration" element={<Step1 />} />
      <Route path="/regform" element={<Register />} />
      <Route path="/choose" element={<Step2 />} />
      <Route path="/planform" element={<Plan />} />
    </Routes>
  );
};

export default RegisterRoutes;
