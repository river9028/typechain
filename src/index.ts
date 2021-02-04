import * as CryptoJS from "crypto-js";

class Block {
	public index: number;
	public hash: string;
	public previouseHash: string;
	public data: string;
	public timestamp: number;

	// sayHello() => return "hello"
	static calculateBlockHash = (index: number, previouseHash: string, timestamp: number, data: string): string => CryptoJS.SHA256(index + previouseHash + timestamp + data).toString();

	constructor(index: number, hash: string, previouseHash: string, data: string, timestamp: number) {
		this.index = index;
		this.hash = hash;
		this.previouseHash = previouseHash;
		this.data = data;
		this.timestamp = timestamp;
	}
}

const genesisBlock: Block = new Block(0, "2020202020202", "", "Hello", 123456);

let blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
	const previousBlock: Block = getLatestBlock();
	const newIndex: number = previousBlock.index + 1;
	const newTimeStamp : number = getNewTimestamp();
	const newHash : string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimeStamp, data);

	const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
	
	return newBlock;
};

console.log(createNewBlock("hello"), createNewBlock("bye bye"));

export { };