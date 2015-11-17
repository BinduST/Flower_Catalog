var http = require('http');
var fs = require('fs');

var showPage = function (path) {
	if(path.match(/\/guestBook.html\?/)){
		var splittedUrl = path.match(/\/guestBook.html\?name=(.*)&comment=(.*)/);
		var name = splittedUrl[1];
		var comment = splittedUrl[2];
		return fs.writeFileSync(name,comment);
	}
	else 
	if(path == "/")
		return fs.readFileSync("../html/index.html");
	else
		var file = fs.readFileSync(".."+path);
	return file;
};

var writeInfo = function () {
	console.log(arguments);

};
var requestListener = function (req,res) {
	console.log(req.url);
	var url = req.url;
	console.log(url);
	res.end(showPage(url));
};

var server = http.createServer(requestListener);
server.listen(4000);