const express  = require("express");
const router = require("./routes/router");

const app = express();

app.use(express.json());

app.use("/router",router);

const PORT = 4000;

app.listen(PORT,()=>{
    console.clear();
    console.log(`server listening on port - ${PORT}`);
});