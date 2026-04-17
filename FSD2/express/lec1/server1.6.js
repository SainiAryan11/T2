var expr = require('express');
var app = expr();

app.get(`/user/:id/name/:name`,(req,res)=>{
    // res.send("User with id = "+ req.params.id, "\nUser with name = "+ req.params.name);
    res.send(req.params);
});

app.listen(5007);

// http://localhost:5007/user/03/name/aryan