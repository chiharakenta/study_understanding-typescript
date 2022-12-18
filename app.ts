// const person: {
//   name: string;
//   age: number;
// }
const person: {
  name: string;
  age: number;
  hobbies: Array<string>;
  role: [number, string];
} = {
  name: "kenta",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// person.role.push("admin"); // pushの場合は、Tupleでもエラー検知できない。
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
