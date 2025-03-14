import { useState,useEffect } from "react"
import Signup from "./pages/Signup"
import { Toaster } from "react-hot-toast"
import { ToastContainer } from "react-toastify";
import { Navigate,Route,Routes } from "react-router-dom"
import Login from "./pages/Login"
import IntroPage from "./components/IntroPage"
import ChatBot from "./components/ChatBot"
import Documentation from "./components/Documentation";
import Others from "./components/Others";
import Features from "./components/Features";



function App() {

  const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem('user')))  // authUser contains user credentials from localstorage(saved when user sihned in)

 // Event listener to update the authUser state
  useEffect(() => {
    const handleAuthChange = () => {
      setAuthUser(JSON.parse(localStorage.getItem('user')));
    };

    // Listen for authChange events
    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

 
  return (
    <>
      <Routes>

      <Route path="/" element={authUser ? <Navigate to={"/home"}/> : <IntroPage/>}/>
      <Route path="/home" element={authUser? <ChatBot/> : <Navigate to="/"/>}/>
      <Route path="/login" element={authUser ? <Navigate to="/home"/> : <Login/>}/>
      <Route path="/signup" element={authUser ? <Navigate to={"/home"}/> : <Signup/> }/>
      <Route path="/documentation" element={<Documentation/>}/>
      <Route path="/contact" element={<Others/>}/>
      <Route path="/features" element={<Features/>}/>

      </Routes>
    <Toaster/>
    <ToastContainer />
    </>
  )
}

export default App
