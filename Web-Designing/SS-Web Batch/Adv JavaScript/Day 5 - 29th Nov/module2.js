// import * as m1 from './module1.js';
// Import all

// m1.sayHi();
// m1.sayHello();
// console.log(m1.PI);

import {sayHi, sayHello, PI} from './module1.js';

sayHello();
sayHi();
console.log(PI);

import * as m3 from './module3.js';
import User from './module3.js';

m3.sayHi();
m3.sayHello();
console.log(m3.PI);
console.log(User);

const u = new User("Ashish");
console.log(u);






