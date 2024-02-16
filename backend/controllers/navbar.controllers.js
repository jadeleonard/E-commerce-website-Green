const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();





async function Navbar(res,req){
    try {
        const response = await prisma.navbar.findMany();
        res.json(response)
    } catch (error) {
       console.log("error",error) 
    }
}

module.export = {
    Navbar
}

