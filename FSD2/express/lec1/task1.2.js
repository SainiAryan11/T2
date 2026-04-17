var expr = require('express');
var app = expr();

obj = [{name:"A",age:18},{name:"B",age:20},{name:"C",age:21}];

app.get("/",(req,res)=>{
    res.send(obj);
});

app.get("/table",(req,res)=>{
    res.type('text/html');
    res.write('<table>');
});

app.listen(3002);