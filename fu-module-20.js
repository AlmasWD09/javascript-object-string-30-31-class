// ========== packtice one ==============
// Squaire number.......
// function squaire(num){
//     const x = num*num;
//     console.log(x);
// }
// squaire(3)
// Ans: 9

// ========== packtice two ==============
// addition number..................
// function add(num1,num2){
//     const x = num1 + num2;
//     console.log(x);
// }
// add(10, 5)
// Ans:15

// ========== packtice three ==============
// NaN............
// function addAll(a, b, c, d){
//     const x = a + b + c + d;
//     console.log(x);
// }
// addAll(2, 3, 4)
// Ans: NaN

// ========== packtice four ==============
// Substruction(-)..........
// function subtruction(num1, num2){
//     const different = num1 - num2;
//     console.log('Total Age Different: ',different);
// }
// const fatherAge = 40;
// const motherAge = 35;
// subtruction(fatherAge, motherAge);
// Ans: 5


// ========== packtice five ==============
// retun.........
// function add2(price1, price2){
//     const sum = price1 + price2;
//     return sum;
// }
// const result = add2(2, 5)
// console.log('retun number:', result);
// Ans: 7

// ========== packtice six (provlem)==============
// retun..........
// ========== NOT OK ===========
// function doMath(num1, num2){
//     const addition = num1 + num2;
//     const subtruction = num1 - num2;
//     return addition,subtruction
// ========= NOT OK ============
// }
// const result = doMath(6, 5);
// console.log(result);

// ========== packtice seven ==============
// retun for Condition........
// function condition(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(condition(5));
// console.log(condition(4));

// ========== packtice eight ==============
// string length.........
// function string(str){
//     const size = str.length;
//     if(size % 2 !== 0){
//         return size;
//         // ========= NOT OK ======
//         // return ('Even number',size) karon backet ar modda coma(,/'') use kora java na BUT array/obj retun kora java;
//         // ========= NOT OK ======
//     }
//     else{
//         return size;
//         // ========= NOT OK ======
//         // return ('Odd number',size);
//         // ========= NOT OK ======
//     }
// }

// const num1 = string('Dhaka')
// const num2 = string('Faka')
// console.log(num1, num2);

//  ============= packtice nine ================
// function addNumber(number, dubleNumber){
//     if(dubleNumber){
//         const result = number * 2;
//         return result;
//     }
//     else{
//         const result2 = number * 3;
//         return result2;
//     }
// }
// const num1 = addNumber(5,true)
// const num2 = addNumber(3,false)
// console.log(num1, num2);

//  ============= packtice ten ================
// function arraySum(num){
//     let sum = 0;
//     for (const i of num) {
//         sum = sum + i;
//     }
//    return sum
// }
// const result = arraySum([2, 5, 6, 8, 5]);
// console.log(result);


// =========== packtice eleven ==============
// function evenNumber(numbers){
//     let even = [];
//     for (const number of numbers) {
//         if(number % 2 === 0){
//            even.push(number)
//         }
//     }
//     return even;
// }
// const arr = evenNumber([2,3,5,8,6,7]);
// const result = arr.join(' ')
// console.log(result);
// ==================== OR ============== provlem aca =========
// function oddNumber(numbers){
//     const odd = [];
//    for(const number of numbers){
//     if(number % 2 !== 0){
//         odd.push(number)
//     }
//    }
//    return odd;
// }

// const arr = oddNumber([2, 3, 5,9,7,2]);


// function sumOdd(para){
//     let oddSum = [];
//   for(const num of para){
//     if(num % 2 !== 0){
//         oddSum = oddSum + num
//     }
//   }
//   return oddSum;
// }
// const result = sumOdd(arr);
// console.log(result);

// ========== packtice task twelve ===========
// function multiply(numbers){
//     if(numbers % 2 === 0){
//         const x = numbers * 2;
//         return x;
//     }
//     else{
//         const x = numbers / 2;
//         return x;
//     }
// }
// console.log(multiply(4));
// console.log(multiply(5));


// ========== packtice task thirthy ===========
// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// ---
// SUM AND averageNumber ..............
// function avg(num){
//     const x = num;
//     const lng = x.length;
//     let sum = 0;
//     for(let i = 0; i < x.length; i++){
//         sum = sum + x[i]
//     }
//     const result = sum / lng
//     return result;
// }
// const averageSum = avg([2, 7, 3, 8]);
// console.log(averageSum);

// ========== packtice task fourthi ===========
// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
// Check for OddNumber and EvenNumber.............
// function oddEven(number){
//     if(number % 2 === 0){
//       return 'Even Number'
//     }
//     else{
//         return 'Odd Number';
//     }
// }
// console.log(oddEven(8));