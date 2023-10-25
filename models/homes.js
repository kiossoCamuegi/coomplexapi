const mongoose =  require("mongoose");

const HomesSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    youtube:{
        type:String,
        required:true
    },
    sallercode:{
        type:String,
        required:true
    },
    registerDate:{
        type:Date,
       required:true,
       default:Date.now
    },

});


module.exports  = mongoose.model("Homes", HomesSchema);