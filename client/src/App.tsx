import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Hero from "./screens/Hero";
import Registration from "./screens/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
