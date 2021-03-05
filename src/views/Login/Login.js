import React from "react";
import onenote from "../../assets/integrate/outlook-icon.png";
import linked from "../../assets/integrate/linked.png";
import google from "../../assets/integrate/google.png";
import eye from "../../assets/integrate/eye.png";
import CompanyLogo from "../../components/CompanyLogo/CompanyLogo";
import "./Login.scss";

const Login = () => {
  const partnerLogo = [onenote, linked, google];
  return (
    <div className="login">
      <h2>Sign In</h2>
      <span>Welcome back</span>

      <div className="login_form">
        <form>
          <label htmlFor="">Email / Username</label>
          <div className="login_email">
            <input type="text" />
          </div>
          <label htmlFor="">Password</label>
          <div className="login_password">
            <input type="text" password />
            <img src={eye} alt="" />
          </div>
          <button>Log In</button>
          <span>Forgot Password</span>
        </form>
        <div className="login_social">
          <span>-Or sign with: </span>

          {partnerLogo?.map((logo) => (
            <CompanyLogo image={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
