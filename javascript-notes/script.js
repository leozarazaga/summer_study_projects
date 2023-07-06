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
     //let total = numbers.reduce((acc, curr) => acc += curr)
     //console.log(total);

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
 */

// - - - - - - - - - - - - - - - - - SHORT CIRCUITING (&& AND ||) - - - - - - - - - - - - - - - - - 
/* 
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

    orderPizza: function (mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

console.log('- - - - OR - - - -');
//Use any data type, return ANY data type, short-circuiting 
//If the first operan is a thruthy value then other operand will be ignored
console.log(3 || 'Jonas');

//OR operand, if the first value is true it won't check the other values
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello it is the first thruthy value!

//Example 1
restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);


//Example 2
const guest2 = restaurant.numGuest || 10;
console.log(guest2);


console.log('- - - - AND - - - -');

//Example 3
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

//Example 4   (Practical example)
if(restaurant.orderPizza){
    restaurant.orderPizza('mushrooms', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('hello', 'world')

let x = 'SHORT CIRCUITING (&& AND ||)'
console.log(x.toLowerCase());
 */

// - - - - - - - - - - - - - - - - - THE NULLISH COALESCING OPERATOR (??) - - - - - - - - - - - - - - - - - 


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
    },

    orderPizza: function (mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

//Example 1
restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest);

//Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect); */

// - - - - - - - - - - - - - - - - - LOGICAL ASSIGMENT OPERATOR  - - - - - - - - - - - - - - - - - 

/* const rest1 = {
    name: 'Capri',
    //numGuest: 20,
    numGuest: 0,
};


const rest2 = {
    name: 'La Piazza',
    owner: 'Giovani Rossi',
};

//OR assigment operator
// rest1.numGuest = rest1.numGuest || 10
// rest2.numGuest = rest2.numGuest || 10

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;


//nullish assignment operator (null or undefined)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

rest1.owner = rest1.owner && '<ANONYMUS>'
rest2.owner = rest2.owner && '<ANONYMUS>'


//AND assigment operator
rest1.owner &&= '<HelloWorld>'
rest2.owner &&= '<HelloWorld>'

console.log(rest1);
console.log(rest2); */

// - - - - - - - - - - - - - - - - - CHALLENGE: FOTBOLL - - - - - - - - - - - - - - - - - 

/* const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


// 1. Create one player array for each team(variables 'players1' and 'players2')

const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);


// 2. The first player in any player array is the goalkeeper and the others are field players.For Bayern Munich(team 1) create one variable('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [goalkeeper, ...fieldPlayers] = players1;

//console.log(goalkeeper);
//console.log(fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams(22 players)
let allPlayers = [...players1, ...players2];
//console.log(allPlayers);

// 4. During the game, Bayern Munich(team 1) used 3 substitute players.So create a new array('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd(called 'team1', 'draw' and 'team2')
const { odds: { team1, x: draw, team2 } } = game
//console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names(NOT an array) and prints each of them to the console, along with the number of goals that were scored in total(number of player names passed in)

let printGoals = (...players) => {
    console.log(`${players.length} were scored!. \nGoals by ${players}`);
}

//printGoals("Carlos", "Linnea", "Maria")
printGoals(...game.scored)

// 7. The team with the lower odd is more likely to win.Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log("Team 1 is more likely to win");

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.Then, call the function again with players from game.scored
 */



// - - - - - - - - - - - - - - - - - LOOPING ARRAYS: THE FOR-OF LOOP - - - - - - - - - - - - - - - - - 
/* 
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

    orderPizza: function (mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

//Example 1
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
//console.log(menu);

for (let item of menu) {
    // console.log(item);
}

//Example 2
for (let item of menu.entries()) {
    //console.log(`${item[0] + 1}: ${item[1]}`);
}

//Destructuring the Array
for (let [item, element] of menu.entries()) {
    console.log(`${item + 1}: ${element}`);
}
 */


