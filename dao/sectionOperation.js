module.exports.getSection = (req, res) => {
    req.getConnection((error, conn) => {
        // console.error(error)
        conn.query('SELECT * FROM tbl_section', (err, row) => {
            if (err) res.status(204).json({ err })
            else res.status(200).json({ data: row, message: 'successful' })
        })
    })
}

module.exports.getFreeSection = (req, res, post) => {
    req.getConnection((error, conn) => {
        // SELECT * FROM tbl_section WHERE section_id NOT IN
        conn.query('SELECT section_id FROM tbl_booking WHERE ground_id=? and Date=?', [post.ground_id, post.date], (err, row) => {
            if (err) res.stauts(204).json({ err })
            conn.query('SELECT * FROM tbl_section', (err1, row1) => {
                if (err1) res.status(204).json({ err1 })
                else res.status(200).json({ bookedSectionData: row, allSectionData: row1, message: 'success' })
            })
        })
    })
}
