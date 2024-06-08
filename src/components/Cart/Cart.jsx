import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import "./Cart.css"

const Cart = () => {
    const { cart, deleteAll, deleteProductById, totalPrice } = useContext(CartContext)


    //early return
    if (cart.length === 0){
        return (
            <div>
                <h2 className="mensajecart py-4">Tu carrito se encuentra vacío</h2>
                 <Link className="botonvolver btn btn-primary" to="/">Volver al inicio</Link>
            </div>
        )
    }

  return (
    <div>
        <div className="titulocarrito text-center pt-3 pb-3">
            <h1>Mi carrito</h1>
        </div>
        
        {
            cart.map( (productCart)=> (

                <div key={productCart.id} className="productosCarrito">

                <div className="container border">
                  <div className="row">
                    <div className="col"> <img src={productCart.image} alt="" className="imagenCarrito" /></div>
                    <div className="col nombrecarrito"> <p> {productCart.name} </p></div>
                    <div className="col"> <p> Cantidad: {productCart.quantity}</p></div>
                    <div className="col"> <h5> Precio por unidad: ${productCart.price} </h5></div>
                    <div className="col"> <h5> Precio parcial: ${productCart.price * productCart.quantity} </h5></div>
                    <div className="col text-end mt-3"> <button className="botonmdelete btn btn-primary" onClick={ () => deleteProductById(productCart.id)}><MdDelete /></button></div>
                  </div>   
                </div>

            </div>
            ))
        }
        <div className="display-flex text-center">
        <h2 className="text-center mt-4 me-5">Total de mi compra: ${ totalPrice() }</h2>
        <Link className="botoncomprar btn btn-primary text-center mt-4 me-5" to="/Checkout">Realizar compra</Link>
        <button className="botonvaciar btn btn-primary text-center mt-4 me-5" onClick={deleteAll} > Vaciar mi carrito</button>

        </div>
       
    </div>
  )
}

export default Cart