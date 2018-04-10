const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('displayTimeAndDate', () => {
        return new Date().toDateString();
});
hbs.registerHelper('displayYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('displayDay', () => {
    let day = new Date().getDay();
    if (day === 0) {
        return 'Sunday';
    }else if (day === 1) {
        return 'Monday';
    }else if (day === 2) {
        return 'Tuesday';
    }else if (day === 3) {
        return 'Wednesday';
    }else if (day === 4) {
        return 'Thursday';
    }else if (day === 5) {
        return 'Friday';
    }else if (day === 6) {
        return 'Saturday';
    }
});
hbs.registerHelper('displayMonth', () => {
    let month = new Date().getMonth();
    if (month === 0) {
        return 'January';
    }else if (month === 1) {
        return 'February';
    }else if (month === 2) {
        return 'March';
    }else if (month === 3) {
        return 'April';
    }else if (month === 4) {
        return 'May';
    }else if (month === 5) {
        return 'June';
    }else if (month === 6) {
        return 'July';
    }else if (month === 7) {
        return 'August';
    }else if (month === 8) {
        return 'September';
    }else if (month === 9) {
        return 'October';
    }else if (month === 10) {
        return 'November'
    }else if (month === 11) {
        return 'December';
    }
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

app.get('/gallery', (req, res) => {
    res.render('gallery.hbs');
});

app.get('/skills', (req, res) => {
    res.render('skills.hbs');
});
// Load Zodiac page
app.get('/zodiac', (req, res) => {
    res.render('zodiac.hbs');
});
// Load book finder page
app.get('/bookfinder', (req, res) => {
    res.render('bookfinder.hbs');
});
// Load calendar
app.get('/calendar', (req, res) => {
    res.render('calendar.hbs');
});
// Load movie page
app.get('/movie', (req, res) => {
    res.render('movie.hbs');
});

const port = process.env.PORT || 1987;

app.listen(port, () => {
    console.log(`Web Server is up on port ${port}`);
});