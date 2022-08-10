const SHA256 = require('crypto-js/sha256')

function testcoin() {
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


class Blockchain{
    constructor(){
        this.Blockchain = [this.createGenesisBlock()]
    }

    createGenesisBlock(){
        return new Block(0, "15/08/2021" ,"first block on chain", "0")
    }
    getTheLatestBlock(){
        return this.Blockchain[this.Blockchain.length - 1]
    }
    addNewBlock(newBlock){
        newBlock.previousHash = this.getTheLatestBlock().hash;
        newBlock.hash = newBlock.generatehash();
        this.Blockchain.push(newBlock);
    }

    validateChainIntegrity(){
        for(let i = 1; i<this.blockchain.length; i++){
            const currentBlock = this.blockchain[i];
            const previousBlock = this.blockchain[i-1];
            if(currentBlock.hash !== currentBlock.generateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
            return true;

        }
    }

}
}


module.exports = new testcoin()