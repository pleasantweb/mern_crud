const Student = require('../../models/Student')

const handlePostStudent=async(req,res)=>{
   const {name,course,birthdate,roll_no,address} = req.body
   console.log(name,course,birthdate,roll_no,address);
   try{
      if(!name || !birthdate || !roll_no) return res.status(400).json({'error':"Please fill all the information"})
      const foundStudent = await Student.findOne({roll_no:roll_no}).exec()
      if(foundStudent) return res.status(400).json({'error':"Student with that roll no already exists"})
      const student = await Student.create({
         name:name,
         course:course,
         birthdate:birthdate,
         roll_no:roll_no,
         address:{
            streetAddress:address.streetAddress || '',
            city:address.city || '',
            state:address.state || ''
         }
      })
      res.status(201).json({student})
   }catch(err){
      res.status(500).json({"Error":err})
   }
}
module.exports = {handlePostStudent}