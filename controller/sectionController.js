const dao = require('../dao/sectionOperation')

// http://192.168.100.104:5000/api/section
module.exports.getSection=(req,res)=>{
    dao.getSection(req,res)
}

// http://192.168.100.104:5000/api/section/:ground_id/:date
module.exports.getFreeSection= (req,res) =>{
    const post ={
        ground_id:req.params.ground_id,
        date:req.params.date
    }
    dao.getFreeSection(req,res,post)
}