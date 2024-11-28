import mongoose from "mongoose";
import bcrypt from "bcryptjs";

//create a user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["driver", "admin"],
      default: "driver",
    },
    //createdAt, updatedAt object
  },
  { timestamps: true }
);

//pre-save hook to hash password before saving to db
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

//compare passwords validity of password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

//create a model of the schema
const User = mongoose.model("user", userSchema);

export default User;
