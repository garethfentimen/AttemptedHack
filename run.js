var https = require('https');
var querystring = require('querystring');
var request = require('request');

if (process.env.NODE_ENV !== 'production'){
  require('longjohn');
}

var username = 'email@gmail.com';

var formData = {
      sp_csrf: 'faafc4cc9d162bb45f1f4156a1b00ce67cc4bd2e',
      email_or_username: 'garethfentimen@gmail.com'
    };

var contentLength = Buffer.byteLength(formData);

var options = {
	host: 'www.spotify.com',
	port : 443,
	path: '/uk/xhr/json/reset-password.php',
	method: 'POST',
	headers: { 
        'Content-Length': 93,
        'Pragma': 'no-cache',
		'Cache-Control':'no-cache',
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'X-Requested-With': 'XMLHttpRequest',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'en-GB,en-US;q=0.8,en;q=0.6'
	}
};

console.log("about to make request with", options);

var req = request.post( { url: 'https://www.spotify.com/uk/xhr/json/reset-password.php', form: formData }, function(err, httpResponse, body) {
	
	console.log("statusCode: ", httpResponse);
	if (err) {
		return console.error('Failed:', err);
	}
	console.log('Successful!  Server responded with:', body);
});

req.on('error', function(e) {
  console.error(e);
});

req.end();

// options = {
//   hostname: 'encrypted.google.com',
//   port: 443,
//   path: '/',
//   method: 'GET'
// };

// var req = https.request(options, function(res) {
//   console.log("statusCode: ", res.statusCode);
//   console.log("headers: ", res.headers);

//   res.on('data', function(d) {
//     process.stdout.write(d);
//   });
// });
// req.end();