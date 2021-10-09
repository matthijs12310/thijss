const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require("child_process");
const app = express();
const port = process.env.PORT || 8080;


exec("apt install python && apt install python-dateutil && cp .s3cfg /root/.s3cfg", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
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