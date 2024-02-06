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


// ========== packtice seven =============
// function add(num1, num2){
//     return num1 + num2;
// }
// function sibstre(num1, num2){
//     return num1 - num2
// }
// function multiply(num1 , num2){
//     return num1 * num2;
// }
// function divide(num1, num2){
//     return num1 / num2;
// }

// function calcolate(a,b, oparation){

//     if(oparation === 'add'){
//         const result = add(a,b) //ai khana function call korci /upera ar function ta.
//         return result;
//     }
//     else if(oparation === 'substre'){
//         const result = sibstre(a,b)
//         return result;
//     }
//     else if(oparation === 'multiply'){
//         const result = multiply(a,b)
//         return result;
//     }
//     else if(oparation === 'divide'){
//         const result = divide(a,b)
//         return result;
//     }
//     else{
//         return "Only 'add', 'substre', 'multiply', 'divide' Operation is allowed "
//     }
// }
// const result2 = calcolate(6, 3, 'add');
// console.log(result2);


// ========= packtice eight ===========
// function multiply(num1, num2){
//     // Validation part start ==============
//     if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
//         return "please provide an number"
//     }
//     // Validation part end ==============
//    const mult = num1 * num2;
//    return mult;
// }
// const result3 = multiply(3,'5');
// console.log(result3);

// ========== packtice nine ==========
// function fullName(first, second){
//     // ========== validation part start =============
//     if(typeof(first) !== 'string'){
//         return "first name should be an string"
//     }
//     else if(typeof(second) !== 'string'){
//         return "second name should be an string"
//     }
//     // ========== validation part end ===============
//     const full = first+ ' ' +second;
//     return full;
// }
// const result = fullName({name:'almas'},{name:'mia'})
// console.log(result);

//  ============== packtic ten ==================
// function productPrice(products){
//     // ========== validation part start ============
//     if(typeof(products) !== 'object' || Array.isArray(products) === false){
//         return "please should be an object"
//     }
//     // ========== validation part end ==============
//     const pabo = products.price
//     return pabo;
// }
// const obj = [22];
// // const obj = {name:'chulkani', price:300, quantity:2}
// const result = productPrice(obj);
// console.log(result);

// ================ packtice eleven =======================
function details(info){
    if(typeof(info) !== 'object'){
        return "input should be an object"
    }
    else if(!info.name || !info.age){
        return "object must contain name and age"
    }
    else if(typeof(info.name) !== 'string'){
        return 'name should be an string'
    }else if(typeof(info.age) !== 'number'){
        return "age should be an number"
    }
    else if(info.age <= 0){
        return 'age should be an positive number'
    }
    const x = info;
    return x;
}
const obj = details({name:'almas',age:23});
console.log(obj);