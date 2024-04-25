import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
    const {  username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ 
        username, 
        email, 
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.json({ message: 'Signup successful' });
    } catch (error) {
        next(error);
    }

    
}