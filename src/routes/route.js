const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const MyController= require("../controllers/controller")


router.get("/test-me", function (_req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", controller.createBook  )

// router.post("/getUsersData", UserController.getUsersData)

router.get("/getBook", BookController.getBooksData  )

// router.get("/getBooksData", BookController.getBooksData)

router.post("/updateBooks", BookController.updateBooks)

router.get("/matchAuthor", MyController.matchAuthor)



//MOMENT JS
//const moment = require('moment');
//router.get("/dateManipulations", function (req, res) {
    
  
    
   // const dateA = moment('01-01-1900', 'DD-MM-YYYY');
   // const dateB = moment('01-01-2000', 'DD-MM-YYYY');
//
    //let x= dateB.diff(dateA, "days")
    //console.log(x)

    //res.send({ msg: "all good"})
})

module.exports = router;