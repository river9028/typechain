class Block {
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

let blockChain: [Block] = [genesisBlock];

// blockChain.push("stuff");

console.log(blockChain);

export { };