const foodPartnerModel = require('../models/foodPartner.model');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');


async function authFoodPartnerMiddleware(req, res, next) {

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Please login first to access this resource"
        });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const foodPartner = await foodPartnerModel.findById(decoded.id);

        req.foodPartner = foodPartner;

        next();

    } catch (err) {
        return res.status(401).json({
            message: "Invalid token. Please login again"
        });
    }
}

async function authUserMiddleware(req, res, next) {

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Please login first to access this resource"
        });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded.id);

        req.user = user;

        next();

    } catch (err) {
        return res.status(401).json({
            message: "Invalid token. Please login again"
        });
    }
}

module.exports = {
    authFoodPartnerMiddleware,
    authUserMiddleware
}