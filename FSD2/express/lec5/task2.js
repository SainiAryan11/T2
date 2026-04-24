var expr = require('express');
var app = expr();
var cp = require('cookie-parser');

app.use(cp());
app.use(expr.static('./',{index:'form.html'}));
app.use(expr.urlencoded({extended:true}));

app.post('/data',(req,res)=>{
    const {name,email,msg,rating}=req.body;
    const fb = {name,email,msg,rating};
    res.cookie('feedback',fb,{maxAge:10000});
    res.send(`  <h1>Thank You For Your Feedback
                <a href='/feedback-details'>Show feedback</a>`)
});

app.get('/feedback-details',(req,res)=>{
    const data = req.cookies.feedback;
    if (data) {
        res.send(`  Name ${data.name} 

                    Emali ${data.email}

                    Message ${data.msg}

                    Rating ${data.rating}
                    
                    <a href='/logout'>Logout</a>`);
    } else{
        res.send(`  No Data Found
                    <a href='/logout'>Logout</a>`);
    }
});

app.listen(5673);

// http://localhost:5673/