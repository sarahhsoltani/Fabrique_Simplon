const mongoose=require ('mongoose')
const Schema = mongoose.Schema
const fabriqueSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    formateurs:{
        type:String,
        required:true
    },
    apprenants:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = fabrique = mongoose.model('fabrique', fabriqueSchema);
