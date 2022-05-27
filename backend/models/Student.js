const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
   name:{
       type:String,
       required:true
   },
   course:{
       type:String,
       enum:['science','commerce','arts'],
       default:"science"
   },
   age:Number,
   birthdate:{
       type:Date,
       required:true
   },
   roll_no:{
       type:Number,
       unique:true,
       required:true
   },
   address:{
       streetAddress:String,
       city:String,
       state:String
   }
})
// studentSchema.post('save',function(doc){
//     console.log(doc.birthdate);
//     let today = new Date()
//     let birthDate = new Date(doc.birthdate);
//     let Age = today.getFullYear() - birthDate.getFullYear();
//     console.log(birthDate,Age);
//     let m = today.getMonth() - birthDate.getMonth();
//     console.log(m);
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         Age--;
//     }
//     doc.age = Age
// })

studentSchema.pre("save",function(next){
    let today = new Date()
    let birthDate = new Date(this.birthdate);
    let Age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        Age--;
    }
    this.age = Age
    next()
})

module.exports = mongoose.model('Student',studentSchema)