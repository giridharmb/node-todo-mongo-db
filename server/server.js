
mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var User = mongoose.model('User', {
   email: {
       type: String,
       required: true,
       trim: true,
       minLength: 1
   }
});

var user = new User({
    email: 'giri@cloud.com'
});

user.save().then ( (doc) => {
    console.log('Saved todo', JSON.stringify(doc, undefined, 4));
}, (err) => {
    console.log("Unable to save todo:" , err);
});