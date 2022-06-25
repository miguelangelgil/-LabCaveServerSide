const express = require('express');
const moment = require('moment');
const app = express();

/**
 * Main path
 */
app.get('/',(req, res) => {
    res.send("Server Conected ...");
});

/**
 * Return the currentTime of the server
 */
app.get('/time',(req,res)=>{
    res.send(moment().format(req.query.format));
});

/**
 * The port listening by the server 
 */
app.listen(3000, ()=>{
    console.log('Server listening on port 3000');
});