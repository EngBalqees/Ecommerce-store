import React, { useState } from "react";
import "./register.css";
import axios from "axios";

export default function Register() {

   const [user, setUser] = useState({
      username: '',
      email: '',
      password: '',
      image: '',
   });

   const handlechange = (e) => {
      const {name,value} = e.target;
      setUser({
         ...user,
         [name]:value
      });
   };
   const handleimagechange = (e)=>{
      const {name,file} = e.target;
      setUser({
         ...user,
         [name]:file[0]
      });
   };
   const handlesubmit = async(e) => {
         const formdata = new FormData();
         formdata.append('username',user.username);
         formdata.append('email',user.email);
         formdata.append('password',user.password);
         formdata.append('image',user.image);
         const {data} = await axios.post(`${import.meta.env.VITE_API}/auth/signup`,formdata);
   }
   return (
      <>
         <div className={'mainContainer'}>
            <form onSubmit={handlesubmit}>
               <div className={'titleContainer'}>
                  <div>Register</div>
               </div>
               <br />
               <div className={'inputContainer'}>
                  <input
                     type="text"
                     placeholder="Enter your Name"
                     onChange={handlechange}
                     className={'inputBox'}
                     value={user.username}
                  />
                  <label className="errorLabel"></label>
               </div>
               <br />
               <div className={'inputContainer'}>
                  <input
                     type="email"
                     placeholder="Enter your email here"
                     onChange={handlechange}
                     className={'inputBox'}
                     value={user.email}
                  />
                  <label className="errorLabel"></label>
               </div>
               <br />
               <div className={'inputContainer'}>
                  <input
                     type="password"
                     placeholder="Enter your password"
                     onChange={handlechange}
                     className={'inputBox'}
                     value={user.password}
                  />
                  <label className="errorLabel"></label>
               </div>
               <br />
               <div className={'inputContainer'}>
                  <input
                     type="file"
                     onChange={handleimagechange}
                     value={user.image}
                  />
                  <label className="errorLabel"></label>
               </div>
               <br />
            </form>
            <button>Create Account</button>

         </div>

      </>
   )
}