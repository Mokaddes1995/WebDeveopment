// Crate Variable

let name = "Mokaddes Hossain";

    name = "Monarul Islam";

console.log(name)

const country = "Bangladesh";

console.log(country)

let city = "Dhaka";

console.log(city)


// JavaScript Data Type


// String

let name_1 = "Raihan";

console.log(name_1)

// Number

let num_1 = 10;

console.log(num_1)

let num_2 = 10.2;

console.log(num_2)


// BigInt

let bigint = 1234567899n;

console.log(bigint)


// Boolean

let bool_1 = true;

console.log(bool_1)

let bool_2 = false;

console.log(bool_2)


// Undefined

let x ;

console.log(x)


// Null

let y = null;

console.log(null)


// Symble

let a = Symbol(5);

console.log(a)



// Object

const student = {
    'name':"Md Mokaddes Hossain",
    'age': 30,
    'city':"Dhaka"
};

console.log(student)


// Array


let frutis = ["apple", 'Orange', 'Banana', 'Kiwi'];

console.log(frutis)



// Function


function check_odd(n) {

    if (n % 2 == 0) {

        return "Even Number"
    }
    else {
        return "Odd Number"
    }

};

console.log(check_odd(8))

console.log(check_odd(7))


// Operator


// Arithmatic Operator

let num_3 = 10;

let num_4 = 20;


// Addition

let addition = num_3 + num_4;

console.log(addition)

// Substruction


let substruction = num_3 - num_4;

console.log(substruction)


// Multiply


let multiply = num_3 * num_4;

console.log(multiply)


// Division

let division = num_3 / num_4;

console.log(division)


// Remainder/ Modulas

let mod = num_3 % 2;

console.log(mod)

// Increment

let increment = 10

increment ++;

let total = increment

console.log(total)

// Decriment

let decriment = 20;

decriment --;

let decrese = decriment

console.log(decrese)


// Exponent/ Power

let power = 10 ** 2

console.log(power)

// Assignment Operator

// Assignment

let test = 10;

    test += test

console.log(test)

    test -= 5;

console.log(test)

    test *= test

console.log(test)

    test /= test

console.log(test)


// Comparision Operator


// Grater Than

if (num_1 > num_2) {

    console.log("Yes, Num_1 is Greater Than Num_2")
}
else {
    console.log("No, Num_1 is Less Than Num_2")
}


// Less Than


if (num_1 < num_2) {

    console.log("Yes, Num_1 is Less Than Num_2")
}
else {
    console.log("No, Num_1 is Greater Than Num_2")
}


// Greater Than Equal

if (num_1 >= num_2) {

    console.log("Yes, Num_1 is Greater Than Equal of Num_2")
}
else {
    console.log("No, Num_1 is not Greater Than Equal of Num_2")
}


// Less Than Equal

if (num_1 <= num_2) {

    console.log("Yes, Num_1 is Less Than Equal of Num_2")
}
else {
    console.log("No, Num_1 is not Less Than Equal of Num_2")
}


// Equal Equal

if (num_1 == num_2) {

    console.log("Num_1 is Equal Equal of Num_2")

}
else {

    console.log("Num_1 is Not Equal Equal Num_2")

}


// Not Equal

if (num_1 != num_2) {

    console.log("Num_1 not Equal Equal Num_2")
}
else {

    console.log("Num_1 is Equal Equal of Num_2")
}


// Logical Operator

// Or ||

if (num_1 > num_2 || num_1 == num_2) {

    console.log("Yes, Num_1 Greater Than of Num_2 or Num_1 Equal Equal of Num_2")
}
else {

    console.log("No, Num_1 not Greater Than Num_2 or Not Equal Equal.")
}


// And &&




// Turnery Operator


let age = 18;

let text = (age >= 18) ? "Adult" : "Not Adult";

console.log(text)


let password = "123456"


let login = (password === "123456") ? "Loging Successful" : "Wrong Password";


console.log(login)


//