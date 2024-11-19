const User = require('./users.model');
const bcrypt = require('bcrypt');
const JwtUtils = require('../../utils/jwt/jwt.js');
const { setError } = require('../../utils/error/error.js');


const register = async (req, res, next) => {
    try {
        const user = new User(req.body);
        const userExist = await User.findOne({ email: user.email })
        if (userExist) {
            return next(setError('El usuario ya existe'))
        }
        const userDB = await user.save();
        return res.status(201).json(userDB.name)

    } catch (error) {
        return next(setError('Ha ocurrido un error, por favor intenta registrarte nuevamente'))
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (bcrypt.compareSync(req.body.password, user.password) || !user) {
            const token = JwtUtils.generateToken(user._id, user.email);
            return res.status(200).json(token);
        }else {
            return next(setError('El usuario o la contaseña es incorrecta'))
        }
    } catch (error) {
        return next(setError('Ha ocurrido un error, por favor intenta iniciar sesión nuevamente'))
    }
}



module.exports = { register, login }