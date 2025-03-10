//number
const count2: number = 1;
let count3: number;
count3 = 10;

console.log("check count values: ", count2, count3); //ok

//string
let strExample = "hello world";
console.log("check strExample: ", strExample);

//array
let names: (number | string)[] = ["hello", "world"];
names.push(10);
names.push("10");
console.log("check names: ", names);

//object
// let person: object;
let person1: {};
person1 = { name1: "nghiaphunng18" };
console.log("check person1: ", person1);

let person2: {
  name: string;
  age: number;
} = {
  name: "nghiaphunng18",
  age: 18,
};
console.log("check person2: ", person2);

//tuple -> datatype, order, size
let tupleExample: [boolean, string, number];
// tupleExample = ["hello", true, 10)]; //error
// tupleExample = [true, "hello", 2025, false, "world", 2024]; //error
tupleExample = [true, "hello", 2025];
console.log("check tupleExample: ", tupleExample);
//optional tuple elements
let tupleExample1: [boolean, string, number, number?, string?];
tupleExample1 = [true, "hello", 2025];
console.log("check tupleElement1: ", tupleExample1);
tupleExample1 = [true, "hello", 2025, 2024];
console.log("check tupleElement1: ", tupleExample1);
tupleExample1 = [true, "hello", 2025, 2024, "world"];
console.log("check tupleElement1: ", tupleExample1);

//enum
enum API_STATUS {
  PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED", //PROMISE
}
console.log("check enum: ", API_STATUS);

//any
let name2: any = "nghiaphunng18";
name2 = 10;
console.log("check name2: ", name2);
name2 = false;
console.log("check name2: ", name2);

//void
const sum = (a: number, b: number): number => {
  return a + b;
};
const handleLogs = (message: string): void => {
  console.log("check message: ", message);
};
handleLogs("learn void type");

//never
const handleException = (errorMessage: string): never => {
  throw Error(errorMessage);
};
// handleException("just a test error");

//union
const addNumberOrString = (a: number | string, b: number | string) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or string");
};
console.log("check addNumberOrString: ", addNumberOrString(1, 2));

//aliases
type typeFunc = number | string;
const addNumberOrString2 = (a: typeFunc, b: typeFunc) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or string");
};
console.log("check addNumberOrString2: ", addNumberOrString2(1, 2));
