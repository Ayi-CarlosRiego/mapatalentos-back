import mongoose from "mongoose";


const colaboradoresSchema = mongoose.Schema({
    legajo:{
        type: Number,
        required: true,
        trim: true
    },
    colaborador:{
        type: String,
        required: true,
        trim: true
    },
    rol:{
        type: String,
        required: true,
        trim: true
    },
    clientePP:{
        type: String,
        required: true,
        trim: true
    },
    manager:{
        type: String,
        required: true,
        trim: true
    },
    lider:{
        type: String,
        required: true,
        trim: true
    },
    lugar:{
        type: String,
        required: true,
        trim: true
    },
    tecnologia:{
        type: String,
        required: true,
        trim: true
    },
    fechaDeIngreso:{
        type: Date,
        required: true,
        trim: true
    },
    seniority:{
        type: String,
        required: true,
        trim: true
    },
    uen:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true
    }
    
})

const Colaborador = mongoose.model("Colaboradores",colaboradoresSchema)

export default Colaborador