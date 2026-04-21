var expr = require('express');
var app = expr();
var cp = require('cookie-parser');

app.use(cp());
app.use(expr.static('./'));
app.use(expr.urlencoded({extended:true}));

app.post('/data',(req,res)=>{
    const fname = req.body.fname;
    const pwd = req.body.pwd;
    res.cookie('firstname',fname);
    res.cookie('password',pwd);
    res.redirect('/user');
});

app.get('/user',(req,res)=>{
    res.send(`  Welcome ${req.cookies.firstname},
                Your Password is ${req.cookies.password}.`);
});

app.listen(5672);
