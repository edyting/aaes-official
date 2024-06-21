const express = require('express')
const mongoose = require('mongoose')
const mongoString = "mongodb+srv://manuel:manuel123@cluster0.9fkysdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const userRoute = require('./routes/user.js')

// console.log(mongoString);
mongoose.connect(mongoString)
const db =mongoose.connection

db.on('error',(error)=>{
    console.log(error);
})

db.once('connected',(connected)=>{
    console.log('Database connected');
})


const app = express()

app.use(express.json())

app.use('/api/user', userRoute)



app.listen(3000,()=>{
    console.log(`Server is running`);
})
