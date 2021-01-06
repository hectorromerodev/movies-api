const express = require('express');
const app = express();

//Import config
const { config } = require('./config/index');

// Import routes
const moviesApi = require('./routes/movies');

//Middleware body parser
app.use(express.json());

// Routes
moviesApi(app);


app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
 