var expr = require('express');
var app = expr();

app.get(`/:id`,(req,res)=>{
    res.send("User with id = "+ req.params.id);
});

app.listen(5007);

// http://localhost:5007/02