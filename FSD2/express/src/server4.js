var expr = require('express');
var app = expr();
var path = require('path');

app.use(expr.static('../public',{index:'form.html'}));

app.get('/data',(req,res)=>{
    fname = req.query.uname;
    pass = req.query.pwd;
    res.send(`Welcome ${fname}, Your Password is ${pass}.`);
});

app.listen(5662);

// http://localhost:5662/       //Loads from.html