import  Jwt  from "jsonwebtoken";
import Usuario from "../models/usuarios.js";


const checkAuth = async (req,res,next) =>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = Jwt.verify(token,process.env.JWT_SECRET)
            req.usuario = await Usuario.findById(decoded.id)
            next()

        } catch (error) {
            return res.status(404).json({msg:"Error",detail:error})

        }
    }
    if(!token){
        const error = new Error('Token no valido')
        return res.status(401).json({msg:error.message})
    }

}

export default checkAuth