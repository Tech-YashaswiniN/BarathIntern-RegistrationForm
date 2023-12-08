const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
})

// Now we need to create a collections

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;