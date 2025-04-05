import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage.jsx";
import AuthPage from "./pages/Auth/AuthPage.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<AuthPage/>} />
      </Routes>
    </>
  );
}

export default App;
