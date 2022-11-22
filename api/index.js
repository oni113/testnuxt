import express from 'express';
import moment from 'moment';

const app = express();

app.get('/', (req, res) => {
    // console.log('GET request : /api/');
    const whatTime = moment().toLocaleString();

    res.send(`What time? : ${whatTime}`);
});

const loginRouter = require('./login/login.js');
app.use('/login', loginRouter);

module.exports = {
    path: '/api',
    handler: app
}