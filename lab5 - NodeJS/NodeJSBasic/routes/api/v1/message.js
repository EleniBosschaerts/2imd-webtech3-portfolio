var express = require('express');
var router = express.Router();

let messageController = require('../../../controllers/message');
router.get('/api/v1/messages', messageController.get);

module.exports = router;