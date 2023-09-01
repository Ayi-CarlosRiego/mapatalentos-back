import Usuario from "../models/usuarios.js"
import generarId from "../helpers/generarId.js"
import generarJWT from "../helpers/generarJST.js"

const login = async (req,res) =>{

    const {email,password} = req.body

    const usuario = await Usuario.findOne({email})

    if(!usuario){
        const error = new Error("Usuario no encontrado")
        return res.status(404).json({msg: error.message})
    }

    if(await usuario.comprobarContraseña(password)){
        res.json({
            _id : usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id)
        })
    }
    else{
        const error = new Error("Contraseña incorrecta")
        return res.status(404).json({msg: error.message})
    }

}


const registro = async (req,res) =>{
    const {email} = req.body
    const usuarioExiste = await Usuario.findOne({email})

    console.log(email)

    if(usuarioExiste){
        const error = new Error("Usuario ya existe")
        return res.status(404).json({msg: error.message})
    }

    try {
        const usuario = new Usuario(req.body)
        usuario.token = generarId()
        const usuarioAlmacenado = await usuario.save()
        res.json(usuarioAlmacenado)
    } catch (error) {
        res.json(error)
    }
}
 
const perfil = async (req,res) =>{
    const {usuario} = req

    res.json(usuario)
}




export {
    login,
    registro,
    perfil
    
}