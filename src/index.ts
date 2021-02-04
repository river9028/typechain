const sayHi = (name: string, age: number, gender: string): string => {
	// console.log(`Hello ${name} , you are ${age}, you are a ${gender}`);
	return `Hello ${name} , you are ${age}, you are a ${gender}`;
}

console.log(sayHi("Nicolas", 444, "male"));

export { };