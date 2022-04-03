const express = require('express');
const Router  = express.Router();
const homeSchema = require('../models/homeSchema');

Router.get('/',(err,res)=>{
    res.render('register',{title :'',password:'',email:''})
})

Router.post('/register',async(req,res)=>{
   try{
       const {
           name,
           number,
           email,
           password,
           cpassword
       } = req.body;

    if(password === cpassword ){
       
         const userData = new homeSchema({
            name,
            number,
            email,
            password
         })
         userData.save(err=>{
             if(err){
                console.log("err")
             }else{
                res.render('register',{title :'',password:'',email:''})
             }
         })
       
    const useremail = await homeSchema.findOne({email:email});
     if(email === useremail.email){
        res.render('register',{title :'',password:'',email:'Email is Already there plz chose different one'})
     }else{
         console.log('err')
     }

    }else{
        res.render('',{title :'',password:'',email:''})
    }
   }catch(error){

    res.render('register',{title :'Error in Code',password:'',email:''})
   }
})

// singin 

Router.post('/login',(req,res)=>{
    
    const {
        email,
        password    
    } = req.body;

    homeSchema.findOne({email:email},(err,result)=>{
        
        if(email === result.email && password === result.password){
            res.render('home', {name : result.name})
        }else{
            console.log(err)
        }
    })
})
/*Router.post('/login',(req,res)=>{
    
    const {
        name,
        email,
        number,
        password

       
    } = req.body;

    homeSchema.findOne({email:email},(err,result)=>{
        
        if(email === result.email && password === result.password &&name===result.name && number ===result.number ){
            res.render('profile', {name : result.name})
            res.render('profile', {number : result.number})
            res.render('profile', {email : result.email})
            res.render('profile', {password : result.password})
        }else{
            console.log(err)
        }
    })
})*/
module.exports = Router;