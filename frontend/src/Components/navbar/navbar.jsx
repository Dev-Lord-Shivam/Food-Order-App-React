import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './navbar.css';


const MyNavbar = () => {
  const [menu,setMenu] = useState("Menu")
  return (
    <div className='container-fluid'>
       <div className='row align-items-center p-4'>
           <div className='col-md-4'>
           <img src={assets.logo} alt="Logo" style={{ width: '150px' }} />
           </div>
           <div className='col-md-4'>
              <ul className='NavList'>
                <li onClick={()=>setMenu("home")} className={menu == "home"?"active":""}>Home</li>
                <li onClick={()=>setMenu("Menu")} className={menu == "Menu"?"active":""}>Menu</li>
                <li onClick={()=>setMenu("Mobile-App")} className={menu == "Mobile-App"?"active":""}>Mobile-App</li>
                <li onClick={()=>setMenu("ContactUs")} className={menu == "ContactUs"?"active":""}>Contact Us</li>
              </ul>
           </div>
           <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-2'>
                <img src={assets.search_icon} />
              </div>
              <div className='col-md-6 basketimg'>
                <img src={assets.basket_icon}/>
                <div className='dot'></div>
              </div>
              <div className='col-md-4'>
                <button className='SignInBtn'>Sign In</button>
              </div>
              </div>
           </div>
       </div>
    </div>
  );
}

export default MyNavbar;
