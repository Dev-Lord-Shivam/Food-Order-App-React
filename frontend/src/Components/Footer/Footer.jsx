import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
         <div className="footer-content-left">
             <img src={assets.logo} alt="company logo" />
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
         </div>
         <div className="footer-content-centre">
             <h2>Company</h2>
             <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
             </ul>
         </div>
         <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+91-7903730673</li>
                <li>shivamjaiswal7903@gmail.com</li>
             </ul>
         </div>
      </div>
      <hr></hr>
      <p className='footer-copyrights'>Copyright 2024 @Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
