import { Link } from "react-router-dom";
import "./Item.css";



const Item =({ product }) => {
    return (

        <div className="cardProductos p-3">
        <div className="row">
          
          <div className="col">
            <div className="card">
              <img src={product.image} className="card-img-top imagenesProductos" />
              <div className="card-body estilosProducto">
                <p className="card-title tituloProducto">{product.name}</p>
                <h5 className="card-text precioProducto">${product.price}</h5>
                <Link  to={"/detail/" + product.id} className=" btn botonDetalle">Ver producto </Link>
              </div>
            </div>
          </div>


          </div>
          </div>
     
    )
}

export default Item;