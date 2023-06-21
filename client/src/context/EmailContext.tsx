import { createContext, useReducer } from "react";

const initialState = {
  email: null,
};

const EmailContext = createContext({
  email: null,
  setEmail: (email: string) => {},
});

function emailReducer(state: any, action: any) {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

function EmailProvider(props: any) {
  const [state, dispatch] = useReducer(emailReducer, initialState);

  const setEmail = (email: string) => {
    dispatch({
      type: "SET_EMAIL",
      payload: email,
    });
  };

  return (
    <EmailContext.Provider
      value={{
        email: state.email,
        setEmail,
      }}
      {...props}
    />
  );
}

export { EmailContext, EmailProvider };
