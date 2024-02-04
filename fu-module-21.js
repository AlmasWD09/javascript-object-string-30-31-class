// ========== packtice one =========
// function searchInch(inch){
//     const x = inch / 12;
//     return x;
// }
// const shovoHeight = searchInch(75);
// console.log(shovoHeight);

// ========= packtice two ==========
// function feetInch(inch2){
//    const feet = inch2 / 12;
//    const prFeet = parseInt(feet);
//    const remainInch = inch2 % 12;
//    const result = prFeet+ 'feet' + ' ' + remainInch+ 'inch';
//    return result
// }
// const total = feetInch(75);
// console.log(total);

// ========= packtice three ==========
// function milesKm(kilo){
//     const miles = kilo * 1.60934
//     console.log(miles);
// }
// milesKm(4)

// ========= packtice four ====== Solve ====

// function leapYear(number){
//     if(number % 400 === 0  || (number % 100 !== 0  && number % 4 === 0)){
//        return true;
//     }else{
//         return false;
//     }
// }
// const result = leapYear(2000);
// console.log(result);


// ========= packtice five ==========
// function oddNumber(numbers){
//     const odds = [];
//     for(const number of numbers){
//         if(number % 2 !== 0){
//            odds.push(number)
//         }
//     }
//     let sum = 0;
//  for(const num of odds){
//     sum+= num;
//  }
//  const lng = odds.length;
//  const avg = sum / lng;
//  return avg;
// }
// const arr = [2, 5, 6, 8, 3, 7, 9,8, 1];
// const result = oddNumber(arr);
// console.log('totla Odd Numbers Average :', result);
// Ans: 5


// ================== packrice six ========== IMPORTANT DOPLICATE NUMBER/NAME =========

// const arr = [2, 4, 3, 5, 2, 3]
// function duplicate(numbers){
//     let unique = [];
//    for(const item of numbers){
//         if(unique.includes(item) === false){
//             unique.push(item)
//         }
//    }
//    return unique;
// }
// const result = duplicate(arr); 
// console.log(result);