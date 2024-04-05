import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Header.css'
const Header = () => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={assets.header_img} className="d-block w-100 carousel-image" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={assets.Pasta} className="d-block w-100 carousel-image" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={assets.ThaiFood} className="d-block w-100 carousel-image" alt="..." />
                </div>
                <div className='header-content'>
                     <h2>Order your <br /> Favourite Food here</h2>
                     <p>Choose from diverse menu featuring a delectable array of dishes crafted with the finest ingrideients and culinary expertise.
                        Our mission to satisfy your carvings and elevates your dining experience, one delicious meal at a time
                     </p>
                     <button>View Menu</button>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Header;
