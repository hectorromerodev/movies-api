const morgan = require('morgan');
const { config } = require('../../config/index');

function morganHandler() {
	return config.dev ? morgan('dev') : morgan('tiny');
}

module.exports = morganHandler;
