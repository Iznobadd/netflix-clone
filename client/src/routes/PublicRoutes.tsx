import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../screens/Hero";
import SignUp from "../screens/SignUp";
import RegisterRoutes from "./RegisterRoutes";

function PublicRoutes() {
  return (
    <Routes>
      <Route index element={<Hero />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/register/*" element={<RegisterRoutes />} />
    </Routes>
  );
}

export default PublicRoutes;
