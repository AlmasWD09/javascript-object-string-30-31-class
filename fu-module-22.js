// ========= packtice one ============
// function maxNumber(num1,num2){
//    if(num1 > num2){
//     return num1;
//    }
//    else{
//     return num2;
//    }
// }
// const getMax = maxNumber(56,39);
// const getMax2 = maxNumber(80,15);
// const max = maxNumber(getMax, getMax2)
// console.log('compaire the maximum number',max);

// ========== packtice two ======== Solve ===========
// function maxNumber2(jim, tim, kim){  
//     if(jim > tim && jim > kim){
//         return jim;
//     }
//     else if(tim > jim && tim > kim){
//         return tim;
//     }
//     else{
//         return kim;
//     }
// }
// const maximum2 = maxNumber2(10, 15, 8);
// console.log(maximum2);




// function maxNumber2(num1, num2, num3){     // aita ok aca
//     if(num1 > num2 && num1 > num3){
//         return num1;
//     }
//     else if(num2 > num1 && num2 > num3){
//         return num2;
//     }
//     else{
//         return num3;
//     }
// }
// console.log(maxNumber2(10, 15, 8));



// ========== packtice three ========== ok =========

// const arr = [5, 6, 1, 18, 7];

// function highNumber(numbers){  
//    let maximum =  numbers[0];
//    let minimum =  numbers[0];
//    for (const item of numbers) {
//         if(maximum < item){
//             maximum = item;
//         }
//         else if(minimum > item){
//             minimum = item;
//         }   
//    }

//    console.log(maximum); //    1 ta retun korta parban but 2 ta retun korta hola array/obj ar modda rakta hova
//    console.log(minimum);
// }
// highNumber(arr)
// const checkNumber = highNumber(arr);
// console.log(checkNumber);


// =========== packtic four ===============
// function woodNumber(chairQuantity, tableQuantity, badQuantity){
//     const parChairWood = 3  //feet;
//     const parTableWood = 2  //feet;
//     const parBadWood = 8  //feet;
//     const chairTotalWood = chairQuantity * parChairWood;
//     const tableTotalWood = tableQuantity * parTableWood;
//     const badTotalWood   = badQuantity   * parBadWood;
//     const totalWood = chairTotalWood + tableTotalWood + badTotalWood;
//    return totalWood;
// }
// const total = woodNumber(0, 2, 3);
// console.log(total);


//  ========== packtice five ===================
// doita obj ar poprty ke dora comapire kora and small price retun kora Module = 21.4




//  ========== packtice five ===================
// const products = [
//     { name: 'shampo', price: 300, quantity: 2},
//     { name: 'chiruni', price: 100, quantity: 3},
//     { name: 'shirt', price: 700, quantity: 5},
//     { name: 'pant', price: 1200, quantity: 1},
// ]

// function getPrice(productName){
//     let sum = 0;
//     for (const item of productName) {
//         const thisProductCost = item.price * item.quantity;
//         sum = sum + thisProductCost;
//     }
//     console.log(sum);
// }
// getPrice(products)


//  ========== packtice six ===================

// function discountPrice(quantity){
//     if(quantity <= 100){
//         const total = quantity *100;
//         return total
//     }
//     else if(quantity <= 200){
//         const total = quantity * 90;
//         return total;
//     }
//     else{
//         const total = quantity * 70;
//         return total
//     }
// }
// const total = discountPrice(3);
// console.log(total);