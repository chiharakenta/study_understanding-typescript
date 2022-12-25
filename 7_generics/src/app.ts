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

const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return `Value: ${obj[key]}`;
};

extractAndConvert({ name: 'Max' }, 'name');

class DataStorage<T extends string | number | boolean> {
  private data: Array<T> = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1); // -1 参照型で探すと見つからずに、-1を返す→最後の要素が削除される。
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Data1');
textStorage.addItem('Data2');
textStorage.removeItem('Data2');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const obj = { name: 'Max' };
// objStorage.addItem(obj);
// objStorage.addItem({ name: 'Manu' });
// // ...
// objStorage.removeItem(obj);
// console.log(objStorage.getItems());
