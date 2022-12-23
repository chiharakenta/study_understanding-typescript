type Admin = {
  name: string;
  privileges: Array<string>;
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinalbe = string | number;
type Numeric = number | boolean;
type Universal = Combinalbe & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinalbe, b: Combinalbe) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Hello', ' TypeScript');
result.split(' ');

interface FetchedUserData {
  id: string;
  name: string;
  job?: {
    title?: string;
    description?: string;
  };
}
const fetchedUserData: FetchedUserData = {
  id: 'u1',
  name: 'user1'
};

console.log(fetchedUserData?.job?.title);

const userInput = '';

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

// type UnknownEmployee = Employee | Admin;
// const printEmployeeInformation = (employee: UnknownEmployee) => {
//   console.log(employee.name);
//   if ('privileges' in employee) {
//     console.log('Pirivileges: ' + employee.privileges);
//   }
//   if ('startDate' in employee) {
//     console.log('Start Date: ' + employee.startDate);
//   }
// };
// printEmployeeInformation({ name: 'Manu', startDate: new Date() });

// class Car {
//   drive() {
//     console.log('運転中...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('トラックを運転中...');
//   }
//   loadCargo(amount: number) {
//     console.log('荷物を載せています...' + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// const useVehicle = (vehicle: Vehicle) => {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// };

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// const moveAnimal = (animal: Animal) => {
//   let speed;
//   switch (animal.type) {
//     case 'bird': {
//       speed = animal.flyingSpeed;
//       break;
//     }
//     case 'horse': {
//       speed = animal.runningSpeed;
//     }
//   }
//   console.log('移動速度: ' + speed);
// };

// moveAnimal({ type: 'bird', flyingSpeed: 10 });

// // const userInputElement = <HTMLInputElement>document.getElementById('userInput');
// const userInputElement = document.getElementById('userInput');
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'こんにちは';
// }

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: '正しいメールアドレスではありません。',
//   username: 'ユーザ名に記号を含めることはできません。'
// };
