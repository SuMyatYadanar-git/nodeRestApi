
const dao = require('../dao/bookingOperation')


// http://192.168.100.104:5000/api/booking/
module.exports.getBookingData = (req, res) => {
    dao.getBookingData(req, res)
}

// http://192.168.100.104:5000/api/booking/id
module.exports.getBookingDataWithId = (req, res) => {
    const id = req.params.id
    dao.getBookingDataWithId(req, res, id)
}

//http://192.168.100.104:5000/api/booking/newbook
module.exports.AddBookingData = (req, res) => {
    const post = {
        customer_id: req.body.customer_id,
        ground_id: req.body.ground_id,
        section_id: req.body.section_id,
        date:req.body.date,
        amount: req.body.amount,
        stadium_id: req.body.stadium_id
    }
    dao.AddBookingData(req, res, post)
}