var express = require('express');  //include express library
var app = express();           //create new express object


//set the static folder
app.use(express.static('public'));



//Set default route from /public/html/index.html
app.get('/', function (req, res) {

    res.sendfile(__dirname +  '/index.html');

})

app.get('/abouts', function (req, res) {

    res.sendfile(__dirname +  '/index2.html');

})

//Listen to the dafulat port and IP
app.listen(3000,

    function() {

        console.log('Connected to port ' + ' 3000 ' + ' on IP ' + ' 192.168.0.135 ' )

    });
