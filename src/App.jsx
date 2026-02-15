import React from "react";
import Navbar from "./components/Navbar.jsx";
// import Sidebar from   "../src/components/Sidebar.jsx";
import Login from "./pages/login.jsx";
import SignUp from "./pages/SignUp.jsx";
import ForgetPass from "./pages/ForgetPass.jsx";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import ErrorBoundary from "./components/Error.jsx";

function App() {
  return (
    <>
      <Navbar />
        <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPass />} />
        </Routes>
      </ErrorBoundary>
      {/* <Sidebar /> */}
    </BrowserRouter>
    </>
  );
}

export default App;
