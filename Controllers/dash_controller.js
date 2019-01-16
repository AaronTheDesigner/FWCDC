//--REQUIREMENTS--\\
const async = require('async');
const Date = require('../Models/Date');



//--DASHBOARD HOME--\\
exports.index = async(req, res) => {
    const dates = await Date.find({}).populate();
    
    res.render('dash', {
        dates
    })
}



