let name = "Node.js";
const version = 2.0;

/*function greet(user){
    return `Hello ${user}`;
} */
//arrow function
const add = (a,b) => a+b;

const greet = (user) => {
    return `Hello ${user}`;
}
console.log(greet('Guys'));
console.log(add(5,500));