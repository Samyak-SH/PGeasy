const {createPg, checkEmail} = require("../models/pgmodel")
const axios = require('axios');


async function pgEnlistRender (req,res){
    await res.render("enlist");
}


async function pgEnlistPost (req,res){
    // res.render("enlist_complete");
    pg = {
        owner_name : req.body.f_owner_name,
        email :req.body.f_mail,
        pg_name :req.body.f_pg_name,
        pg_place_id :req.body.test1,
        n_place_id :req.body.test2,
        description : req.body.description,
        
        room_service :req.body.f_a_room_services,
        refrigerator : req.body.f_a_Refridgerator,
        wifi : req.body.f_a_Wifi,
        power_backup : req.body.f_a_Power_Backup,
    }

    if(pg.room_service == "on"){
        pg.room_service = true;
    }else{
        pg.room_service = false;
    }

    if(pg.refrigerator == "on"){
        pg.refrigerator = true;
    }else{
        pg.refrigerator = false;
    }

    if(pg.wifi == "on"){
        pg.wifi = true;
    }else{
        pg.wifi = false;
    }


    if(pg.power_backup == "on"){
        pg.power_backup = true;
    }else{
        pg.power_backup = false;
    }

    await createPg(pg)
    .then(()=>{res.send("<html><script>alert('PG enlisted'); window.location.replace(`/enlist`);</script></html>");})    
    .catch((err)=>{
        res.send("<html><script>alert('account already exists'); window.location.replace(`/enlist`);</script></html>");
    })
}


module.exports = {   
    pgEnlistRender, pgEnlistPost
}