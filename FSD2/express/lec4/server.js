const express = require('express');
const app = express();
var st = {user: 2}
app.get('/', function (req, res) {
res.write("Hello");
res.json(st.user);
});
app.listen(5004);