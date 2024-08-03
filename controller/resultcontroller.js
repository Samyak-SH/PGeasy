// const {url} = require("url");
const {searchResult} = require("../models/pgmodel");

async function result(req,res){
    const search_results = await searchResult(req.query.c_place_id);
    // console.log("results from controller", search_results);
    // for(let res of search_results){
    //     console.log(res.pg_place_id);
    // 
    // console.log(search_results);
    // console.log(Object.keys(search_results).length)
    res.render("result", {search_results : search_results});
}

module.exports = {result};