//자바스크립트 배열의 비구조화
const array =[1,2,3,4,5]

//const [num2,num3,num5] = array //순서대로 1,2,3이 들어감
const [,num2,num3,,num5] = array // 순서대로 들어가나 컴마를 계산하여 1,2,3,4,5가 차례대로 들어가게 되고 numk는 array의 k-1인덱스의 값을 가짐


const num1 = array[0]
const num4 = array[3]

console.log(num1)
console.log(num4)

