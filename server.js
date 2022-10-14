const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const request = require("request");
const { cp } = require("fs");
const app = express();



var corsOptions = {
    origin : "*"

}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const db = require('./models');

var useCloud = false;

const PORT = process.env.PORT || 8080;

db.mongoose.connect(useCloud ? db.cloudUrl : db.localUrl, {useUnifiedTopology : true})
    .then(() => {
        console.log("Connected to the Database!");
    })
    .catch(err => {
        console.log("Cannot connect to the Database",err);
        process.exit();
    })


require("./models/doorModel");
require("./routes/doorRoutes")(app);

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server started at port:${PORT}`);
})

