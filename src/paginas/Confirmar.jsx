import { use, useEffect } from 'react'
import logoDog from '../assets/dog-hand.webp'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


export const Confirmar = () => {

    //PASO 1
    const {token} = useParams()

    //PASO 2 

    const verifyToken = async () => {
        try {
            const url = `http://localhost:8000/api/confirmar/${token}`
            const respuesta = await axios.get(url)
            console.log(respuesta.data.msg)
            toast.success(respuesta.data.msg)

        } catch (error) {
            console.log(error)
            toast.error(error.response.data.msg)

        }
    }
    useEffect(() => {
        verifyToken()
    }, ["F5"])


    return (
        
        <div className="flex flex-col items-center justify-center">
            <ToastContainer />

            <img class="object-cover h-80 w-80 rounded-full border-4 border-solid border-slate-600" src={logoDog} alt="image description"/>

            <div className="flex flex-col items-center justify-center">
                <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">Muchas Gracias</p>
                <p className="md:text-lg lg:text-xl text-gray-600 mt-8">Ya puedes iniciar sesión</p>
                <Link to="/login" className="p-3 m-5 w-full text-center bg-gray-600 text-slate-300 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900 hover:text-white">Login</Link>
            </div>

        </div>
    )
}
