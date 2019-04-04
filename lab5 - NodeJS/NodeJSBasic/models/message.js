// begin basis setup
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let messagesSchema = new Schema({
  user: String,
  text: String
});
let Message = mongoose.model('Message', messagesSchema); // soort classe  // Message = mongoose.model
// eind basis setup

module.exports = Message;