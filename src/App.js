import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main } from "./Pages/Main/Main";
import { Alert } from "./Pages/Alert/Alert";
import { ROUTES } from "./assets/constants";
import { RegisterDriver } from "./Pages/RegisterDriver/RegisterDriver";

function App() {
  return (
    <Routes>
      <Route index element={<div />} />
      <Route path={ROUTES.main} element={<Main />} />
      <Route path={ROUTES.alert} element={<Alert />} />
      <Route path={ROUTES.registrtaxi} element={<RegisterDriver />} />
    </Routes>
  );
}

export default App;
