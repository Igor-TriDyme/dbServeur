const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let DoorModel = new Schema({
    revit_id :String,
    FamilyType : String,
    Mark : String,
    DoorFinish : String
},{
    collection : "Doors",
    versionKey : false
},{
  
});

module.exports = mongoose.model("Doors", DoorModel); 