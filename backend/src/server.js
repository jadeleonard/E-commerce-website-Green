const express = require("express") ;
const createUser = require("../controllers/create.controllers")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Navbar } = require("../controllers/navbar.controllers");









const app = express();
const port = 3001;


app.post("/api/create",createUser);
app.get("/api/navbar",Navbar);
app.listen(port,(res,req) =>{
    console.log(`Server running on ${port}`)
});




