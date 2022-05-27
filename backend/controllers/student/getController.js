const Student = require('../../models/Student')

const handleGetStudent = async(req,res)=>{
    try{
        const studentData = await Student.find()
        console.log(studentData);
        res.status(200).json(studentData)
    }catch(err){
         res.status(500).json(err.message)
    }
    
}
module.exports = {handleGetStudent}