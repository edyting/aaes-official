import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    f_name: {
      type: String,
      required: true,
      trim: true,
      // make first letter capital
      set: (v) => {
        return v.charAt(0).toUpperCase() + v.slice(1);
      },
    },
    l_name: {
      type: String,
      required: true,
      trim: true,
      set: (v) => {
        return v.charAt(0).toUpperCase() + v.slice(1);
      },
    },
    email: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
      unique: true,
      // make email lowercase
      set: (v) => {
        return v.charAt(0).toLowerCase()+ v.slice(1);
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const users = mongoose.model.user || mongoose.model("user", userSchema);
export default users;
