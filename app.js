const express = require('express');
const bodyParser = require('body-parser');
const commercialRoutes = require('./routes/commercialRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/commercials', commercialRoutes);

module.exports = app;
