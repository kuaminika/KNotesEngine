const express = require('express');
// Import the controller module
const usersController = require('./controllers/homeController');
const app = express();
const ejs = require('ejs');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.json());

// Mount the controller on the '/users' route
app.use('/', usersController);
console.log("set homecontroller")

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});