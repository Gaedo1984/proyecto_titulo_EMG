import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Context from './context/context.js'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Patologia from './views/Patologia.jsx'
import Pizza from './views/Pizza.jsx'
import Cart from './views/Cart.jsx'
import Home from './views/Home.jsx'
import NotFound from './views/notFound.jsx' 

function App() {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    fetch('/patologias.json')
    .then((res) => res.json())
    .then((json) => setMenu(json))
    .catch((e) => console.log(e))
  },[])

  const globalState = { menu }

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/patologia" element={<Patologia/>}></Route>
          <Route path="/pizza/:id" element={<Pizza/>}></Route>
          <Route path="/carrito" element={<Cart/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
