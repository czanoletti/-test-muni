const path = require('path'),
  express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// parse application/json
app.use(bodyParser.json());


// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../../', 'dist', 'municipalidad-morales')));
app.use(morgan('tiny'));

module.exports = app;
