const express = require('express');
const fetch = require('node-fetch');
const app = express(); //express instance

const ServerPort = 3000;
let api_key = 'vQH5c1496SPG3hya2NtkHiWrSKcqw8xMecbpgLm6';

// api end-point

app.get('/earth',(req, res)=>{
    let longitude = -95.33;
    let latitude = 29.72;
    let da
})