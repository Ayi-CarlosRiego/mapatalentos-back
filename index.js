import express from "express"
import connectDB from "./config/db.js"
import route from "./routes/colaboradorRoutes.js"
import usuarioRoutes from "./routes/usuarioRoutes.js"
import talentosRoutes from "./routes/talentosRoutes.js"
import competenciasRoutes from "./routes/competenciaRoutes.js"
import dotenv from "dotenv"
import cors from "cors"


const app = express()
dotenv.config()
connectDB()

const whitelist = ['*']
const corsOptions ={
    methods: "GET,PUT,POST,DELETE",
    origin :function(origin,callback){
        if(whitelist.includes(origin)){
           callback(null,true)
        }else{
            callback(new Error("Error de Cors"))
        }
    }
}
app.use(express.json())
app.use(cors(corsOptions))
app.use("/api/colaboradores",route)
app.use("/api/usuarios",usuarioRoutes)
app.use("/api/talentos",talentosRoutes)
app.use("/api/competencias", competenciasRoutes)

const PORT = process.env.PORT || 4000
app.listen(4000, ()=>{

    console.log(`App corriendo puerto ${PORT}`)

})