import Colaborador from "../models/colaboradores.js"


const buscarTodos = async (req,res) =>{
    const colaboradores = await Colaborador.find()
    res.json(colaboradores)
} 


const buscar = async (req,res) =>{
    const colaborador = await Colaborador.find().where("Mail").equals(req.usuario.email)
    console.log(req.usuario.email)
    res.json(colaborador)
}

const buscarMail = async (req,res) =>{
    const {mail} = req.params
    const colaborador = await Colaborador.find().where("Mail").equals(mail)

    res.json(colaborador)
}


const alta = async (req,res) =>{
    try{
        const colaborador = new Colaborador(req.body)
        const colaboradorAlmacenado = await colaborador.save()
        res.json(colaboradorAlmacenado)
    }
    catch(error){
        res.json(error)
    }
}

export {
    buscarTodos,
    alta,
    buscar,
    buscarMail
}