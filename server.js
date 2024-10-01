require("dotenv").config()
const express = require("express");
const errorHandler = require("./Middleware/ErrorHandler");
const connectDb = require("./Config/dbConnection");

connectDb();
const app = express();
console.log(process.env.PORT)
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use('/api', require('./routes/contactRoutes'))
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Connected on port ${PORT}`)
});