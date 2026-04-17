var expr = require('express');
var app = expr();

app.use(expr.static('./'));

app.listen(5678);

// http://localhost:5678/a.jfif     // Loads a.jfif
// http://localhost:5678/           // Loads index.html linked with style.css