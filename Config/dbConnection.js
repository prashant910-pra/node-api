const mongoose = require("mongoose")

const connectDb = async()=>{
const connect = await mongoose.connect(process.env.CONNECTION_STRING) 
console.log("DB Connected",connect.connection.host)
    try{

    }catch{
        console.log("Error")
        process.exit(1)
    }
}

module.exports = connectDb