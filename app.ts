// const person: {
//   name: string;
//   age: number;
// }
const person = {
  name: "kenta",
  age: 24,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
