var https = require('https');
var querystring = require('querystring');

var url = 'https://www.spotify.com/uk/xhr/json/reset-password.php';
var username = 'email@gmail.com';

var formData = querystring.stringify({
      sp_csrf: 'faafc4cc9d162bb45f1f4156a1b00ce67cc4bd2e',
      email_or_username: 'garethfentimen@gmail.com'
    });

var contentLength = Buffer.byteLength(formData);

var options = {
	host: 'www.spotify.com',
	port : 443,
	path: '/uk/xhr/json/reset-password.php/?' + formData,
	method: 'POST',
	headers: { 
		'Connection': 'keep-alive',
        'Content-Length': 93,
        'Pragma': 'no-cache',
		'Cache-Control':'no-cache',
		'X-NewRelic-ID': 'UQQGV1ZQGwEJU1BbBwA=',
		'Origin':'https://www.spotify.com',
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36',
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'X-Requested-With': 'XMLHttpRequest',
		'Referer': 'https://www.spotify.com/uk/password-reset/',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'en-GB,en-US;q=0.8,en;q=0.6',
		'Cookie': 'spot=%7B%22t%22%3A1433340308%2C%22m%22%3A%22uk%22%2C%22p%22%3Anull%2C%22w%22%3Anull%7D; optimizelyEndUserId=oeu1433340368507r0.2390004084445536; mp_329e66c6399f2a6f728674b8c0062881_mixpanel=%7B%22distinct_id%22%3A%20%2214db9be63a144a-0861ea596-6010157f-15f900-14db9be63a22e7%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.spotify.com%2Fuk%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.spotify.com%22%7D; __utma=269535539.388823021.1433340369.1433340369.1433340369.1; __utmz=269535539.1433340369.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); sp_landing=http%3A%2F%2Fopen.spotify.com%2Fuser%2Fbenfoxall%2Fplaylist%2F0T43RIJv6CP6DcC1a6HryQ; sp_landing_15d=www.spotify.com%2Fpassword-reset%2F; sp_landing_30d=www.spotify.com%2Fpassword-reset%2F; spsess=0d86c1e4b2ff7963d9d477e840894ea671a8f2ff; optimizelySegments=%7B%22172210784%22%3A%22none%22%2C%22172815652%22%3A%22referral%22%2C%22172898846%22%3A%22false%22%2C%22173064250%22%3A%22gc%22%2C%222875100138%22%3A%22true%22%2C%223198770129%22%3A%22true%22%7D; optimizelyBuckets=%7B%7D; _ga=GA1.2.388823021.1433340369; __tdev=cFh2wvgU; __tvis=x51CGSAg; sc.ASP.NET_SESSIONID=tsmxzu52l4stufhidt1eru31; sc.Status=8; ki_t=1440236768214%3B1440236768214%3B1440236768214%3B1%3B1; ki_r=; cookieNotice=1; _gali=password-button-password-submit'
	}
};

console.log("about to make request with", options);

var req = https.request(options, function(res) {
	
	console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
	
	res.on('data', function(d) {
		process.stdout.write(d);
	});
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