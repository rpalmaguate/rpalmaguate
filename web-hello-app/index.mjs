import express from 'express'
import os from 'os'

const app = express()
const PORT = 8080

app.get("/", (req, res) => {
    const helloMessage = 'Hello from Guatemala'
    console.log(helloMessage)
    res.send(helloMessage)
})

app.listen(PORT, () => {
    console.log('Web server is listening at port ${PORT}')
})