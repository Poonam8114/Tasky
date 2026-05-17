import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
   name:{
    type:String,
    required:true

    },

    email:{
        type:String,
        required:true,
        unique:true
    }
,
    password: {
      type: String,
      required: true,
    },

    profileImageUrl: {
      type: String,
      default: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User
