import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './navbar.css';
import {Link} from 'react-router-dom';

const MyNavbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("home")
  return (
    <div className='container-fluid'>
       <div className='row align-items-center p-4'>
           <div className='col-md-4'>
           <Link to='/'><img src={assets.logo} alt="Logo" style={{ width: '150px' }} /></Link>
           </div>
           <div className='col-md-4'>
              <ul className='NavList'>
                <Link to='/' onClick={()=>setMenu("home")} className={menu == "home"?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu == "Menu"?"active":""}>Menu</a>
                <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu == "Mobile-App"?"active":""}>Mobile-App</a>
                <a href='#footer' onClick={()=>setMenu("ContactUs")} className={menu == "ContactUs"?"active":""}>Contact Us</a>
              </ul>
           </div>
           <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-2'>
                <img src={assets.search_icon} />
              </div>
              <div className='col-md-6 basketimg'>
                <Link to='/cart'><img onClick={()=>setMenu("")} className={menu == "ContactUs"?"active":""} src={assets.basket_icon}/></Link>
                <div className='dot'></div>
              </div>
              <div className='col-md-4'>
                <button onClick={() => setShowLogin(true)} className='SignInBtn'>Sign In</button>
              </div>
              </div>
           </div>
       </div>
    </div>
  );
}

export default MyNavbar;
