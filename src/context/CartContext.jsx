import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])


//funcion agregar producto
    const addItem = (newProduct) => {
        //utilizo mi funcion detectDuplicates (no es necesario que lo pase en mi value)
        const condicion = detectDuplicates(newProduct.id)
        
        if(condicion){
            //console.log("entro en el if")
            const changedProducts = cart.map((productCart)=>{
                if(productCart.id === newProduct.id){
                    return { ...productCart, quantity: productCart.quantity + newProduct.quantity }
                }else{
                    return productCart
                }
            })

            setCart(changedProducts)
            
        }else{
         //agregar el producto como uno nuevo 
            setCart([ ...cart, newProduct ])
        }
     
    }
    console.log(cart)


//funcion cantidad total
    const totalQuantity = () => {
        const totalQuantityProducts = cart.reduce( (total, product)=> total + product.quantity, 0 )
        return totalQuantityProducts
    }

 
//funcion para saber el precio total 
    const totalPrice = () => {
        const totalPurchase = cart.reduce( (total, productCart)=> total + ( productCart.price * productCart.quantity ), 0)
        return totalPurchase
    }
     




//funcion para detectar productos duplicados
     const detectDuplicates = (idProduct) => {
       const condicion = cart.some( (productCart) => productCart.id === idProduct)
       return condicion
    }



//funcion eliminar un producto en especifico 
     const deleteProductById = (idProduct) => {
       const productsFilter = cart.filter ( (productCart) => productCart.id !== idProduct)
       setCart(productsFilter)
    }

//funcion para eliminar todos los productos
     const deleteAll = () => { 
       setCart([])
    }




    return(
        <CartContext.Provider value={ { cart, addItem, totalQuantity, deleteAll, deleteProductById, totalPrice } } >
            { children }
        </CartContext.Provider>
    )
}




export {CartProvider, CartContext}