const express =require('express')
const usermodel = require('../model/user');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const router =express.Router();
router.use(cookieParser());
router.use(express.json())

const verifyuser = (req,res)=>{
    const token =req.cookies.token;
    jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
        if((err)=>{
            res.json("token is missing")
        })
      
            if(decoded.role==="admin"){
                next();
            }
        
    })

}

router.post('/register',(req,res)=>{
    const {username,email,name,password}=req.body;
    bcrypt.hash(password,10)
    .then(hash=>{
        usermodel.create({username,email,name,password:hash})
        .then(res=>{
           res.json("success")
        })
        .catch(err=>{
            res.json(err)
        })
    })
})

router.post('/login', (req, res) => {
    const {username, password } = req.body;
    usermodel.findOne({ username:username})
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ username: user.username, role: user.role }, "jwt-secret-key", { expiresIn: "1d" });
                        res.cookie("token", token);
                        res.status(200).json({ status: "success", role: user.role }); 
                    }
                })

            }
        })
})

router.get('/admin',verifyuser,(req,res)=>{
    res.json("success")
})

router.get('/getusers',(req,res)=>{
    usermodel.find({})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})

router.get('/getuserbyid/:id',(req,res)=>{
    const id = req.params.id;
    usermodel.findById({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})

module.exports=router;