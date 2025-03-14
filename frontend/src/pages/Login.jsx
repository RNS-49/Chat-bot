import React from 'react'
import { useState } from 'react'
import "../styles/login.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'

function Login() {

  const [login,setLogin] = useState({
    email:"",
    password:""
  })

  const navigate = useNavigate();

  const handleUserLogin = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login',login);
      console.log("Recieved response",response);
      console.log("token from cookie",document.cookie);


      if(response.status === 201){
        toast.success("User Login Successfull");
        navigate("/home");
      }

       // Store user details in local storage
       const { email, password } = login;
       localStorage.setItem('user', JSON.stringify({ email, password }));

       
       window.dispatchEvent(new Event('authChange')); // Notify App.js about the change
       navigate('/home'); // Redirect to the homepage
       
    } catch (error) {
      if(error.response.status === 400){
        toast.error("Invalid Email or password");
      }

      console.log("Error occured",error);
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
    <form onSubmit={handleUserLogin} >
      <h2>Welcome Back</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={login.email}
        onChange={(e)=>setLogin({...login,email:e.target.value})}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={login.password}
        onChange={(e)=>setLogin({...login,password:e.target.value})}
        required
      />
      <button type="submit" className='btn btn-dark'>Login</button>
      <p>New to AI-ChatBot ?</p>
      <Link className='signup-link' to="/signup">Signup</Link>
        

    </form>
    </div>
  </div>
  )
}

export default Login
