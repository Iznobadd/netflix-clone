import jwtDecode from "jwt-decode";
import { createContext, useReducer } from "react";

const initialState = {
  user: null,
};

if (localStorage.getItem("jid")) {
  try {
    const decodedToken: any = jwtDecode(localStorage.getItem("jid")!);
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("jid");
    } else {
      initialState.user = decodedToken;
    }
  } catch (err) {
    localStorage.removeItem("jid");
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData: any) => {},
  logout: () => {},
});

function authReducer(state: any, action: any) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props: any) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData: any) => {
    localStorage.setItem("jid", userData.accessToken);
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };

  const logout = () => {
    localStorage.removeItem("jid");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
