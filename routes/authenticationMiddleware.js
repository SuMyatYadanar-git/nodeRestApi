const jwt = require('jsonwebtoken')

module.exports.authenticationMiddleware = function (req, res, next) {
    const bearerHeader = req.headers['x-access-token'] || req.headers['authorization']
    // console.log(bearerHeader,typeof bearerHeader !== undefined)
    if (bearerHeader) {
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]
        req.token = bearerToken
        jwt.verify(req.token, 'forAuthenticationSecurityToken', (err, authData) => {
            if (err) {
                res.sendStatus(400)
            } else {

                next()
            }
        })
    }
    else {
        res.status(403).json({
            success: false,
            message: 'Authentication Failed!Please check the request',
        })
    }
}