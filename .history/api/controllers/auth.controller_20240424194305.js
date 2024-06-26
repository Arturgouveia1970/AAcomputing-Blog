import User from '../models/user.model.js';
import bcriptjs from 'bcriptjs'

export const signup = async (req, res) => {
    const {  username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newUser = new User({ username, email, password });

    try {
        await newUser.save();
        res.json({ message: 'Signup successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Signup failed' });
    }

    
}