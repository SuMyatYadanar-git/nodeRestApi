// http://192.168.100.104:5000/api/booking/
module.exports.getBookingData =(req,res)=>{
    req.getConnection((error,conn)=>{
        conn.query('SELECT * FROM tbl_booking',(err,row)=>{
            if(err) res.status(204).json({err})
            else res.status(200).json({data:row})
        })
       
    })
}

// http://192.168.100.104:5000/api/booking/id
module.exports.getBookingDataWithId = (req,res,id)=>{
   req.getConnection((error,conn)=>{
       console.error(error)
       conn.query('SELECT * FROM tbl_booking WHERE booking_id = ?',[id],(err,row)=>{
           if(err) res.status(204).json({err})
           else res.status(200).json({data:row,message:'success'})
       })
   })
   
}

//http://192.168.100.104:5000/api/booking/newbook
module.exports.AddBookingData =(req,res,post)=>{
    req.getConnection((error,conn)=>{
        console.log(error)
        // const query='INSERT INTO tbl_booking(customer_id,ground_id,section_id,date,amount,stadium_id) VALUES (?,?,?,?,?,?)'
        conn.query('INSERT INTO tbl_booking (customer_id,ground_id,section_id,Date,amount,stadium_id) VALUES (?,?,?,?,?,?)',[post.customer_id,post.ground_id,post.section_id,post.date,post.amount,post.stadium_id ],(err,row)=>{
            if(err) res.status(204).json({err})
            conn.query('SELECT * FROM tbl_booking WHERE booking_id=?',[row.insertId],(errs,rows)=>{
                res.status(200).json({data:rows,successRow: row.affectedRows,message:'New booking successsed!'})
            })
            
        })
    })
}