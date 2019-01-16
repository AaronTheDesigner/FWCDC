const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const Date = require('../Models/Date');

const async = require('async');

//--DATE--\\
// GET request for creating a Date
exports.date_create_get = function(req, res){
    res.render('date_create')
}

// POST request for creating a Date
exports.date_create_post = [
    
    //Validate Fields
    body('title').isLength({ min: 1 }).trim().withMessage('Title must be specified.'),
    body('class').isLength({ min: 1 }).trim().withMessage('Class must be specified.'),
    body('description').isLength({ min: 1 }).trim().withMessage('Description must be specified.'),
    body('date').isLength({ min: 1 }).trim().withMessage('Date must be specified.'),
    body('day').isLength({ min: 1 }).trim().withMessage('Day must be specified.'),
    body('month').isLength({ min: 1 }).trim().withMessage('Month must be specified.'),
    body('time').isLength({ min: 1 }).trim().withMessage('Time must be specified.'),

    //Sanitize Fields
    sanitizeBody('title').trim().escape(),
    sanitizeBody('class').trim().escape(),
    sanitizeBody('description').trim().escape(),
    sanitizeBody('date').trim().escape(),
    sanitizeBody('day').trim().escape(),
    sanitizeBody('month').trim().escape(),
    sanitizeBody('time').trim().escape(),

    //Process request after validation and sanitation.
    (req, res, next) => {
        //Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('date_create', { title: 'Create Date', date: req.body, errors: errors.array() });
            return;
        }
        else {
            //Data form form is valid

            // Create Date object with escaped and trimmed data.
            // title, class, description, date, day, month, time
            var date = new Date(
                {
                    title: req.body.title,
                    class: req.body.class,
                    description: req.body.description,
                    date: req.body.date,
                    day: req.body.day,
                    month: req.body.month,
                    time: req.body.time
                });
            date.save(function (err) {
                if (err) {return next(err);}
                //Successful - redirect
                res.redirect('/dates');
            });
        }
    }
];

// GET request for deleting a Date
exports.date_delete_get = function(req, res){
    res.send('Date Delete Get')
}

// POST request for deleting a Date
exports.date_delete_post = function(req, res){
    res.send('Date Delete Post')
}

// GET request for updating a Date
exports.date_update_get = function(req, res){
    res.send('Date Update Get')
}

// POST request for updating a Date
exports.date_update_post = function(req, res){
    res.send('Date Update Post')
}

// GET request for a single Date
exports.date_detail = function(req, res){
    res.render('date_detail')
}

// GET request for a list of all Dates
exports.date_list = async (req, res, next) => {
    const dates = await Date.find({}).populate();
    res.render('date_list', {dates})
}