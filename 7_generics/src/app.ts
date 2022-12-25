// const names: Array<string> = [];
// // names[0].split(' ');

// const promise = new Promise<number>((resolve, reject) => {
//   setTimeout(() => {
//     resolve(20);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(' ');
// });

const merge = <T extends {}, U>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObject = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObject.age);
