const {findPg}  = require("../models/pgmodel");


async function searchRender(req,res){
    res.render("search");
}

async function searchPost (req,res){
    // console.log("search post called");
    // console.log(req.body.c_place_id);
    // const result = findPg(req.body.c_place_id);
    // console.log("from controller\n", result);
}

module.exports = {
    searchRender,searchPost
}