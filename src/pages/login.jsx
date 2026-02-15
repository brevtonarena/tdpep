import "./login.css";
import {Link} from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login">
        <form className="loginCard">
          <h1>
            <img
              src="https://avatars.githubusercontent.com/u/250320948?v=4"
              alt=""
            />
             TDPEP
          </h1>
          <h2>Login</h2>
          <div className="Email">
            <h3>Email</h3>
            <input className="inp" type="text" placeholder="Email" />
          </div>
          <div className="password">
            <h3>Password</h3>
            <input className="inp" type="password" placeholder="Password" />
          </div>          
          <button className="btn">Login</button>
          <div className="condition">
            <Link to="/forget-password">Forgot Password ?</Link>
            <Link to="/signUp">Don't have an account ?{" "} Sign Up</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
