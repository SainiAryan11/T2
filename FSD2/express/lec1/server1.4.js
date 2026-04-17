var expr = require('express');
var app = expr();

app.get("/",(req,res)=>{
    res.type('text/html');
    res.send(`<h1>Hello</h1>`);
});

app.get('/about',(req,res)=>{
    res.type('text/html');
    res.send(`<h1>About Page</h1>`);
});

app.get('/contact',(req,res)=>{
    res.type('text/html');
    res.send('<h1>Contact Page</h1>');
})

app.listen(3000);