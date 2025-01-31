
const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático 
app.use( express.static('public')) ;

// app.get('/',  (req, res) => {
//   res.send('Home page')
// })

app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'jenny',
        titulo: 'curso de node'
    });
})

app.get('/generic',  (req, res) => {
    res.render( 'generic', {
        nombre: 'escandon',
        titulo: 'curso de node'
    });
})

app.get('/elements',  (req, res) => {
    res.render( 'elements', {
        nombre: 'jenny escandon',
        titulo: 'curso de node'
    });
})


app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})