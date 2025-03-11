class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("1", "nghia", "phung");
console.log("check class Person: ", person);
console.log("check fullname person: ", person.getFullName());

//access modifiers: public(default), private, protected
console.log("learn access modifiers");

class Employee {
  protected empCode: number;
  public empName: string;
  private empAge: number;
  constructor();
  constructor(empCode: number, empName: string);
  constructor(empCode?: number, empName?: string) {
    if (empCode && empName) {
      this.empCode = empCode;
      this.empName = empName;
    }
  }
}

class SalesEmployee extends Employee {
  private department: string;

  constructor(name: string, code: number, department: string) {
    super(code, name);
    this.department = department;
  }
}

let emp1 = new Employee();
emp1.empName = "John";
console.log("check class Employee: ", emp1);

let emp2 = new Employee(124, "Wisk");
console.log("check class Employee: ", emp2);

let empSale = new SalesEmployee("John Smith", 123, "Sales");
// empSale.empCode; //error

//readonly: read only and not modify (update/delete)
console.log("learn readonly");

class Animal {
  readonly birthDate;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

let animal1 = new Animal(new Date(1990, 12, 25));
console.log("check class Animal: ", animal1);
// animal1.birthDate = new Date(1991, 12, 25); //error


//getter and setter
console.log("learn getter and setter");

class Person2 {
  private _age: number;
  public firstName: string;
  public lastName: string;

  constructor(_age: number, firstName: string, lastName: string) {
    this._age = _age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //getter
  get age() {
    return this._age;
  }

  //setter
  set age(_age: number) {
    if (_age > 0 && _age < 200) {
      this._age = _age;
    } else {
      throw Error("invalid");
    }
  }
}

let person3 = new Person2(18, "nghia", "phunng");
console.log("check age of person3: ", person3.age);
person3.age = 20;
console.log("check age of person3: ", person3.age);


//inheritance
console.log("learn inheritance");

class Person3 {
  private firstName: string;
  private lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  describe(): string {
    return `This is ${this.firstName} ${this.lastName}`;
  }
}

class Employee1 extends Person3 {
  private jobTitle: string;
  constructor(firstName: string, lastName: string, jobTitle: string) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }


  //override
  describe(): string {
    return `This is ${super.getFullName()} of child`;
  }
}

let employee = new Employee1("nghia", "phung", "web developer");
console.log("check employee1: ", employee);
console.log("check getFullName employee: ", employee.getFullName());
console.log("check describe employee: ", employee.describe());

//static method and properties
console.log("learn static method and properties");

class Circle {
  static pi: number = 3.14;
  public testNum: number;

  constructor(testNum: number) {
    this.testNum = testNum;
  }

  static calculateArea(radius: number) {
    return Circle.pi * radius * radius;
  }
}

let circle1 = new Circle(10);
let circle2 = new Circle(20);
console.log("check circle class: ", Circle.pi, Circle.calculateArea(2));
// circle1.pi; //error
// circle1.calculateArea(10); //error

//abstract class
console.log("learn abstract class");

abstract class Employee2 {
  constructor(private firstName: string, private lastName: string) {

  }

  //abstract method
  abstract getSalary(): number;

  //normal method
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// let e1 = new Employee2("nghia", "phunng"); //error
class FullTimeEmployee extends Employee2 {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
    this.salary = salary;
  }
  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Employee2 {
  constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
    super(firstName, lastName);
    this.rate = rate;
    this.hours = hours;
  }
  getSalary(): number {
    throw this.rate * this.hours;
  }
}

let fte1 = new FullTimeEmployee("nghia", "phunng", 3000);
console.log("check fte1: ", fte1.fullName, fte1.getSalary());

//interface
console.log("learn interface");

interface IPerson {
  readonly firstName: string;
  lastName: string;
  address?: string;
}

//other
type TPerson = {
  firstName: string;
  lastName: string;
}

function getFullName(person: IPerson) {
  // person.firstName = "abc"; //error
  return `${person.firstName} ${person.lastName} ${person.address}`;
}