import React from 'react'
import { useState } from 'react'
import "./ItemCount.css";



const ItemCount = ( {stock, addProduct} ) => {
    const [ count, setCount ] = useState(1)

    const handleClickReduce = () =>{
        if(count > 1){
            setCount( count - 1 )
        }     
    }

    const handleClickIncrement = () =>{
        if( count < stock ){
            setCount ( count + 1)
        }
       
    }

    const handleClickAddToCart = () =>{
        addProduct(count)
        console.log(count)

    }


  return (
    <div className="contador mb-3">

     <div className="btn-group grupobotones" role="group" aria-label="Basic outlined example">
        <button type="button" className="btn botonmenos" onClick={handleClickReduce}>-</button>
        <button type="button" className="btn botoncontador"><p>{count}</p></button>
        <button type="button" className="btn botonmas" onClick={handleClickIncrement}>+</button>
       
     </div>

       <button type="button" className="btn agregarcarrito ms-2" onClick={handleClickAddToCart}>Agregar al carrito</button>



    </div>
  )
}

export default ItemCount