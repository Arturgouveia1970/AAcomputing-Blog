import express from 'express';

const router = express.Router();

router.get('/test', test => {
    res.json({ message: 'Api is working!' });
});

export default router;