import React from "react";
import Login from "./pages/login.jsx";
import SignUp from "./pages/SignUp.jsx";
import ForgetPass from "./pages/ForgetPass.jsx";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import ErrorBoundary from "./components/Error.jsx";
// import ProjectDescription from "./pages/projectDescription.jsx";
// import SubmitWork from "./pages/submitWork.jsx";
import ContributorDashboard from "./pages/ContributorDashboard.jsx"

function App() {
  return (
    <>
        <BrowserRouter>
      <ErrorBoundary>
        <ContributorDashboard />
        {/* <SubmitWork /> */}
        {/* <ProjectDescription /> */}
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPass />} />
        </Routes> */}
      </ErrorBoundary>
    </BrowserRouter>
    </>
  );
}

export default App;
