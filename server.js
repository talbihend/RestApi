const express = require('express');
const connect = require("./config/connectDB");
const User = require('./models/user');
require("dotenv").config({ path: "./config/.env"});

var app = express();

//parsing middleware: bch les données yet9rou lkol json
app.use(express.json());

//establish a database connection
connect();

//add users

app.post('/add',async(req,res)=>{
    const {fullName,email,phone}=req.body
    try {
        const newUser = new User({
            fullName,
            email,
            phone
        })
        await newUser.save();
        res.send(newUser);
    }
    catch(error){
        console.log(error.message)
    }})

    //get users
    app.get("/get",async(req,res)=>{
        const users = await User.find();
        res.send(users);
    })

    //get specific users
    app.get("/get/:id",async(req,res)=>{
        const users = await User.findById(req.params.id);
        res.send(users);
    })

//update users;;;; new:true heki bch tafichili l users jdid bel update mouch lgdim li gbal l'update
app.put("/update/:id",async(req,res)=>{
    try{
        const editUser = await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true});
        res.send(editUser);

    } catch (error) {
        console.log(error);
    }})

//delete users
app.delete("/delete/:id", async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      res.send("user is deleted");
    } catch (error) {
      console.log(error.message);
  
    }});

var PORT = process.env.PORT || 6000; // emchi 5outh lport li fi fichier d'environnement si non 5outh lport 3000

app.listen(PORT, err => err? console.log(err):console.log(`server ranning on port ${PORT}`));