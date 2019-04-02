var express = require('express');
var router = express.Router();

/* GET home page. */
// GET /
router.get('/api/v1/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' 
  });
});

let messageController = require('../../../controllers/message');

//GET /api/v1/messages
router.get('/api/v1/messages', messageController.get);

//GET /api/v1/messages/:id
router.get('/api/v1/messages/:id', messageController.getById);

//GET /api/v1/messages?user=username
router.get('/api/v1/messages/?user=username', messageController.get);

//POST /api/v1/messages
router.post('/api/v1/messages', messageController.post);

//PUT /api/v1/messages/:id
router.put('/api/v1/messages/:id', messageController.put);

//DELETE /api/v1/messages/:id
router.delete('/api/v1/messages/:id', messageController.del);

module.exports = router;

