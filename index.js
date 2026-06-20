const express=require("express")

const server=express()

const port=8081

server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json({
        message:"Home Page"
    })
})

server.listen(port,()=>{
    console.log("server running on port 8081")
})

