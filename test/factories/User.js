const { User } = require('../../models/User');

const validUser = new User({
    email: 'abc123@gmail.com',
    password: 'password123'
});

const emptyEmail = new User({
    password: 'password123'
});

const emptyPassword = new User({
    email: 'abc123@gmail.com'
});

module.exports = { validUser, emptyEmail, emptyPassword };