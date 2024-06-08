import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import {doc, getDoc} from "firebase/firestore";
import db from "../../db/db.js";



const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({});
    const [idNotFound, setIdNotFound] = useState(false);
    const { idProduct } = useParams();

    const getProduct = () =>{
        const productReference = doc(db, "products", idProduct)
        getDoc(productReference)

        .then((productDb)=>{
            if (productDb.exists()){
                const data = { id: productDb.id, ...productDb.data()}
                setProduct(data)
            } else{
                setIdNotFound(true)
            }        
        })
        .catch ((error)=>{
            console.log(error);
        })
    }
    useEffect(() =>{
       getProduct()
    }, []);

    return (
        <div>
            {idNotFound ? (
                <p>Lo sentimos, el producto seleccionado no existe.</p>
            ) : (
                <ItemDetail product={product} />
            )}
        </div>
        
    )
}

export default ItemDetailContainer;