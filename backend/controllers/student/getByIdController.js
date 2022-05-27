const Student = require('../../models/Student')

const handleGetStudentById = async(req,res)=>{
    try{
        const id = req.params.id
        const foundStudent = await Student.findById(id)
        if(!foundStudent) return res.status(400).json({"Error":"No Student found"})
        res.status(200).json(foundStudent)
       
    }catch(err){
         res.status(500).json(err.message)
    }
    
}
module.exports = {handleGetStudentById}