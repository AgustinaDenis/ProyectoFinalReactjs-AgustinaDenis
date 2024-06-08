import { BsCart } from "react-icons/bs";
import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
   //para que mi carrito no muestre el 0
   let quantity = totalQuantity()
    return (
        <Link to="/cart" className= {quantity >=1 ? "cartWidget cart-rosita" : "cartWidget cart-white"}>
            <BsCart size={35} />
            <p className="text-center mt-1 cart"> { quantity >=1 && quantity }</p>
        </Link>
    )
}

export default CartWidget