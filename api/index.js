import express from 'express';
const app = express();

app.get('/', (req, res) => {
    // console.log('GET request : /api/');
    res.send('What time ? : ' + (new Date()));
});

const loginRouter = require('./login/login.js');
app.use('/login', loginRouter);

module.exports = {
    path: '/api',
    handler: app
}