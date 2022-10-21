const superAdminService = require("../../../services/superAdminService");
const bcrypt = require("bcrypt");
const secretKey = "secret";
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await superAdminService.findByEmail(email);
    if (!user) {
        return res.status(404).send({
            message: "Email Salah!!",
        });
    }

    const status = await bcrypt.compare(password, user.password);
    if (!status) {
        return res.status(404).send({
            message: "Password Salah!!",
        });
    }

    const token = jwt.sign({
        user,
        role: "Superadmin"
    }, secretKey);
    res.json({
        user,
        token
    });
};

module.exports = {
    login,
};