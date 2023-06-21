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

/* const restaurant = {
    name: 'Clasico Italiano',
    locationn: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thursday: {
            open: 12,
            close: 22,
        },
        friday: {
            open: 11,
            close: 23,
        },
        saturday: {
            open: 0,
            close: 24,
        }
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function({starterIndex, mainIndex, time, address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
}


restaurant.orderDelivery({
    time: "22:30",
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
})

//Example 1

//const {name, openingHours, categories} = restaurant;

//console.log(name, openingHours, categories);

//const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
//console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj)
// console.log(a, b);

//Nested objects 
//const { friday: {open: o, close: c}, } = openingHours;
//console.log(o, c);

// const{friday : {open, close}} = openingHours;;
// console.log(open, close); */

// - - - - - - - - - - - - - - - - - SPREAD OPERATOR - - - - - - - - - - - - - - - - - 

/* const restaurant = {
    name: 'Clasico Italiano',
    locationn: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thursday: {
            open: 12,
            close: 22,
        },
        friday: {
            open: 11,
            close: 23,
        },
        saturday: {
            open: 0,
            close: 24,
        }
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (x, y, z) {
        console.log(`Here is your pasta with ${x}, ${y} and ${z}.`);
    }
}


//Example 1
const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);

//Copy array

const mainMenu = [...restaurant.mainMenu];

//Join 2 arrays

let menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);

//Iterables are: arrays, strings, maps, sets, NOT objects!

const str = "Jonas";
const letter = [...str, '', 'S.'];
console.log(letter);


//Real word example: Ordering pasta
const ingredients =  ["bacon", 'eggs', 'cheese']
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant ={foundedIn: 1998, ...restaurant, founder: 'Guido'};
console.log(newRestaurant);

//Shallow copy
const restaurantCopy = {...restaurant};
restaurant.name = "Ristorante Milano";

console.log(restaurantCopy.name);
console.log(restaurant.name);
 */


// - - - - - - - - - - - - - - - - - REST PATTERNS AND PARAMETERS - - - - - - - - - - - - - - - - - 

const restaurant = {
    name: 'Clasico Italiano',
    locationn: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thursday: {
            open: 12,
            close: 22,
        },
        friday: {
            open: 11,
            close: 23,
        },
        saturday: {
            open: 0,
            close: 24,
        }
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (x, y, z) {
        console.log(`Here is your pasta with ${x}, ${y} and ${z}.`);
    },

    orderPizza: function(mainIngredient, ...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
}

// 1) Destructuring

const arr = [1, 2, ...[3, 4]];
console.log(arr);

//REST, because on the LEFT side of =
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//Objects
const { saturday, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2)Functions

const add = (...numbers) => {
    /*  let total = numbers.reduce((acc, curr) => acc += curr)
     console.log(total); */

    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total);
}

add(2, 3);
add(1, 2, 3, 4, 5);

//Example 1
const x = [23, 5, 7];
add(...x);

//Example 2
restaurant.orderPizza('mushroom', 'ham', 'pineapple', 'bananas')
restaurant.orderPizza('spinash')

let makeSmall = 'REST PATTERNS AND PARAMETERS'
console.log(makeSmall.toLowerCase());
