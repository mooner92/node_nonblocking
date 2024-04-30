//map의 method에 대해 알아보자
const arr = [1,2,3,4,5]


const foreachArr = arr.forEach(function(n,k,m){
    console.log(n + " "+ k + " " +m);
    return n*2
})

const mapArr = arr.map(function(n,k,m){
    console.log(n + " "+ k + " " +m);
    return n*2
})

console.log(`foreach의 return ${foreachArr}, map으로 리턴하면 ${mapArr}`)
//foreach의 return undefined, map으로 리턴하면 2,4,6,8,10
//foreach는 리턴이 안됨 undifined가 나오지만, map은 리턴하여 새로운 어레이에 저장이 가능함
