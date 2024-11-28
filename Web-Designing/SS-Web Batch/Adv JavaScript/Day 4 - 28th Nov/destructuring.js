console.log(Math);

// const PI = Math.PI;
// const E = Math.E;
// const sqrt = Math.sqrt;

// Destructuring
const {PI, E, sqrt} = Math;

console.log(PI);
console.log(E);
console.log(sqrt(9));

const user1 = {
    id: 1,
    name: "Muskan",
    age : 21,
    marks: 90 
}

const user2 = {
    id:2,
    name: "Deepraj",
    age: 21
}

// const {name, age, marks} = user1;
// Default property value
const {name, age, marks=0} = user2;
console.log(name, age, marks);

const c1 = {
    name: "CircleX",
    radius: 2
}

const c2 = {
    name: "CircleY",
    radius: 4
}

const circleArea = (radius) => {
    return PI * radius * radius;
}

console.log(circleArea(c1.radius));
console.log(circleArea(c2.radius));

// CircleX: 12.566370614359172

const circleArea1 = (radius, name) => {
    return `${name}: ${PI*radius*radius}`;
}

console.log(circleArea1(c1.radius, c1.name));
console.log(circleArea1(c2.radius, c2.name));

c3 = {
    name: 'CircleZ',
    radius: 3,
    precision: 2
}
console.log(circleArea1(c3.name, c3.radius));

const circleArea2 = ({radius, name})=> {
    return `${name}: ${PI*radius*radius}`;
}

console.log(circleArea2(c1));
console.log(circleArea2(c2));
console.log(circleArea2(c3));

// toFixed reduce the decimal values
const circleArea3 = ({radius, name, precision})=> {
    return `${name}: ${(PI*radius*radius).toFixed(precision)}`;
}

console.log(circleArea3(c1));
console.log(circleArea3(c2));
console.log(circleArea3(c3));

console.log("************** Array Destructing **********************");

const arr = [1,2,3,4,5,6]

console.log(arr[0]);
console.log(arr[2]);

// const [first, second] = arr
// console.log(first);
// console.log(second);

// const [first, , third, fourth] = arr;
// console.log(first, third, fourth);

// rest/spread operator => ...

// ... left hand called rest operator
// ... right hand called spread operator

const [first, second, ...restOfEl] = arr
console.log(first, second);
console.log(restOfEl);
 
// (...args)

arr1 = [10, 20, ...arr];
console.log(arr1);

arr2 = [40, ...arr1, 50, ...restOfEl];
console.log(arr2);

const testObj = {
    temp1: 10,
    temp2: 20,
    name: "XYZ",
    temp3: 30,
    age: 30,
    rollNo: 2
};

const {temp1, temp2, temp3, ...person} = testObj;
console.log(temp1, temp2, temp3, person);

function summation(x, ...nums){
    for (let i in nums){
        x+= nums[i]
    }
    return x;
}

console.log(summation(10,20, 30));
console.log(summation(12,2, 30, 23,7,4,5,6));

stud = {...person, gender: "male"}
console.log(stud);

stud1 = {
    ...person, name:"Ragini", gender:"female"
}
console.log(stud1);




