const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./C:\Users\SURYA\Desktop\vtu.cgpa'); // db.js directory

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Defined routes and database operations here

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Defined a GET route
app.get('/api/users', (req, res) => {
    // Database operations to fetch users
    res.json({ message: 'Get all users' });
});

// Defined a POST route
app.post('/api/users', (req, res) => {
    // Database operations to create a new user
    res.json({ message: 'Create a new user' });
});

const connection = require('./C:\Users\SURYA\Desktop\vtu.cgpa'); //  db.js directory

// Function to insert a new user into the database
const createUser = (name, email) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
        connection.query(sql, [name, email], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

// Usage example
createUser('John Doe', 'john@example.com')
    .then(result => console.log('User created:', result))
    .catch(err => console.error('Error creating user:', err));

