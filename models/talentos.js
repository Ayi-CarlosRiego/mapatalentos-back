import mongoose from "mongoose";

const talentosSchema = mongoose.Schema({
        mail:{
            type:String,
            required:true,
            trim: true,
            unique:true
        },
        legajo:{
            type:Number,
           // required:true,
        },
        puesto:{
            type:String,
            //required:true,
        },
        seniority:{
            type:String,
            //required:true,
        },
        estudioMaximo:{
            type:String,
            //required:true,
        },
        cv:{
            type:String,
            //required:true,
        },
        competencias:[{
            type: Object,
        },{
            nombre:{
                type:String
            },
            certificado:{
                type:String
            },
            id:{
                type:mongoose.Schema.Types.ObjectId
            }
        }]
})

const Talentos = mongoose.model("Talentos",talentosSchema)

export default Talentos