import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./signUp.css";
import {FaGoogle} from "react-icons/fa";
import {GoogleAuthProvider,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase";
import { signInWithCredential } from "firebase/auth";




const Login =()=>{
    const navigate = useNavigate();

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithCredential(auth, provider)
        .then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken
            const user = result.user;
            navigate("/dashboard")
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;

            const email = error.customData.email;

            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const EmailLogin = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        navigate("/dashboard")
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage =error.message
    });
};

return(
    <div className="container">
        <div className="signup">
            <div className="signup-connect">
                <h1 style={{color: "#E73B91"}}Login with Google></h1>
                <a href="#" className=" btn btn-google" onClick={googleLogin}><FaGoogle style={{marginRight: "10px"}}/>Sign in with Google</a>
            </div>

            <div className="signup-classic">
                <h2 style={{fontWeight: "600", fontSize: "25px"}}>Login</h2>

                <div className="form">
                    <fieldset className="email">
                        <input type="email" onChange={(e)=> setEmail(e.target.value)} style={{color: "#000"} } placeholder="Enter Email"/>
                    </fieldset>
                    <fieldset className="password">
                        <input type="password" onChange={(e)=> setPassword(e.target.value)}  placeholder="Enter Password"/>
                    </fieldset>

                    <button className="btn" onClick={EmailLogin}>Login</button>

                </div>

            </div>
        </div>

    </div>
);
};

export default Login

