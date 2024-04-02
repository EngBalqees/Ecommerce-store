import React, { useState } from "react";
import "./login.css"
import { jwtDecode } from "jwt-decode";
import { Link, Navigate } from "react-router-dom";
import SendCodeOverlay from "./sendcode";
export default function Login() {
   const [user, setUser] = useState({
      email: '',
      password: '',
   });
   const handleSubmit = async (e) => {
      email: user.email;
      password: user.password;
   }

   const handlechange = (e) => {
      const { name, value } = e.target;
      setUser({
         ...user,
         [name]: value
      });
   };
   const [showSendCodeOverlay, setShowSendCodeOverlay] = useState(false);
  

   const toggleSendCodeOverlay = () => {
      setShowSendCodeOverlay(!showSendCodeOverlay);
   };

   return (
      <>
         <div className={'mainContainer'}>
            <div className={'titleContainer'}>
               <div>Login</div>
            </div>
            <br />
            <div className={'inputContainer'}>
               <input
                  type="email"
                  placeholder="Enter your email here"
                  onChange={handlechange}
                  className={'inputBox'}
               />
            </div>
            <br />
            <div className={'inputContainer'}>
               <input
                  type="password"
                  placeholder="Enter your password here"
                  onChange={handlechange}
                  className={'inputBox'}
               />
            </div>
            <br />
            <button onClick={handleSubmit}>Log In</button>
            <button onClick={toggleSendCodeOverlay}>Forget Password?</button>
            {showSendCodeOverlay && <SendCodeOverlay onClose={toggleSendCodeOverlay} />}
         </div>
      </>
   )
}