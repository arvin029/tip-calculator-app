// var greeter = "hey hi";

// var times = 4;

// if (times > 3) {
//     var greeter = "say Hello instead"; 
// }
// var greeter = "hey arvs";
// console.log(greeter) // "say Hello instead"


// let greeter = "hey hi";
// let times = 4;

// if (times > 3) {
//   let greeter = "say Hello instead"; 
// }
// let greeter = "say Hello instead"; 
// console.log(greeter) // "say Hello instead"

for (let i = 0; i<10; i++) {
  if (i === 5) {
    continue;
  }
  // console.log('this is loop ' + i);
}

// class Person {
//   constructor(fullName, age) {
//     this.name = fullName;
//     this.age = age;
//   }

//   getName = () => {
//     return this.fullName
//   }

//   getAge = () => {
//     return this.age
//   }
// }

// class Hobby extends Person {
//   constructor(fullName, age, hob) {
//     super(fullName, age)

//     this.hob = hob;

//   }

//   getInfo = (name) => {
//     return this.getAge();
//   }
// }

// const hobby = new Hobby('arvs', 23, 'coding');


// console.log(hobby.getName())

// class Car {
//   constructor(brand, year) {
//     this.carname = brand;
//     this.year = year;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, year, mod) {
//     super(brand, year);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + this.year +', it is a ' + this.model;
//   }
// }

// const mycar = new Model("Ford ", 2021, "Mustang");
// console.log(mycar.show())

const obj = {
  a: 2,
  b: 4
}

const calculate = {
  add(c,d) {
    return this.a + this.b +c +d;
  }
}

let val = calculate.add.call(obj, 1, 3);
let val2 = calculate.add.apply(obj, [1, 3]);
let val3 = calculate.add.bind(obj, 1, 3);
console.log(val)
console.log(val2)
console.log(val3)

const obj1 = {
  age: 23,
  getAge: function() {
    return this.age;
  }
}

console.log(obj1.getAge.apply(obj1))

function one() {
  let num = 1;
  function two() {
    let num = 2;
    function three() {
      let num = 3;
      console.log(num)
    }
    return three();
  }
  return two();
}

console.log(one())

let myname = '  arvin caparros  ';
let a = myname.trim().split(' ')
console.log(a)

function person(name, age) {
  console.log(name, age)
}

person('arvin', 'capar');

let firsName = 'arvin';
let lastName = 'caparros';

function getFullName(fullName) {
  console.log(fullName)
}
getFullName(firsName +' '+ lastName)