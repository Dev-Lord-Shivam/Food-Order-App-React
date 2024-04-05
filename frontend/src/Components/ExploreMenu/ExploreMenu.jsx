import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu'>
       <h1>Explore Our Menu</h1>
       <p id="explore-menu-text">Choose from diverse menu featuring a delectable array of dishes crafted with the finest ingrideients and culinary expertise.
           Our mission to satisfy your carvings and elevates your dining experience, one delicious meal at a time
        </p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return (
                <div onClick={()=> setCategory(prev => prev ===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category === item.menu_name ? "active" : ""} src={item.menu_image}/>
                    <p>{item.menu_name}</p>
                </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
