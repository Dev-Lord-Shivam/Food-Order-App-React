import React from 'react'
import MyNavbar from './Components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/carousel';
import './index.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Cart from './Pages/Cart/Cart'
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

const App = () => {
  return (
    <>
      <div>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
