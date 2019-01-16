//--REQUIREMENTS--\\
const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');



//--CONTROLLERS--\\
const article_controller = require('../Controllers/article_controller');
const class_controller = require('../Controllers/class_controller');
const dash_controller = require('../Controllers/dash_controller');
const date_controller = require('../Controllers/date_controller');



//--DASHBOARD--\\
router.get('/', ensureAuthenticated, dash_controller.index);



//--DATE--\\
// GET request for creating a Date
router.get('/date/create', ensureAuthenticated, date_controller.date_create_get);

// POST request for creating a Date
router.post('/date/create', ensureAuthenticated, date_controller.date_create_post);

// GET request for deleting a Date
router.get('/date/:id/delete', ensureAuthenticated, date_controller.date_delete_get);

// POST request for deleting a Date
router.post('/date/:id/delete', ensureAuthenticated, date_controller.date_delete_post);

// GET request for updating a Date
router.get('/date/:id/update', ensureAuthenticated, date_controller.date_update_get);

// POST request for updating a Date
router.post('/date/:id/update', ensureAuthenticated, date_controller.date_update_post)

// GET request for a single Date
router.get('/date/:id', ensureAuthenticated, date_controller.date_detail);

// GET request for a list of all Dates
router.get('/dates', ensureAuthenticated, date_controller.date_list)



//--CLASS--\\
// GET request for creating a Class

// POST request for creating a Class

// GET request for deleting a Class

// POST request for deleting a Class

// GET request for updating a Class

// POST request for updating a Class

// GET request for a single Class

// GET request for a list of all Classes



//--ARTICLE--\\
// GET request for creating an Article

// POST request for creating an Article

// GET request for deleting an Article

// POST request for deleting an Article

// GET request for updating an Article

// POST request for updating an Article

// GET request for a single Article

// GET request for a list of all Articles




//--EXPORTS--\\
module.exports = router;