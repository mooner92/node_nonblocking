const mysql = reqire('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'test'
});

connection.query