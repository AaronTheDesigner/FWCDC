const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');


//User model
const User = require('../Models/User');


//__LOGIN__\\

// Login Get
router.get('/login', (req, res) => res.render('login'));

// Login Post
router.post('/login/', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dash',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next)
})

// Logout Handle(get)
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('login');
})



//__REGISTER__\\

// Register Get
router.get('/register', (req, res) => res.render('register'));

// Register Post
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];
    
    // check required fields
    if(!name || !email || !password || !password2) {
        errors.push({msg: 'Please fill in all fields.'});
    }

    // check password match
    if(password !== password2) {
        errors.push({msg: 'Passwords do not match.'})
    }

    // check password length
    if(password.length < 6) {
        errors.push({msg: 'Password should be greater that 6 characters.'})
    }

    // re render
    if(errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        // Validation passed
        // Find existing user
        User.findOne({ email: email })
            .then(user => {
                if(user) {
                    errors.push({msg: 'Email is already registered.'})
                    res.render('register', {
                        //user exists
                        errors,
                        name,
                        email,
                        password,
                        password2
                    });
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });

                    // hash password
                    bcrypt.genSalt(10, (err, salt) => 
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;
                            // set password to hashed
                            newUser.password = hash;
                            // save user
                            newUser.save()
                                .then(user => {
                                    
                                    res.redirect('/dash');
                                })
                                .catch(err => console.log(err))
                        }));
                }
            });
    }
});



module.exports = router;