const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const AWS = require('aws-sdk');
const formidable = require('formidable');
const { IncomingForm } = require('formidable');
const { json } = require('express');
const { delimiter } = require('path');
app.use(express.urlencoded());
AWS.config.update({ accessKeyId: '17Y4ZE73T93MJ1YTVPB9', secretAccessKey: 'dPq3TiIx7uR4sg8Jo0uKKMNUNBH7Q1mpmzJcYNZl' });
app.use(express.static(__dirname + '/'));

const s3 = new AWS.S3({ endpoint: 'cellar-c2.services.clever-cloud.com' });
var params = {
    Bucket: "files.matthijs.tk",
};


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.post("/api/delete", function(req, res){
    console.log("Removed " + req.body.user);
    var params3 = {
        Bucket: "files.matthijs.tk",
        Key: req.body.user
    }
    s3.deleteObject(params3, function(err){
        if (err) console.log(err)
    })
    res.redirect("/")
});
app.post('/api/upload', function(req, res) {
    const form = new formidable.IncomingForm();
 
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    var oldpath = files.someExpressFiles.path
    var newpath = files.someExpressFiles.name
    var object = fs.readFileSync(oldpath)
    var params2 = {
        Body: object,
        Bucket: "files.matthijs.tk",
        Key: newpath
    };
    s3.putObject(params2, function(err, data){
        console.log("File " + newpath + " Uploaded!")
    })
  });
  res.redirect('/')
});
app.listen(port);

app.get('/click', function (req, res) {
    s3.listObjectsV2(params, function (err, s3res) {
        if (err) {
            return;
        }
        res.json(s3res.Contents);
    });
});

console.log('Server started at http://localhost:' + port);