if(true){
    var num1 = 7;
    const num2 = 3; //블록스코프 중괄호 밖에서 사용 불가
    let num3 = 5; //이것도 블록스코프

    //num2 = 10;
    num3 = 21;
    console.log(num1 + " x "+ num2 + ' = ' + num3);
    console.log(`${num1} X X${num2} = ${num3}`); //템플릿 문자열
    //같은 코드임 tilde 밑에 있는 따옴표 같은 것을 사용하면 됨

}

console.log(num1)
//console.log(num2)
//console.log(num3)