const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: { type: String, required: true  },
    email: { type: String, required: true, unique: true  },
    password: { type: String, required: true },
    isBlocked: { type: Boolean, default: false  }
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;

