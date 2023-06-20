'use strict';

// - - - - - - - - - - - - - - - - - SCOPING - - - - - - - - - - - - - - - - - 

/* const firstname = "Leo";

function calcAge(birthyear) {
    const age = 2023 - birthyear;

    function printAge() {
        const output = `${firstname}, you're ${age}, born in ${birthyear}`
        console.log(output)

        if (birthyear >= 1981 && birthyear <= 1996) {
            const str = `Oh, and you're a millenial, ${firstname}`
            console.log(str);
        }
        function add(a, b) {
            return a + b;
        }

        console.log(add(2, 3));
    }
    printAge()
}

calcAge(1990) */

// - - - - - - - - - - - - - - - - - HOSTING - - - - - - - - - - - - - - - - - 

/* console.log(me);
//console.log(job);
//console.log(year);

var me = "Jonas";
let job = 'teacher';
const year = 1991;

//Functions
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

//Example
console.log(undefined);

if(!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted!');
} */


// - - - - - - - - - - - - - - - - - THIS - - - - - - - - - - - - - - - - - 



//console.log(this);

/* 
const calcAge = function(birthyear){
    console.log(2023 - birthyear);
    //console.log(this);
}
calcAge(1990)

//Arrow
 const calcAgeArrow = (birthyear) => {
    console.log(2023 - birthyear);
   // console.log(this);
} 

calcAgeArrow(1995)

//Example 2

const jonas = {
    year: 1990,
    calcAge: function(){
        console.log(this);
        console.log(2023 - this.year);
    }
}

jonas.calcAge()

//Example 3

const matilda = {
    year: 2000,
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge() */

// - - - - - - - - - - - - - - - - -PRIMITIVES VS OBJECTS - - - - - - - - - - - - - - - - - 

/* let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me ={
    name: 'Jonas',
    age: 30,
}

const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me); */

//Example

/* //Primitive types
let lastName = 'Williams';
let oldLastName = lastName;

lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);


//Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica);
console.log('After marriage;', marriedJessica);

//Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

//This will be a new object
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

console.log('Before marriage:', jessica2);
console.log('After marriage;', jessicaCopy); */

// - - - - - - - - - - - - - - - - - DESTRUCTURING ARRAYS - - - - - - - - - - - - - - - - - 

/* const restaurant = {
    name: 'Clasico Italiano',
    locationn: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}

const { name, locationn } = restaurant;

let arr = [2, 3, 4];

let a = arr[0];
let b = arr[1];
let c = arr[2]

console.log(a, b, c);

//Destructuring

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);


//Switching Variables (Manually)
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary)


//Destructuring (Switching variables)
[main, secondary] = [secondary, main]
console.log(main, secondary)

//Example 1
//console.log(restaurant.order(2, 0));

//Recive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse);


//Example 2 - Nested array

const nested = [2, 4, [5, 6]];
//2
//5,6

const [two, , [five, six]] = nested;
console.log(two, five, six); */

// - - - - - - - - - - - - - - - - - DESTRUCTURING OBJECTS- - - - - - - - - - - - - - - - - 

const restaurant = {
    name: 'Clasico Italiano',
    locationn: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}

