import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://artgouveiag:<password>@aacomputing-blog.9lgzapr.mongodb.net/?retryWrites=true&w=majority&appName=AAcomputing-blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
});
