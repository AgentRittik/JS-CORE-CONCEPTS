

const input = { a: 1, b: 2, c: 3 };

const output = Object.keys(input).map(key => ({ [key]: input[key] }));

console.log(output);
