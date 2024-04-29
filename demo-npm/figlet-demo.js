//figlet모듈을 가져와 figlet에 담아준다.
var figlet = require("figlet");

//매개변수 전달 
figlet("hello", function (err, data) {
    //익명함수를 쓰는 이유 = 이 함수를 쓸 일이 다른데는 없어서
    //제작자가 이렇게 만들어서 그런갑다 하면 됨
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  //첫 번째 매개변수 "hello" 문자열을 받아서.
  //아스키 아트를 만든 다음에
  //두 번째 매개변수 function 함수를 실행(콜백)
  console.log(data);
});