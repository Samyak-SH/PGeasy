const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

//connection function
async function startDatabase(connectionUrl) {

    await mongoose.connect(connectionUrl).then(() => {
        console.log("database connected succesfully");
    }).catch((err) => {
        console.log("Mongo error : ", err);
    });
}
//user schema
const pgSchema = mongoose.Schema({
    //basic
    owner_name : {type:String, required : true},
    email : {type:String, unique:true, required : true},
    pg_name : {type:String, required : true},
    pg_place_id : {type:String, required : true},
    n_place_id : {type:String, required : true},
    description : {type:String},

    //amenities
    room_service : {type:Boolean, required : true, default:false},
    refrigerator : {type:Boolean, required : true, default : false},
    wifi : {type:Boolean, required : true, default : false},
    power_backup : {type : Boolean, require : true, default: false},

    //rating
    food_rating : {type : Number, default:0},
    ameneties : {type : Number, default : 0},
    services : {type : Number, default : 0},
})
//user model
const pgModel = mongoose.model("enlisted_pgs", pgSchema);

async function createPg(pg){
    await pgModel.create(pg);
}

function searchResult(c_place_id){
    const result = pgModel.find().where({n_place_id : c_place_id});
    return result;
}

async function checkEmail(i_email){
    console.log(i_email);
    const result = await pgModel.find().where({email : i_email});
    console.log(result);
    return(result==[]);
}

module.exports = {startDatabase, createPg, checkEmail, searchResult};