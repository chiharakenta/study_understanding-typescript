const Logger = (logString: string) => {
  console.log('LOGGER ファクトリー');
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
};

const WithTemplate = (template: string, hookId: string) => {
  console.log('TEMPLATE ファクトリー');
  return (constructor: any) => {
    console.log('テンプレートを表示');
    const hookElement = document.getElementById(hookId);
    const p = new constructor();
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector('h1')!.textContent = p.name;
    }
  };
};

// @Logger('ログ出力中 - PERSON')
@Logger('ログ出力中')
@WithTemplate('<h1>Personオブジェクト</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Personオブジェクトを作成中...');
  }
}

const person = new Person();
console.log(person);

// ...

const Log = (target: any, propertyName: string | Symbol) => {
  console.log('Property デコレータ');
  console.log(target, propertyName);
};

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val <= 0) throw new Error('不正な価格です - 0以下は設定できません。');
    this._price = val;
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(taxRate: number) {
    return this._price * (1 + taxRate);
  }
}
