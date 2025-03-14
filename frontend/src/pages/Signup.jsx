import React from 'react'
import { useState} from 'react'
import "../styles/signup.css"
import {toast} from 'react-hot-toast'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'




function Signup() {

  const [inputs,setInputs] = useState({
    fullName:"",
    email:"",
    password:"",
    confirmPassword:"",
    gender:""
  })


  const navigate = useNavigate();

   const handleSubmit=async(e)=>{
    e.preventDefault();

    if(inputs.password !== inputs.confirmPassword){
      toast.error("Password's Does'nt Match");
    }

    if(!inputs.gender){
      toast.error("Please Select Your Gender")
    }
    try {
      const response = await axios.post('https://chat-bot-xv7x.onrender.com/api/auth/signup',inputs);
      console.log("recieved response",response);
      
      

      if(response.status === 201){
        toast.success("Signup Successfull")
         navigate("/home")
      }

             // Store user details in local storage
             const { fullName, gender } = inputs;
             localStorage.setItem('user', JSON.stringify({ fullName, gender }));

             window.dispatchEvent(new Event('authChange')); // Notify App.js about the change
             navigate('/home'); // Redirect to the homepage

    } catch (error) {

      if(error.response.status === 409){
        toast.error("User Already Exists")
      }else{
        toast.error("Network Error");
      }
      console.log(error)
    }
   }

  return (
    <div className="signup-container">
      <div className="signup-form">
    <form  onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <input className='input-boxes'
        type="text"
        name="fullName"
        placeholder="Full name"
        value={inputs.fullName}
        onChange={(e)=>setInputs({...inputs, fullName:e.target.value})}
        required
      />
      <input className='input-boxes'
        type="email"
        name="email"
        placeholder="Email"
        value={inputs.email}
        onChange={(e)=>setInputs({...inputs, email:e.target.value})}
        required
      />
      <input className='input-boxes'
        type="password"
        name="password"
        placeholder="Password"
        minLength={6}
        value={inputs.password}
        onChange={(e)=>setInputs({...inputs, password:e.target.value})}
        required
      />
      <input className='input-boxes'
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        minLength={6}
        value={inputs.confirmPassword}
        onChange={(e)=>setInputs({...inputs, confirmPassword:e.target.value})}
        required
      />
      <div className="gender-section">
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e)=>setInputs({...inputs, gender:e.target.value})}
            
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e)=>setInputs({...inputs, gender:e.target.value})}
          />
          Female
        </label>
      </div>
      <button type="submit" className='btn btn-dark'>Sign up</button>
      <p>Already a user ?</p>
      <Link className='login-link' to="/login">Login</Link>
    
    </form>
    </div>
  </div>
  )
}

export default Signup
