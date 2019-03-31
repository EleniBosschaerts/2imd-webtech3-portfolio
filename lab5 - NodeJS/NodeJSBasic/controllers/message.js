const Message = require('../models/message')

//GET /api/v1/messages
// messageController
let get = (req, res, next) => {
  Message.find({}, (err, docs) => { //  Message = mongoose.model
    if (err) {
      res.send(err);
    }
    res.json({
      "status": "success",
      "data": {
        "messages": "GETTING messages", // docs
        "content": docs
      }
      // = object json binnenin json
    });
    //console.log(docs);
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

//DELETE /api/v1/messages/:id

let delete = (req, res) => {
  Message.remove({_id: req.params._id }, (err, message) => {
    if (err) {
      res.send(err);
    }
    res.json({
      "message": "DELETING a message with id id",
      "status": "Successfully deleted contact"
    });
  });
}


/*
let delete = (req, res) => {
  res.send('DELETE request to homepage');
}
*/
/*let delete = (req, res) {
  res.send('DELETE request to homepage');
  /*Message.find({}, (err, docs) => {
    if (messages.id === id) {
        //db.splice(index, 1);
        docs = "DELETING a message with id id";
        res.json({
            "status": "success",
            "data": {
              "messages": docs
            }
        }
    });
  });
});

  /* vb.
  const id = parseInt(req.params.id, 10);
    Message.find({}, (err, docs) => { //  Message = mongoose.model
            if (messages.id === id) {
              db.splice(index, 1);
              docs = "POSTING a new message for user Pikachu";
                    res.json({
                      "status": "success",
                            "data": {
                              "messages": docs //"POSTING a new message for user Pikachu" 
                            }
                    })
            }
    })
    */


//module.exports.delete = delete;


/*
app.delete('/api/v1/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.map((todo, index) => {
    if (todo.id === id) {
       db.splice(index, 1);
       return res.status(200).send({
         success: 'true',
         message: 'Todo deleted successfuly',
       });
    }
  });
    return res.status(404).send({
      success: 'false',
      message: 'todo not found',
    });
});
*/


//GET /api/v1/messages?user=username
//TIP req.params.username