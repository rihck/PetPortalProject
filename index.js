var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('*/', (req, res) => {
    res.render("home");
});

var portToListen = process.env.PORT || 8080;
app.listen(portToListen, () => console.log('Server Running'));