import User

export const signup = async (req, res) => {
    const {  name, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newUser = new User({ username, email, password });
}