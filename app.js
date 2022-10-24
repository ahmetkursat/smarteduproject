const { render } = require('ejs');
const { application } = require('express');
const express = require('express');

const app = express();

//template enginr
app.set('view engine', 'ejs');

//middewares
app.use(express.static('public'));

//routes

app.get('/', (req, res) => {
  res.status(200).render('index',{
      page_name:"index"
  });
});

app.get('/about', (req,res) => {
   res.status(200).render('about',{
      page_name:"about"
  });
})

const port = 5000;
app.listen(port, async (req, res) => {
  console.log('5000 portunda sunucu başlatıldı');
});
