let express = require('express')
let app = express()

//Express body parsor config
let bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Routing
let weapon = require('./routes/weapon')
app.use('/weapon', weapon)

let port = 9090;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
