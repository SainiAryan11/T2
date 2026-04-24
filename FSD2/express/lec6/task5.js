var expr = require('express');
var app = expr();
var session = require('express-session');

app.use(session({
    secret:"This is secret key",
    resave:false,
    saveUninitialized:false
}));

app.use(expr.static('./',{index:"session.html"}));

app.get('/save',(req,res)=>{
    req.session.uname = req.query.uname;
    req.session.pwd = req.query.pwd;
    res.redirect('/fetch');
});

app.get('/fetch',(req,res)=>{
    if (req.session.uname == 'admin' & req.session.pwd == 'admin@123'){
        res.send(`Welcome ${req.session.uname}
                <a href='/destroy'>Logout</a>`);
    } else {
        res.send(`Please Enter Valid Username and Password.
            <a href='/'>Login</a>`)
    }  
});

app.get('/destroy',(req,res)=>{
    req.session.destroy();
    res.send(`Session Destroyed
            <a href='/'>Login</a>`);
});

app.listen(5558);


