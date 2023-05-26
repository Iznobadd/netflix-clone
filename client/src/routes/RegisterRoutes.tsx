import { Route, Routes } from "react-router-dom";
import Step1 from "../screens/register/Step1";
import Register from "../screens/register/Register";

const RegisterRoutes = () => {
  return (
    <Routes>
      <Route path="/registration" element={<Step1 />} />
      <Route path="/regform" element={<Register />} />
    </Routes>
  );
};

export default RegisterRoutes;
