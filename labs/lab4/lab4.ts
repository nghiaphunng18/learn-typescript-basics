function sum2(a: number, b: number): number {
  return a + b;
}

const sum3 = (a: number, b: number): number => {
  return a + b;
};

console.log("check sum2: ", sum2(1, 2));
console.log("check sum3: ", sum3(1, 2));

//optional parameters
console.log("use optional params");
const sum4 = (a: number, b: number, c?: number): number => {
  console.log("check c: ", c);
  if (c) return a + b + c;
  return a + b;
};
console.log("check sum4: ", sum4(1, 2));

//default parameters
console.log("use default params");
const sum5 = (a: number, b: number, c: number = 0) => {
  return a + b + c;
};
console.log("check sum5: ", sum5(1, 2));
console.log("check sum5: ", sum5(1, 2, 3));

//rest parameters
console.log("use rest params");
const sum6 = (...numbers: number[]) => {
  console.log("check numbers: ", numbers);
  let total: number = 0;
  numbers.forEach((num) => (total += num));
  return total;
};
console.log("check sum6: ", sum6(1, 2, 3));
console.log("check sum6: ", sum6(1));

//overloading function
console.log("use overloading function");
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b?: any) {
  return a + b;
}
console.log("check addNew: ", addNew(1, 3), addNew("hello", " world"));