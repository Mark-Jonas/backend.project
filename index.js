const express = require("express")
const mongoose = require("mongoose")
const studentRouter = require("./routes/studentRoutes")

const app = express()

const port = 3000

app.get("/", (req, res) => {
    res.send("Hello world")
})


const db = require("./config/keys").mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection success!");
})

app.use(studentRouter)

app.listen(port, () => { console.log(`Connected on port: ${port}`)})