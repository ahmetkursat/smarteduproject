 const { application } = require('express');
const express = require('express');

 const app = express();

 
 const port = 5000;

 app.get('/', (req, res) => {
    res.status(200).send("index sayfası")
 })

 app.listen(port , async(req,res) => {
    console.log('5000 portunda sunucu başlatıldı');
 })