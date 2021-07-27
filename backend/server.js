const express =require ("express")
const cookieParser=require ('cookie-parser')
const app=express()
//connect db
const connectDB=require('./Config/db')
connectDB()
app.use(express.json());

//Port 4000
const PORT =process.env.PORT || '4000'
//Router
const fabriqueRouter=require('./Routers/fabriqueRouter')
//middelware
app.use('/simplon/fabrique',fabriqueRouter)
//  Config server
app.listen(PORT,(err)=>{
    if(err){
        console.log('server is not running')
    }
    else {
        console.log(`server is running on port ${PORT}` )
    }
})