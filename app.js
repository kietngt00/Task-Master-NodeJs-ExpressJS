const express = require('express')
const app = express()
const routes = require('./routes/tasks')
const port = process.env.PORT || 3000
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()

app.use(express.json())
app.use(express.static('./public'))
app.use('/api/v1/tasks', routes)
app.use(notFound)
app.use(errorHandlerMiddleware)


const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, ()=>{
            console.log(`Server is listening on port ${port}`)
        })
        
    }catch(error){
        console.log(error)
    }
}

start()
