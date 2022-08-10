const mongoose = require("mongoose")
const SHA256 = require('crypto-js/sha256')

class Block{
    constructor(index,timestamp,data,previoushash){
        this.index = index,
        this.timestamp = timestamp,
        this.data = data,
        this.previoushash = previoushash
        this.hash = this.generatehash()
    }
    generatehash(){
        return SHA256(this.index + this.previoushash + this.timestamp+ JSON.stringify(this.data)).toString()
    }
}

const BlockCoinSchema = new mongoose.Schema({
    index:{
        type:Number,
        required: true
    },
    timestemp:{
        type:Date,
        required: true,
        default: Date.now()
    },
    data:{
        type:String,
        required: true
    },
    previoushash:{
        type:String,
        required: false
    },
    hash:{
        type:String,
        required:true,
        // default: Block.generatehash()
    }
})

BlockCoinSchema.pre('save' , function(next) {
      const Block = this

      if(Block.$isEmpty('hash')){
        SHA256(Block).toString()
      }

      next()
})

const CoinModel  = mongoose.model("CoinModel", BlockCoinSchema )

module.exports = CoinModel