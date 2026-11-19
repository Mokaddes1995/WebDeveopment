// // // Crate Variable

// // let name = "Mokaddes Hossain";

// //     name = "Monarul Islam";

// // console.log(name)

// // const country = "Bangladesh";

// // console.log(country)

// // let city = "Dhaka";

// // console.log(city)


// // // JavaScript Data Type


// // // String

// // let name_1 = "Raihan";

// // console.log(name_1)

// // // Number

// // let num_1 = 10;

// // console.log(num_1)

// // let num_2 = 10.2;

// // console.log(num_2)


// // // BigInt

// // let bigint = 1234567899n;

// // console.log(bigint)


// // // Boolean

// // let bool_1 = true;

// // console.log(bool_1)

// // let bool_2 = false;

// // console.log(bool_2)


// // // Undefined

// // let x ;

// // console.log(x)


// // // Null

// // let y = null;

// // console.log(null)


// // // Symble

// // let a = Symbol(5);

// // console.log(a)



// // // Object

// // const student = {
// //     'name':"Md Mokaddes Hossain",
// //     'age': 30,
// //     'city':"Dhaka"
// // };

// // console.log(student)


// // // Array


// // let frutis = ["apple", 'Orange', 'Banana', 'Kiwi'];

// // console.log(frutis)



// // // Function


// // function check_odd(n) {

// //     if (n % 2 == 0) {

// //         return "Even Number"
// //     }
// //     else {
// //         return "Odd Number"
// //     }

// // };

// // console.log(check_odd(8))

// // console.log(check_odd(7))


// // // Operator


// // // Arithmatic Operator

// // let num_3 = 10;

// // let num_4 = 20;


// // // Addition

// // let addition = num_3 + num_4;

// // console.log(addition)

// // // Substruction


// // let substruction = num_3 - num_4;

// // console.log(substruction)


// // // Multiply


// // let multiply = num_3 * num_4;

// // console.log(multiply)


// // // Division

// // let division = num_3 / num_4;

// // console.log(division)


// // // Remainder/ Modulas

// // let mod = num_3 % 2;

// // console.log(mod)

// // // Increment

// // let increment = 10

// // increment ++;

// // let total = increment

// // console.log(total)

// // // Decriment

// // let decriment = 20;

// // decriment --;

// // let decrese = decriment

// // console.log(decrese)


// // // Exponent/ Power

// // let power = 10 ** 2

// // console.log(power)

// // // Assignment Operator

// // // Assignment

// // let test = 10;

// //     test += test

// // console.log(test)

// //     test -= 5;

// // console.log(test)

// //     test *= test

// // console.log(test)

// //     test /= test

// // console.log(test)


// // // Comparision Operator


// // // Grater Than

// // if (num_1 > num_2) {

// //     console.log("Yes, Num_1 is Greater Than Num_2")
// // }
// // else {
// //     console.log("No, Num_1 is Less Than Num_2")
// // }


// // // Less Than


// // if (num_1 < num_2) {

// //     console.log("Yes, Num_1 is Less Than Num_2")
// // }
// // else {
// //     console.log("No, Num_1 is Greater Than Num_2")
// // }


// // // Greater Than Equal

// // if (num_1 >= num_2) {

// //     console.log("Yes, Num_1 is Greater Than Equal of Num_2")
// // }
// // else {
// //     console.log("No, Num_1 is not Greater Than Equal of Num_2")
// // }


// // // Less Than Equal

// // if (num_1 <= num_2) {

// //     console.log("Yes, Num_1 is Less Than Equal of Num_2")
// // }
// // else {
// //     console.log("No, Num_1 is not Less Than Equal of Num_2")
// // }


// // // Equal Equal

// // if (num_1 == num_2) {

// //     console.log("Num_1 is Equal Equal of Num_2")

// // }
// // else {

// //     console.log("Num_1 is Not Equal Equal Num_2")

// // }


// // // Not Equal

// // if (num_1 != num_2) {

// //     console.log("Num_1 not Equal Equal Num_2")
// // }
// // else {

// //     console.log("Num_1 is Equal Equal of Num_2")
// // }


// // // Logical Operator

// // // Or ||

// // if (num_1 > num_2 || num_1 == num_2) {

// //     console.log("Yes, Num_1 Greater Than of Num_2 or Num_1 Equal Equal of Num_2")
// // }
// // else {

// //     console.log("No, Num_1 not Greater Than Num_2 or Not Equal Equal.")
// // }


// // // And &&




// // // Turnery Operator


// // let age = 18;

// // let text = (age >= 18) ? "Adult" : "Not Adult";

