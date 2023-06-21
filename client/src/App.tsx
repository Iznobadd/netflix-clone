import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUp from "./screens/SignUp";
import Hero from "./screens/Hero";
import RegisterRoutes from "./routes/RegisterRoutes";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { EmailContext } from "./context/EmailContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Browse from "./screens/Browse";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  const { user } = useContext(AuthContext);
  const isLoggedIn = !!user;
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={isLoggedIn ? <Navigate to="/browse" /> : <PublicRoutes />}
        />

        <Route path="/browse" element={<ProtectedRoutes />}>
          <Route index element={<Browse />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
