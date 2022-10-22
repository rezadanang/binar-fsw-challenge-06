const express = require("express");
const router = express.Router();
const controllers = require("../app/controllers");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../documentation/openapi.json');



// Endpoint API Car Management 

// Endpoint login Superadmin
router.post("/superadmin/login", controllers.api.v1.superAdminController.login);
// Endpoint add new Admin
router.post("/superadmin/admin/add", controllers.api.v1.authController.superAdminAuthorize, controllers.api.v1.adminController.createAdmin);
// Endpoint login Admin
router.post("/admin/login", controllers.api.v1.adminController.login);
// Endpoint add new Member
router.post("/member/add", controllers.api.v1.memberController.createMember);
// Endpoint login Member
router.post("/member/login", controllers.api.v1.memberController.login);
// Endpoint get role information
router.get("/user", controllers.api.v1.authController.authorize, controllers.api.v1.authController.mySelf);
// Endpoint get all cars
router.get("/cars", controllers.api.v1.carController.listCar);
// Endpoint create cars
router.post("/cars", controllers.api.v1.authController.adminsAuthorize, controllers.api.v1.carController.createCar);
// Endpoint update cars
router.put("/cars/:id", controllers.api.v1.authController.adminsAuthorize, controllers.api.v1.carController.updateCar);
// Endpoint delete cars
router.delete("/cars/:id", controllers.api.v1.authController.adminsAuthorize, controllers.api.v1.carController.deleteCar);
// documentation open api
router.use(['/', '/documentation'], swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use(controllers.api.main.onError);
router.use(controllers.api.main.onLost);
module.exports = router;