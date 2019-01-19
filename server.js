const express = require ('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const CoinRouter = require('./routes/CoinRouter')
const bodyParser = require ('body-parser')


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port , () => {
console.log(`app listen on port ${port}`)
})

app.use(express.static('public'))
app.set("view engine","ejs")
/*
app.get('/' , (req , res) => {
    res.render('index.ejs')
})
*/
app.use('/coins',CoinRouter)

// DB
mongoose.Promise = global.Promise
mongoose.connect ('mongodb://localhost/nodejswithexpress')