// ================ packtice one =======================
function details(info){
    if(typeof(info) !== 'object' || !Array.isArray(info) === false){
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