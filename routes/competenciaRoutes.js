import express from "express"

const route = express.Router()

import { modificarCompetencia, agregarCompetencia } from "../controllers/competenciasController.js"

route.post("/add",agregarCompetencia)


export default route