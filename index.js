//import
const express = require('express')
//initialize
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/', (req, res) => {
    res.send('response from add route');
});
    
    

app.listen(port, () => { console.log('express server started now')})
