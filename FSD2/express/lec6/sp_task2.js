var expr = require('express');
var app = expr();
var session = require('express-session');

app.use(session({
    secret:"This is secret key",
    resave:false,
    saveUninitialized:false
}));

app.use(expr.static('./public'));
app.use(expr.urlencoded({extended:true}));

app.post('/login',(req,res)=>{
    req.session.uname = req.body.uname;
    res.redirect('/order.html');
});

app.post('/order',(req,res)=>{
    req.session.item = req.body.item;
    req.session.qty = req.body.qty;
    res.redirect('/summary');
})

app.get('/summary',(req,res)=>{
    res.send(`Welcome ${req.session.uname}
            Your Prodct: ${req.session.item}
            Quantity: ${req.session.qty}
            <a href='destroy'>Logout</a>`);
});

app.get('/destroy',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
});

app.listen(5559);

