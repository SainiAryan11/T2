var expr = require('express');
var app = expr();

obj = [{name:"A",age:18},{name:"B",age:20},{name:"C",age:21}];

app.get("/",(req,res)=>{
    res.send(obj);
});

app.get('/sorted',(req,res)=>{
    res.type('text/html');
    const result = obj.sort((a,b)=>b.age-a.age);
    for (i of result){
        res.write("<b>"+i.name+"="+i.age+"</b>")
    }
    res.send();
});

app.listen(3001);