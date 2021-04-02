const todos = require("./routes/todos")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/todos", todos)

app.get("/", (req,res) => {
    res.send("Welcome to our todos api")
})

const connection_string = process.env.CONNECTION_STRING
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server running on port ${port}...`)
})

mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connection established..."))
.catch((error) => console.error("MongoDB connetcion failed:", error.message))

