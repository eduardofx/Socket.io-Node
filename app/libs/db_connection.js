var mongoose = require('mongoose');
var connection;

module.exports = function() {
  if (!connection) {
    connection = mongoose.connection.openUri('mongodb://127.0.0.1/son_curso_socketio');
  }
  return connection;
}
