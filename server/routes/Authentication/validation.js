//VALIDATION
const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = (data) => {
    const userSchema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(6).required()
    };

    return Joi.validate(data, userSchema)
}

const loginValidation = (data) => {
    const loginSchema = {
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(6).required()
    };

    return Joi.validate(data, loginSchema)
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;