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

// - - - - - - - - - - - - - - - - - THE NULISH COALESCING OPERATOR (??) - - - - - - - - - - - - - - - - - 


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
