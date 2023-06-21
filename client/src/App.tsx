import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Hero from "./screens/Hero";
import RegisterRoutes from "./routes/RegisterRoutes";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { EmailContext } from "./context/EmailContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register/*" element={<RegisterRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
