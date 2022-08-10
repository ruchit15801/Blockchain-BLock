const mongoose = require("mongoose")
require("./model")

mongoose.connect("mongodb://localhost:27017/BlockCoin" ).then(() => {
    console.log("Database Connection Suesss");
}).catch((e) => {
    console.log("Connection error");
})