const express = require('express');
const app = express();
const path = require('path');


// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


// Routes
app.use(require('./routes/index'))


// Static Files



// Server Starts
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})