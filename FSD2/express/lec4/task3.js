var expr = require('express');
var app = expr();

app.use(expr.static('./'));

app.get('/data',(req,res)=>{
    a = parseInt(req.query.n1);
    b = parseInt(req.query.n2);
    if (req.query.formula == 'add') {
        res.write(a+b+" ");
    } else if (req.query.formula == 'sub') {
        res.write(a-b+" ")
    } else if (req.query.formula == 'mul') {
        res.write(a*b+" ");
    } else if (req.query.formula == 'div') {
        res.write(a/b+" ");
    } else {    
        res.write('You have not selected any formula')
    }
    res.send();
})

app.listen(5678);