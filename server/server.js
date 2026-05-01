const express  = require("express");
const router = require("./routes/router");

const app = express();

app.use("/router",router);

app.post("/signup",(req,res)=>{
    const formData = req.body;
    console.log(formData);
    res.send(
        {
            status:true, 
            message : `${formData?.name} successfully registered`}
    );
});

const PORT = 4000;

app.listen(PORT,()=>{
    console.clear();
    console.log(`server listening on port - ${PORT}`);
});