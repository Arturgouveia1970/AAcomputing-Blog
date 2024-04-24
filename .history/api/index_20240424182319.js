import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB', err);
  });

  const app = express();

  app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
});

app.get('/test', (req, res) => {
    res.json({ message: 'Api is working!');
});
