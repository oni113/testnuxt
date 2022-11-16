import express from 'express';
import moment from 'moment';

const app = express();

app.get('/', (req, res) => {
    // console.log('GET request : /api/');
    res.send('What time ? : ' + moment().toLocaleString());
});

const loginRouter = require('./login/login.js');
app.use('/login', loginRouter);

module.exports = {
    path: '/api',
    handler: app
}