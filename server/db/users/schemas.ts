import { Schema } from "mongoose";

export const User = new Schema(
	{
		name: String,
		email: String,
		password: String,
		login: String,
	},
	{ timestamps: true }
);
