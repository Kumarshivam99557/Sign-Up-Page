
const express = require('express');
const cors = require('cors');
const user = require("./Router/userRouter")
const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json())
app.use("/api/v1",user)


app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
    })