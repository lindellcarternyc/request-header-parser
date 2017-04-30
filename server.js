var express = require("express");
var app     = express();



app.get('/api/whoami', (req, res) => {
   res.send('/api/whoami'); 
});

app.get('*', (req, res) => {
   res.send('hello'); 
});
var port = 8080;
app.listen(port, () => {
   console.log(`app listening on port ${port}`); 
});