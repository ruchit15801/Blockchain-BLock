const express = require("express")
const app = express()
require("./model/db")
const CoinModel = require("./model/model")
const testcoin = require("./Blockchain")

const port = process.env.PORT || 5000
app.use(express.json())

app.post("/addBlock", async(req, res) => {
    const Block = new testcoin.addNewBlock
    try{
         await Block.save()
         res.send({Block})
    }catch(e){
        console.log(e);
       res.status(400).send()
    }
})



app.listen(port, () => {
    console.log(`Server start on port ${port}`);
})