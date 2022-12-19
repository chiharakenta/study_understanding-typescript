const add = (n1: number, n2: number) => {
  return n1 + n2;
};

// voidは戻り値が無い
const printResult = (num: number): void => {
  console.log('Result: ' + num);
};

const addAndHandle = (
  n1: number,
  n2: number,
  callback: (num: number) => void
) => {
  const result = n1 + n2;
  callback(result);
};

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

printResult(add(5, 12));
