const Student = require('../../models/Student')

const handleUpdateStudent = async(req,res)=>{
    try{
        const id =req.params.id
        const {name,course,birthdate,roll_no,address} = req.body
        console.log(name,course,birthdate,roll_no,address);
      const student = await Student.findOne({_id:id}).exec()
      student.name = name
      student.course = course
      student.birthdate = birthdate
      student.roll_no = roll_no
      student.address = address
      await student.save()
      console.log(student);
      res.status(200).json({student})


    }catch(err){
        res.status(500).json(err)
    }
}
module.exports = {handleUpdateStudent}