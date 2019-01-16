const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const Class = require('../Models/Class');

const async = require('async');




//--CLASS--\\
// GET request for creating a Class
exports.class_create_get = function(req, res){
    res.send('Class Create Get')
}

// POST request for creating a Class
exports.class_create_post = function(req, res){
    res.send('Class Create Post')
}

// GET request for deleting a Class
exports.class_delete_get = function(req, res){
    res.send('Class Delete Get')
}

// POST request for deleting a Class
exports.class_delete_post = function(req, res){
    res.send('Class Delete Post')
}

// GET request for updating a Class
exports.class_update_get = function(req, res){
    res.send('Class Update Get')
}

// POST request for updating a Class
exports.class_update_post = function(req, res){
    res.send('Class Update Post')
}

// GET request for a single Class
exports.class_detail = function(req, res){
    res.send('Class Detail')
}

// GET request for a list of all Classes
exports.class_list = function(req, res){
    res.send('Class List')
}