const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const session = require('express-session');

const port = process.env.PORT || 8000;

const app = express();

app.use(session({secret : 'secretcode'}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist')));

require('./server/config/mongoose.js');

const routes_setter = require('./server/config/routes.js');
routes_setter(app)

app.listen(port, () => {
    console.log('The Whole Wide World is Listening on port: ' + port);
})