const express= require('express')
const router = express.Router()


//Load Controllers
const{
    registerController
} = require('../controllers/authcontroller.js')
router.post('/register',registerController)


module.exports=router;