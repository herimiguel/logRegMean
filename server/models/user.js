const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "ENTER FIRST NAME."],
        trim: true,
    },

    lastName: {
        type: String,
        required: [true, "ENTER LAST NAME."],
        trim: true,
    },

    email: {
        type: String,
        required: [true, "Email Required."],
        minlength: [5, "Email too short, try again."],
        maxlength: [40, "Email too long, man."],
        unique: [true, "Email previously registered."],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "That's not an email address, try again."]
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
          validator: function( value ) {
            return /^([a-zA-Z0-9@*#]{8,32})$/.test( value );
          },
          message: "Password must be 8 characters, contain at least 1 number, 1 uppercase letter and don't use your dog's name."
        }
    }},
    {timestamps: true});

mongoose.model('User', UserSchema);