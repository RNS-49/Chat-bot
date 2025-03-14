import React from 'react'
import '../styles/intro.css'
import logo from '../images/logo-nav.png'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Features from './Features'
import {Link} from 'react-router-dom'
import Others from './Others'


function IntroPage() {

  function handleClick(){
    toast.info(" Work in progress! Your support means a lot. The app will be available soon!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  
  return (
    <div className='overall-page'>
      {/* Navbar */}
      <nav className="navbar navbar-light bg-white px-5">
        <img className='logo' src={logo} alt="" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-danger" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/features"}>Features</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/documentation"}>Documentation</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-12 head-section">
            <h1 className="heading">ChatNexus-AI</h1>
          <p>ChatNexus-AI is an advanced AI chatbot designed to provide human-like conversations, assist users with queries, and enhance digital interactions through the power of artificial intelligence. Powered by cutting-edge natural language processing (NLP) and deep learning, ChatNexus-AI understands context, adapts to conversations, and delivers highly accurate responses in real time. Whether for customer support, task automation, or interactive engagement, ChatNexus-AI is your go-to AI solution for seamless and intelligent communication.</p>
            
            <Link to="/signup"><button className="btn btn-outline-dark">Get Started  <i class="fa-solid fa-arrow-right"></i></button></Link>
            <button className="btn btn-outline-dark" onClick={handleClick}>Download App  <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
      </div>
      <Features/>
      <Others/>
    </div>
  )
}

export default IntroPage
