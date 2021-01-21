const express = require ('express')

const app = express()

const authRoutes = require('./routes/authroutes')

app.use(express.static('public'))
app.use(express.json())

app.set('view engine', 'ejs');


app.use(authRoutes)

app.get('/', (req, res) => res.render('home'));


module.exports = app