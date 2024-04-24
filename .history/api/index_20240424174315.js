import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://artgouveiag:8CpgAVwUso6LArpl@aacomputing-blog.9lgzapr.mongodb.net/aacomputing-blog?retryWrites=true&w=majority&appName=AAcomputing-blog')
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB', err);
  });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
});
