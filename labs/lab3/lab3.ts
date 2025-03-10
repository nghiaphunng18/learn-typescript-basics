//false: false, 0, "", null, undefined, NaN
//true: not 0, string not empty, [], [size], {}, {key: value}, function

//if - else if - else
let age: number = 15;
if (age >= 0 && age < 10) {
  console.log("run inside if");
} else if (age >= 10 && age < 18) {
  console.log("run inside else if");
} else {
  console.log("run inside else");
}

//switch case
switch (age) {
  case 10:
    console.log("age = ", age);
    break;

  case 15:
    console.log("age = ", age);
    break;
  case 20:
    console.log("age = ", age);
    break;

  default:
    console.log("shirimasen");
    break;
}

//for loop
console.log("for loop");
for (let i: number = 0; i < 3; i++) {
  console.log(i);
}

let i1 = 0;
for (; i1 < 3; i1++) {
  console.log(i1);
}

i1 = 0;
for (; ; i1++) {
  console.log(i1);
  if (i1 == 2) break;
}

i1 = 0;
for (;;) {
  console.log(i1);
  if (i1 == 2) break;
  i1++;
}

//while loop
console.log("while loop");
i1 = 0;
while (i1 < 3) {
  console.log(i1);
  i1++;
}

i1 = 0;
while (true) {
  console.log(i1);
  i1++;
  if (i1 > 2) break;
}

//do while
console.log("do while");
i1 = 0;
do {
  console.log(i1);
  i1++;
} while (i1 < 3);

//use break
console.log("use break");
let products = [
  { name: "phone", price: 700 },
  { name: "tablet", price: 900 },
  { name: "laptop", price: 1200 },
];

for (let i = 0; i < products.length; i++) {
  if (products[i].price == 900) {
    break;
  }
  console.log(products[i]);
}

//use continue
console.log("use continue");
for (let i = 0; i < products.length; i++) {
  if (products[i].price == 900) {
    continue;
  }
  console.log(products[i]);
}
