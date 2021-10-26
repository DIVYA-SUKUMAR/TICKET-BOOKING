import React, { useState } from "react";
import { useForm } from "react-hook-form";
 import "./Login.css";
import axios from 'axios';

import {Link,useHistory} from 'react-router-dom';

// import image1 from '../assests/background.jpg'
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

export default function Login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    //   const onSubmit = data =>console.log(data);
    const [error, setError] = useState(false);
    const history = useHistory();
  
   
      const onSubmit = (data) =>{
        axios.post("http://localhost:7000/User/login",data).then((res)=>{
console.log(res.data);
if(res.data === "user not found" || res.data === "password does not match"){
     setError(res.data)
}
else{
  window.location.reload(true);
  history.push("/home")
  localStorage.setItem("user", res.data.token);
  localStorage.setItem("user_id", res.data._id);

  localStorage.setItem("username", res.data.username);
}

        })
        console.log(data);
        }

  return (
    <section class="main-container">
        <div class="login">
            <h1>Login</h1>
            <div class="log-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="Email" placeholder="Email ID" id="username" autocomplete="off"  {...register("Email", {
    required: 'Enter the Email ID' 
  })} />
   {errors.Email && (<small className="text-danger">{errors.Email.message}</small>)}
   <div className='error'>{error === "" ?"":error}</div>
                    <input type="password" name="password" placeholder="Password" id="password" autocomplete="off"{...register("password", {
    required: 'Enter the password' 
  })}
 
   />
  {errors.password && (<small className="text-danger">{errors.password.message}</small>)}
                   
                    <input type="submit" class="log-btn" value ="Sign In"></input>

                    <div class="forgot">
                        <a href="#">Forgot Your Password?</a>
                    </div>

                    <div class="signup">
                        <i>Don't have a account?</i>  <Link to ={{pathname:"/Register"}}>Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    </section>

  );
}
