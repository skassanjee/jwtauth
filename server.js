const mongoose = require('mongoose')
const app = require('./app')


mongoose.connect('mongodb://localhost/jwtauth')

mongoose.connection.once('open', function(){
    console.log('connection has been made successfully!')
}).on('error', function(error){
    console.log('connection error:', error)
})


const port = 3000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })