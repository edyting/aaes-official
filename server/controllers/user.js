import bcrypt from "bcrypt";
// import otpcode from "../../schemas/otp_codeSchema.js";
import users from "../models/user.js";
import isStrongPassword from "../utils/passwordtest.js";
// import sendotp from "../../utils/sendotp.js";

const register = async (req, res) => {
  try {
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // check if password is strong
    const errors = isStrongPassword(req.body.password);
    if (errors) {
      return res.status(400).json({ error: errors });
    }

    // check if email is in the correct format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(req.body.email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // check if user already exists in the database
    const user = await users.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // create a new user
    const newUser = new users({
     ...req.body,
      password: hashedPassword,
    });

    // save the user to the database
    const savedUser = await newUser.save();

    // create an otp code for the user
    // const otp = new otpcode({
    //   user_id: savedUser._id,
    //   code: Math.floor(100000 + Math.random() * 900000),
    //   exp: new Date(Date.now() + 30 * 60000), // expires in 1 minute
    // });

    // save the otp code to the database
    // const savedotp = await otp.save();

    // send the otp code to the user
    //  sendotp(savedUser.email, savedotp.code);

    // set passport session and send response
    const { password: userPassword, key, ...data } = savedUser._doc;
    // req.login(data, (err) => {
    //   if (err) {
    //     return res.status(500).json({ error: "Error creating session" });
    //   }
    //  return  res.status(200).json({ data: { userId: savedUser._id } });
    // });
    return  res.status(200).json({ data: { userId: savedUser._id } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default register;