// // console.log(text)


// // let password = "123456"


// // let login = (password === "123456") ? "Loging Successful" : "Wrong Password";


// // console.log(login)


// // Create a Function

// function add(a, b) {

//     return a + b;
// };

// const addition = add(10,20);

// console.log(addition);


// // Create Arrow Function Explicit


// const multiply = (a, b) => {

//     return a * b
// }

// const result = multiply(10,20);

// console.log(result)


// // Create Arrow Function Implicit

// const division = (a, b) => a/ b;

// const divide = division(30,5)

// console.log(divide)


// // JavaScript Object

// const mobileModel = {

//     brand: "Samsung",
//     model: "S24 Ultra",
//     price: 120000,
//     color:["Green", "Black", "Silver"],
//     camera: {main: "200MP", front: "12MP"},

//     showdetails: function display() {

//     console.log(`
//     Brand: ${this.brand}
//     Model: ${this.model}
//     Color: ${this.color.join(", ")}
//     Main Camera: ${this.camera.main}
//     Front Camera: ${this.camera.front}
//     Price: ${this.price}
//     `);
//     }    
// }

// // mobileModel.showdetails();

// // Access Item

// console.log(mobileModel.brand); // By Dot Notation

// console.log(mobileModel["brand"]); // By Bracket Notation

// // Change Value

// mobileModel.model = "S26 Ultra"; // By Dot Notation

// console.log(mobileModel);

// mobileModel["model"] = "S27 Ultra"; // By Bracket Notation

// console.log(mobileModel);


// // Use Object keys Method

// const keys = Object.keys(mobileModel);

// console.log(keys);

// // Use Object value Method

// const value = Object.values(mobileModel);

// console.log(value);

// // Use Object entrites Method

// const entrites = Object.entries(mobileModel);

// console.log(entrites);


// // Use assign Method

// const num1 = {

//     a: 1,
//     b: 2,
//     c: 3
// };

// const num2 = {

//     p: 4,
//     q: 5,
//     r: 6
// };

// const num3 = {

//     x: 7,
//     y: 8,
//     z: 9
// };

// // This not Memory Efficient Way

// const newNum1 = Object.assign(num1, num2, num3);

// console.log(newNum1);

// // Memory Efficient Way for assign method

// const newNum2 = Object.assign({}, num1, num2, num3); // First Empty Object Target, Others value

// console.log(newNum2);


// // Use Spread 

// // This is more memory efficient method

// const newNum3 = {...num1, ...num2, ...num3};

// // console.log(newNum3)


// const num1 = {

//     a: 1,
//     b: 2,
//     c: 3
// };


// for (let [key, value] of Object.entries(num1)) {

//     console.log(key, value);
// }



// // Code Destructure 

// const product = {

//     name: "Samsung S24 Ultar",
//     // price: 120000,
//     color: "Black",
//     camera: {

//         main: "200MP",
//         front: "12MP"
//     }
// };

// // name এবং price destructure করো

// // const {name, price} = product;

// // name-কে productName নামে রাখো 

// const {name:productName} = product;

// // price-এর default value 0 রাখো।

// const {price = 0} = product;

// // Nested destructuring দিয়ে main camera বের করো

// //const{camera:{main}} = product;

// // Rest operator দিয়ে বাকি property সংগ্রহ করো।

// const {camera:{main, ...other}} = product;

// // console.log(productName)
// // console.log(price)

// console.log(other)


// const user = {
//     name: "Rahim",
//     age: 25,
//     address: {
//         city: "Dhaka",
//         country: "Bangladesh"
//     },
//     skills: ["HTML", "CSS", "JavaScript"]
// };

// // name-কে userName নামে রাখবে।

// const {name: userName} = user;

// // age-এর default value 18 রাখবে।

// const {age = 18} = user;

// // Nested destructuring দিয়ে city বের করবে।

// const {address:{city}} = user;

// // skills Array থেকে প্রথম দুটি skill destructure করবে।

// const {skills:[a, b]} = user;

// // Rest operator দিয়ে বাকি property সংগ্রহ করবে।

// const {skills, ...others} = user;


// const product = {
//     name: "Samsung",
//     price: 120000,
//     camera: {
//         main: "200MP"
//     }
// };


// function showProduct({name, price, camera:{main}}) {

//     console.log(name);
//     console.log(price);
//     console.log(main);
// }

// showProduct(product)


// const user = {
//   name: "Rahim",
//   age: 25,
//   city: "Dhaka"
// };

// function getUserInfo(user) {

//     const {name, age} = user

//     return `"${name} is ${age} years Old"`
// }

