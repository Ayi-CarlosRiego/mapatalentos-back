import Talentos from "../models/talentos.js";
import Competencias from "../models/competencias.js";
import mongoose from "mongoose";

const verTalento = async (req,res) =>{

    const talento = await Talentos.find().where("mail").equals(req.usuario.email).populate('competencias')
    //const talento = await Talentos.find().populate('competencias')
    res.json(talento)

}

const verTalentoMail = async (req,res) =>{

    const {email} = req.params

    const talento = await Talentos.find().where("mail").equals(email).populate('competencias')
    //const talento = await Talentos.find().populate('competencias')
    console.log(talento)
    res.json(talento)

}


const agregarTalento = async (req,res) =>{
    try {
        const talento = new Talentos(req.body)
        const talentoAlmacenado = await talento.save()
         res.json(talentoAlmacenado)
         console.log("Se agrego " + talento)
    } catch (error) {
        console.log(error)
    }
}

const buscarPorTalento = async (req,res) =>{
    const {nombre} = req.params

    const talento = await Talentos.find({"competencias" : {"$elemMatch" : {"nombre" : nombre}}},{
            "mail":1,
            "_id":0
         }
        )

    res.json(talento)
}

const modificarTalento = async (req,res) =>{

    const {id} = req.params

    const talento = await Talentos.findById(id)

   if (talento.mail !== req.usuario.email || !req.usuario.isAdmin){
        return res.status(404).json({msg:"Accion no valida"})
    }


    talento.mail = req.body.mail || talento.mail
    talento.legajo = req.body.legajo || talento.legajo
    talento.puesto = req.body.puesto || talento.puesto
    talento.seniority = req.body.seniority || talento.seniority
    talento.estudioMaximo = req.body.estudioMaximo || talento.estudioMaximo
    talento.cv = req.body.cv || talento.cv
    talento.competencias.push(req.body.competencias[0]) || talento.competencias
    talento.metodologiaAgil = req.body.metodologiaAgil || talento.metodologiaAgil

    try {
        const talentoModificado = await talento.save()
        res.json(talentoModificado)
    } catch (error) {
        console.log(error)
    }
}

const eliminarTalento = async(req,res) =>{
    const {id} = req.params
    const {nombre} = req.params
    await Talentos.updateOne({"_id": id},{
        $pull : {competencias:{nombre: nombre}}
    })

    console.log(`Se elimino ${nombre} con id: ${id}`)
    
    //console.log(competencias)
    //console.log(id)
    //await competencia.deleteOne({id:'64da5ab107e0ec81f7920914'})
}


export {
    verTalento,
    modificarTalento,
    agregarTalento,
    verTalentoMail,
    eliminarTalento,
    buscarPorTalento
}