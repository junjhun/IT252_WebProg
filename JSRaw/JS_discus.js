// // // Functions
// // // 1. Function declaration 
// // function add(a, b) {
// //     return a + b;
// // }

// // console.log(add(10, 5));
// // Hoisted and Own this.variable
// // Hoisted: yes, Own this: yes

// // // 2. Function expression
// // const subtract = function(minuend, subtrahend) {
// //     return minuend - subtrahend;
// // }
// // Hoisted: No, Own this: yes

// // console.log(subtract(10, 5));

// // // 3. Anonymous function/callback
// // // btn.addEventListener('click', function() {
// // //     console.log('Button clicked!');
// // // });
// //  hoisted: no, own this: yes


// // // 4. Arrow function
// // const multiply = (x, y) => x * y;
// // console.log(multiply(10, 5));
// // hoisted no, own this: no


// // const human = {
// //     fname: "Evan",
// //     lname: "Roman",
// //     sayHi_Old: function() {
// //         console.log(`Hi, my name is ${this.fname} ${this.lname}`);
// //     },

// //     sayHi_Arrow: () => {
// //         console.log(`Hi, my name is ${this.fname} ${this.lname}`);
// //     }
// // }

// // human.sayHi_Arrow();

// // Destructuring
// // Object and Array
// const student = {
//     name: "Jah",
//     course: "TMBY",
//     age: 7
// }

// const { name, course, age, status="active" } = student;


// // Spread
// const numbers = [1, 2, 3, 4, 5];
// const new_array = [...numbers, 6, 7, 8];

// console.log(new_array);

// Declarative Array Methods
const students = [
    { id: 1, fname: "Thirdy", lname:"Senior", score: 90 },
    { id: 2, fname: "Forty", lname: "Gengar", score: 68 },
    { id: 3, fname: "Darna", lname: "Prudenciado", score: 98},
]

// .filter()
const passing = students.filter((s) => s.score >= 70);
console.log(passing)

// 2. .map()
const labels = passing.map(({fname, score}) => `${fname}: ${score}%`);
console.log(labels);

// 3. .find()
const search_student = students.find((s) => s.id === 2);
console.log(search_student);

// 4. .reduce()
const totalScore = students.reduce((total, s) => total + s.score, -10);
console.log(totalScore);





