import mongoose from "mongoose";

const competenciasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    nivel: {
        type: String,
        required: true
    },
    experiencia: {
        type: String,
        required: true
    },
    certificado: {
        type: String,
        default: false
    }
})

const Competencias = mongoose.model("Competencias",competenciasSchema)

export default Competencias