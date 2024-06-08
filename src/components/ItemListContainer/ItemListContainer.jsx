import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loading from "../Loading/Loading.jsx";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";



const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { idCategory } = useParams()
    
    //Cargando...
    const[loading, setLoading]= useState(false)


    //nueva funcion para traer mis productos
    const getProducts = () => {
        setLoading(true)
        const productsReference = collection(db, "products")
        getDocs(productsReference)
        .then((productsDb)=> {
           const data = productsDb.docs.map((product)=>{
                return {id: product.id, ...product.data()}
            })
            setProducts(data)
        })

        .finally(()=>setLoading(false))

        .catch(error =>{
            console.error(error)
        })
    }

    const getProductsByCategory = () =>{
        setLoading(true)
        const productsReference = collection(db, "products")
        const question = query(productsReference, where("category", "==", idCategory)) 
        
        getDocs(question)
        .then((productsDb)=> {
           const data = productsDb.docs.map((product)=>{
                return {id: product.id, ...product.data()}
            })

            setProducts(data)
        }) 
        .finally(()=>setLoading(false))
         
        .catch(error =>{
            console.error(error)
        })
    }

    useEffect(() => {
        if(idCategory){
            getProductsByCategory()
        }else{
            getProducts()
          }  
    }, [idCategory]); //La categoria en el array de dependencias 


    return (
        <div>

           <div className="text-center mt-5 tituloPrincipal"> { idCategory ? `Nuestros ${idCategory}` : "¡Bienvenidos a Magnetic Store!" } </div>

           <div>
            {
                loading ? <Loading /> : <ItemList products = {products} />
            } 
           </div>

        </div>
        

    )
}

export default ItemListContainer;