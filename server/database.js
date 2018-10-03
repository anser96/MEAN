const mongoose = require('mongoose');

const url = 'mongodb://localhost/mean-crud';

mongoose.connect(url)
		.then(db => console.log('db is conected'))
		.catch(err => console.error(err));

module.exports = mongoose;