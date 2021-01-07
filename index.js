const express = require('express');
const app = express();

//Import config
const { config } = require('./config/index');

// Import routes
const moviesApi = require('./routes/movies');

// Import middleware
const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');



// Middlewares
app.use(express.json());

// Routes
moviesApi(app);

// Middleware of error
app.use(logErrors);
app.use(errorHandler);

// App start
app.listen(config.port, () => {
	console.log(`Listening http://localhost:${config.port}`);
});