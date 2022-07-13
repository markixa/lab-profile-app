const { Schema, model } = require("mongoose");
const {Schema, model} = mongoose;

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
      required: true,
      unique: true
    },
    password: String,
    campus: {
      type: String,
        enum: ['Madrid', 'Barcelona', ' Miami', 'Paris', 'Berlin', 'Amsterdam', 'Mexico', 'Sao Paulo', 'Lisbon']
    },
    course: {
      type: String,
      enum: ['Web Dev', 'UX/UI', 'Data Analytics', 'Cyber security']
    },
    image: String
    }, 
    {
      timestamps: true
    });

const User = model("User", userSchema);