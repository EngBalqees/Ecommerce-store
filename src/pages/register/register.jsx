import React, { useState } from "react";
import "./register.css";
import axios from "axios";

export default function Register() {

   const [user, setUser] = useState({
      userName: '',
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
   const handleImageChange = (e) =>{
       const {name,files} = e.target;
       setUser({
         ...user,
         [name] : files[0]
       })
   };

   const handlesubmit = async(e) => {
         e.preventDefault();
         console.log(user);
         const formData = new FormData();
         formData.append('userName',user.userName);
         formData.append('email',user.email);
         formData.append('password',user.password);
         formData.append('image',user.image);
         const {data} = await axios.post(`${import.meta.env.VITE_API}/auth/signup`,formData);
         console.log(data);
   }
   const validateData = async () => {
      const RegisterSchema = object ({
      userName: String().min(5).max(20).required(),
      email: String().email(),
      password: String().min(8).max(20).required(),
      image: String().required(),
   });
   try {
      await RegisterSchema.validateData(user);
      return true;
   }catch(error){
      console.log("validation error",error.error);
      return false;
   }
};
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
                  placeholder="Enter your name here"
                  onChange={handlechange}
                  className={'inputBox'}
                  value={user.userName}
                  name="userName"
               />
           
            </div>
            <br />
               <div className={'inputContainer'}>
               <input
                  type="email"
                  placeholder="Enter your email here"
                  onChange={handlechange}
                  className={'inputBox'}
                  value={user.email}
                  name="email"
               />
               
            </div>
            <br />
            <div className={'inputContainer'}>
               <input
                  type="password"
                  placeholder="Enter your password here"
                  onChange={handlechange}
                  className={'inputBox'}
                  value={user.password}
                  name="password"
               />
              
            </div>
            <br />
               <div >
               <input type="file" onChange={handleImageChange} name="image"/>
               </div>
               <br />
               <button type="submit">Register</button>
            </form>
         </div>

      </>
   )
}