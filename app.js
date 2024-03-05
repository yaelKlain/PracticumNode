const express = require('express')

const userRoutes = require('./routers/users')
const app= express()
app.use(express.json())
app.use('/users',userRoutes)
app.listen(8000,()=>{
    console.log("port 8000")
})

