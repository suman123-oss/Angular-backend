const express = require("express");
const router= express.Router();
const bodyparser= require('body-parser')
const jsonParser= bodyparser.json();

const userControllers = require('../controllers/userControllers')

//get api: READ DATA FROM DB
router.get("/user", userControllers.getUsers);


//post api: CREATE USER IN DB
router.post("/user", jsonParser, userControllers.postUsers);


//post api: UPDATE USER IN DB
router.put("/user", jsonParser, userControllers.updateUsers);


//post api: DELETE USER IN DB
router.delete("/user/:id", jsonParser, userControllers.deleteUser);

//get User by ID:
router.get("/user/:id", jsonParser, userControllers.getUserById);


module.exports= router;