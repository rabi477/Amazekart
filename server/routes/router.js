const express = require('express');
const { signup, login } = require('../controllers/userController');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("response from server");
});


router.post("/test/:id",(req,res)=>{
    const formData = req.body;

    console.log(req.path);
    console.log(req.query);
    console.log(req.params);
    console.log(formData);
    res.send(
        {
            status:true, 
            message : `${formData?.name} successfully registered`}
    );
});

router.post("/signup",signup);
router.post("/login",login);


module.exports = router;