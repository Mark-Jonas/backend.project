const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    middleName: {
        type: String,
        require: false,
    },
    idNumber: {
        type: Number,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    course: {
        type: String,
        require: true,
    },
    hall: {
        type: String,
        require: true,
    }
})

module.exports = Student = mongoose.model("student", StudentSchema);