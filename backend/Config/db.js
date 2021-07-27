const mongoose =require ('mongoose')
const connectDB =async ()=>{
try {
    await mongoose.connect(
   'mongodb+srv://SimplonDB:simplon@cluster0.1wkt4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
console.log('MongoDB connected....')}
catch(error){
console.error(error.message)
}

}
module.exports=connectDB