// - - - - - - - - - - - - - - - - - ENHANCED OBJECTS LITERALS - - - - - - - - - - - - - - - - - 
/* 
const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const openingHours = {
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
};


const restaurant = {
    name: 'Clasico Italiano',
    locationn: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    //ES6 enhanced object literals
    openingHours,

    //ES6 Methods, get rid of the function text
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery({ starterIndex, mainIndex, time, address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(x, y, z) {
        console.log(`Here is your pasta with ${x}, ${y} and ${z}.`);
    },

    orderPizza(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    },
};

// - - - - - - - - - - - - - - - - - OPTIONAL CHAINING (?) - - - - - - - - - - - - - - - - - 

if(restaurant.openingHours && restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon.open);
}

//With optional chaining
console.log(restaurant.openingHours.monday?.open);
console.log(restaurant.openingHours?.monday?.open);

//Example

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

for(let i of days){
    let open = restaurant.openingHours[i]?.open ?? 'closed' 
    console.log(`On ${i}, we open at ${open}`);
};

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Methos does not exist')

//Method does not exsist
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist!');

//Arrays
const users = [{
    name: 'Jonas', 
    email: 'hello123@gmail.com',
}
];

//const users = []

//     optional chaining   Nullish Coalescing  
//console.log(users[0]?.name ?? 'User array empty!');


//Using the logical operator will be:
if(users.length > 0){
    console.log(users[0].name);
} else{
    console.log('User array empty!');
} */


// - - - - - - - - - - - - - - - - - EXERCISES - - - - - - - - - - - - - - - - - 

/*
// 1) Check if an object has a deeply nested property and return its value:

 const data = {
    user: {
        name: 'Alice',
        address: {
            street: '123 Main St',
            city: 'New York',
            country: 'USA'
        }
    }
};

let country = data?.user?.address?.country ?? 'Country does not exit!'
console.log(country);

let state = data?.user?.address?.state ?? 'non-existent!'
console.log(state); */



// 2) Access a method on an object using optional chaining:
/* const calculator = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
};

let sum = calculator.add?.(5, 3) ?? 'Function does not exist!'
console.log(sum);

let divide = calculator.divide?.(10, 5) ?? 'Divide function does not exist!'
console.log(divide);



// 3) Access array elements and their properties using optional chaining:
const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice', address: { city: 'New York' } },
    { id: 3, name: 'Bob', address: { city: 'London' } }
];


// const [, { address: { city } }] = data;
// console.log(city);

let city = data[1]?.address?.city ?? 'City does not exist!';
console.log(city);

let nonExistingCity = data[4]?.address.city ?? 'Such city does not exist!';
console.log(nonExistingCity);


// 4) Check if a function exists and invoke it with optional chaining:

const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

const name = 'Alice';
greet?.(name)

const goodbye = undefined;
goodbye?.("Malin")
console.log(goodbye);


// 5) Access properties of an object within an array using optional chaining:
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie' }
];

let email = users[1]?.email ?? 'No email found!'
console.log(email);

let nonExistingEmail = users[3]?.email ?? 'Email does not exist!';
console.log(nonExistingEmail);



// 6) Access the title of the fiction book using optional chaining:

const person = {
    books: function () {
        return {
            fiction: {
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald'
            },
            nonFiction: {
                title: 'Sapiens: A Brief History of Humankind',
                author: 'Yuval Noah Harari'
            },
            fantasy: {
                title: 'Harry Potter and the Sorcerer\'s Stone',
                author: 'J.K. Rowling'
            }
        };
    },
    friends: function () {
        return ['Alice', 'Bob', 'Charlie'];
    }
};


//Destructuring objects
const {nonFiction: {title: sapiens}} = person.books();
console.log(sapiens);

//Optional chaining
let sapiens = person.books()?.nonFiction?.title
console.log(sapiens);

// 7) Access the author of the fantasy book using optional chaining:

let author = person.books()?.fantasy?.author;
console.log(author);

// 8) Access the second friend using optional chaining:

let friend = person.friends()?.[1]
console.log(friend);

 */


