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
  email: {
    type: String,
    required: [true, "is required"],
  },
  cart:{
    items: [Object],
    totalPrice: Schema.Types.Decimal128,
    totalQuantity: Number
  }
});

userSchema.statics.findUser = async function (username){
  const user = await this.findOne({username},{_id:0, __v:0});
  if(!user)
  {
    const err = new Error("Username doesn't exists");
    err.status = 404;
    throw err;
  }
  return user;
}

userSchema.statics.createUserAcc = async function (userdata){
  const user = await this.create(userdata);
  return user;
}

const UserModel = mongoose.model("User", userSchema);


module.exports = UserModel;

// const user = {
//   username: "testuser",
//   name: "Test User",
//   password: "testpassword",
// };

// (async () => {
//   const newUser = await UserModel.createUserAcc(user);
//   console.log(newUser);
// })();

// (async () => {
//   const newUser = await UserModel.findUser(user.username);
//   console.log(newUser);
// })();