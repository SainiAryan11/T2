var expr = require('express');
var app = expr();
var path = require('path');
sp = path.join(__dirname,'/../public');

// Without using app.use(expr.static(sp)) , form file loads without using style.css

app.get('/',(req,res)=>{
    res.sendFile(sp + '/form.html');
});

app.listen(5772);