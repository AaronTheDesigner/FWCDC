const Date = require('../Models/Date');

module.exports = async(req, res) => {
    const dates = await Date.find({}).populate();
    
    res.render('home', {
        dates
    })
}