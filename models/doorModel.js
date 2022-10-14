const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UniqueID = String;

let DoorModel = new Schema({
    _id : UniqueID,
    FamilyType : String,
    Mark : String,
    DoorFinish : String
},{
    collection : "Doors",
    versionKey : false
},{
    _id : false
});

module.exports = mongoose.model("Doors", DoorModel); 