import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"

import './App.css'
import { ToastContainer } from "react-toastify"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";




function App() {
 
  return (
    
     <BrowserRouter>
      <CartProvider>
      
       <NavBar />
       <ToastContainer theme="dark" />

       <Routes>

      <Route path="/" element={ <ItemListContainer  /> }  />
      <Route path="/category/:idCategory" element={ <ItemListContainer  /> } />
      <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
     
     
       </Routes>

      </CartProvider>
    </BrowserRouter> 
  )   
}

export default App