// - - - - - - - - - - - - - - - - - LOOPING OBJECTS - - - - - - - - - - - - - - - - - 
/* 
const openingHours = {
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
};


const restaurant = {
    name: 'Clasico Italiano',
    locationn: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (x, y, z) {
        console.log(`Here is your pasta with ${x}, ${y} and ${z}.`);
    },

    orderPizza: function (mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} day: `

for (const day of properties) {
    openStr += `${day}, `
}
// console.log(openStr);


//Property VALUES
const values = Object.values(openingHours)
// console.log(values);


//Property ENTRIES
const entries = Object.entries(openingHours)
// console.log(entries);

for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}


// - - - - - - - - - - - - - - - - - LOOPING OBJECTS - - - - - - - - - - - - - - - - - 


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

};


// 1)
for (let [i, player] of game.scored.entries()) {
    // console.log(`Goal ${i + 1}: by ${player} `);
}


// 2) Calculate the average in the odds object

// let average = 0; 
// let odd = Object.values(game.odds)

// for(let key of odd){
// average += key / odd.length
// }
// console.log(average.toFixed(2));


// 3) Print the team and the odd
for(let [key, odd] of Object.entries(game.odds)){
    const teamStr = (key === 'x') ? 'draw' : `victory ${game[key]}`
    console.log(`Odd of ${teamStr} : ${odd}`);
} */



// - - - - - - - - - - - - - - - - - FUCTIONS: DEFAULT PARAMETERS- - - - - - - - - - - - - - - - - 

/* const bookings = []

const createBooking = (flightNum = 1, numPassenger = 10, price = 199) => {
    const booking = {
        flightNum,
        numPassenger,
        price,
    }
    console.log(booking);
    bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123', 2, 800);
 */

// - - - - - - - - - - - - - - - - - HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE - - - - - - - - - - - - - - - - - 

/* 
const flight = "LH234";
const jonas = {
    name: 'Jonas Connor',
    passport: 12345678,
}

const checkIn = (flightNum, passenger) => {
    flightNum = 'LG999';
    passenger.name = 'Mr.' + passenger.name

    if (passenger.passport === 12345678) {
        console.log('CHECKED IN!');
    } else {
        console.log('Wrong passport!');
    }
}

// checkIn(flight, jonas)
// console.log(flight);
// console.log(jonas);


const newPassport = (person) => {
person.passport = Math.trunc(Math.random() *  1000000)
}
newPassport(jonas)
checkIn(flight, jonas)

//Passing by VALUES
//Passiing by REFERENCE ⛔️ Does not work in JavaScript only on C++! */



// - - - - - - - - - - - - - - - - - FIRST CLASS AND HIGHER ORDER FUNCTIONS - - - - - - - - - - - - - - - - - 

/*  const oneWord = (str) => {
    return str.replace(/ /g, '').toLowerCase();
};

const uppFirstWord = (str) => {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//Higer-order function
const transformer = (str, fn) => {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Trasformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', uppFirstWord) 

 */

// - - - - - - - - - - - - - - - - - RETURNING FUNCTIONS- - - - - - - - - - - - - - - - - 

//greet
//name of the person
// greeterHey


// const firstname = (name) => {
//      return function(lastname){
//         console.log(`${name} ${lastname}`);
//     }
// }

// let fullname = firstname('Nicole')
// fullname('Kidman')

// //All in one go

// firstname('John')('Connor')

// const transformers = (name) => (lastname) => console.log(`${name} ${lastname}`);
// transformers("Optimus")('Prime')

// - - - - - - - - - - - - - - - - - The call and Apply Method- - - - - - - - - - - - - - - - - 

/* const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNumber, passengerName) {
        console.log(`${passengerName} booked a sit on ${this.airline}. \nFlight: ${this.iataCode}: ${flightNumber}`);
        this.bookings.push({
            flight: `${this.iataCode}: ${flightNumber}, ${passengerName}`
        })
    }
}

lufthansa?.book('123', 'Jonas')
lufthansa?.book(635, 'Mike Smith')
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

//Does not work!
// book(23, 'Sarah Connor')


//CALL METHOD
book.call(eurowings, 23, 'Sarah Connor')
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa);

//APPLY METHOD
const flightData = [345, 'George Cooper'];
book.apply(eurowings, flightData)
console.log(eurowings);

//BIND METHOD
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
bookEW(23, 'Steve Williams')
bookLH('999', 'Sofia Orlando')

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Maria Jonsson')
bookEW23('Martha Wayne')

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){

    console.log(this);

    this.planes++
    console.log(this.planes);
}
 */
// - - - - - - - - - - - - - - - - - CLOSURES   - - - - - - - - - - - - - - - - - 

