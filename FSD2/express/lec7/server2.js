var expr = require('express');
var app = expr();

const mvi = [{'id':101, 'name':'DON-1', 'year':2009},
              {'id':102, 'name':'DON-2', 'year':2012},
              {'id':103, 'name':'DON-3', 'year':2013}
]

app.get('/m',(req,res)=>{
    res.send(mvi);
});

app.get('/branch/:branch',(req,res)=>{
    data = mvi.filter((a)=> a.id == req.params.id);
    b = data.filter((a)=>a.branch.toLowerCase()==req.params.branch.toLocaleLowerCase());
    if(b){
        res.json(b);
    } else {
        res.send('No Data Found');
    }
});

app.listen(5676);
