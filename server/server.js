const express = require('express');
const app = express();
const logger = require('morgan');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
var cors = require('cors'); // For CORS errors

const UserModel = require('./lib/User');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	return res.send('Hello World!\n');
});

app.post('/', function(req, res, next) {
	app.use(cors({origin: 'http://localhost:8080'}));

	UserModel.findOne({username: req.body.username}, function(err, dataUser) {
		if(err) {
			return res.status(500).send('Something went wrong');
		}

		if(!dataUser) {
			const BCRYPT_SALT_ROUNDS = 12;
	
		  bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS).then(function(hashedPassword) {
		    var user = new UserModel({
					username: req.body.username,
					password: hashedPassword
		    }).save(function(err, data) {
					if(err) {
					return res.status(500).send('Something went wrong!');
					}
					res.redirect('http://localhost:8080/#/blog');
				})
		  });
		}

		else {
			dataUser.comparePass(req.body.password, dataUser.password, function(err, isMatch) {
				if(err || !isMatch) {
					return res.redirect('http://localhost:8080/');
				}

				res.redirect('http://localhost:8080/#/blog ');
			});
		}
	});
});

app.listen(3000, function() {
	return console.log('Listening on port 3000');
});