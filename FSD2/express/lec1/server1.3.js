var expr = require('express');
var app = expr();

app.get("/",(req,res)=>{
    let obj = {name:"abc",age:22};
    // res.write(JSON.stringify(obj));
    // res.send(obj);       //send automatically stringify json object
    // res.json(obj);       //json sets mime type to application/json
    res.send(obj.send+"");
});
app.listen(5612);