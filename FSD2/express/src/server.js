var expr = require('express');
var app = expr();

// app.use(expr.static('../public'));                       // Loads index.html
// app.use(expr.static('../public',{index:'form.html'}));   // Loads form.html
app.use(expr.static('../public',{index:'a.jfif'}));      // Loads a.jfif      

app.listen(5672);

// http://localhost:5672/