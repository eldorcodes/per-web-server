const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('displayTimeAndDate', () => {
        return new Date().toDateString();
});

app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio.hbs');
});

app.get('/resume', (req, res) => {
    res.render('resume.hbs');
});

app.get('/skills', (req, res) => {
    res.render('skills.hbs');
});

const port = 1987;

app.listen(port, () => {
    console.log(`Eldor Web Server is up on port ${port}`);
    console.log(`www.eldor.io`);
});