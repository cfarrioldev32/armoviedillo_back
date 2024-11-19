const UserRoutes = require('express').Router();

const { register, login } = require('./users.controller');

UserRoutes.post('/register', register);
UserRoutes.post('/login', login);

module.exports = UserRoutes; 
