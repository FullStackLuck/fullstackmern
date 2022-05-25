//Dependencies

require("dotenv").config()
const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3001


//Routes

app.get("/", (req,res)=>{
    res.send('Hello World')
})

app.listen(PORT,()=> console.log(`Listen to port ${PORT}`))

