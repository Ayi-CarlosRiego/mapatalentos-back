import mongoose from "mongoose";
import bcrypt from "bcrypt"


const UsuarioSchema = mongoose.Schema({
    email:{
        type:String,
        required: true,
        trim: true,
        unique:true
    },
    password:{
        type:String,
        required: true,
        trim: true
    },
    token:{
        type:String
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
})

UsuarioSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

UsuarioSchema.methods.comprobarContraseña = async function(passwordFormulario){
    return await bcrypt.compare(passwordFormulario,this.password)
}

const Usuario = mongoose.model("Usuario",UsuarioSchema)

export default Usuario