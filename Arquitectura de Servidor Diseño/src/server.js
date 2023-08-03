import express from 'express'

const app = express()
app.use(express.json())

app.use(express.static("./public"))

app.get("/test", (req, res) => {
    res.json({
        status: "ok"
    })
})

app.listen(8080, () => console.log("se levanto"))