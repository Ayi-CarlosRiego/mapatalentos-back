import express from "express"
import checkAuth from "../middleware/checkAuth.js"
import { agregarTalento, buscarPorTalento, eliminarTalento, modificarTalento, verTalento, verTalentoMail } from "../controllers/talentosController.js"


const route = express.Router()

route.get("/",checkAuth,verTalento)

route.post("/modificar/:id",checkAuth,modificarTalento)

route.get("/ver/:email",checkAuth,verTalentoMail)

route.post("/add", agregarTalento)

route.post("/eliminar/:id/:nombre",checkAuth,eliminarTalento)

route.get("/buscar/:nombre",checkAuth,buscarPorTalento)


export default route