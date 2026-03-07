import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <div className="SignUp">
        <form className="SignUpCard">
          <h1>
            <img
              src="https://avatars.githubusercontent.com/u/250320948?v=4"
              alt=""
            />
             TDPEP
          </h1>
          <h2>Sign Up</h2>
          <div className="Email">
            <h3>Email</h3>
            <input className="inp" type="text" placeholder="Email" />
          </div>
          <div className="Email-verification">
            <h3>Email Verification</h3>
            <input className="inp" type="password" placeholder="OTP" />
          </div>          
          <div className="password">
            <h3>Set Password</h3>
            <input className="inp" type="password" placeholder="Set Password" />
          </div>          
          <button className="btn">Sign Up</button>
          
        </form>
      </div>
    </>
  );
}

export default SignUp;
