const Message = require('../models/message')

//GET /api/v1/messages OR //GET /api/v1/messages?user=username
// messageController //GET /api/v1/messages?user=username //req.query.user
let get = (req, res, next) => {
  Message.find({}, (err, docs) => { //  Message = mongoose.model
    if (err) {
      res.send(err);
    }
    if(req.query.user){
      let username = req.query.user;
      res.json({
        "status": "success",
        "data": {
          "messages": `GETTING message for username ${username}`
        },
        "username": username
      });
    } else {
      res.json({
        "status": "success",
        "data": {
          "messages": "GETTING messages", // docs
          "content": docs
        }
      });
    }
    
  });
}
module.exports.get = get;

//GET /api/v1/messages/:id > getById
let getById = (req, res, next) => {
  Message.findById(req.params._id, (err, docs) => { //  Message = mongoose.model
    const id = parseInt(req.params.id, 10);
    if (err) {
      res.send(err);
    }
    res.json({
      "status": "success",
      "data": {
        "messages": `GETTING messages with ID ${id}`,
      }
    });
    //console.log(id); // WERKT 🔥
  });
}
module.exports.getById = getById;

//POST /api/v1/messages
let post = (req, res, next) => {
  let user = req.body.user;
  let text = req.body.text;
  let m = new Message();
  m.user = user;
  m.text = text;
  m.save(); // opslaan 
  docsOffline = "POSTING a new message for user Pikachu";
  res.json({
    "status": "success",
    "data": {
      "messages": m,
      "offline": docsOffline
    }
  });
}
module.exports.post = post;

//PUT /api/v1/messages/:id
let put = (req, res, next) => {
  Message.findOneAndUpdate({id: req.params._id }, req.body, { new: true }, (err, message) => {
    const id = parseInt(req.params.id, 10);
    if (err) {
      res.send(err);
    }
    res.json({
      "status": "success",
      "message": `UPDATING a message with id ${id}`,
      "content": message,
      "id": id
    });
  });
}
module.exports.put = put;

//DELETE /api/v1/messages/:id
// let del, ipv delete // want delete werkt niet 
let del = (req, res) => {
  Message.remove({_id: req.params._id }, (err, message) => {
    const id = parseInt(req.params.id, 10);
    if (err) {
      res.send(err);
    }
    res.json({
      "status": "success",
      "message": `DELETING a message with id ${id}`,
      "status": "Successfully deleted a message"
    });
  });
}

module.exports.del = del;


