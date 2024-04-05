import React from 'react'
import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download'>
       <p>For Better Experience Download <br /> Tomato App</p>
       <div className="app-download-platform">
          <img src={assets.play_store} alt="Play Store" />
          <img src={assets.app_store} alt="App Store" />
       </div>
    </div>
  )
}

export default AppDownload
