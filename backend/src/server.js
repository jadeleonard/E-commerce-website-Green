const express = require("express");
const app = express();
const port = 3001
const {PrismaClient} = require("@prisma/client")






const data ={
    "name":"Hello world"
}
const prisma = new PrismaClient();
app.listen(port,(res,req) =>{
    console.log(`Server running on port ${port}`)
    res.send(data)
});
app.get("/api/navbar",async(res,req) =>{
    try {
        const response = await prisma.navbar.findMany();
        if(response){
            res.json(response)
        }
    } catch (error) {
        console.log("error",error)
    }
});
