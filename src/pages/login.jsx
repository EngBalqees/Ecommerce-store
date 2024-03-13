import React, { useState } from "react";
import "./login.css"
import Navbar from "../components/navbar";
import { jwtDecode } from "jwt-decode";

export default function Login() {
   const [user, setUser] = useState({
      email: '',
      password: '',
   });
   const handleSubmit = async (e) => {
      email: user.email;
      password: user.password;
   }

   /*if(data.message=="success"){
      toast.success("login successfully",{
   
      })
   }*/
   const handlechange = (e) => {
      const { name, value } = e.target;
      setUser({
         ...user,
         [name]: value
      });
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
               <label className="errorLabel"></label>
            </div>
            <br />
            <div className={'inputContainer'}>
               <input
                  type="password"
                  placeholder="Enter your password here"
                  onChange={handlechange}
                  className={'inputBox'}
               />
               <label className="errorLabel"></label>
            </div>
            <br />

            <button onClick={handleSubmit}>Log In</button>

         </div>
      </>
   )
}