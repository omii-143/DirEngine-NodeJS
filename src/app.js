const host = "127.0.0.1";
const path = require('path');

// Express 
const express = require('express');
const app = express();
const port = process.env.PORT || 80;

// Static
app.use(express.static(path.join(__dirname, "../static")));

// Template Engine
const hbs = require('hbs');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../template/views"));

// Partials
hbs.registerPartials(path.join(__dirname, "../template/partials"));


// Routing
app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/tour", (req, res) => {
    res.render('tour');
});

app.get("/hotels", (req, res) => {
    res.render('hotels');
});

app.get("/blog", (req, res) => {
    res.render('blog');
});


app.get("/contact", (req, res) => {
    res.render('contact');
});

app.get("*", (req, res) => {
    res.render('404');
    res.statusCode = 404;
});



// Server
app.listen(port, () => {
    console.log(`http://${host}:${port}/`);
});