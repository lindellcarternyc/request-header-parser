var express = require("express");
var app     = express();
var uaParser = require("express-useragent");



app.get('/api/whoami', (req, res) => {
    var ipaddress = req.ip.split(':')[3];
    
    var language = req.acceptsLanguages()[0];
    
    var userAgent = uaParser.parse(req.get('User-Agent'));
    var os = userAgent.os;
    var platform = userAgent.platform;
    var browser = userAgent.browser;
    
    var software = {
      os,
      platform,
      browser
    };
    
    var obj = {
      ipaddress,
      language,
      software
    };
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(obj));
});

app.get('*', (req, res) => {
   res.send('hello'); 
});
var port = 8080;
app.listen(port, () => {
   console.log(`app listening on port ${port}`); 
});
