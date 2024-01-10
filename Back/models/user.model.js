const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    UserName: {
      type: String,
      required: [true, "Username is required"],
      unique: true, 
      index: true, // Crea un índice para optimizar búsquedas
     
    },

    email: {
      type: String,
      required: [true, "Email is required"],
    },

    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["Admin", "Client"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },
  }
);

const User = mongoose.model("user", UserSchema);

module.exports = User;
