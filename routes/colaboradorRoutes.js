import express from "express"
const route = express.Router()
import { buscar,alta, buscarTodos, buscarMail } from "../controllers/colaboradoresController.js"

import checkAuth from "../middleware/checkAuth.js"

route.get("/",checkAuth,buscarTodos)
route.get("/yo",checkAuth,buscar)
route.post("/darAlta",alta)
route.get("/:mail",checkAuth,buscarMail)


export default route