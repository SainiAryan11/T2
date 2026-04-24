var expr = require('express');
var app = expr();
var session = require('express-session');

app.use(session({
    secret:"This is secret key",
    resave:false,
    saveUninitialized:false
}));

app.use(expr.static('./',{index:"form.html"}));

app.get('/savesession',(req,res)=>{
    req.session.uname = req.query.uname;
    req.session.pwd = req.query.pwd;
    res.redirect('/fetch');
});

app.get('/fetch',(req,res)=>{
    res.send(`Welcome ${req.session.uname}
        <a href='/destroy'>Logout</a>`);
});

app.get('/destroy',(req,res)=>{
    req.session.destroy();  // destroy session at server saveUninitialized
    res.clearCookie('connect.sid');     // clears cookie connect.sid , so session automatically gets destroyed
    res.redirect('/');
});

app.listen(5556);

// http://localhost:5556/