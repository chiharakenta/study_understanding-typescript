const Logger = (constructor: Function) => {
  console.log('ログ出力中...');
  console.log(constructor);
};

@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('Personオブジェクトを作成中...');
  }
}

const person = new Person();
console.log(person);
