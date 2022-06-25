const express = require('express');
const moment = require('moment');
const app = express();

/**
 * Main path
 */
app.get('/',(req, res) => {
    res.setHeader('Content-type','text/plain',200);
    res.send("Server Conected ...");
    res.end();
});

/**
 * Return the currentTime of the server
 */
app.get('/time',(req,res)=>{
    res.setHeader('Content-type','text/datetime',200);
    res.send(moment().format(req.query.format));
    res.end();
});

/**
 * The port listening by the server 
 */
app.listen(3000, ()=>{
    console.log('Server listening on port 3000');
});