/* //Example 1
function createCounterBox() {
    let counter = 0; // This is the counter variable that we want to keep track of

    function increaseCounter() {
        counter = counter + 1; // When you press the button, we increase the counter by 1
        console.log('Counter:', counter); // Show the current count on the screen
    }

    return increaseCounter; // Return the button function so you can use it later
}

let firstCounterBox = createCounterBox(); // Get the first counter box
let secondCounterBox = createCounterBox(); // Get the second counter box

firstCounterBox();
firstCounterBox();
secondCounterBox();


//Example 2
function fullname(firstname) {
    return function (lastname) {
        console.log(`${firstname} ${lastname}`);
    }
}

let displayName = fullname('John')
displayName('Connor')
 */

// - - - - - - - - - - - - - - - - - ARRAYS   - - - - - - - - - - - - - - - - - 

/* 
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice());


//SPLICE
// console.log(arr.splice(2));
console.log(arr.splice(-1))
console.log(arr);


//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);


//CONCAT
const letter = arr.concat(arr2)
console.log(letter);
console.log([...arr, ...arr2]); //Same thing with the spread 


//JOIN
console.log(letter.join(' - '));

let people = ['Anna', 'John', 'Carlos', 'Lina'];

//SHIFT & UNSHIFT
people.shift()
people.unshift('Kimberly', 'Rebecca')
people.unshift('Anna')
people.shift()

console.log(people);


//The new AT method in 2022
const array = [23, 11, 64];
console.log(array[0]);
console.log(array.at(0));

//Getting the last element
console.log(array[array.length - 1]);
console.log(array.slice(-1)[0]);

//AT method
console.log(array.at(-1));

console.log('jonas'.at(-1));

 */


// - - - - - - - - - - - - - - - - - ARRAYS - - - - - - - - - - - - - - - - - 

//Looping over
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for(let key of movements){
  if(key >= 0){
    console.log(`You deposited ${key}`);
  } else{
    console.log(`You withdrew ${Math.abs(key)}`);

  }
}  */



