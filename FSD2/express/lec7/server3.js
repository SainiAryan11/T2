var expr = require('express');
var app = expr();
var multer = require('multer');

app.use(expr.static('./',{index:'form.html'}));

storage = multer.diskStorage({
    destination:"Hello",
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});

upload=multer({storage});

app.post('/data',upload.single('mypic'),(req,res)=>{
    file = req.file;
    if(file){
        res.send(`File Uploaded ${file.originalname}`);
    } else {
        res.send('File Not Uploaded');
    }
});

app.listen(5677);