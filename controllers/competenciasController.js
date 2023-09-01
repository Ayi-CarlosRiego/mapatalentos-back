import Competencias from "../models/competencias.js";


const modificarCompetencia = async (req,res) =>{

const {id} = req.params

const competencia = Competencias.findById(id)

competencia.name = req.body.name || competencia.name
    
}

const agregarCompetencia = async(req,res) =>{
    

    const competencia = new Competencias(req.body)

    const competenciaAlmacenada = competencia.save()
    res.json(competenciaAlmacenada)
}

export{
    modificarCompetencia,
    agregarCompetencia
}