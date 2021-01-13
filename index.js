const express = require('express');
const app = express();

//Import config
const { config } = require('./config/index');

// Import routes
const moviesApi = require('./routes/movies');

// Import middleware
const {
	logErrors,
	errorHandler,
	wrapErrors,
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');
const cors = require('cors');
const morganHandler = require('./utils/middleware/morganHandler');
const helmet = require('helmet');

// Middlewares
app.use(morganHandler());
app.use(helmet());
app.use(express.json());
app.use(cors());

// Routes
moviesApi(app);

// Not found middleware catch 404
app.use(notFoundHandler);

// Middleware of error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

// App start
app.listen(config.port, () => {
	console.log(`Listening http://localhost:${config.port}`);
});