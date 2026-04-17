var expr = require('express');
var app = expr();

const a = (req,res,next)=>{
    req.uname = 'aryan';
    console.log('Uname Inserted');
    next();
}

const b = (req,res,next)=>{
    req.mark = 20+3 ;
    console.log('Mark Updated');
    next();
}

app.get('/data',a,b,(req,res)=>{
    res.type('text/html');
    res.send('Username = '+ req.uname+", Marks = "+req.mark);
})

app.get('/data/a',(req,res)=>{
    res.send('only username through middleware = '+req.uname); 
    // name = undefined 
})

app.listen(6007);