//Looping the index with the ENTRIES method!

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (let [i, movement] of movements.entries()) {
    if (movement >= 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i +1}: You withdrew ${Math.abs(movement)}`);

    }
}
 */

// //FOREACH
// movements.forEach((values) => {
//     if (values >= 0) {
//         console.log(`${values} is positive!`);
//     }
//     else {
//         console.log(`${Math.abs(values)} is negative!`);
//     }
// })


/* //With the INDEX
console.log("- - - - - - -");
movements.forEach((values, index) => {
    if (values >= 0) {
        console.log(`Movement ${index + 1}: You deposindexted ${values}`);
    }
    else {
        console.log(`Movement ${index +1}: You withdrew ${Math.abs(values)}`);
    }
})


// //RANDOM METHODS: Sum the values
// let num = [1, 2, 3, 4, 5];
// let total = 0;

// //forEach
// num.forEach((value) => total += value)
// console.log(total);

// //reduce
// console.log(num.reduce((acc, curr) => acc + curr))
 */

// - - - - - - - - - - - - - - - FOREACH WITH MAPS AND SETS - - - - - - - - - - - - - - - - - - - 

/* //MAP
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);


  currencies.forEach((value, key) =>{
    console.log(key +': '+ value);
  })

//SET

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique);

currenciesUnique.forEach((value, key) =>{
    console.log(`${key}: ${value} `);
}) */


// - - - - - - - - - - - - - - - EXERCISES - - - - - - - - - - - - - - - - - - - 

/* 
// Test Data 1
// 1) Julia's data [3, 5, 2, 12, 7]
// 2) Kate's data [4, 1, 15, 8, 3]

// Test Data 2
// 1) Julia's data [9, 16, 6, 8, 3]
// 2) Kate's data [10, 5, 6, 1, 4]

let checkDogs = (dogsJulia, dogsKate) => {
    const dogsJuliaCorrected = dogsJulia.slice(); // Creating a shallow copy
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
  
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);
  
    dogs.forEach((value, i) => {
      if (value >= 3) {
        console.log(`Dog number ${i + 1} is an adult, and is ${value} years.`);
      }
      else {
        console.log(`Dog number ${i + 1} is still a puppy 🐶`);
      }
    })
  }
  
  // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
  checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])
  
*/


// - - - - - - - - - - - - - - - EXERCISES - - - - - - - - - - - - - - - - - - - 


/* 
Test Data 1: [5, 2, 4, 1, 15, 8, 3];
Test Data 2: [16, 6, 10, 5, 6, 1, 4]

Dog <= 2 : humanAge = 2 * dogAge
Dog > 2 : humanage = 16 + dogAge * 4; 
*/

//let testData = [5, 2, 4, 1, 15, 8, 3];

// 1)
// testData.map((dogAge, i) => {
//     if (dogAge <= 2) {
//         console.log(`Dog ${i + 1} is ${2 * dogAge} human-years`);
//     } else {
//         console.log(`Dog ${i + 1} is ${16 + (dogAge * 4)} human-years`);
//     }
// })


// const calcAverageHumanAge = (ages) => {
//     const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     const adults = humanAges.filter((age) => age >= 18)
//     const average = adults.reduce((acc, curr) => acc + curr, 0) / adults.length


//     console.log(average);
//     console.log(humanAges);
//     console.log(adults);
// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

// 2) 
//Only use by chaining methods
// const calcAverageHumanAge = (ages) => {
//     const humanAges = ages.map((age) => age <= 2 ? 2 * age : 16 + age * 4).filter((age) => age >= 18).reduce((acc, curr, index, array) => acc + curr / array.length, 0)
//     console.log(humanAges);
// }

// calcAverageHumanAge(testData)


// - - - - - - - - - - - - - - - PIPELINE/CHAINING METHODS - - - - - - - - - - - - - - - - - - - 


/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const eurToUsd = 1.1;
//PIPELINE
const totalDepositsUSD = movements.filter((mov) => mov > 0).map((mov) => mov * eurToUsd).reduce((acc, curr) => acc + curr, 0)

console.log(totalDepositsUSD); */

// - - - - - - - - - - - - - - - FLAT & FLATMAP - - - - - - - - - - - - - - - - - - - 


/* //Flat
const overallBalance = accounts.map((acc) => acc.movements).flat().reduce((acc, curr) => acc + curr, 0)
console.log(overallBalance);

//FlatMap
const overallBalance2 = accounts.flatMap((acc) => acc.movements).reduce((acc, curr) => acc + curr, 0)
console.log(overallBalance2); */


// - - - - - - - - - - - - - - - SORTING ARRAYS- - - - - - - - - - - - - - - - - - - 


//1.
/* const bankDepositSum = accounts.flatMap((value) => value.movements).filter((val) => val > 0).reduce((acc, curr) => acc + curr, 0)

console.log(bankDepositSum); */

//2. 
// const numDeposits1000 = accounts.flatMap((value) => value.movements).filter((value) => value >= 1000).length;
// console.log(numDeposits1000); 

//Reduce

// const numDeposits1000 = accounts.flatMap((value) => value.movements).reduce((acc, curr) => curr >= 1000 ? acc + 1 : acc , 0)
// console.log(numDeposits1000);

// let a = 10; 
// a++
// console.log(a);

//3.

/* const {deposits, withdrawals} = accounts.flatMap((value) => value.movements).reduce((acc, curr) => {

  curr > 0 ? ( acc.deposits += curr) : (acc.withdrawals += curr)
  return acc;

}, { deposits: 0, withdrawals: 0 })

console.log(deposits, withdrawals); */


//4. 

/* const convertTitleCase = (title) => {
const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

const titleCase = title.toLowerCase().split(' ').map((word) => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ')

return titleCase
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not to long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE')); */


// - - - - - - - - - - - - - - - ARRAY METHODS IN PRACTICE - - - - - - - - - - - - - - - - - - - 


/* 1)  Loop over the array containing dog objects, and for each dog, calculate the recommended food
 portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array.
  Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
 */

// const dogs = [
//     { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//     { weight: 8, curFood: 200, owners: ['Matilda'] },
//     { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//     { weight: 32, curFood: 340, owners: ['Michael'] }
// ];


// // 1)
// dogs.forEach((dog) => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));
// console.log(dogs);

// /* 
//   2)  Find Sarah's dog and log to the console whether it's eating too much or too little.
//       HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so
//       this one is a bit tricky (on purpose) 🤓
// */

// let sarahDog = dogs.find((dog) => dog.owners.includes('Sarah'));
// console.log(`Sara's dogs is eating too ${sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'}.`);


// /* 
//   3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch')
//      and an array with all owners of dogs who eat too little ('ownersEatTooLittle'). 
// */

// let ownersEatTooMuch = dogs.filter((value) => value.curFood > value.recommendedFood).flatMap((value) => value.owners)
// console.log(ownersEatTooMuch);

// let ownersEatTooLittle = dogs.filter((value) => value.curFood < value.recommendedFood).flatMap((value) => value.owners)
// console.log(ownersEatTooLittle);

// /* 
// 4. Log a string to the console for each array created in 3., like this: 
//    "Matilda, Sarah and John's dogs eat too much!" and "Alice, Bob and Michael's dogs eat too little!"
// */

// let eatTooMuch = ownersEatTooMuch.join(' and ');
// let eatTooLess = ownersEatTooLittle.join(' and ');

// console.log(`${eatTooMuch}'s dogs eat too much.`);
// console.log(`${eatTooLess}'s dogs eat too little.`);


