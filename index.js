//--REQUIREMENTS--\\
const express = require('express');
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressEdge = require('express-edge');
const edge = require('edge.js');
const passport = require('passport');
const flash = require('connect-flash');

const app = express();


//--DATABASE--\\
mongoose.connect('mongodb://Aaron:gokuh123@ds147344.mlab.com:47344/fwdcd', { useNewUrlParser: true });
mongoose.Promise = global.Promise;



//--MIDDLEWARE--\\

// Passport Config
require('./config/passport')(passport);

app.use(express.static('public'));

// Session support is required to use ExpresOIDC
app.use(session({
    secret: 'this should be secure',
    resave: true,
    saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(expressEdge);
app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//--CONTROLLERS--\\
const home_controller = require('./Controllers/home_controller');
const docs_controller = require('./Controllers/docs_controller');
const about_controller = require('./Controllers/about_controller');
const contact_controller = require('./Controllers/contact_controller');



//--ROUTES--\\
app.use('/dash', require('./Routes/routes'));
app.use('/users', require('./Routes/users'));

app.get('/', home_controller);

app.get('/about', about_controller);

app.get('/docs', docs_controller);

app.get('/contact', contact_controller);


//--PORT--\\
app.listen(process.env.PORT || 5000, () => {
    console.log('app listening on port 5000')
});



