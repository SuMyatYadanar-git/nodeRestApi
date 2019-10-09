// http://192.168.100.104:5000/api/user
module.exports.getUser = (req, res) => {
    req.getConnection(function (error, conn) {
        conn.query('SELECT * FROM tbl_user ', function (errs, row) {
            if (errs) res.status(204).json({ error: errs });
            else res.status(200).json({ data: row })
        });
    });
}

// http://192.168.100.104:5000/api/user/:id
module.exports.getUserWithId = (req, res,id) => {
    
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM tbl_user WHERE user_id=? ', [id], (err, row) => {
            if (err) res.json({ error: err })
            else res.status(200).json({ data: row })
        })
    })
}

// http://192.168.100.104:5000/api/user/newuser
module.exports.putNewUser = (req, res,post) => {
    req.getConnection((error, conn) => {
        conn.query(`INSERT INTO tbl_user(user_name,phone,pwd,user_role) VALUES (?,?,?,?) `, [post.name, post.phone, post.pwd, post.role], (err, row) => {
            if (err) console.error(err)
            conn.query('SELECT * FROM tbl_user WHERE user_id=?', [row.insertId], (errs, rows) => {
                if (errs) res.status(204).json({ error: errs })
                else res.status(200).json({
                    message: 'inserted new user successfully', successRow: row.affectedRows, data: rows
                })
            })

        })
    })
}

// http://192.168.100.104:5000/api/user/:id
module.exports.deleteUser = (req, res,id) => {
    req.getConnection((error, conn) => {
        conn.query('DELETE FROM tbl_user WHERE user_id= ?', [id], (err, row) => {
            if (err) res.status(204).json({ error: err })
            else res.status(200).json({ data: row, message: 'delete employee successfully' })
        })
    })
}