// /* 
//  5. Log to the console whether there is any dog eating EXACTLY the amount 
//     of food that is recommended (just true or false)
// */


// console.log(dogs.some((value) => value.curFood === value.recommendedFood));

// /* 
//  6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// */

// const checkEatingOkey = (dog) => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
// let result = dogs.some(checkEatingOkey)
// console.log(result);

// /* 
//     7. Create an array containing the dogs that are eating an OKAY amount of food
//      (try to reuse the condition used in 6.)
//  */

// let eatingOkey = dogs.filter(checkEatingOkey)
// console.log(eatingOkey)

// /* 
//     8. Create a shallow copy of the dogs array and sort it by recommended food portion in an 
//     ascending order (keep in mind that the portions are inside the array's objects) 
// */

// const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);

// console.log(dogsSorted);




// - - - - - - - - - - - - - - - ARRAY METHODS IN PRACTICE - - - - - - - - - - - - - - - - - - - 




//Array Destructuring
// const { owners: [matilda] } = dogs.find(({owners}) => owners.includes('Matilda'))
// console.log(matilda); 



/* const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];
 */
/*
    1)  Loop over the array containing dog objects, and for each dog, calculate the recommended food
        portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array.
        Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
 */



/*
  2)  Find Sarah's dog and log to the console whether it's eating too much or too little.
      HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so
      this one is a bit tricky (on purpose) 🤓
*/


/* dogs.forEach((dog) => {
    if (dog.owners.includes('Matilda')) {
        dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
        const foodStatus = dog.recommendedFood > dog.curFood ? 'eating too much' : 'eating too little';
        console.log(`${dog.owners.join(' and ')}'s dog is ${foodStatus}.`);
    }
}); */



/*
  3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch')
     and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
*/



/*
4. Log a string to the console for each array created in 3., like this:
   "Matilda, Sarah and John's dogs eat too much!" and "Alice, Bob and Michael's dogs eat too little!"
*/



/*
 5. Log to the console whether there is any dog eating EXACTLY the amount
    of food that is recommended (just true or false)
*/



/*
 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
*/

// HINT 2: Being within a range 10% above and below the recommended portion means:
//  current > (recommended * 0.90) && current < (recommended * 1.10). 
// Basically, the current portion should be between 90% and 110% of the recommended portion.


// let checkEatingOkey = ((dog) => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10));



/*
    7. Create an array containing the dogs that are eating an OKAY amount of food
     (try to reuse the condition used in 6.)
 */



/*
    8. Create a shallow copy of the dogs array and sort it by recommended food portion in an
    ascending order (keep in mind that the portions are inside the array's objects)
*/




// - - - - - - - - - - - - - - - (NUMBERS) - - - - - - - - - - - - - - - - - - - 

/* console.log(23 === 23.0);

//Conversions
console.log(Number('23'));
console.log(+"23");

//Parsing
console.log(Number.parseInt('30px'));

console.log(Number.parseFloat('2.5rem'));

//Checking if value is NAN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20px'));
console.log(Number.isNaN(23 / 0));

//Checking if value is a number
console.log(Number.isFinite(20 / 0));
console.log(Number.isFinite(10)); */

// - - - - - - - - - - - - - - - DATE - - - - - - - - - - - - - - - - - - - 

//Create date
/* const now = new Date();
console.log(now);

console.log(new Date('December 24, 2015'));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); */

//Working with dates
/* const future = new Date(2037, 10, 19, 15, 23)
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142253380000));

console.log(Date.now());
future.setFullYear(2040)
console.log(future); */

//Calculating Dates

