const express = require("express")    
const app = express()
const importData = require("./data.json")
const port = process.env.PORT || 3000 
const cors = require("cors")

app.use(cors())

//routes
app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/data", (req, res) => { 
    res.send(importData)
})

app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`)
})