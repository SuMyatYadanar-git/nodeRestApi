const dao = require('../dao/userOperation')

// http://192.168.100.104:5000/api/user
module.exports.getUser = (req, res) => {
    dao.getUser(req, res)
}

// http://192.168.100.104:5000/api/user/:id
module.exports.getUserWithId = (req, res) => {
    const id = req.params.id
    dao.getUserWithId(req, res, id)
}

// http://192.168.100.104:5000/api/user/newuser
module.exports.putNewUser = (req, res) => {
    let post = {
        name: req.body.user_name,
        phone: req.body.phone,
        pwd: req.body.pwd,
        role: req.body.user_role
    }
    dao.putNewUser(req, res, post)
}

// http://192.168.100.104:5000/api/user/:id
module.exports.deleteUser = (req, res) => {
    const id = req.params.id
    dao.deleteUser(req, res, id)
}