/* const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future));

const calcDaysPassed = (date1, date2) => {
    return Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
}

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14))
console.log(days1); */


/* const calcDates = (input1, input2) => {
    const date1 = new Date(input1);
    const date2 = new Date(input2);

    const timeDifference = date2.getTime() - date1.getTime();
    const daysDifference = Math.abs(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference
}

console.log(calcDates('2023-06-30', '2023-07-25') + ' days');
 */

/* const now = new Date();
const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
}

const locale = 'sv-SE';

const time = new Intl.DateTimeFormat(locale, options).format(now);
console.log(time); */

/*
const num = 1234567.23;

const options = {
    style: 'currency',
    unit: 'celsius',
    currency: 'EUR',
    // useGrouping: false
}

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Sweden: ', new Intl.NumberFormat('sv-SE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));

 */



// - - - - - - - - - - - - - - - SET TIMEOUT - - - - - - - - - - - - - - - - - - - 

/* const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2}🍕`), 2000, ...ingredients);

console.log('Waiting...');

if (ingredients.includes('spinach')) {
    clearTimeout(pizzaTimer)
} */

// - - - - - - - - - - - - - - - SET INTERVAL - - - - - - - - - - - - - - - - - - - 

/* setInterval(() =>{
    const now = new Date();
    console.log(now);
}, 3001); */


// - - - - - - - - - - - - - - - CREATING A CLOCK - - - - - - - - - - - - - - - - - - - 


/* const clock = setInterval(() => {
    const now = new Date();
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    const time = new Intl.DateTimeFormat('sv-SE', options).format(now);
    console.log(time);
}, 1000); // 1000 milliseconds = 1 second

 */

//EXPERIMENTING
/* const greeting = (name) => {
    console.log(`Hello ${name}!`);
};

const clock = setTimeout(() => {
    greeting('Anna');
}, 2000) */

// - - - - - - - - - - - - - - - CREATING AN ALARM - - - - - - - - - - - - - - - - - - - 

/* let time;

let tick = () => {
    let min = String(Math.trunc(time / 60)).padStart(2, 0);
    let sec = String(Math.trunc(time % 60)).padStart(2, 0);

    console.log(`${min}:${sec}`);

    if (time === 0) {
        clearInterval(timer);
        console.log('⏰');
    }

    time--;
}

time = 5;
const timer = setInterval(tick, 1000);
tick(); */


// - - - - - - - - - - - - - - - OOP - - - - - - - - - - - - - - - - - - - 


/* const Person = function (firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //NEVER DO THIS!
    // this.calcAge = function(){
    //     console.log(2037-this.birthYear);
    // }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);


// 1. New {} empty object is created!
// 2. Functions is called, this = {}
// 3. {} linked to a prototype
// 4. function automatically return {}


const matilda = new Person('Matilda', 1995)
const jack = new Person('Jack', 2000)
console.log(jack);
console.log(matilda);

console.log(jonas instanceof Person);


//Prototypes    <- - - 
console.log(Person.prototype);
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();


//Example
Person.prototype.species = 'Homo Sapiesn'
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));


//Example with arrays

const arr = [3, 6, 4, 5, 9, 2, 1]
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__); */



// - - - - - - - - - - - - - - - OOP EXERCISE- - - - - - - - - - - - - - - - - - - 

/* // 1)
const Car = function (brand, speed) {
    this.speed = speed;
    this.brand = brand;
}


// 2)
Car.prototype.accelerate = function () {
    console.log(`${this.speed += 10} km/h`)
}

// 3) 
Car.prototype.brake = function () {
    console.log(this.speed -= 5);
}


// 4)

let ferrari = new Car('Ferrari', 20);
let testla = new Car('Tesla', 40);

ferrari.accelerate()
ferrari.brake()
ferrari.accelerate()

testla.accelerate()
testla.accelerate()
testla.brake()
 */

// - - - - - - - - - - - - - - - ES6 CLASSES- - - - - - - - - - - - - - - - - - - 

/* class Person{
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //Methods will be added to .prototype property
    calcAge(){
        console.log(2037 - this.birthYear);
    }
}

const jessica = new Person('Jessica', 1990);
console.log(jessica);
jessica.calcAge()

//You can still use prototype 
Person.prototype.greet= function(){
    console.log('Hello ' + this.firstName);
}

jessica.greet()

// 1. Classes are NOT hoisted
// 2. Classes are first-class-citizens
// 3. Classes are executed in strict mode

 */


