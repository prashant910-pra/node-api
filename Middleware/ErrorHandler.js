const {constant} = require("../Constants")

const errorHandler=(err,req,res,next) =>{
const statusCode=res.statusCode?res.statusCode:500
switch(statusCode){
    case constant.VALIDATION_ERROR:
        res.json({message:err.message,stackTrace:err.stack})
        break;
    
    case constant.NOT_FOUND:
        res.json({message:err.message,stackTrace:err.stack})
        break;
    
    default:
        break;

    


}

}

module.exports=errorHandler