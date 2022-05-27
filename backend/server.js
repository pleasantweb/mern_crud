require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./config/dbConn')
const studentRoutes = require('./routes/api/student-routes')
const corsOptions = require('./config/corsOptions')
const app = express()
const PORT = process.env.PORT || 3500
connectDB()

//middlewares 
app.use(express.json())
app.use(cors(corsOptions))


app.use('/students',studentRoutes)

// let date = new Date()
// let mlDate = date.getMilliseconds()
// console.log(mlDate);
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
console.log( getAge('1994-12-18'))
console.log(Date.now());

app.get('/',(req,res)=>{
    res.send('hi...')
})

mongoose.connection.once('open',()=>{
    console.log('Connected to mongodb ')
    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`);
    })
})
