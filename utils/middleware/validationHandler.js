const boom = require('@hapi/boom');
// const joi = require('joi');

function validate(data, schema) {
	const { error } = schema.validate(data, { errors: { stack: true } });
	return error;
}

function validationHandler(schema, data = 'body') {
	return async (req, res, next) => {
		try {
			await schema.validateAsync(req[data]);
			next();
		} catch (err) {
			next(boom.badRequest(err));
		}
	};
}

module.export = validationHandler;