// console.log(getUserInfo(user));

// // Expected Output:
// // "Rahim is 25 years old"



// const numbers = [10, 20, 30, 40];


// function calculateSum(numbers) {

//     const [num1, num2] = numbers;

//     return num1 + num2;
// }

// console.log(calculateSum(numbers));



// const student = {
//   name: "Karim",
//   marks: 85,
//   subject: "JavaScript"
// };

// function getStudentInfo({ name, marks, subject }) {
  
//     return `"${name} got ${marks} in ${subject}"`
// }

// console.log(getStudentInfo(student));

// // Expected Output:
// // "Karim got 85 in JavaScript"


// const person = {
//   name: "Hasan",
//   address: {
//     street: "Mirpur Road",
//     city: "Dhaka",
//     country: "Bangladesh"
//   }
// };

// function getAddress(person) {

//     const {address:{street, city}} = person;

//     return `"${street}, ${city}"`
// }

// console.log(getAddress(person));

// // Expected Output:
// // "Mirpur Road, Dhaka"


// const employee = {
//   name: "Sakib",
//   salary: 50000,
//   skills: ["JavaScript", "React", "Node.js"]
// };

// function getEmployeeInfo(employee) {

//     const{name, salary,  skills:[a, b]} = employee;

//     return `"${name} earns ${salary} and knows ${a} and ${b}"`
  
// }

// console.log(getEmployeeInfo(employee));

// // Expected Output:
// // "Sakib earns 50000 and knows JavaScript and React"




// const student = { name: "Karim", marks: 90 };

// function getStudent(student) {

//     const {name:userName, marks} = student;

//     return `${userName} scored ${marks}`
// }

// console.log(getStudent(student));
// // Karim scored 90

// const person = {
//   name: "Hasan",
//   age: 25,
//   city: "Dhaka",
//   country: "Bangladesh"
// };

// function getDetails(person) {

//     const {name, ...rest} = person;

//     return `${name} lives in ${rest.city}, ${rest.country}`
// }

// console.log(getDetails(person));
// // Hasan lives in Dhaka, Bangladesh


// const numbers = [1, [2, 3], [4, 5]];

// function getNumbers(numbers) {

//     const [a, [b, c], [d, e]] = numbers;

//     return b + d
// }


// console.log(getNumbers(numbers));
// // 6


// const employee = {
//   name: "Sakib",
//   details: {
//     salary: 50000,
//     skills: ["JS", "React", "Node"]
//   }
// };

// function getInfo({ name, details:{salary, skills:[skill1, skill2]}}) {
//   return `${name} earns ${salary} and knows ${skill1} and ${skill2}`;
// }

// console.log(getInfo(employee));
// // Sakib earns 50000 and knows JS and React


// const employee = {
//   name: "Sakib",
//   details: {
//     salary: 50000,
//     skills: ["JS", "React", "Node"]
//   }
// };



// console.log(employee)

// প্রশ্ন ১: Output কী হবে?

// Hello Rahim
// Good Bye!

// প্রশ্ন ২: Output কী হবে?

// 30

/*প্রশ্ন ৩: নিজে কোড লেখো

একটি processUser() function তৈরি করো, যেটি:

একটি name parameter নেবে।

একটি callback parameter নেবে।

প্রথমে "User: Rahim" print করবে।

তারপর callback function call করবে। 
*/


// function processUser(name, callback) {

//   console.log("User: " + name);
//   callback();

// }

// function display() {

//   console.log("Good Day");
// }


// processUser("Rahim", display)


// // Level 2: Intermediate

// // প্রশ্ন ৪: Output কী হবে?

// // First
// // Second
// // Third

// // প্রশ্ন ৫: Output কী হবে?

// // 15

// /* প্রশ্ন ৬: নিজে কোড লেখো

// একটি function তৈরি করো:*/

// function calculator(a, b, callback) {

//   console.log(callback(a, b))
// }

// function add(x, y) {

//   return x + y;
// }

// function subtract(x, y) {

//   return x - y;
// }

// function multiply(x, y) {

//   return x * y ;
// }


// calculator(10, 5, add);
// calculator(10, 5, subtract);
// calculator(10, 5, multiply);


// // Level 3: Advanced
// // প্রশ্ন ৭: Output কী হবে?

// // 1
// // 2
// // 3

// // প্রশ্ন ৮: Output কী হবে?

// // 20


// // প্রশ্ন ৯: Output কী হবে?

// // Start
// // Middle
// // End

// // প্রশ্ন ১০: Output কী হবে?

// // 25

// /* 

// প্রশ্ন ১১: নিজে কোড লেখো

