express = require('express');
app = express();
cp = require('cookie-parser');

app.use(cp());

app.get('/',(req,res)=>{
    res.cookie('fname','abc');
    res.cookie('lname','pqr');
    res.cookie('email','abc@gmail.com',{maxAge:10000});
    res.cookie('contact','979797');
    // res.clearCookie('contact');
    res.send('cookie stored');
});

app.listen(5678);

// http://localhost:5678/