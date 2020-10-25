const config = require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = config.APP_PORT || 4000;
app.use(express.static('dev'));

// Connection to the mongodb
mongoose.connect(config.DB, { useNewUrlParser: true });

// Take all the routes from router folder
var routes = require('./router/routes');
app.use('/api', routes);

// An url for the index
app.get('/', (req, res) =>
    res.sendFile('dev/index.html', { root: __dirname })
);

app.get('/portfolio/:name', (req, res) =>
    res.sendFile('dev/index.html', { root: __dirname })
);

app.get('/portfolio', (req, res) =>
    res.sendFile('dev/index.html', { root: __dirname })
);


app.get('/articles', (req, res) =>
    res.sendFile('dev/index.html', { root: __dirname })
);

// Start and listen the server
app.listen(port, () => {
    console.log('Listening on port : '+port);
});