//Validation
const Joi = require('@hapi/joi');


//Register validation
const registerValidation = (data) => {
    const schema = 
    Joi.object( {
    name: Joi.string()
        .min(6)
        .required(),
    email: Joi.string()
        .min(6)
        .required()
        .email(),
    password: Joi.string()
        .min(6)
        .required()
});
 //Validate the data before make a user
    return schema.validate(data);
};

//login validation
const loginValidation = (data) => {
    const schema = 
    Joi.object( {
    email: Joi.string()
        .min(6)
        .required()
        .email(),
    password: Joi.string()
        .min(6)
        .required()
});
 //Validate the data before make a user
    return schema.validate(data);
 //if(error) return res.status(400).send(error.details[0].message);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;