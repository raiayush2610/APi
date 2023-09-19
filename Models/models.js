const mongoose = require('mongoose');

// create schema
const StudentSchema = new mongoose.Schema({
    
    Status:  String,
     User_ID: Number,
    College_Email_ID: String,
    College_Roll_Number: String,
    Number: Array,
    alphabets: Array,
    highest_alphabet: Array
})


const Stu = mongoose.model('Student', StudentSchema);

module.exports=Stu;
