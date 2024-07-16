const express = require("express");
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { trusted } = require("mongoose");
const { useId } = require("react");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "Sikihlisabadboy";


//route = 1
// create a user using: post req "api/auth/create user". No login required
router.post('/createUser', [
    body('name', "Enter the valid name ").isLength({ min: 5 }),
    body('email', "enter the valid email").isEmail(),
    body('password', "password must be of 5 characters").isLength({ min: 5 }),
], async (req, res) => {
    // if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // check whether the user already exists or not.
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry, a user with this email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create a new user
        user = await User.create({
            name: req.body.name,
            password: hashedPassword,
            email: req.body.email,
        });

        const data = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        // console.log(authToken);
        
        // res.json(user); // Changed this line to return the user directly
        res.json(authToken)

    } catch (err) {
        console.error(err);
        res.status(500).send(' internal Server Error');
    }
});



//route = 2
// authenticate a user: post req "api/auth/login". No login required
router.post('/login', [
    // body('name', "Enter the valid name ").isLength({ min: 5 }),
    body('email', "enter the valid email").isEmail(),
    body('password', "password cannot be blank").exists(),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const payload = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(payload, JWT_SECRET);
        res.json(authToken);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
});






//route = 3
// get logged in details: post req "api/auth/getUser". login required

router.post('/getUser', fetchuser, async (req, res) => {
    try {
      const userId = req.user.id; // Extract user ID from authenticated request
      const user = await User.findOne({ _id: userId }).select("-password");
      
      res.send(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  });
  


module.exports = router;

