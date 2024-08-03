const express = require("express");
const {startDatabase} = require("./models/pgmodel");
const {} = require("./controller/searchcontroller");
const bodyParser = require('body-parser');

//controllers
const {pgEnlistRender, pgEnlistPost} = require("./controller/pgcontroller");
const {searchRender, searchPost} = require("./controller/searchcontroller");
const {result} = require("./controller/resultcontroller");

//constants
const path = require("path");
const app = express();
const url = "mongodb://localhost:27017/";

//database connection
startDatabase(url);

//view engine setup
app.set("view engine", "ejs");

//middleware
app.use(express.urlencoded({ extended:false }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

//routings
app.get("/", (req,res)=>{res.send("welcome")});

app.get("/result", result);
app.post("/result", (req,res)=>{res.render("result")});

app.get("/about", (req,res)=>{res.render("about")});

app.get("/blog", (req,res)=>{res.render("blog")});

// app.get("/signup", );
// app.post("/signup", );

app.get("/enlist", pgEnlistRender);
app.post("/enlist", pgEnlistPost);

app.get("/search", searchRender);
app.post("/search", searchPost);

app.get("/signup", (req,res)=>{res.render("signup")});
app.get("/login", (req,res)=>{res.render("login")});
//server instance
PORT = 8080;
app.listen(PORT, ()=>{
    console.log("server started\n");
})