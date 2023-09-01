import express from "express"
import checkAuth from "../middleware/checkAuth.js"

const router = express.Router()

import { login, perfil, registro } from "../controllers/usuarioController.js"

router.post('/login',login)
router.post('/registro',registro)
router.get('/perfil',checkAuth,perfil)

export default router