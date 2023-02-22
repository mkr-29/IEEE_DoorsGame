import { useState } from "react";
import "./Login/forms.css";
import { auth } from "../Firebase/Firebase";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useAuthValue } from "../Firebase/AuthContext";
import React from 'react'
import "../../Landing/Landing.css"
import V1 from "../../Landing/Assets/V1.svg"
import V2 from "../../Landing/Assets/V2.svg"
import V3 from "../../Landing/Assets/V3.svg"
import V4 from "../../Landing/Assets/V4.svg"
import V5 from "../../Landing/Assets/V5.svg"
import V6 from "../../Landing/Assets/V6.svg"
import V7 from "../../Landing/Assets/V7.svg"
import V8 from "../../Landing/Assets/V8.svg"
import IEEE from "../../Landing/Assets/ieeelogo.svg"
import V9 from "../../Landing/Assets/V9.svg"
import V10 from "../../Landing/Assets/V10.svg"
import V11 from "../../Landing/Assets/V11.svg"
import V12 from "../../Landing/Assets/V12.svg"
import V13 from "../../Landing/Assets/V13.svg"
import V14 from "../../Landing/Assets/V14.svg"
import V15 from "../../Landing/Assets/V15.svg"
import V16 from "../../Landing/Assets/V16.svg"
import V17 from "../../Landing/Assets/V17.svg"
import V18 from "../../Landing/Assets/V18.svg"

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setTimeActive } = useAuthValue();

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => alert(err.message));
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="center">
      <div className="d-landing">
        <Link to="/" className="d-signup">
          Home
        </Link>
        <img src={V1} alt="" className="v1" />
        <img src={V2} alt="" className="v2" />
        <img src={V2} alt="" className="v3" />
        <img src={V2} alt="" className="v4" />
        <img src={V3} alt="" className="v5" />
        <img src={V4} alt="" className="v6" />
        <img src={V5} alt="" className="v7" />
        <img src={V6} alt="" className="v8" />
        <img src={V7} alt="" className="v9" />
        <img src={V8} alt="" className="v10" />
        <img src={V8} alt="" className="v11" />
        <img src={V16} alt="" className="v16" />
        <img src={V17} alt="" className="v17" />
        <img src={V18} alt="" className="v18" />
        <div className="d-main">
          <img src={IEEE} alt="" className="ieee" />
          
          <div className="auth">
        <h1 className="l-head">Register</h1>
        {error && <div className="auth__error">{error}</div>}
        <form onSubmit={register} name="registration_form">
          <label className="l-lables">E-Mail</label>
          <input
            className="l-inputs"
            type="email"
            value={email}
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="l-lables">Password</label>
          <input
            className="l-inputs"
            type="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="l-lables">Confirm Password</label>
          <input
            className="l-inputs"
            type="password"
            value={confirmPassword}
            required
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="l-submit" type="submit">Register</button>
        </form>
        <span className="l-registration">
          Already have an account? &nbsp;<Link className="l-reglink" to="/login">Login</Link>
        </span>
      </div>

          <div className="d-socials">
            <a href="/">
              <img src={V11} alt="" />
            </a>
            <a href="/">
              <img src={V12} alt="" />
            </a>
            <a href="/">
              <img src={V13} alt="" />
            </a>
            <a href="/" className="d-website">
              ieeejuit.co.in
            </a>
          </div>
        </div>
        <div className="ornaments">
          <span className="o1" />
        </div>
        <img src={V14} alt="" className="v14" />
        <img src={V15} alt="" className="v15" />
      </div>
      
    </div>
  );
}

export default Register;
