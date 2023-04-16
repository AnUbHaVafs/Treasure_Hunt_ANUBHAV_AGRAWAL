const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/Auth');
const userController = require('../controllers/User');

router.get("/user", userController.getUser);

router.get("/getallusers",  userController.getAllUsers);

router.post("/user", userController.addUser);

router.put("/user", userController.updateUser);

router.delete("/user", fetchuser, userController.deleteUser);

module.exports = router