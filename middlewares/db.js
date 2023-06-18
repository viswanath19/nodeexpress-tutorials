const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root'
});

connection.connect((err)=>{
    if(err) {
        console.error("Error occurred while connecting to mysql db", err);
    }
    console.log("Connection to mysql db is successfull");
});

export default connection;