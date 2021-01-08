const joi = require('@hapi/joi');

const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const movieTitleSchema = joi.string().max(80);
const movieYearSchema = joi.number().min(1888).max(2077);
const movieCoverSchema = joi.string().uri();
const movieDescriptionSchema = joi.string().max(300);
const movieDurationShema = joi.string().min(1).max(300);
const movieContentRatingShema = joi.string().max(5);
const movieSourceSchema = joi.string().uri();
const movieTagsSchema = joi.array().items(joi.string().mac(50));

const createMovieSchema = {
	title: movieTitleSchema.require(),
	year: movieYearSchema.require(),
	cover: movieCoverSchema.require(),
	description: movieDescriptionSchema.require(),
	duration: movieDurationShema.require(),
	contentRating: movieContentRatingShema.require(),
	source: movieSourceSchema.require(),
	tags: movieTagsSchema,
};

const updateMovieSchema = {
	title: movieTitleSchema,
	year: movieYearSchema,
	cover: movieCoverSchema,
	description: movieDescriptionSchema,
	duration: movieDurationShema,
	contentRating: movieContentRatingShema,
	source: movieSourceSchema,
	tags: movieTagsSchema,
};

module.exports = {
	movieIdSchema,
	createMovieSchema,
	updateMovieSchema,
};
