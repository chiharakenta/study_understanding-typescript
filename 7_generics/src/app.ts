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

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObject = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObject);

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  const descriptionText = element.length
    ? `値は${element.length}個です。`
    : '値はありません。';
  return [element, descriptionText];
};

console.log(countAndDescribe(['Sports', 'Cooking']));
