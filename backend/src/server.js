const express = require("express");
const app = express();
const port = process.env.DATA_SEND;
const { PrismaClient } = require("@prisma/client");
const cache = require('memory-cache');

const prisma = new PrismaClient();

// Define routes before adding caching middleware
app.get('https://e-commerce-website-green-six.vercel.app/', (req, res) => {
    res.send('Hello World!');
});

// Caching middleware should only apply to specific routes
app.use("https://e-commerce-website-green-six.vercel.app/api", (req, res, next) => {
    const key = '__express__' + req.originalUrl || req.url;
    const cachedBody = cache.get(key);
    if (cachedBody) {
        res.send(cachedBody);
        return;
    } else {
        res.sendResponse = res.send;
        res.send = (body) => {
            cache.put(key, body, 10000); // Cache for 10 seconds
            res.sendResponse(body);
        };
        next();
    }
});

// Route to fetch data from Prisma and cache the response
app.get("https://e-commerce-website-green-six.vercel.app/api/navbar", async (req, res) => {
    try {
        const response = await prisma.navbar.findMany();
        if (response) {
            res.json(response);
        }
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
