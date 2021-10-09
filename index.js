const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require("child_process");
const app = express();
const port = process.env.PORT || 8080;


exec("cd s3cmd-master/ && chmod +x ./s3cmd && python -m ensurepip --upgrade --user && pip install python-dateutil && pip install python-dateutil && ./s3cmd ls s3://files.matthijs.tk", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
       
    }
    console.log(`${stdout}`)


    console.log("fdgshg")
    });


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
app.listen(port);
app.get('/click', function(req, res) {

    exec("ls", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    res.send(`${stdout}`)
    });


});
console.log('Server started at http://localhost:' + port);