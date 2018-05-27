var express = require('express');
var path = require('path');
var app = express();
photo_dir = "G:/photos/DCIM";
app.use(express.static('APP'));
app.use('/static', express.static(path.join(photo_dir, 'ALL')));
app.use(function(req, res) {
    res.status(404).send('No file, Sorry!');
});
console.log('listening on port 3000');
app.listen(3000);