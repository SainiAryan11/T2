var expr = require('express');
var app = expr();
var path = require('path');

app.use(expr.static('../public',{index:'form1.html'}));
app.use(expr.urlencoded({extended:true}));

app.post('/data',(req,res)=>{
    fname = req.body.uname;
    pass = req.body.pwd;
    res.send(`Welcome ${fname}, Your Password is ${pass}.`);
});

app.listen(5663);

// http://localhost:5663/       //Loads from.html