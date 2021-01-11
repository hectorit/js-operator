//Performing arithmetic operations

let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y)
console.log(--x)

//comparison operators
let z = 10;

console.log(z >= 10);
console.log(z > 10);
console.log(z <=10);
console.log(z < 10);

//Equality operators

console.log(z ===10);
console.log(z !==10)

//Strictly equality operator

console.log(1 === 1);
console.log('1' === 1);
console.log(1 == 1);
console.log('1' == 1);
console.log(1 == true);

//Carnery operator

let value = 10;
let type = value >= 100 ? "Gold":"Silver"
console.log(type)

//Logical operator

 let hightIncome = true ;
 let goodCredit = true ;
 let eligibleforLoan = hightIncome && goodCredit ;
 let applicationRefused = !eligibleforLoan;
 console.log("Loan approved " + eligibleforLoan)
 console.log("Loan is not approved " + applicationRefused);

// let hightIncome = false ;
// let goodCredit = true ;
// let eligibleforLoan = hightIncome || goodCredit ;
// console.log(eligibleforLoan);

//Non-boolean logical operator

let userColor = undefined;
let defaultColor = 'blue';
let selectedColor = userColor || defaultColor;
console.log(selectedColor);

//Exercise

let a = 'red';
let b = 'blue'

let c = a;
a = b;
b = c;

console.log(a);
console.log(b)