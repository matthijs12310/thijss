const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const AWS = require('aws-sdk');


AWS.config.update({ accessKeyId: '17Y4ZE73T93MJ1YTVPB9', secretAccessKey: 'dPq3TiIx7uR4sg8Jo0uKKMNUNBH7Q1mpmzJcYNZl' });

const s3 = new AWS.S3({ endpoint: 'cellar-c2.services.clever-cloud.com' });
var params = {
    Bucket: "files.matthijs.tk"
};

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
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