// একটি checkNumber() function তৈরি করো।

// একটি number এবং callback নেবে।

// Number জোড় হলে "Even Number" print করবে।

// বিজোড় হলে "Odd Number" print করবে।

// এই কাজটি callback function দিয়ে করতে হবে।

// */

// function checkNumber(number, callback) {

//   let result = callback(number);

//   console.log(result)

// }

// checkNumber(7, function(result) {
//   if(result % 2 === 0) {
//     return "Even";
//   }else{
//     return "Odd";
//   }
// })


// // প্রশ্ন ১২: Output কী হবে?

// //A
// //B
// //C


// // প্রশ্ন ১৩: Output কী হবে?

// // 10
// // 20
// // 30

// // প্রশ্ন ১৪: Output কী হবে?

// // 20


// /* 

// প্রশ্ন ১৫: নিজে কোড লেখো

// একটি greetUser() function তৈরি করো।

// প্রথম parameter হবে name।

// দ্বিতীয় parameter হবে callback।

// callback-এর মাধ্যমে name পাঠাবে।

// callback "Welcome, Rahim!" এই ধরনের message return করবে।

// শেষে message console-এ print করবে।

// */


// function greetUser(name, callback) {

//   return callback(name);
// }

// function display(value) {

//   console.log("Welcome, " + value);
// }

// greetUser("Rahim", display);


// // প্রশ্ন ১৬: Output কী হবে?

// // 30


// // প্রশ্ন ১৭: Output কী হবে?

// // One
// // Two
// // Three

// /*
// প্রশ্ন ১৮: নিজে কোড লেখো

// একটি calculate() function তৈরি করো।

// দুটি number নেবে।

// একটি callback নেবে।

// callback দিয়ে দুটি number যোগ করবে।

// যোগফলকে 2 দিয়ে গুণ করবে।

// শেষে result print করবে।

// */

// function calculate(a, b, callback) {

//   let total = callback(a, b);

//   console.log(total * 2);
// }

// calculate(8, 7, function add(x, y) {
//   return x + y;
// })

// // প্রশ্ন ১৯: একটু কঠিন

// // A
// // B
// // 15
// // C


// /*

// প্রশ্ন ১: Add Function

// একটি add() Function তৈরি করো।

// দুটি Number Parameter নেবে।

// দুটি Number যোগ করে Return করবে।

// */

// function add(a, b) {

//   return a + b;
// }

// console.log(add(10, 20));

// /*

// প্রশ্ন ২: Square Function

// একটি Arrow Function তৈরি করো।

// একটি Number নেবে।

// Number-এর Square Return করবে।

// */


// const square = number => number * number;

// console.log(square(5));


// /*

// প্রশ্ন ৩: Even or Odd

// একটি checkNumber() Function তৈরি করো।

// একটি Number নেবে।

// জোড় হলে "Even" Return করবে।

// বিজোড় হলে "Odd" Return করবে।

// */


// const checkNumber = function (number) {

//   if (number % 2 === 0) {

//     return 'Even';

//   }else {

//     return "Odd";
//   }

// }


// console.log(checkNumber(8)); // Even
// console.log(checkNumber(7)); // Odd


// /*

// প্রশ্ন ৪: Full Name

// একটি Function তৈরি করো getFullName() নামে।

// firstName এবং lastName নেবে।

// দুটি নাম একসাথে Return করবে।

// */

// const getFullName = function (firstName, lastName) {

//   return firstName + " " + lastName;
// }

// console.log(getFullName("Rahim", "Ahmed"));
// // Rahim Ahmed


// /*

// প্রশ্ন ৫: Calculator

// একটি calculator() Function তৈরি করো।

// দুটি Number নেবে।

// একটি Callback Function নেবে।

// Callback দিয়ে যোগ, বিয়োগ ও গুণ করবে।

// */

// function calculator(a, b, Callback) {

//   let result = Callback(a, b);

//   console.log(result);
// }


// function add(x, y) {

//   return x + y;
// }


// function subtract(x, y) {

//   return x - y;
// }


// function multiply(x, y) {

//   return x * y;
// }

// calculator(10, 5, add);      // 15
// calculator(10, 5, subtract); // 5
// calculator(10, 5, multiply); // 50


// /* 

// প্রশ্ন ৬: Default Parameter

// একটি greet() Function তৈরি করো।

// একটি name Parameter থাকবে।

// Default value হবে "Guest"।

// Name না দিলে "Hello Guest" দেখাবে।

// */

// function greet(name = "Guest") {
  
//   console.log("Hello ", name)
// }


// greet()

// greet("Rahim")

