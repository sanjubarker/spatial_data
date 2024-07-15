const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME    
});

db.connect(err =>{
    if(err){
        console.log('Database connection failed:', err);
        return;
    }else{
        console.log('Connected to the database.');
    }
})

module.exports = db;
