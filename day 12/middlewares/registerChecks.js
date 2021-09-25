const { emailValidate, passwordValidate } = require("../utils/validate")



const registerInitialCheck = (req, res, next) => {
    const { email, password, confirmpassword } = req.body;
    if (
        typeof email === 'string' &&
        typeof password === 'string' &&
        typeof confirmpassword === 'string' &&
        email.length > 0 &&
        password.length > 8 &&
        confirmpassword === password &&
        emailValidate(email) &&
        passwordValidate(password)
    ){
        next();
    } 
    else {
        res.status(401).send("Initial check failed");
    }

}
module.exports = registerInitialCheck;