import React from 'react'
import '../styles/others.css'
import { Link } from 'react-router-dom'

function Others() {
  return (
  <div className='container-fluid'>
   
        <div className='documentation-section'>
        <h3>Explore Documentation</h3>
        <p className='description'>Get started with ChatNexus by exploring our comprehensive documentation. Learn how to integrate, customize, and optimize ChatNexus for your needs. Whether you're a beginner or an advanced user, our guides will help you make the most out of our platform.</p>
       <Link to={"/documentation"}><button className='btn btn-outline-dark'>Documentation</button></Link>
        </div>
   <hr />
        <div className='community-section'>
        <h3>Join Our Social Media Community</h3>
        <a target='_' href="https://m.facebook.com/renjith.ns.96/"><i class="fa-brands fa-facebook fa-beat"></i></a>
        <a target='_' href="https://www.instagram.com/rns_4_9_"><i class="fa-brands fa-instagram fa-beat"></i></a>
        <a target='_' href="https://mobile.x.com/Renjith19946692"><i class="fa-brands fa-square-x-twitter fa-beat"></i></a>
        <a target='_' href="https://www.discord.com/RNS-49"><i class="fa-brands fa-discord fa-beat"></i></a>
        </div>
        <h6 className='footer-text'>  <span><i class="fa-regular fa-copyright"></i></span>2025 Renjith N S. All rights reserved.</h6>
 </div>
  )
}

export default Others
