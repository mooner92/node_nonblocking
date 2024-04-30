function add1(x,y){return x+y} //일반적인 함수 선언 방법

let add2 = function(x,y){return x+y} // 함수 이름을 어떻게 작성하냐의 차이 -> 모듈화를 위해

//arrow function
const add3 = (x,y) =>{return x+y}  //그냥 함수 대신해서 쓰려고 나온 것 잘 쓰면 편한 정도

//리턴을 바로 화살표로 반환
var add4 = (x,y)=>x+y


console.log(add1(1,2))
console.log(add2(1,2))
console.log(add3(1,2))
console.log(add4(1,2))