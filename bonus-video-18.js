// ============= packtice task one ==========================
// Reverse an array..........
// const fruits = ['apple', 'orange', 'mango', 'banaba', 'jakfout'];
// const reverse = [];
// for(let i = 0; i < fruits.length; i++){
//     const currentValue = fruits[i];
//     reverse.unshift(currentValue);
// }
// console.log(reverse);

// const emptyArray = [];
// for(let i = fruits.length -1; i >= 0; i--){
//     const current = fruits[i];
//     emptyArray.push(current)

// }
// console.log(emptyArray);



// ============= packtice task two ==========================
// Addition of numbers in array............

// const numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const currentNumber = numbers[i];
//     sum = sum + currentNumber;
// }
// console.log(sum);




// ============= packtice task three ==========================
// Swap array element...........

// const  numbers = [10, 20, 30, 40, 50];
// let temp = numbers[1];
// numbers[1] = numbers[3];
// numbers[3] = temp;
// console.log(numbers);



// ============= packtice task foure ==========================
// Find array element.................






// ============= packtice task five ==========================
// Find max/min number in array.............

// const  number1 = [70, 20, 30, 5, 15, 40, 50];
// let maxNumber = number1[0];
// let minNumber = number1[0];

// for(let i = 0; i < number1.length; i++){
//     const currentNumber = number1[i];

//     if(maxNumber < currentNumber){
//         maxNumber = currentNumber;
//     }
//     else if(minNumber > currentNumber){
//         minNumber = currentNumber;
//     }
// }
// console.log(maxNumber);
// console.log(minNumber);


// ============= packtice task six ==========================
// Filter an array...........

// const  number1 = [5, 15, 7, 10, 20, 25, 30];

// const filterHistory = [];
// for(let i = 0; i< number1.length; i++){
//     const currentNum = number1[i];

//    if(currentNum < 18){
//     filterHistory.push(currentNum) 
//    }

// }
// console.log(filterHistory);


// ============= packtice task seven ==========================
// Calcolate Discount........
// const  num = [5, 15, 7, 10, 20, 25, 30];

// const discount = []
// for(let i = 0; i <num.length; i++){
//     const currentNum = num[i];
//     if(currentNum > 18){
//         const calcolate = currentNum - currentNum*10 /100;
//         discount.push(calcolate)
//     }
// }
// console.log(discount);

// ============= packtice task eight ==========================
// Ques: 'Bangladesh is a small country';
// Ans : 'yrtnuoc llams a si hsedalgnaB';
const sentence = 'Tomar name ki';
// let reverse = '';
// for (const letter of sentence) {
//     reverse = letter + reverse;
// }
// console.log(reverse);
// const rev = sentence.split('').reverse().join('')
// console.log(rev);
// ================== javascript module--20 ==================
// const course = {
//     sumbect: 'java',
//     date : '3 april'
// }
// function courseDetails(obj){
//     const x = obj;
//     const y = x.date;
//     return y;
// }
// console.log(courseDetails(course)); 