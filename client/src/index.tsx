import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./services/apolloClient";
import { AuthProvider } from "./context/AuthContext";
import { EmailProvider } from "./context/EmailContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <EmailProvider>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </EmailProvider>
    </AuthProvider>
  </React.StrictMode>
);
