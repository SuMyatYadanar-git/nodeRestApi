const jwt = require('jsonwebtoken')

// http://192.168.100.104:5000/api/login
module.exports.postLogin = (req, res) => {

    const userName = req.body.user_name
    const pwd = req.body.pwd

    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM tbl_user WHERE user_name =  binary "' + userName + '"', (err, row) => {
            if (pwd === row[0].pwd) {
                let token = jwt.sign({ userName,pwd }, 'forAuthenticationSecurityToken', { expiresIn: '24h' })
                if (token) {
                    res.status(200).json({
                        success: true,
                        message: 'Authentication successful!',
                        token
                    })
                } else {
                    res.status(403).json({
                        success: false,
                        message: 'Authentication Failed!Please check the request',
                    })
                }
            }
            else {
                res.status(400).json({
                    success: false,
                    message: 'Incorrect username and password'
                })
            }

        })
    })
}