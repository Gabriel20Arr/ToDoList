// Fn Exports Controllers => Router
import User from "../Models/user.model.js"
import bcrypt from "bcryptjs"
import { createAccessToken } from "../Libs/jwt.js"


export const registers = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const passBcrypt = await bcrypt.hash(password, 10)
        
        const newUser = new User({
            username,
            email,
            password: passBcrypt
        })

    const sevedUser =  await newUser.save()

    const token = await createAccessToken({id: sevedUser._id})

    res.cookie("token", token)   
    res.json({
        id: sevedUser._id,
        username: sevedUser.username,
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
        if(!userFound) return res.status(400).json({message: "User not found"})

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

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
}


export const putPassword = async (req, res) => {
    try {
        const userId = req.params.id;
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