// ========= packtice task one =========
// ### Task-1
// Access the `golden rod` color value in output.
// ```
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// ```
// ---
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// const x1 = colors['golden rod'];
// console.log(x1);

// ========= packtice task two =========
// ### Task-2
// For this object below add a property named `passenger capacity` with value 5
// ```js
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// ```
// ---
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// car['passenger capacity'] = 5;
// console.log(car);



// =================== packtice task three =======================
// ### Task-3
// Display the physics marks as output.
// ```js
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// ``` 
// const student1 = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     },
// };
// const x = student1.physics.marks;
// console.log(x);


// =================== packtice task four =======================
// ### Task-4

// Count the `number of properties`.

// **Input:**
// <br>
// ```js
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// ```
// **Output:**

// <br>

//     4
// ---
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// let poprtyName = Object.keys(student);
// console.log(poprtyName.length);

// =========== packtice task five ===============
// ### Task-5 (Hard)

// Loop through an object and print the key-value pairs with their `types`

// **Input:**
// <br>

// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true

// };

// **Output:**

// <br>

//     key: name | type:  string
//     key: age | type:  number
//     key: city | type:  string
//     key: isStudent | type:  boolean
// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };
// for (const key in myObject) {
//    const x = `key: ${key} | type: ${typeof myObject[key]}`
//    console.log(x);
// }
