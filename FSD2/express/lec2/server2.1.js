var expr = require('express');
var app = expr();

app.get('/data',(req,res)=>{
    name = req.query.uname;
    age = req.query.age;
    res.send("Name="+name+", age="+age);
});

app.listen(5678);

// http://localhost:5678/data?uname=abc&age=28