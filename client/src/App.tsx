import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Hero from "./screens/Hero";
import Registration from "./screens/Registration";
import Register from "./screens/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/regform" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
