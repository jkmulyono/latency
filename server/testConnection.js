   // testConnection.js
   const mysql = require('mysql2');

   const db = mysql.createConnection({
       host: '',
       user: '',
       password: '',
       database: ''
   });

   db.connect(err => {
       if (err) {
           console.error('Error connecting to the database:', err);
           return;
       }
       console.log('Connected to the database');
       db.end(); // Close the connection
   });
