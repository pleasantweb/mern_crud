const Student = require('../../models/Student')

const handleDeleteStudent = async(req,res)=>{
    try{
        const studentId = req.params.id
        await Student.deleteOne({id:studentId})
        res.status(200).json({"success":"Student data deleted"})
    }catch(err){
       res.status(500).json(err.message)
    }
 
}
module.exports = {handleDeleteStudent}