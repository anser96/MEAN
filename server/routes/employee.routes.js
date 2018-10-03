const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
	res.json({
		status: 'joder tio'

	});

});

module.exports = router;