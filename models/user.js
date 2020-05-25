const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String,
    post: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'}
    ],
  }, {
    timestamps: true
  });

module.exports = mongoose.model('User', userSchema);