// - - - - - - - - - - - - - - - SETTERS AND GETTERS- - - - - - - - - - - - - - - - - - - 

/* const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(mov){
        return this.movements.push(mov)
    }
}

account.latest = 50

console.log(account.movements); */

// - - - CLASSES

/* class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log('Hello ' + this.fullName);
    }

    get age(){
        return 2037 -this.birthYear;
    }

    //Set a property that already exists!
    set fullName(name){
        if(name.includes(' ')){
            this._fullName = name
        }else{
            alert('Enter fullname!')
        }
    }

    get fullName(){
        return this._fullName
    }
}

const jessica = new Person('Jessica Davis', 1990)
console.log(jessica);

const walter = new Person('Walter Wallace', 1995)

jessica.calcAge()
jessica.greet()

console.log(jessica.age) */


// - - - - - - - - - - - - - - - EXERCISES II - - - - - - - - - - - - - - - - - - - 


/* class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate() {
        console.log(`${this.brand} is going at ${this.speed += 10} km/h`);
    }

    break() {
        console.log(`${this.brand} is going at ${this.speed -= 5} km/h`);
    }


    get speedUS() {
        console.log(`${this.brand} is going at ${this.speed / 1.6} ml/h`);

    }

    set speedUS(speed) {
        console.log(this.speed = speed * 1.6)
    }
}


let ford = new Car('Ford', 120)
ford.speedUS;
ford.accelerate()
ford.accelerate()
ford.speedUS;

ford.speedUS = 50
console.log(ford);

 */


// - - - - - - - - - - - - - - - INHERITANCE CONSTRUCTOR FUNCTIONS- - - - - - - - - - - - - - - - - - - 

/* 
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}


const Student = function (firstName, birthYear, course) {
   Person.call(this, firstName, birthYear)
    this.course = course;
}

//Linking Prototypes
Student.prototype = Object.create(Person.prototype)


Student.prototype.introduce = function () {
console.log(`My name is ${this.firstName}, I'm studying ${this.course}.`);
}

Student.prototype.constructor = Student;
const mike = new Student('Mike', 1990, 'Computer Science');
console.log(mike);

mike.introduce()
mike.calcAge() */


// - - - - - - - - - - - - - - - INHERITANCE CLASSES ES6- - - - - - - - - - - - - - - - - - - 

/* class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log('Hello ' + this.fullName);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    //Set a property that already exists!
    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name
        } else {
            alert('Enter fullname!')
        }
    }

    get fullName() {
        return this._fullName
    }
}

const jessica = new Person('Jessica Davis', 1990)
console.log(jessica);

const walter = new Person('Walter Wallace', 1995)

jessica.calcAge()
jessica.greet()



class StudentCl extends Person {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear) //Always need to happen first!
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this._fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old.`);
    }
}

const martha = new StudentCl('Martha Jones', 1995, 'Computer Science');
console.log(martha);

martha.introduce()
martha.calcAge()
 */



// - - - - - - - - - - - - - - - INHERITANCE BETWEEN CLASSES: OBJECT.CREATE - - - - - - - - - - - - - - - - - - - 


/* const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear)
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);

jay.init('Jay', 1980, 'Computer Science')
jay.introduce()
console.log(jay); */


// - - - - - - - - - - - - - - - PRIVATE CLASS FIELDS AND METHODS - - - - - - - - - - - - - - - - - - - 

// 1)Public fields
// 2)Private fields
// 3)Public methods
// 4)Private methods
// (there is also the static version)

class Account {
    //Public fields
    locale = navigator.language;

    // 2) Private fields (instances)
    #movements = [];
    #pin;


    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;

        //Protected property
        this.#pin = pin;
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // 3) Public method
    //Public interface

    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val)
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        // if (this.#approveLoan(val)) {
        if (this._approveLoan(val)) {
            this.deposit(val)
            console.log('Loan approved! 💰');
        }
    }

    //4) Private methods
    // #approveLoan(val) {
        _approveLoan(val){
        return true;
    }

    static helper(){
        console.log('Helper!');
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);


acc1.deposit(500);
acc1.withdraw(100)
acc1.requestLoan(1000)
console.log(acc1.getMovements());

//Static
Account.helper()



