const express = require('express')
const bodyParser = require('body-parser')
const myConnection = require('express-myconnection')
const mysql = require('mysql')
const jwt = require('jsonwebtoken')

const indexRoute = require('./routes/indexRoute')
const config = require('./config/config')

const app = express()

const port = config.server.port

app.use(myConnection(mysql, config.database, 'pool'))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    //res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', indexRoute)

// app.get('/token', function (req, res) {
//     var token = jwt.sign({ username: "ado" }, 'supersecret', { expiresIn: 120 });
//     res.send(token)
// })

app.listen(port, () => console.log(`server is on port http://192.168.100.104:${port}`))

