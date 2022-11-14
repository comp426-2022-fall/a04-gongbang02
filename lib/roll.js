export function roll(sides, dice, rolls) {
	
	const results = [];
	
	for(let i = 0; i < rolls; i++) {
		let res = 0;
		for(let j = 0; j < dice; j++) {
			res += Math.floor(Math.random() * sides) + 1;
		}
		results.push(res);
	}

	const output = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: results
	}

	return output;
}
