var expr = require('express');
var app = expr();

app.get('/user/:id',(req,res)=>{
    var id=req.params.id;
    var name = req.query.name;
    var mark = req.query.mark;
    res.json(
        {
            "message":"Data recieved",
            "params":{"id":id},
            "query":{name,mark}
        }
    );
});

app.listen(3000);

// http://localhost:3000/user/44?name=aryan&mark=24