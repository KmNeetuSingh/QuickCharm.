import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage.jsx";
import AuthPage from "./pages/Auth/AuthPage.jsx";
import PageLayout from "./Layout/PageLayout/PageLayout.jsx";
function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<AuthPage/>} />
      </Routes>
    </PageLayout>
  );
}

export default App;
