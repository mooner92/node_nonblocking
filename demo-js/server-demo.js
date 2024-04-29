let http = require('http');

function onRequest(request, resonse){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('hello Node.js');
    response.end();
}

http.createServer(onRequest).listen(8888);
//http 모듈에 createServer 함수에서 할 일을 다 한 다음에
// onRequest 콜백 함수를 실행시켜달라고 매개변수로 던진 것