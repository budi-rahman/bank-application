const express = require('express')
const app = express()
const router = require('./routes')
const PORT = 3001

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false }))

app.route('/', (req,res) => {
    res.send("hello")
})

app.use(router)

app.listen(process.env.PORT , () => {
    console.log(`ada di port ${PORT}`)
})