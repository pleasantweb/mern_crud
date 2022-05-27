const mongoose = require('mongoose')
console.log(process.env.DATABASE_URI);
const connectB= async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI,{
            useUnifiedTopology:true,
          useNewUrlParser:true

        })
    }catch(err){
        console.log(err);
    }
}

module.exports = connectB