const adminService = require("../../../services/adminService");
const bcrypt = require("bcrypt");
const secretKey = "secret";
const jwt = require("jsonwebtoken");

const createAdmin = async (req, res) => {
    const existedAdmin = await adminService.findByEmail(req.body.email);
    if (existedAdmin) {
        return res.status(400).send({
            message: "Admin email already registered!",
        });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const admin = {
        email: req.body.email,
        password: hashedPassword,
    };
    try {
        await adminService.create(admin);
        res.status(201).json({
            message: "New admin has been created",
            data: admin,
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await adminService.findByEmail(email);
    if (!user) {
        return res.status(404).send({
            message: "Email is incorrect!!",
        });
    }

    const status = await bcrypt.compare(password, user.password);
    if (!status) {
        return res.status(404).send({
            message: "Password is incorrect!!",
        });
    }

    const token = jwt.sign({
        user,
        role: "Admin"
    }, secretKey);

    res.json({
        user,
        token
    });
};
module.exports = {
    login,
    createAdmin
};