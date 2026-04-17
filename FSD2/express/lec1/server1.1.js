var express = require('express');
var app = express();

app.get("/",(req,res)=>{
    res.set('Content-Type','text/html');
    // res.type('text/html');
    res.send(`<h1>Hello</h1>`);
});
app.listen(3000,()=>{
    console.log('server started');
});