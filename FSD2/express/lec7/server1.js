var expr = require('express');
var app = expr();
var f = require('./api.js');
app.use('/p',f);
app.listen(5223);