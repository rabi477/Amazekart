const express  = require("express");
require("dotenv").config();
require("./dbConnection");
const router = require("./routes/router");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json());

app.use("/router",router);
app.use("/user",userRouter);

const PORT = 4000;

app.listen(PORT,()=>{
    console.clear();
    console.log(`server listening on port - ${PORT}`);
});