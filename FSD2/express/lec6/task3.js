var expr = require('express');
var app = expr();
var session = require('express-session');

app.use(session({
    secret:'This is a secret key',
    resave:false,
    saveUninitialized:false
}));

app.get('/',(req,res)=>{
    if(req.session.a){
        req.session.a++;
        res.send(`You visited this page ${req.session.a} times`);
    } else {
        req.session.a=1;
        res.send(`Welcome User`);
    }
});

app.listen(5555);

// http://localhost:5555/