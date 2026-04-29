var expr = require('express');
var nm = require('nodemailer');
const MailMessage = require('nodemailer/lib/mailer/mail-message');
var app = expr();

app.use(expr.static('./',{index:'form.html'}));

app.get('/data',(req,res)=>{
    trans = nm.createTransport({
        host:'smtp.gmail.com',
        port:465,
        auth:{
            user:'sainiaryan2020@gmail.com',
            pass:'ankr npee vkoz nute',
        }
    });

    mailoption = {
        from:'sainiaryan2020@gmail.com',
        to: req.query.email,
        subject: 'Welcome User',
        html: `Hello ${req.query.fname}`,
    }
    
    trans.sendMail(mailoption,(err,info)=>{
        if(info){
            res.send(`Mail Send Succesfully`);
        } else {
            res.send('Mail Sending Failed.');
        }
    });
});

app.listen(5555);