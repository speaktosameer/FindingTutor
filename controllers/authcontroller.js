const User= require('../models/authmodel')
const expressJwt = require('express-jwt')
const _ = require('lodash')
const {OAuth2Client} =require('google-auth-library')
const fetch=require('node-fetch')
const {validationResult}=require('express-validator')
const jwt=require('jsonwebtoken')
//Customer error handler to get useful error from database error
const {errorHandler}=require('../helpers/dbErrorHandling')
//I will use send email sendgrid you can use nodemaile aslo
const sgMail=require('@sendgrid/mail')
sgMail.setApiKey(process.env.MAIL_KEY)


exports.registerController = (req,res)=>{
    const {name,email,password}=req.body
    const errors=validationResult(req)

    //validation to req,body we will create custom validation
    if(!errors.isEmpty()){
        const firstError = errors.array().map(error =>error.msg[0])
        return res.status(422).json({
            error:firstError
        })
    }else{
        User.findOne({
            email
        }).exec((err,user)=>{
            //if user exists
            if(user){
                return res.status(400).json({
                    error:"Email is taken"
                })
            }
        })

        //Generate token

        const token =jwt.sign(
            {
                name,
                email,
                password
            },
            process.env.JWT_ACCOUNT_ACTIVATION,{
                expiresIn:'15m'
            }
        )
        const emailData={
            from:process.env.EMAIL_FROM,
            to:to,
            subject:'Account Activation link',
            html:`
            <h1>Please Click the link to activate your account</h1>
            <p>${process.env.CLIENT_URL}/username/activate/${token}</p>
            <hr/>
            <p>This email contain sensetive info</p>
            <p>${process.env.CLIENT_URL}</p>
            `
        }
        sgMail.send(emailData).then(sent=>{
            return res.json({
                message:`Email has been sent to ${email}`
            })
        }).catch(err=>{
            return res.status(400).json({
                error:errorHandler(err)
            })
        })
    }
}