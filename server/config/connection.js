const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'localhost:3000/shopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
