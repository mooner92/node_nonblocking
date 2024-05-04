const obj1 = {}
const obj2 = {message : "no empty"}
const num = 1
const str = "one"
const str2 = ""
console.log(Object.keys(obj1).length === 0) //len = 0
console.log(Object.keys(obj2) === 0) //len = 1

console.log(Object.keys(obj1).length === 0) //len = 1
console.log(Object.keys(obj2) === 0) //len = 0
//문자열도 객체라 가능함

function isEmpty(obj){
    if (obj.constructor == Object) //타입이 object가 맞냐
    if(Object.keys(obj).length === 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEmpty(str)) //true