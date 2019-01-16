const mongoose = require('mongoose');

const Date = require('./Models/Date')

mongoose.connect('mongodb://Aaron:gokuh123@ds147344.mlab.com:47344/fwdcd', { useNewUrlParser: true });

// Date.create({
//   title: 'Date Title 4',
//   class: 'Class 5',
//   description: 'Officia commodo labore laboris aute est sunt ea ex ut fugiat proident. Aliqua occaecat consectetur sint occaecat commodo tempor ullamco non quis nulla amet. Irure Lorem ut esse cupidatat ex irure voluptate officia culpa proident mollit dolore nostrud. Nulla id eu eu proident voluptate cillum. Aliqua ad nostrud adipisicing et voluptate commodo elit duis enim.',
//   date: 12,
//   day: 'Wednesday',
//   month: 'March',
//   time: '8:15am'
// }, (error, date) => {
//     console.log(date)
// });
