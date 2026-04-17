var expr = require('express');
var app = expr();

//Syntax: app.use(path,middleware)
//inbuilt middleware: expr.urlencoded
//extended : true is used for getting qs library

app.use(expr.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.type("text/html");
    res.send(`  <h1>User Form</h1>
                <form action="/data" method="post">
                    uname:<input type="text" name="uname">
                    Age:<input type="text" name="age">
                    <button type="submit">Submit</button> 
                </form>`);
});

app.post('/data',(req,res)=>{
    name = req.body.uname;  
    age = req.body.age;     
    res.send("Welcome "+name+",\n Your Age is "+age);
});

app.listen(5678);

// http://localhost:5678/