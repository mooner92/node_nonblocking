//원래는 배열에 사용하려 했던 것
const arr = [1,2,3,4,5]

//배열에서 값을 하나 꺼낸 다음 콜백함수를 실행
//두 번째 인자는 인덱스 (파이썬의 enumerous?와 비슷함)
//세 번째 인자는 배열 전체를 사용
arr.forEach(function(n,k,m){
    console.log(n + " "+ k + " " +m);
})

//Map & forEach
let map = new Map()
map.set(7,'seven')
map.set(8,"eight")
map.set(9,'nine')
map.forEach(function(n,k,m){
    console.log(n + " "+ k + " " +m)
})


map.forEach(a =>{
    console.log(a)
})