import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async(req,res)=>{

 try {
  const {fullName,email,password,confirmPassword,gender} = req.body;   // destructuring the user provided data from req.body

  if(password !== confirmPassword){
    return res.status(400).json({error:"passwords does'nt match"}); 
  }

  const user = await User.findOne({email});

  if(user){
    return res.status(409).json({error:"Email already exists"});
  }

  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password,salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${fullName}`          // using api to get user profile avatars
    const GirlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${fullName}`


  const newUser = new User({
    fullName,
    email,
    password: hashedpassword,
    gender,
    profilePic: gender === "male" ? boyProfilePic : GirlProfilePic
  });

  if(newUser){

  
    await newUser.save();


    res.status(201).json({
      _id:newUser._id,
      fullName:newUser.fullName,
      email:newUser.email,
      gender:newUser.gender,
      profilePic:newUser.profilePic
    });
  }else{
    res.status(400).json({error:"Invalid user data."});
  }
 } catch (error) {
  console.log("Error in signup controller",error.message);
  res.status(500).json({error:"internal server error"});
 }
}



export const login = async(req,res)=>{
 try {
  const {email,password} = req.body;
  const user =  await User.findOne({email});
  const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

  if(!user || !isPasswordCorrect){
   return res.status(400).json({error:"invalid username or password"});
  }

  generateTokenAndSetCookie(user._id,res);

  res.status(201).json({
    _id:user._id,
    fullName:user.fullName,
    email:user.email
  });
 } catch (error) {
  console.log("Error in the login controller", error.message);
  res.status(500).json({error:"internal server error"});
 }
}



export const logout = async(req,res)=>{
  try {
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({ message:"Logged out successfully "});
  } catch (error) {
    console.log("Error in logout controller",error.message);
    res.status(500).json({error:"internal server error"});
  }
}
