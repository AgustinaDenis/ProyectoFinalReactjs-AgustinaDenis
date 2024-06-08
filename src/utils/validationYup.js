
import { mixed, object, string } from "yup";


let useSchema = object({
    nombre: string().required("Por favor, introduzca un nombre"),
    telefono: mixed().required("Por favor, introduzca un número de contacto"),
    email: string().email().required(),
    valEmail: string().email().required("Debe validar su email"),
})

const validateForm = async(dataForm) =>{
    try {
        await useSchema.validate(dataForm)
        return {status:"success"}

    }catch(error){
        return{status: "error", message: error.message}

    }

}

export default validateForm
