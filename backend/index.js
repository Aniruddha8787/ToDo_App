const express= require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const app = express();






app.listen(9090, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (err) {
        console.log("Error connecting to DB");
        console.log(err)
    }
    console.log("Listening to port 9090")
})