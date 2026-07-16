const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "is required"],
  },
  password: {
    type: String,
    required: [true, "is required"],
  },
});
