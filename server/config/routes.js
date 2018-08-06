var users = require('../controllers/users.js');
var path = require('path');

module.exports = (app) => {

    app.post('/api/users/create', (req, res) => {
        users.create(req, res);
    });

    app.get('/api/users/read', (req, res) => {
        users.read(req, res);
    });

    app.post('/api/users/login', (req, res) => {
        users.login(req, res);
    });

    app.get('/api/users/current', (req, res) => {
        users.current(req, res);
    });

    app.get('/api/users/logout', (req, res) => {
        users.logout(req, res);
    });

    app.get("/api/users/account", function (req,res){
        users.current(req,res);
    });

    app.all('/api*', (req, res) => {
        res.status(404).json({ message: 'Bad Route' });
    });

    app.get('*', (req, res) => {
        console.log('app.all hit - in routes.js')
        res.sendFile(path.resolve('./public/dist/index.html'));
    });

}