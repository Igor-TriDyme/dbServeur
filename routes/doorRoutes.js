module.exports = (app) => {
    const DoorsController = require("../controllers/doorController");
    var router = require("express").Router();
    router.get("/",DoorsController.getAll);
    router.post("/add",DoorsController.saveOne);
    router.post("/batch",DoorsController.batchSave);
    router.patch("/update",DoorsController.updateOne);
    router.delete("/delete",DoorsController.delete);
    router.get("/bolts",DoorsController.Opensees);
 
    
    app.use("/api/doors", router);



};