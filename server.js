const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send(Date());    
});

app.get('/Second_host', (req,res)=>{
    res.send('This is my second local server');
})


app.listen(80);

