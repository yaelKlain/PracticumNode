const express = require('express')
const mongoose = require('mongoose')

const userRoutes = require('./routers/users')
const app= express()
app.use(express.json())
app.use('/users',userRoutes)
app.listen(8000,()=>{
    console.log("port 8000")
})











// "test": "echo \"Error: no test specified\" && exit 1",