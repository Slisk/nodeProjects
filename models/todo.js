
const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const TodoSchema = new mongoose.Schema(
	{
		task: {
			type: String,
			required: false,
			trim: true,
		},
		status: {
			type: String,
			required: true,
			enum: ['pending', 'complete', 'in progress', 'overdue'],
			default: 'pending',
		},
    people: {
      type: String, 
      required: true,
      names: [],
      gender: String,
      age: String
    }
	},
	{ minimize: false },
);

TodoSchema.plugin(timestamps);
TodoSchema.plugin(mongooseStringQuery);

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
