var app = require('express')();
var http = require('http');
var request = require('request');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.get('/', function (req, res) {
	console.log('1');
	if (process.env.NODE_ENV !== 'development') {
		//push kmi
		var url = "http://trk.kissmetrics.com/e?_p=anonymous&_n=Hit+leadathon+link&_k=bc5400c04ec4cb437a997e62c58888ab0300403b&_t=" + new Date().getTime();
		request.get(url, function (err, response, body) {
			if (err) {
				console.log('error: ', err);
			}
		});
	}

	res.redirect('http://debitoor.com/signup-freemium');
});

var server = http.createServer(app);

server.listen(process.env.port || 3000, function () {
	console.log('server is listening');
});