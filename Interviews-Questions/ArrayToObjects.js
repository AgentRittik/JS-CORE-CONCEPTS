
const input = [{ a: 1 }, { b: 2 }, { c: 3 }];

const output = input.reduce((result, item) => {
  const key = Object.keys(item)[0];
  result[key] = item[key];
  return result;
}, {});

console.log(output);
