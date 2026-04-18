var expr = require('express');
var app = expr();
var path = require('path');
sp = path.join(__dirname,'/../public');

app.use(expr.static(sp));

app.get('/',(req,res)=>{
    res.sendFile(sp + '/form.html');
});

app.listen(5772);

// http://localhost:5772/   // Loads index.html if index.html present and Loads form.html if index.html not present