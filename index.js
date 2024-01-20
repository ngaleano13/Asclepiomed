const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Usuarios')



const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/users");


app.post('/login', (req, res) => {
    const {mail, password} = req.body;
    UserModel.findOne({mail: mail})
    .then (user =>{
        if(user){
            if(user.password === password){
                res.json({
                    status :"Success",
                    name: user.name,

                })
                
            } else {
                res.json("Incorrect")
            }
        } else {
            res.json("NotFound")
        }
    })
})

app.post('/register' , (req, res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
