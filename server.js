console.log("Happy Caffeine")
var express = require('express');
var app = express();
var server = app.listen(3000, listening);
function listening(){
    console.log("I am listening");
}
app.use(express.static('website'));// TO hold static file like html, text, image, etc
