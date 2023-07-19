import React, { useState } from "react";
import "./signUp.css";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithCredential, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithCredential(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const EmailLogin = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        console.log(userCredential.user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="signup">
        <div className="signup-connect">
          <h1 style={{ color: "#E73B91" }}>Login with Google</h1>
          <a href="#" className="btn btn-google" onClick={googleLogin}>
            <FaGoogle style={{ marginRight: "10px" }} />
            Sign in with Google
          </a>
        </div>

        <div className="signup-classic" style={{ color: "#000" }}>
          <h2 style={{ fontWeight: "600", fontSize: "25px" }}>Create Your Account</h2>

          <div className="form">
            <fieldset className="username">
              <input type="text" onChange={(e) => setName(e.target.value)} style={{ color: "#000" }} placeholder="Enter Name" />
            </fieldset>
            <fieldset className="email">
              <input type="email" onChange={(e) => setEmail(e.target.value)} style={{ color: "#000" }} placeholder="Enter Email" />
            </fieldset>
            <fieldset className="password">
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            </fieldset>

            <button className="btn" onClick={EmailLogin}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
