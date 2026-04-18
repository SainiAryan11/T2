var expr = require('express');
var app = expr();
var path = require('path');
sp = path.join(__dirname,'/../public');

app.use(expr.static(sp));

app.get('/login',(req,res)=>{
    res.sendFile(sp + '/form.html');
});

app.listen(5772);

// http://localhost:5772/       // Loads index.html
// http://localhost:5772/login  // Loads form.html