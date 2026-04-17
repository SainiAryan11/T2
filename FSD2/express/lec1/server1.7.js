var expr = require('express');
var app = expr();

app.get(`/flights/:from/:to`,(req,res)=>{
    res.send(req.params);
});

app.listen(5008);

// http://localhost:5008/flights/ADI/NYC