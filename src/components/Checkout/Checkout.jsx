import React from 'react'
import { useState } from "react"
import Formulario from "./Formulario"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import {addDoc, collection, doc, setDoc, Timestamp} from "firebase/firestore"
import db from '../../db/db.js'
import { Link } from 'react-router-dom'
import validateForm from '../../utils/validationYup.js'
import {toast} from "react-toastify"
import "./Checkout.css";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        nombre:"",
        telefono:"",
        email:"",
        valEmail:"",
    })

    const [idOrder, setIdOrder] = useState(null)
    const {cart, totalPrice, deleteAll} = useContext(CartContext)

    const handleChangeInput = (event) =>{
        setDataForm({...dataForm,[event.target.name]: event.target.value})
    }

    //validaciones 
    const handleSubmitForm = async(event) =>{
        event.preventDefault();
        const order ={
            comprador:{...dataForm},
            productos:[...cart],
            fecha: Timestamp.fromDate(new Date()),
            total: totalPrice()
        }

        if (dataForm.email !== dataForm.valEmail){
            if(dataForm.email =="" || dataForm.valEmail == ""){
                toast.warning("Por favor, escriba su email")
            
            }else{
                toast.warning("El email debe ser el mismo") }
        }else{ try {
                const answer = await validateForm(dataForm)
                if (answer.status === "success"){
                    generateOrder(order)
                }else{
                    toast.warning(answer.message)
                }
            } catch (error) {
                console.log(error);    
            }

        }
        
    }
    console.log(validateForm);

    //subir a firebase

    const generateOrder = (order) =>{
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, order)
        .then((answer)=> setIdOrder(answer.id))
        .catch((error)=>error("Hubo un error, no se pudo realizar la compra"))
        .finally(()=>{
            updateStock()
            deleteAll()
        })

       
    }
    console.log(dataForm)
    
    // actualizar el stock
    const updateStock = () =>{
        cart.map((productCart)=>{
            let quantity = productCart.quantity
            delete productCart.quantity

            const productRef = doc(db,"products",productCart.id)
            setDoc(productRef,{...productCart, stock: productCart.stock - quantity})
            .then(()=> console.log("stock actualizado"))
            .catch((error)=> console.log(error))
        })
    }

  return (

    <div>
        {idOrder ? (
          <div>
             <h2 className="titulockeck py-3">¡Su compra fue realizada con éxito!</h2>
             <p className="textoorden">Su número de orden es: {idOrder}</p>
             <Link className="btn btn-primary botonfinal" to="/">Ver más productos</Link>
         </div>

        ) : (
            <Formulario dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />

        )}
       
    </div>
  )
}

export default Checkout