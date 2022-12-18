// const person: {
//   name: string;
//   age: number;
// }

// const person: {
//   name: string;
//   age: number;
//   hobbies: Array<string>;
//   role: [number, string];
// } = {
//   name: "kenta",
//   age: 24,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: 'kenta',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

// person.role.push("admin"); // pushの場合は、Tupleでもエラー検知できない。
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.ADMIN) {
  console.log('ADMIN User');
}
