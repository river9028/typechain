import * as CryptoJS from "crypto-js";

class Block {
	// sayHello() => return "hello"
	static calculateBlockHash = (index: number, previouseHash: string, timestamp: number, data: string): string => CryptoJS.SHA256(index + previouseHash + timestamp + data).toString();

	static validateStructure = (aBlock: Block): boolean =>
		typeof aBlock.index === "number" &&
		typeof aBlock.hash === "string" &&
		typeof aBlock.previouseHash === "string" &&
		typeof aBlock.timestamp === "number" &&
		typeof aBlock.data === "string";

	public index: number;
	public hash: string;
	public previouseHash: string;
	public data: string;
	public timestamp: number;

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
	const newTimeStamp: number = getNewTimestamp();
	const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimeStamp, data);

	const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);

	return newBlock;
};

const getHashForBlock = (aBlock: Block): string => Block.calculateBlockHash(aBlock.index, aBlock.previouseHash, aBlock.timestamp, aBlock.data);

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
	if (!Block.validateStructure(candidateBlock)) {
		return false;
	} else if (previousBlock.index + 1 !== candidateBlock.index) {
		return false;
	} else if (previousBlock.hash + 1 !== candidateBlock.previouseHash) {
		return false;
	} else if(getHashForBlock(candidateBlock) !== candidateBlock.hash){		
		return false;
	} else {
		return true;
	}
}

const addBlock = (candidateBlock: Block): void => {
	if(isBlockValid(candidateBlock, getLatestBlock())) {
		blockChain.push(candidateBlock);
	}
} 
export { };