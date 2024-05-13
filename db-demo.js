const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'mypassword', 
    timezone : 'Asia/Seoul',
    database : 'Youtube',
    dateStrings : true
});

connection.query(
    'SELECT * FROM `users`',
    function(err, results, fields){
        //console.log(results);
        // var arr = [1,2,3];
        // console.log(arr[0]);
        var {id,email,name} = results[0];
        console.log(id);
        console.log(email);
        console.log(name);
    }
)