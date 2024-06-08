import React, { useState } from 'react'
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';




const ItemDetail = ({product}) => {

  //ocultar el contador
   const [goToCart, setGoToCart] = useState(false)

  const { addItem } = useContext(CartContext)


  const addProduct = (count) =>{
    //estructuramos el nuevo producto a añadir en el carrito
    const productCart = {...product, quantity: count} //cantidad = quantity
    console.log(productCart)
    //usamos la funcnion del context para añadir este producto al carrito
    addItem(productCart)
    setGoToCart(true)
    
  }
  return (
    <div className="detalleProductos px-5 pt-5">
            <h1 className="tituloDetalle">Detalle del producto:</h1>
            <img className="pt-4" src={product.image} />

            <div className="col-2 ps-1 pt-3">
            <p className="nombreDetalle">{product.name}</p>
            </div>
            <div className="col-sm-2 p-1 ps-1 pb-3">
            <p className="descripcionDetalle">Descripción: {product.description}</p>
            </div>
           
            <p className="precioDetalle"> ${product.price}</p>
        
            { goToCart ? ( <Link type="button" className="btn btn-secondary botonvercarrito px-5 mb-5 ms-4" to="/Cart">Ver mi carrito</Link>): ( <ItemCount  stock={product.stock} addProduct = {addProduct}/> )}

            <Link to="/"><button type="button" className="btn btn-secondary botonitemdetail px-5 mb-5 ms-4">Ver más productos</button></Link>
     
    </div>
  )
}

export default ItemDetail