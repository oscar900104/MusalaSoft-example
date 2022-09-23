const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'gatewaybd'

});

connection.connect((error)=>{
    if(error){
        console.log('An error as ocurred' + error)
    }
    else{
        console.log('connected to database')
    }
});

module.exports = connection;