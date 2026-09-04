const UserModel = require("../models/userModels");

const signup = async (req, res) => {
    const userdata = req.body;
    const data = await UserModel.createUserAcc(userdata);

    if(data){
        res.send({
            status:true,
            message : `${userdata?.name} successfully registered`
        })
    }

}

const login = async (req, res) => {
    const [username, password] = req.body;
    const userData = await UserModel.findUser(username);

    if(userData.password !== password){
       const err = new Error("Invalid password");
       err.status = 401;
       throw err;
    }

    res.send({message : `${username} successfully logged in`, data: userData});

}

module.exports = {
    signup,
    login
}