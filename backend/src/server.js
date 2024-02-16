const express = require("express") ;
const createUser = require("../controllers/create.controllers")











const app = express();
const port = 3001;


app.post("/api/create",createUser);

app.listen(port,(res,req) =>{
    console.log(`Server running on ${port}`)
});




