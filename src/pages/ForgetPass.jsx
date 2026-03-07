import { useState, useRef, useEffect } from "react";
import "./ForgetPass.css";

const ForgetPass = () => {
  const [otp, setOtp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOtp(true);
  };

  return (
    <>
      <div className="ForgetPass">
        <form className="ForgetCard">
          <h1>
            <img
              src="https://avatars.githubusercontent.com/u/250320948?v=4"
              alt=""
            />
            TDPEP
          </h1>
          <h2>Forget Password</h2>
          <div className="Email">
            <h3>Email</h3>
            <input className="inp" type="text" placeholder="Email" />
            <button className="OtpBtn">Send OTP</button>
          </div>
          {!otp && (
            <div className="otp">
              <h3>Enter OTP</h3>
              <input className="inp" type="password" placeholder="Enter OTP" />
              <div></div>

              <button className="OtpBtn" type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          )}
          {otp && (
            <div className="password">
              <h3>New Password</h3>
              <input
                className="inp"
                type="password"
                placeholder="New Password"
              />
            </div>
          )}

          <button className="btn">Reset Password</button>
        </form>
      </div>
    </>
  );
};

export default ForgetPass;
