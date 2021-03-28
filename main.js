const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, data, previousHash = '') {
        this.index = index;
        this.date = new Date();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.createHash();
    }

    createHash() {
        return SHA256(this.index + this.data + this.data).toString();
    }
}


class blockChain {
    constructor(genesis) {
        this.chain = [this.createFirstBlock(genesis)];
    }

    createFirstBlock(genesis) {
        return new Block(0, genesis)
    }

    getLastBlock() {
        return this.chain[this.chain.length-1];
    }

    addBlock(data) {
        let prevBlock = this.getLastBlock();
        let block = new Block(prevBlock.index+1, data, prevBlock.hash);
        this.chain.push(block);

    }
}

//block = new Block(0, 'Primer bloque');
//console.log(JSON.stringify(block, null, 2));

let robCoin = new blockChain('Space: the final frontier. These are the voyages of the starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.');
//console.log(JSON.stringify(robCoin.chain, null, 2));
robCoin.addBlock('Segundo bloque generado en la blockchain')
robCoin.addBlock('Tercer bloque generado en la blockchain')
console.log(JSON.stringify(robCoin.chain, null, 2));