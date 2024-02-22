// Fn Exports Controllers => Router
import User from "../Models/user.model.js"
import bcrypt from "bcryptjs"
import { createAccessToken } from "../Libs/jwt.js"
import jwt from "jsonwebtoken";
import {config} from "dotenv"
config()
const { TOKEN_SECRET } = process.env;


export const registers = async (req, res) => {
    const { username, profile, email, password } = req.body;

    try {
        const foundUser = await User.findOne({ email });
        if(foundUser) 
            return res.status(400).json(["the email is already in use"]) 
        
        const passBcrypt = await bcrypt.hash(password, 10)
        
        const newUser = new User({
            username,
            profile,
            email,
            password: passBcrypt
        })

    const sevedUser =  await newUser.save()

    const token = await createAccessToken({id: sevedUser._id})

    res.cookie("token", token)   
    res.json({
        id: sevedUser._id,
        username: sevedUser.username,
        profile: sevedUser.profile,
        email: sevedUser.email,
        createdAt: sevedUser.createdAt,
        updatedAt: sevedUser.updatedAt
    })
    
    } catch (error) {
        console.log(error);
    }

}

export const login = async (req, res) =>  {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email })
        if(!userFound) return res.status(400).json(["User not found"])

        const isMatch = await bcrypt.compare(password, userFound.password)
        if(!isMatch) return res.status(400).json({message: "Incorrect password"})

        const token = await createAccessToken({id: userFound._id})

    res.cookie("token", token)   
    res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
    
    } catch (error) {
        console.log(error);
    }
}

export const logout = (req, res) => {
    res.cookie("token", '', {
        expires: new Date(0)
    })

    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if(!userFound) return res.status(400).json({message: "User not found"})
    
    // console.log(userFound);
    return res.json({
        id: userFound._id,
        profile: userFound.profile,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })

}


export const verifyToken = async (req, res) => {
    const { token } = req.cookies

    if(!token) return res.status(401).json({message: 'Unauthorized'})

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({message: "Unauthorized"})
 
        const userFound = await User.findById(user.id)
        if(!userFound) return res.status(400).json({message: "Unauthorized"})
        
        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
         })
    })
}


export const putPassword = async (req, res) => {
    try {
        const userId = req.body;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newPassword = req.body.password;

        if (!newPassword) {
            return res.status(400).json({ message: 'New password is required' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;

        await user.save();

        return res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};