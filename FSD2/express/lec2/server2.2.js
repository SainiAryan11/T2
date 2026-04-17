var expr = require('express');
var app = expr();

app.get('/',(req,res)=>{
    res.type("text/html");
    res.send(` <h1>User Form</h1>
                    <form action="/data" method="get">
                        uname:<input type="text" name="uname">
                        Age:<input type="text" name="age">
                        <button type="submit">Submit</button> 
                    </form>`);
});

app.get('/data',(req,res)=>{
    name = req.query.uname;
    age = req.query.age;
    res.send("Welcome "+name+",\n Your Age is "+age);
});

app.listen(5678);

// http://localhost:5678/