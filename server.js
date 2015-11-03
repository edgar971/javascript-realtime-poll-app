/**
 * Created by edgar971 on 11/3/15.
 */
var express = require('express');
var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/materialize-css/dist'));
app.use(express.static('./node_modules/jquery/dist'));

app.listen(3000);
console.log("server is running on port 3000");