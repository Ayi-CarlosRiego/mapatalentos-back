import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const connection = await mongoose.connect(
            'mongodb+srv://carlosriego:Kz3IcbGrJTf3wmFy@cluster0.f3f9cjb.mongodb.net/mapaTalentos?retryWrites=true&w=majority',{
                useNewUrlParser: true
                //useUnifyTopology: true
            })

            const url = `${connection.connection.host}:${connection.connection.port}`
            console.log(`MongoDB conectado en ${url}`)
            
    }catch(error){
        console.log("error: " + error.message)
        process.exit(1)
    }
}

export default connectDB