/*

নিজে কোড লিখে নিচের কাজগুলো করো:
1. colors নামে একটি Array তৈরি করো। ৫টি Color রাখবে।
2. প্রথম Color Print করবে।
3. শেষ Color Print করবে।
4. Array-এর Length Print করবে।
5. দ্বিতীয় Color পরিবর্তন করে "Black" করবে।
6. for loop দিয়ে সব Color Print করবে।

*/

// let colors = ['Red', "White", "Green", "Yellow", 'Black'];

// console.log(colors[0]);

// console.log(colors[4]);

// console.log(colors.length);

// colors[1] = "Black";

// for (let i = 0; i < colors.length; i++) {

//     console.log(colors[i]);
// }



/*

আজকের Challenge

একটি students Array তৈরি করো:

- সব Student-এর নাম Print করবে।
- মোট Student সংখ্যা বের করবে।
- "Nayeem"-কে "Fahim" দিয়ে Replace করবে।
- সব Student-এর নাম Loop দিয়ে Print করবে।

*/

// let students = ["Rahim", "Karim", "Sakib", "Nayeem", "Hasan"];

// console.log(students);

// console.log(students.length);

// students[3] = "Fahim";

// for (let i = 0; i < students.length; i++) {

//    console.log(students[i]);
// }


// /*
// Task 1:

// push() দিয়ে "Black" যোগ করো।

// pop() দিয়ে শেষ Color মুছে ফেলো।

// unshift() দিয়ে "White" যোগ করো।

// shift() দিয়ে প্রথম Color মুছে ফেলো।

// সব Color for loop দিয়ে Print করো।

// */

// let colors = ["Red", "Green", "Blue"];

// colors.push("Black");

// console.log(colors);

// colors.pop()

// console.log(colors);

// colors.unshift("White");

// console.log(colors);

// colors.shift();

// console.log(colors);

// for (let i = 0; i < colors.length; i++) {

//     console.log(colors[i]);
// }



// /*

// Task 2:

// শেষে "Nayeem" যোগ করো।

// শুরুতে "Hasan" যোগ করো।

// শেষ Student মুছে ফেলো।

// প্রথম Student মুছে ফেলো।

// Final Array এবং Length Print করো।

// */

// let students = ["Rahim", "Karim", "Sakib"];


// students.push("Nayeem");

// console.log(students);

// students.unshift("Hasan");

// console.log(students);

// students.pop();

// console.log(students)

// students.shift();

// console.log(students);

// console.log(students.length)


/*

Part 3: Practice Tasks

Task 1: concat()

কাজ:

1. দুটি Array concat() দিয়ে যুক্ত করো।
2. নতুন Array Print করো।
3. Original frontend এবং backend Print করো।
4. মোট কয়টি Skill আছে বের করো।

*/

let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Python", "Django", "PostgreSQL"];


let new_array = frontend.concat(backend);

console.log(new_array);

console.log(frontend);

console.log(backend);

console.log(new_array.length);

/*

Task 2: includes()

কাজ:

1. "JavaScript" আছে কি না পরীক্ষা করো।
2. "Django" আছে কি না পরীক্ষা করো।
3. "React" আছে কি না পরীক্ষা করো।
4. সবগুলো Result Print করো।

*/

let skills = ["HTML", "CSS", "JavaScript", "React", "Python"];

console.log(skills.includes("JavaScript"));

console.log(skills.includes("Django"));

console.log(skills.includes("React"));




/*

Task 3: indexOf()

কাজ:

1. "JavaScript"-এর Index বের করো।
2. "Python"-এর Index বের করো।
3. "Django"-এর Index বের করো।
4. "React"-এর Index বের করো।

*/

let subjects = ["HTML", "CSS", "JavaScript", "Python", "React"];

/*

Part 4: Mini Project — Student Management System

আজকের Project

এই Project-এ তুমি Array ব্যবহার করে Student Management-এর ছোট একটি System তৈরি করবে।

Project Requirements

প্রথমে এই Array তৈরি করো:

let students = ["Rahim", "Karim", "Sakib"];

তোমার Project-এ নিচের কাজগুলো করতে হবে:
1. নতুন Student যোগ করতে হবে।
2. সব Student-এর নাম Print করতে হবে।
3. কোনো Student আছে কি না Search করতে হবে (includes())।
4. Student-এর Index খুঁজতে হবে (indexOf())।
5. দুটি Student List একসঙ্গে যুক্ত করতে হবে (concat())।
6. নির্দিষ্ট Student Delete করতে হবে (splice())।
7. Student List-এর Length বের করতে হবে।

*/