const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
mongoose.connect("#", { useNewUrlParser: true });

mongoose.set('useCreateIndex', true);

const userSchema = new mongoose.Schema({
	username: { type: String, unique: true },
	password: String
});

userSchema.methods.comparePass = function(pass1, pass2, callback) {
	bcrypt.compare(pass1, pass2, function(err, isMatch) {
		if(err) {
			return callback(err);
		};
		
		callback(null, isMatch);
	});
}

var UserModel = mongoose.model('UserModel', userSchema);


module.exports = UserModel;